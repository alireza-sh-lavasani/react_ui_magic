import styled from 'styled-components'

const codeGen = ({ name, type, styles, id, props }) => {
  // Generate element
  const element = styled[type]`
    ${styles}
  `

  // Generate Code
  const code = `
    <${name}
      ${id ? `id='${id}'` : ''}
      ${props ? props.map(prop => `${prop }`) : ''}
    />
  `

  return { element, code }
}

export default codeGen
