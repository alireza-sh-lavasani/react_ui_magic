import { Base, Text } from './customButton_styles'

const MyButton = ({ id, text, onClick, type, style }) => (
  <Base id={id} onClick={onClick} type={type} style={style}>
    <Text>{text}</Text>
  </Base>
)

export default MyButton
