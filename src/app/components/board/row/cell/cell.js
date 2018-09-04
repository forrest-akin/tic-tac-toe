import { insertText } from '../../../../dom/dom.js'
import { makeMove } from '../../../../game/game.js'
import { formatCellId } from '../../../../game/utils.js'
import { getState, isGameOver } from '../../../../state/state.js'
import createComponent from '../../../createComponent.js'

export default function Cell ({ cellIdx, rowIdx }) {
  return createComponent({
    attributes: { id: formatCellId(rowIdx, cellIdx) },
    events,
    styles,
  })
}

export const styles = {
  'background-color': 'ghostwhite',
  'font-size':        '100px',
  height:             '180px',
  'line-height':      '180px',
  'text-align':       'center', 
  'vertical-align':   'middle',
  width:              '180px',
}

const onClick = ({ target: cell }) => {
  if (isGameOver() || !isCellEmpty(cell)) return
  const piece = getState('piece')
  insertText(cell, piece)
  makeMove(getBoardIndexes(cell), piece)
}

const isCellEmpty = (cell) => cell.innerHTML === ''

const getBoardIndexes = (cell) => parseId(cell.getAttribute('id'))

const parseId = (id) => id.split('-')

const events = {
  click: { handler: onClick }
}
