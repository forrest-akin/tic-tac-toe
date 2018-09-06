import {
  createBinaryComporator, get, isGreaterThan, isLessThan, nestedUpdate, set, updateItem, getRandomItem
} from '../utils.js'

describe('Utils module', () => {
  const createTestArr = () => [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  const createTestObj = (c) => ({ a: { b: { c } } })

  describe('createBinaryComporator', () => {
    it('should return a function', () => {
      expect(typeof createBinaryComporator()).toBe('function')
    })

    it('the function it creates should return the correct item based on the predicate', () => {
      const pickGreater = createBinaryComporator(isGreaterThan)
      expect(pickGreater(1, 2)).toBe(2)
    })

    it('the predicate can compare collections by an arbitrary depth of keys', () => {
      const a = createTestObj(1)
      const b = createTestObj(2)
      const pickGreater = createBinaryComporator(isLessThan, ['a', 'b', 'c'])
      expect(pickGreater(a, b)).toBe(a)
    })
  })

  describe('get', () => {
    it('returns the correct item at the specified sequence of keys', () => {
      expect(get(createTestObj(1), ['a', 'b', 'c'])).toBe(1)
    })

    it('works with arrays too', () => {
      expect(get(createTestArr(), [1, 1])).toBe(5)
    })

    it('returns undefined when nothing is found by any of the keys', () => {
      expect(get(createTestObj(1), ['a', 'x', 'c'])).toBe(undefined)
    })
  })

  describe('getRandomItem', () => {
    it('should return any item in an array', () => {
      const arr = ['I', 'am', 'groot', 'hodor', 'hold', 'the', 'door']
      const item = getRandomItem(arr)
      expect(arr.includes(item)).toBe(true)
    })
  })

  describe('set', () => {
    it('updates the collection with the given item', () => {
      const a = createTestObj(true)
      set(a, ['a', 'b', 'c'], false)
      expect(get(a, ['a', 'b', 'c'])).toBe(false)
    })

    it('returns the given value if it was successful', () => {
      const a = createTestObj(true)
      expect(set(a, ['a', 'b', 'c'], false)).toBe(false)
    })

    it('returns undefined if it failed', () => {
      const a = createTestObj(true)
      expect(set(a, ['a', 'b', 'x', 'c'], false)).toBe(undefined)
    })
  })

  describe('isGreaterThan', () => {
    it('returns true if the first arg is greater than the second', () => {
      expect(isGreaterThan(2, 1)).toBe(true)
    })

    it('returns false if the first arg is not greater than the second', () => {
      expect(isGreaterThan(1, 1)).toBe(false)
    })
  })

  describe('isLessThan', () => {
    it('returns true if the first arg is less than the second', () => {
      expect(isLessThan(1, 2)).toBe(true)
    })

    it('returns false if the first arg is not less than the second', () => {
      expect(isLessThan(1, 1)).toBe(false)
    })
  })

  describe('nestedUpdate', () => {
    const arr = createTestArr()
    const updated = nestedUpdate(arr, [0, 2], 42)

    it('should return a new array with the updated nested item', () => {
      expect(arr === updated).toBe(false)
      expect(get(updated, [0, 2])).toBe(42)  
    })

    it('should only modify inner arrays that contain the updated item', () => {
      expect(arr[0] === updated[0]).toBe(false)
      expect(arr[1] === updated[1]).toBe(true)
    })
  })

  describe('updateItem', () => {
    it('should return a new array with the updated item', () => {
      const arr = [1, 2, 3]
      const copy = updateItem(arr, [2], 3.14)
      expect(arr === copy).toBe(false)
      expect(copy[2]).toBe(3.14)
    })
  })
})
