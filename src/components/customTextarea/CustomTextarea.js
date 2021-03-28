import { Base, Textarea, Label } from './customTextarea_styles'

export const MyTextarea = ({
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

        <Textarea
          autoComplete='off'
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          color={color}
          fontSize={fontSize}
        />
      </Base>
    </>
  )
}
