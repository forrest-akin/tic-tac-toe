export function mount (element, root = getRoot()) {
  root.parentNode.replaceChild(element, root)
}

export function getRoot (id = 'root') {
  return getElementById(id)
}

export function getElementById (id) {
  return document.getElementById(id)
}

export function insertText (element, string = '') {
  element.appendChild(text(string))
  return element
}

export function text (string = '') {
  return document.createTextNode(string)
}

export function createElement (tag = 'div') {
  return document.createElement(tag)
}

export function applyStyles (element, styles = {}) {
  Object.assign(element.style, styles)
  return element
}

export function addEventListener (
  element, event, { handler, options = {} }
) {
  element.addEventListener(event, handler, options)
  return element
}

export function setAttribute (element, attribute, value) {
  element.setAttribute(attribute, value)
  return element
}

export function appendChild (element, child) {
  element.appendChild(child)
  return element
}
