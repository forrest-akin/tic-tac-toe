import { text } from '../dom/dom.js'
import createComponent from './createComponent.js'

export default function Button (props) {
  return container({ children: [button(props)] })
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

const button = ({ message, onClick }) => createComponent({
  attributes: { id: 'button' },
  children:   [text(message)],
  events: {
    click: { handler: onClick },
  },
  styles,
  tag: 'button',
})

const styles = {
  'background-color': 'ghostwhite',
  border:             'none',
  'border-radius':    '20px',
  cursor:             'pointer',
  'font-size':        '20px',
  height:             'inherit',
  width:              'inherit',
}
