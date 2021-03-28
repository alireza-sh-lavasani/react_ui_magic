import { Base, Input, Label } from './customInput_styles'

export const GenInput = ({
  label,
  name,
  id,
  value,
  onChange,
  color,
  fontSize,
}) => {
  return (
    <>
      <Base>
        <Label color={color} fontSize={fontSize} value={value}>
          {label}
        </Label>

        <Input
          autoComplete='off'
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          color={value ? '#ddd' : color}
          fontSize={fontSize}
        />
      </Base>
    </>
  )
}
