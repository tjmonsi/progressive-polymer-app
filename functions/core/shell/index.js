// import { Element } from 'polymer/polymer-element.html'
// System.import(/* webpackChunkName: "lazy-loaded" */ '../../src/pages/index/dependency.js').then(module => {
//   // module.default()
// })
// import 'polymer/polymer-element.html'
import 'polymer/lib/mixins/property-accessors.html'
import 'polymer/lib/utils/flattened-nodes-observer.html'
import LocationMixin from '../mixins/location-mixin.js'
import QueryParamsMixin from '../mixins/query-params-mixin.js'
// import pagesLocation from '../utils/pages-location'
import pathToRegexp from 'path-to-regexp'
import fragments from '../utils/fragments'

class ProgressiveShell extends QueryParamsMixin(LocationMixin(Polymer.PropertyAccessors(window.HTMLElement))) {
  static get is () { return 'progressive-shell' }

  static get observedAttributes () {
    const observedAttributes = super.observedAttributes || []
    return observedAttributes.concat(['params', 'queryParams', 'currentRoute'])
  }

  constructor () {
    super()
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(document.createElement('slot'))
    this.routeTemplates = {}
  }

  connectedCallback () {
    if (super.connectedCallback) {
      super.connectedCallback()
    }
    this._enableProperties() // turn on accessors
    this._observer = new Polymer.FlattenedNodesObserver(this, (info) => {
      this._contentAdded(info.addedNodes.filter((node) => (node.nodeType === window.Node.ELEMENT_NODE)))
    })
  }

  disconnectedCallback () {
    if (super.disconnectedCallback) {
      super.disconnectedCallback()
    }
    if (this._observer) this._observer.disconnect()
  }

  _propertiesChanged (currentProps, changedProps, oldProps) {
    if (super._propertiesChanged) {
      super._propertiesChanged(currentProps, changedProps, oldProps)
    }
    if ('path' in changedProps) {
      this._pathChanged(changedProps['path'])
    }
  }

  _contentAdded (parts) {
    parts.forEach(node => {
      if (node.tagName.toLowerCase() === 'progressive-header') {
        this._header = node
      } else if (node.tagName.toLowerCase() === 'progressive-page') {
        if (this._page) {
          this._previousPage = this._page
        }
        this._page = node
      } else if (node.tagName.toLowerCase() === 'progressive-footer') {
        this._footer = node
      }
    })
  }

  _pathChanged (path) {
    var pathFound = false
    Object.entries(fragments.routing).forEach(route => {
      if (pathFound) return
      var namedMatches = {}
      const keys = []
      const re = pathToRegexp(route[0], keys)
      const exec = re.exec(path)

      if (exec) {
        namedMatches = {}
        for (var j = 0; j < keys.length; j++) {
          namedMatches[keys[j].name] = exec[j + 1]
        }

        pathFound = true
        const partials = []

        for (var k in fragments.partials) {
          partials.push({
            name: k,
            partial: fragments.partials[k]()
          })
        }

        const newPath = path.indexOf('?') < 0 ? path + '?data=true' : path + '&data=true'

        Promise.all(
          [
            fragments.routing[route[0]].page(),
            fragments.routing[route[0]].header(),
            fragments.routing[route[0]].footer()
          ]
          .concat([
            fetch(newPath).then(response => { return response.json() })
          ])
          .concat([
            fragments.httpCodes.unauthorized.page()
          ])
          .concat(partials.map(i => (i.partial)))
        )
        .then(result => {
          var page = result[0]
          var header = result[1]
          var footer = result[2]
          var json = result[3]
          var unauthorized = result[4]
          var partialResults = result.slice(5, result.length)

          if (this.path === path) {
            if (json.status === 200) {
              this._renderPage(page.template, json.data)
            } else if (json.status === 403) {
              this._renderPage(unauthorized.template, json.data)
            }

            for (var i in partials) {
              if (partials[i].name === 'header') {
                if (header === 'default') {
                  this._renderPartial(partials[i].name, partialResults[i].template, json.data)
                } else {
                  this._renderPartial(partials[i].name, header.template, json.data)
                }
              } else if (partials[i].name === 'footer') {
                if (footer === 'default') {
                  this._renderPartial(partials[i].name, partialResults[i].template, json.data)
                } else {
                  this._renderPartial(partials[i].name, footer.template, json.data)
                }
              }
            }
          }
        })
      }
    })

    if (!pathFound) {
      fragments.httpCodes.notfound.page().then(res => {
        this._renderPage(res.template, {})
      })
    }
  }

  _renderPage (template, data) {
    const html = template(data)
    this._page.innerHTML = html
  }

  _renderPartial (partial, template, data) {
    const html = template(data)
    if (this[`_${partial}`]) {
      this[`_${partial}`].innerHTML = html
    }
  }
}

ProgressiveShell.createPropertiesForAttributes()

window.customElements.define(ProgressiveShell.is, ProgressiveShell)
