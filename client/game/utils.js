import { get } from '../utils/utils.js'
import createWins from './wins.js'

export const O = 'O'
export const TIE = 'TIE'
export const X = 'X'
export const HUMAN = 0
export const COMPUTER = 1
export const wins = createWins()

export function getEmptyCells (board) {
  return board.reduce((emptyCells, row, i) =>
    row.reduce((emptyCells, cell, j) => {
      isEmpty(cell) && emptyCells.push([i, j])
      return emptyCells
    }, emptyCells),
    []
  )
}

export function getOppositePiece (piece) {
  return piece === 'X' ? 'O' : 'X'
}

export function getOppositePlayer (player) {
  const { current, p1, p2 } = player
  return current === p1 ? p2 : p1
}

export function getWinningIndexes (board) {
  return wins.find(win => {
    const [ indexes ] = win
    const piece = get(board, indexes)
  
    return piece && win.every(indexes => get(board, indexes) === piece)
  })
}

export function isFirstMove (emptyCells) {
  return emptyCells.length === 9
}

export function isTie (emptyCells) {
  return emptyCells.length === 0
}

export function isWinPossible (emptyCells) {
  return emptyCells.length < 5
}

const isEmpty = cell => !cell
