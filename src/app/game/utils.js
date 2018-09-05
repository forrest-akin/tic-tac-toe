import { styles as cellStyles } from '../components/board/row/cell/cell.js'
import { applyStyles, getElementById, removeInnerContent } from '../dom/dom.js'
import { get } from '../utils/utils.js'
import createWins from './wins.js'

export const HUMAN = 0
export const COMPUTER = 1
export const wins = createWins()

export function clearBoard (board) {
  board.forEach((row, i) =>
    row.forEach((_, j) => clearCell(i, j))
  )
}

export function formatCellId (rowIdx, cellIdx) {
  return `${rowIdx}-${cellIdx}`
}

export function getCell (indexes) {
  return getElementById(formatCellId(...indexes))
}

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
  return player === COMPUTER ? HUMAN : COMPUTER
}

export function getWinningIndexes (board) {
  return wins.find(win => {
    const [ indexes ] = win
    const piece = get(board, indexes)
  
    return piece && win.every(indexes => get(board, indexes) === piece)
  })
}

export function isWinPossible (emptyCells) {
  return emptyCells.length < 5
}

export function isTie (emptyCells) {
  return emptyCells.length === 0
}

const clearCell = (i, j) =>
  removeInnerContent(applyStyles(getCell([i, j]), cellStyles))

const isEmpty = cell => !cell
