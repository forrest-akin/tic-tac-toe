import createComponent from '../components/createComponent.js'
import Board from '../components/board.js'
import Logo from '../components/logo.js'
import ResetButton from '../components/resetButton.js'
import StartButton from '../components/startButton.js'
import { appendChild, getElementById } from '../dom/dom.js'
import { initState } from '../state/state.js'

export default function Game () {
  const { board } = initState()
  return createComponent({
    attributes: { id },
    children: [
      Logo(),
      Board({ rows: board }),
      StartButton(),
    ],
    styles,
  })
}

export function showResetButton () {
  return appendChild(getGame(), ResetButton())
}

const getGame = () => getElementById(id)

const id = 'game'

const styles = {
  height:      '900px',
  margin:      'auto',
  'max-width': '600px',
  width:       '600px',
}
