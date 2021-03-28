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
      {console.log(value)}
      <Base>
        <Label color={color} fontSize={fontSize} value={value}>
          {label}
        </Label>

        <Input
          autoComplete='none'
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
