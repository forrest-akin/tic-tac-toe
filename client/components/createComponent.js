import {
  addEventListener, appendChild, applyStyles, createElement, setAttribute
} from '../dom/dom.js'

export default function createComponent (props = {}) {
  return applyDecorators(createElement(props.tag), props)
}

const applyDecorators = (element, props) =>
  decorators.reduce(
    (el, { argKey, decorator }) => decorator(el, props[argKey]),
    element
  )

const applyEvents = (element, events = {}) =>
  Object.entries(events).reduce(eventReducer, element)

const eventReducer = (element, [ event, params ]) =>
  addEventListener(element, event, params)

const applyAttributes = (element, attributes = {}) =>
  Object.entries(attributes).reduce(attributeReducer, element)

const attributeReducer = (element, [ attribute, value ]) =>
  setAttribute(element, attribute, value)

const insertChildren = (element, children = []) =>
  children.reduce(childrenReducer, element)

const childrenReducer = (element, child) =>
  appendChild(element, child)

const createDecorators = (...functions) =>
  (...argKeys) => functions.map((decorator, index) => ({
    argKey: argKeys[index],
    decorator,
  }))

const decorators = createDecorators(
  applyStyles, applyEvents, applyAttributes, insertChildren
)('styles', 'events', 'attributes', 'children')
