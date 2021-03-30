import { Base, Text } from './customButton_styles'

const MyButton = ({ id, text, onClick }) => (
  <Base id={id} onClick={onClick}>
    <Text>{text}</Text>
  </Base>
)

export default MyButton
