import {
  createBinaryComporator, getRandomItem, gt, lt, set, isEven
} from '../utils/utils.js'
import {
  getEmptyCells, getOppositePiece, getWinningIndexes, isFirstMove, isTie, isWinPossible
} from './utils.js'

// recursively evaluate each empty cell (depth first) and return the best move
export default function minimax (board, piece, depth = 0) {
  const emptyCells = getEmptyCells(board)

  if (isFirstMove(emptyCells)) return getFirstMove()

  const terminalMove = getTerminalMove(board, emptyCells, depth)

  if (terminalMove) return terminalMove

  return emptyCells.reduce(
    (best, indexes) => pickBest(
      depth,
      best,
      getMove(board, indexes, piece, depth)
    ),
    initScore(depth)
  )
}

const getTerminalMove = (board, emptyCells, depth) =>
  (isWinPossible(emptyCells) && getWinningMove(board, depth))
  || getTieMove(emptyCells)

const getMove = (board, indexes, piece, depth) => {
  set(board, indexes, piece)
  const move = minimax(board, getOppositePiece(piece), depth + 1)
  set(board, indexes, null)
  return Object.assign(move, { indexes })
}

const getWinningMove = (board, depth) => {
  const [ indexes ] = getWinningIndexes(board) || []
  return indexes && getWinScore(depth - 1) // subtract 1 from depth since that's where the move comparison occurs
}

const getWinScore = (depth) =>
  getScore(isMaximizing(depth) ? 10 - depth : depth - 10)

const getTieMove = (emptyCells) => isTie(emptyCells) && getScore(0)

const getScore = (score) => ({ score })

const pickBest = (depth, best, move) => getPicker(depth)(best, move)

const getPicker = (depth) => isMaximizing(depth) ? getMaxMove : getMinMove

const createMovePicker = (predicate) =>
  createBinaryComporator(predicate, ['score'])

const getMaxMove = createMovePicker(gt)

const getMinMove = createMovePicker(lt)

const initScore = (depth) => ({
  score: isMaximizing(depth) ? -Infinity : Infinity
})

const isMaximizing = (depth) => isEven(depth)

const getFirstMove = () => ({ indexes: getRandomItem(firstMoves) })

// best first move is any corner
// https://puzzling.stackexchange.com/questions/30/what-is-the-optimal-first-move-in-tic-tac-toe
const firstMoves = [
  [0, 0],
  [0, 2],
  [2, 0],
  [2, 2],
]
