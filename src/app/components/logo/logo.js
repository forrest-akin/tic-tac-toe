import createComponent from '../createComponent.js'

export default function Logo (props) {
  return container({ children: [logo(props)] })
}

const container = ({ children }) => createComponent({
  children,
  styles: containerStyles,
})

const containerStyles = {
  margin: 'auto',
  width:  '180px',
}

const logo = ({ src = 'assets/logo.png' } = {}) => createComponent({
  attributes: { src },
  styles,
  tag: 'img'
})

const styles = {
  'max-height': '100%',
  'max-width':  '100%',
}
