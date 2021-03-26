import React, { useEffect, useState } from 'react'
import codeGen from '../../modules/codeGen'
import { InitialIcon, InitialText, Main } from './page_styles'

/**
 * Page component
 */
const Page = () => {
  /**
   * State
   */
  const [Initialized, setInitialized] = useState(0)
  const [Elements, setElements] = useState([])

  /**
   * Watch initialized state
   */
  useEffect(() => {
    // Only run once
    if (Initialized === 1) {
      const { element, code, style } = codeGen({
        name: 'Main',
        type: 'div',
        id: 'main-wrapper',
        props: [
          {
            key: 'isHome',
            value: 'true',
            type: 'exp',
          },
          {
            key: 'testProp',
            value: 'test',
            type: 'str',
          },
        ],
        styles: 'margin: 0;\n\t padding: 1em;\n\t background-color: green;',
      })

      console.log(code, style)
      setElements([...Elements, element])
    }
  }, [Initialized])

  /**
   * Render Elements
   */
  const RenderElements = () =>
    Elements.map((Element, id) => <Element key={id} />)

  /**
   * Render
   */
  return (
    <>
      <Main>
        {Initialized ? (
          <>
            <p style={{ color: 'lightgray' }}>Let the game begin ...</p>
            <RenderElements />
          </>
        ) : (
          <InitialIcon onClick={() => setInitialized(state => state + 1)}>
            <InitialText>Click Here To Initialize The Page</InitialText>
          </InitialIcon>
        )}
      </Main>
    </>
  )
}

export default Page
