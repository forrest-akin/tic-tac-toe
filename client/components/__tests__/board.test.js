import { endGameState, gameOverBoard, gameOverText } from '../../__mocks__/mocks.js'
import { clearBoard } from '../board.js'

describe('Board component', () => {
  describe('clearBoard', () => {
    document.body.innerHTML = gameOverBoard()

    it('should clear text from all cells', () => {
      expect(document.body.textContent).toBe(gameOverText())
      clearBoard(endGameState())
      expect(document.body.textContent).toBe('')
    })
  })
})
