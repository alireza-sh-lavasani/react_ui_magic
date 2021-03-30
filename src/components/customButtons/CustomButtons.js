import { Base, Text } from './customButton_styles'

const MyButton = ({ id, text, onClick, type }) => (
  <Base id={id} onClick={onClick} type={type}>
    <Text>{text}</Text>
  </Base>
)

export default MyButton
