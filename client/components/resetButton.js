import { removeElement, text } from '../dom/dom.js'
import { resetGame } from '../game/game.js'
import { clearBoard } from '../game/utils.js'
import { getState } from '../state/state.js'
import createComponent from './createComponent.js'

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
  clearBoard(getState('board'))
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
  'background-color': 'ghostwhite',
  border:             'none',
  'border-radius':    '20px',
  cursor:             'pointer',
  'font-size':        '20px',
  height:             'inherit',
  width:              'inherit',
}
