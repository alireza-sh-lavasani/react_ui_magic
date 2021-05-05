import { useDispatch } from 'react-redux'
import shortid from 'shortid'
import styled from 'styled-components'
import { SET_SELECTED_COMPONENT_ID } from '../redux/types/components_types'

/**
 * Component code generator
 */
const codeGen = ({ name, type, styles, props, children }) => {
  const id = shortid.generate()

  // Generate element
  const Component = styled[type]`
    ${styles}

    transition: all ease-in 0.1s;
    position: relative;
    cursor: cell;

    ${({ isSelected }) =>
      isSelected &&
      `
      box-shadow: inset 0px 0px 300px 61px rgba(217, 177, 0, 0.3);
      `}

    &:hover {
      box-shadow: inset 0px 0px 300px 61px rgba(217, 177, 0, 0.3);
    }
  `

  // Parse props
  const parseProps = () => {
    const parsed = props.map(
      ({ key, value, type }) =>
        `${key}=${type === 'exp' ? `{${value}}` : `[${value}]`}`
    )
    return parsed.join('\n\t\t')
  }

  // Parse children
  const parseChildren = () => {
    let childrenArray = []

    // parse props
    const parseProps = props => {
      let propsArray = []
      const propKeys = Object.keys(props)

      propKeys.map(key => propsArray.push(`${key}=${props[key]}`))
      return propsArray
    }

    // fill childrenArray
    children.map(({ type, props }, index) => {
      childrenArray.push(
        `${index === 0 ? '[' : ''}<${type} ${parseProps(props)} />${
          index === children.length - 1 ? ']' : ''
        }`
      )
      return null
    })

    return childrenArray
  }

  // Generate Code
  const react_code = `
    <${name}
      id='${id}'
      ${props && parseProps()}
      ${children && `children={${parseChildren()}}`}
    />
  `

  // Generate styles
  const react_style = `
    const ${name} = styled.${type + '`'}
      ${styles}
    ${'`'}
  `

  /**
   * Render Component
   */
  const RenderComponent = ({ isSelected, children }) => {
    const dispatch = useDispatch()

    return (
      <Component
        key={id}
        isSelected={isSelected}
        children={children}
        onClick={() =>
          dispatch({
            type: SET_SELECTED_COMPONENT_ID,
            payload: id,
          })
        }
      />
    )
  }

  // Return component data
  return {
    id,
    name,
    type,
    component: Component,
    render: RenderComponent,
    styles,
    props,
    react_code,
    react_style,
    children,
  }
}

export default codeGen
