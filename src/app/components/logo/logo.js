import createComponent from '../createComponent.js'

export default function Logo (props) {
  return container({ children: [logo(props)] })
}

const container = ({ children }) => createComponent({
  children,
  styles,
})

const logo = ({ src = 'assets/logo.png' } = {}) => createComponent({
  attributes: { src },
  tag: 'img'
})

const styles = {
  margin: 'auto',
  width:  '96px',
}
