import styled from 'styled-components'

const codeGen = ({ name, type, styles, id, props }) => {
  // Generate element
  const component = styled[type]`
    ${styles}
  `

  // Parse props
  const parsedProps = props.map(
    ({ key, value, type }) =>
      `${key}=${type === 'exp' ? `{${value}}` : `[${value}]`}`
  )

  // Generate Code
  const code = `
    <${name}
      ${id ? `id='${id}'` : ''}
      ${parsedProps.join('\n\t\t')}
    />
  `

  // Generate styles
  const style = `
    const ${name} = styled.${type + '`'}
      ${styles}
    ${'`'}
  `

  return { component, code, style }
}

export default codeGen
