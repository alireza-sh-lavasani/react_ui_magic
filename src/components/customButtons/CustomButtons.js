import { Base, Text } from './customButton_styles'

const MyButton = ({ id, text, onClick, type, style, children }) => (
  <Base id={id} onClick={onClick} type={type} style={style}>
    <Text>{children || text}</Text>
  </Base>
)

export default MyButton
