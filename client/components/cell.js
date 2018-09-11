import {
  applyStyles, clickElement, getElementById, insertText, removeInnerContent
} from '../dom/dom.js'
import { makeMove } from '../game/game.js'
import { getState, isGameOver } from '../state/state.js'
import createComponent from './createComponent.js'

export default function Cell ({ cellIdx, rowIdx }) {
  return createComponent({
    attributes: { id: formatCellId(rowIdx, cellIdx) },
    events,
    styles,
  })
}

export function clearCell (indexes) {
  removeInnerContent(applyStyles(getCell(indexes), styles))
}

export function clickCell (indexes) {
  return clickElement(getCell(indexes))
}

export function getCell (indexes) {
  return getElementById(formatCellId(...indexes))
}

const onClick = ({ target: cell }) => {
  if (isGameOver() || !isCellEmpty(cell)) return
  const piece = getState('piece')
  insertText(cell, piece)
  makeMove(getBoardIndexes(cell), piece)
}

const events = {
  click: { handler: onClick }
}

const styles = {
  'background-color': 'ghostwhite',
  'font-size':        '100px',
  height:             '180px',
  'line-height':      '180px',
  'text-align':       'center', 
  'vertical-align':   'middle',
  width:              '180px',
}

const formatCellId = (rowIdx, cellIdx) => `${rowIdx}-${cellIdx}`

const getBoardIndexes = (cell) => parseId(cell.getAttribute('id'))

const isCellEmpty = (cell) => cell.innerHTML === ''

const parseId = (id) => id.split('-')
