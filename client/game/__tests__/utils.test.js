import { endGameState, newGameState } from '../../__mocks__/mocks.js'
import { createPlayer } from '../../state/state.js'
import {
  getEmptyCells, getOppositePiece, getOppositePlayer, O, X, COMPUTER, HUMAN, getWinningIndexes, isWinPossible, isTie
} from '../utils.js'

describe('Game Utils module', () => {
  describe('getEmptyCells', () => {
    it('should return an array of indexes for empty cells', () => {
      const emptyCells = getEmptyCells(endGameState())
      expect(emptyCells).toHaveLength(1)
      expect(emptyCells[0]).toEqual([0,2])
      expect(getEmptyCells(newGameState())).toHaveLength(9)
    })
  })

  describe('getOppositePiece', () => {
    it('should return "O" given "X"', () => {
      expect(getOppositePiece(X)).toBe(O)
    })

    it('should return "X" given "O"', () => {
      expect(getOppositePiece(O)).toBe(X)
    })
  })

  describe('getOppositePlayer', () => {
    let player
    
    beforeEach(() => {
      player = {
        p1: createPlayer(true, X),
        p2: createPlayer(false, O),
      }
    })

    it('should return P2 if current is P1', () => {
      player.current = player.p1
      expect(getOppositePlayer(player)).toBe(player.p2)
    })

    it('should return P1 if current is P2', () => {
      player.current = player.p2
      expect(getOppositePlayer(player)).toBe(player.p1)
    })
  })

  describe('getWinningIndexes', () => {
    it('should return an array of winning indexes if a win is present on the board', () => {
      const expected = [[1, 0], [1, 1], [1, 2]]
      expect(getWinningIndexes(endGameState())).toEqual(expected)
    })

    it('should return undefined when no win is present on the board', () => {
      expect(getWinningIndexes(newGameState())).toBe(undefined)
    })
  })

  describe('isWinPossible', () => {
    it('should return true if there are less than 5 empty cells on the board', () => {
      const emptyCells = getEmptyCells(endGameState())
      expect(isWinPossible(emptyCells)).toBe(true)
    })

    it('should return false if there are greater than 4 empty cells on the board', () => {
      const emptyCells = getEmptyCells(newGameState())
      expect(isWinPossible(emptyCells)).toBe(false)
    })
  })

  describe('isTie', () => {
    it('should return true given an empty array', () => {
      expect(isTie([])).toBe(true)
    })

    it('should return false given a non-empty array', () => {
      expect(isTie([[1, 2]])).toBe(false)
    })
  })
})
