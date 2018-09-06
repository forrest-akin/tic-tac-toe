import { COMPUTER, HUMAN, O, X } from '../../game/utils.js'
import { get } from '../../utils/utils.js'
import {
  endGame, initState, isComputerTurn, isFirstMove, isGameOver, getState, togglePlayer, updateBoard, startGame, togglePiece
} from '../state.js'

describe('State module', () => {
  const stateKeys = ['board', 'currentPlayer', 'isFirstMove', 'isGameOver', 'piece']
  const initialState = {
    board: [[null, null, null], [null, null, null], [null, null, null]],
    isFirstMove: true,
    isGameOver: true,
    piece: 'X'
  }

  beforeEach(initState)

  describe('endGame', () => {
    it('should set isGameOver to true', () => {
      endGame()
      expect(isGameOver()).toBe(true)
    })

    it('should set the winning move if there was one', () => {
      const testWin = [[0, 0], [1, 1], [2, 2]]
      endGame(testWin)
      expect(getState('win')).toBe(testWin)
    })
  })

  describe('initState', () => {
    it('should initialize state',  () => {
      const { currentPlayer, ...state } = getState()
      expect(state).toEqual(initialState)
      expect([0, 1]).toContain(currentPlayer)
    })
  })

  describe('isComputerTurn', () => {
    it('should return true if the currentPlayer is the computer', () => {
      if (getState('currentPlayer') !== COMPUTER) {
        togglePlayer()
      }

      expect(isComputerTurn()).toBe(true)
    })
  })

  describe('isFirstMove', () => {
    it('should return true when state is initialized', () => {
      expect(isFirstMove()).toBe(true)
    })

    it('should return false after the board has been updated', () => {
      updateBoard([0, 0], X)
      expect(isFirstMove()).toBe(false)
    })
  })

  describe('isGameOver', () => {
    it('should return true when state is initialized', () => {
      expect(isGameOver()).toBe(true)
    })

    it('should return false after the game starts', () => {
      startGame()
      expect(isGameOver()).toBe(false)
    })

    it('should return true after the game ends', () => {
      endGame()
      expect(isGameOver()).toBe(true)
    })
  })

  describe('getState', () => {
    it('should return the state object when no args are received', () => {
      expect(Object.keys(getState())).toEqual(stateKeys)
    })

    it('should return the value of the given key', () => {
      expect(getState('piece')).toBe(X)
    })
  })

  describe('startGame', () => {
    it('should set isGameOver to false', () => {
      startGame()
      expect(isGameOver()).toBe(false)
    })
  })

  describe('togglePiece', () => {
    it('should toggle the state of piece', () => {
      const expected = getState('piece') === X ? O : X
      expect(togglePiece()).toBe(expected)
    })
  })

  describe('togglePlayer', () => {
    it('should toggle the state of currentPlayer', () => {
      const expected = getState('currentPlayer') === COMPUTER ? HUMAN : COMPUTER
      expect(togglePlayer()).toBe(expected)
    })
  })

  describe('updateBoard', () => {
    it('should update the board at the given indexes with the given piece', () => {
      const indexes = [0, 0]
      const board = updateBoard(indexes, X)
      expect(get(board, indexes)).toBe(X)
    })
  })
})