import {
  applyStyles, removeElement, removeInnerContent, text
} from '../../dom/dom.js'
import { resetGame } from '../../game/game.js'
import { getCell } from '../../game/utils.js'
import { getState } from '../../state/state.js'
import { styles as cellStyles } from '../board/row/cell/cell.js'
import createComponent from '../createComponent.js'

export default function ResetButton () {
  return container({ children: [button()] })
}

const container = ({ children }) => createComponent({
  children,
  styles: containerStyles,
})

const containerStyles = {
  height: '75px',
  margin: 'auto',
  width:  '150px',
}

const button = () => createComponent({
  attributes: { id: 'reset-button' },
  children:   [text('PLAY AGAIN')],
  events,
  styles,
  tag:        'button',
})

const onClick = ({ target }) => {
  clearBoard()
  resetGame()
  removeElement(target.parentNode)
}

const events = {
  click: {
    handler: onClick,
    options: { once: true },
  }
}

const styles = {
  border:          'none',
  'border-radius': '20px',
  'font-size':     '20px',
  height:          'inherit',
  width:           'inherit',
}

const clearBoard = () => {
  getState('board').forEach((row, i) =>
    row.forEach((_, j) => clearCell(i, j))
  )
}

const clearCell = (i, j) =>
  removeInnerContent(applyStyles(getCell([i, j]), cellStyles))
