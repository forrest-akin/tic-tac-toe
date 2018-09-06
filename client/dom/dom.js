export function addEventListener (
  element, event, { handler, options }
) {
  element.addEventListener(event, handler, options)
  return element
}

export function appendChild (element, child) {
  element.appendChild(child)
  return element
}

export function applyStyles (element, styles = {}) {
  Object.assign(element.style, styles)
  return element
}

export function clickElement (element) {
  element.click()
}

export function createElement (tag = 'div') {
  return document.createElement(tag)
}

export function getElementById (id) {
  return document.getElementById(id)
}

export function getRoot () {
  return getElementById('root')
}

export function insertText (element, string = '') {
  return appendChild(element, text(string))
}

export function mount (element, root = getRoot()) {
  root.parentNode.replaceChild(element, root)
}

export function removeElement (el) {
  el.parentNode.removeChild(el)
}

export function removeInnerContent (el) {
  el.innerHTML = ''
}
export function setAttribute (element, attribute, value) {
  element.setAttribute(attribute, value)
  return element
}

export function text (string = '') {
  return document.createTextNode(string)
}
