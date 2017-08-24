import template from './template.js'

const connectedCallback = () => {
  console.log('hello login')
}

const disconnectedCallback = () => {
  console.log('disconnected login')
}

export {
  template,
  connectedCallback,
  disconnectedCallback
}
