import { newGame, oWinsNext, xWinsNext } from '../../__mocks__/mocks.js'
import { getState, initState, startGame } from '../../state/state.js'
import { get } from '../../utils/utils.js'
import { makeMove } from '../game.js'
import { O, X } from '../utils.js'

describe('Game module', () => {
  beforeEach(() => {
    initState()
    startGame()
    getState('player').current.isComputer = true
    document.body.innerHTML = newGame()
  })

  describe('makeMove', () => {
    it('should toggle the current player', () => {
      const { current: expected } = getState('player')
      makeMove([0, 0], X)
      const { current } = getState('player')
      expect(current).not.toBe(expected)
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
