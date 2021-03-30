import styled from 'styled-components'
import shortid from 'shortid'

const codeGen = ({ name, type, styles, props }) => {
  // Unique id
  const id = shortid.generate()

  // Generate element
  const component = styled[type]`
    ${styles}

    transition: all ease-in 0.1s;
    position: relative;
    cursor: cell;

    ${({ isSelected }) =>
      isSelected &&
      `
    &::after {
      content: '';
      top: 0;
      left: 0;
      background-color: #d9b200;
      height: 100%;
      width: 100%;
      position: absolute;
      opacity: 0.25;
    }`}

    &:hover {
      &::after {
        content: '';
        top: 0;
        left: 0;
        background-color: #d9b200;
        height: 100%;
        width: 100%;
        position: absolute;
        opacity: 0.25;
      }
    }
  `

  // Parse props
  const parsedProps = props.map(
    ({ key, value, type }) =>
      `${key}=${type === 'exp' ? `{${value}}` : `[${value}]`}`
  )

  // Generate Code
  const react_code = `
    <${name}
      ${id ? `id='${id}'` : ''}
      ${parsedProps.join('\n\t\t')}
    />
  `

  // Generate styles
  const react_style = `
    const ${name} = styled.${type + '`'}
      ${styles}
    ${'`'}
  `

  // Return component data
  return {
    id,
    name,
    type,
    component,
    styles,
    props,
    react_code,
    react_style,
  }
}

export default codeGen
