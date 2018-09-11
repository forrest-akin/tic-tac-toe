import { applyStyles } from '../dom/dom.js'
import { clearCell, getCell } from './cell.js'
import createComponent from './createComponent.js'
import Row from './row.js'

export default function Board ({ rows }) {
  return createComponent({
    attributes,
    children: rows.map(mapRows),
    styles
  })
}

export function clearBoard (board) {
  board.forEach((row, i) =>
    row.forEach((_, j) => clearCell([i, j]))
  )
}

export function styleWinners (win = []) {
  win.forEach((indexes) => applyStyles(getCell(indexes), winStyles))
}

const mapRows = (cells, rowIdx) => Row({ cells, rowIdx })

const attributes = { id: 'board' }

const styles = {
  height:      '600px',
  margin:      'auto',
  'max-width': '600px',
  width:       '600px',
}

const winStyles = { 'background-color': 'yellow' }
