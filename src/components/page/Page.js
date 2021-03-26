import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import codeGen from '../../modules/codeGen'
import { ADD_COMPONENT } from '../../redux/types/components_types'
import { InitialIcon, InitialText, Main } from './page_styles'

/**
 * Page component
 */
const Page = () => {
  /**
   * Redux
   */
  const dispatch = useDispatch()
  const Components = useSelector(state => state.components)

  /**
   * State
   */
  const [Initialized, setInitialized] = useState(0)

  /**
   * Initial component
   */
  const initialize = () => {
    const { component, code, style } = codeGen({
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

    dispatch({
      type: ADD_COMPONENT,
      payload: {
        component,
        code,
        style,
      },
    })

    setInitialized(true)
  }

  /**
   * Render Elements
   */
  const RenderComponents = () =>
    Components.map(({ component: CustomComp }, id) => <CustomComp key={id} />)

  /**
   * Render
   */
  return (
    <>
      <Main>
        {Initialized ? (
          <>
            <p style={{ color: 'lightgray' }}>Let the game begin ...</p>

            <RenderComponents />
          </>
        ) : (
          <InitialIcon onClick={initialize}>
            <InitialText>Click Here To Initialize The Page</InitialText>
          </InitialIcon>
        )}
      </Main>
    </>
  )
}

export default Page
