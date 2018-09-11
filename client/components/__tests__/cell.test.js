import { gameOverBoard } from '../../__mocks__/mocks.js'
import { getCell } from '../cell.js'

describe('Cell component', () => {
  describe('getCell', () => {
    document.body.innerHTML = gameOverBoard()

    it('should return the element corresponding to the given indexes', () => {
      const element = getCell([0, 0])
      expect(element).toBeInstanceOf(Element)
      expect(element.id).toBe('0-0')
    })
  })
})
