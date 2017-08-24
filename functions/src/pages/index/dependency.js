import template from './template.js'

const connectedCallback = () => {
  console.log('hello index')
}

const disconnectedCallback = () => {
  console.log('disconnected callback')
}

export {
  template,
  connectedCallback,
  disconnectedCallback
}
