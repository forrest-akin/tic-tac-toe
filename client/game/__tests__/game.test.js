import { getState, initState, startGame } from '../../state/state.js'
import { get } from '../../utils/utils.js'
import { newGame, oWinsNext, xWinsNext } from '../__mocks__/mocks.js'
import { makeMove } from '../game.js'
import { O, X, COMPUTER } from '../utils.js'

describe('Game module', () => {
  beforeEach(() => {
    initState()
    startGame()
    getState().player = COMPUTER
    document.body.innerHTML = newGame()
  })

  describe('makeMove', () => {
    it('should toggle the current piece', () => {
      const piece = getState('piece')
      makeMove([0, 0], piece)
      expect(getState('piece')).not.toBe(piece)
    })

    it('should toggle the current player', () => {
      const player = getState('player')
      makeMove([0, 0], X)
      expect(getState('player')).not.toBe(player)
    })

    it('should update board state with the given indexes and piece', () => {
      const indexes = [0, 2]
      makeMove(indexes, X)
      const board = getState('board')
      expect(get(board, indexes)).toBe(X)
    })

    it('should end the game if X won', () => {
      const state = getState()
      state.board = xWinsNext()
      makeMove([0, 2], X)
      expect(getState('isGameOver')).toBe(true)
    })

    it('should end the game if O won', () => {
      const state = getState()
      state.board = oWinsNext()
      makeMove([1, 2], O)
      expect(getState('isGameOver')).toBe(true)
    })
  })
})
