import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import codeGen from '../../modules/codeGen'
import { ADD_COMPONENT } from '../../redux/types/components_types'
import { InitialIcon, InitialText, Main } from './editor_styles'

/**
 * Editor component
 */
const Editor = () => {
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
    const generatedComp = codeGen({
      name: 'First Component',
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
      styles:
        'margin: 0;\npadding: 1em;\nheight: 10em;\nborder: 1px solid #a1a1a1;',
    })

    dispatch({
      type: ADD_COMPONENT,
      payload: generatedComp,
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

export default Editor
