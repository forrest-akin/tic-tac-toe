import {
  createBinaryComporator, get, gte, lte, set
} from '../utils/utils.js'
import {
  getEmptyCells, getOppositePiece, getWinningIndexes, isTie, isWinPossible, O, TIE, X
} from './utils.js'

// recursively evaluate each empty cell (depth first) and return the best move
export default function minimax (piece, board, depth = 0) {
  const emptyCells = getEmptyCells(board)
  const terminalMove = getTerminalMove(board, emptyCells)

  if (terminalMove) {
    terminalMove.depth = depth
    return terminalMove
  }

  return emptyCells.reduce(
    (best, indexes) => pickBest(best, getMove(piece, board, indexes, depth)),
    initScore(piece)
  )
}

const getTerminalMove = (board, emptyCells) =>
  (isWinPossible(emptyCells) && getWinningMove(board))
    || getTieMove(emptyCells)

const getWinningMove = (board) => {
  const [ indexes ] = getWinningIndexes(board) || [] 
  return indexes && getScore(get(board, indexes))
}

const getTieMove = (emptyCells) => isTie(emptyCells) && getScore(TIE)

const getScore = (key) => ({ score: SCORES[key] })

const getMove = (piece, board, indexes, depth) => {
  set(board, indexes, piece)
  const move = minimax(getOppositePiece(piece), board, depth + 1)
  set(board, indexes, null)
  return Object.assign(move, { indexes, piece })
}

const pickBest = (a, b) =>
  a.score === b.score
  ? pickByDepth(a, b)
  : getPicker(b.piece)(a, b)

const getPicker = (piece) => isMaximizing(piece) ? getMaxMove : getMinMove

const isMaximizing = (piece) => piece === X

const createMovePicker = (predicate) =>
  createBinaryComporator(predicate, ['score'])

const pickByDepth = createBinaryComporator(lte, ['depth'])

const getMaxMove = createMovePicker(gte)

const getMinMove = createMovePicker(lte)

const initScore = (piece) => ({
  score: isMaximizing(piece) ? -Infinity : Infinity
})

const SCORES = {
  [O]:   -10,
  [TIE]: 0,
  [X]:   10,
}
