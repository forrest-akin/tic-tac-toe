import {
  addEventListener, appendChild, applyStyles, clickElement, createElement, getElementById, getRoot, insertText, mount, removeElement, removeInnerContent, setAttribute, text
} from '../dom.js'

describe('DOM module', () => {
  let element
  
  beforeEach(() => {
    element = createElement()
    document.body.innerHTML = '<div id="root"></div>'
  })

  describe('addEventListener', () => {
    const handler = () => wasClicked++
    let wasClicked

    beforeEach(() => wasClicked = 0)

    it('should add an event listener to an element', () => {
      addEventListener(element, 'click', { handler })
      clickElement(element)
      clickElement(element)
      expect(wasClicked).toBe(2)
    })

    it('should accept handler options', () => {
      addEventListener(element, 'click', { handler, options: { once: true } })
      clickElement(element)
      clickElement(element)
      expect(wasClicked).toBe(1)
    })
  })

  describe('appendChild', () => {
    it('should append a child element to the target element', () => {
      const child = createElement()
      const { children } = appendChild(element, child)
      expect(children.length).toBe(1)
    })
  })

  describe('applyStyles', () => {
    it('should apply the given styles to the target element', () => {
      const color = 'red'
      applyStyles(element, { color })
      expect(element.style.color).toBe(color)
    })
  })

  describe('clickElement', () => {
    it('should send a click event to the given element', () => {
      let wasClicked = false
      addEventListener(element, 'click', { handler:() => wasClicked = true })
      clickElement(element)
      expect(wasClicked).toBe(true)
    })
  })

  describe('createElement', () => {
    it('should return an element of the given tag', () => {
      const element = createElement('button')
      expect(element.tagName).toBe('BUTTON')
    })

    it('should return a div by default', () => {
      expect(element.tagName).toBe('DIV')
    })
  })

  describe('getElementById', () => {
    it('should return the element with the given Id', () => {
      expect(getElementById('root')).toBeInstanceOf(HTMLDivElement)
    })

    it('should return null if the Id was not found', () => {
      expect(getElementById('groot')).toBe(null)
    })
  })

  describe('getRoot', () => {
    it('should return the element having an Id of "root"', () => {
      expect(getRoot()).toBeInstanceOf(HTMLDivElement)
    })
  })

  describe('insertText', () => {
    it('should append a text node child to the target element', () => {
      const expected = 'TIC-TAC-TOE'
      insertText(element, expected)
      expect(element.innerHTML).toBe(expected)
    })
  })

  describe('mount', () => {
    it('should replace a root node with the given element', () => {
      const root = createElement()
      const expected = 'TIC-TAC-TOE'
      appendChild(getRoot(), root)
      mount(text(expected), root)
      expect(getRoot().innerHTML).toBe(expected)
    })

    it('should replace the node with an Id of "root" by default', () => {
      const expected = 'TIC-TAC-TOE'
      mount(text(expected))
      expect(document.body.innerHTML).toBe(expected)
    })
  })

  describe('removeElement', () => {
    it('should unmount an element from its parent', () => {
      removeElement(getRoot())
      expect(document.body.innerHTML).toBe('')
    })
  })

  describe('removeInnerContent', () => {
    it('should remove all innerHTML from a node', () => {
      insertText(element, 'I AM GROOT')
      removeInnerContent(element)
      expect(element.innerHTML).toBe('')
    })
  })

  describe('setAttribute', () => {
    it('should set an element attribute to the given value', () => {
      const expected = 'groot'
      setAttribute(element, 'id', expected)
      expect(element.id).toBe(expected)
    })
  })

  describe('text', () => {
    it('should create a text node', () => {
      expect(text()).toBeInstanceOf(Text)
    })

    it('should contain the given text', () => {
      const expected = 'tic-tac-groot'
      expect(text(expected).nodeValue).toBe(expected)
    })
  })
})
