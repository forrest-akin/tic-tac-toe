import { makeMove } from '../../../../game/game.js';
import createComponent from '../../../createComponent.js'
import { formatCellId } from './utils.js'

export default function Cell ({ cellIdx, rowIdx }) {
  return createComponent({
    attributes: { id: formatCellId(rowIdx, cellIdx) },
    events,
    styles,
  })
}

const onClick = ({ target: cell }) => makeMove(cell)

const events = {
  click: {
    handler: onClick,
    options: { once: true },
  }
}

const styles = {
  border:           'solid',
  'font-size':      '100px',
  height:           '300px',
  'line-height':    '300px',
  'text-align':     'center', 
  'vertical-align': 'middle',
  width:            '300px',
}
