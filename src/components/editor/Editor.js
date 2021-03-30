import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import codeGen from '../../modules/codeGen'
import {
  ADD_COMPONENT,
  SET_SELECTED_COMPONENT_ID,
  SHOULD_COMPONENTS_UPDATE,
  UPDATE_COMPONENT,
} from '../../redux/types/components_types'
import { InitialIcon, InitialText, Main } from './editor_styles'
import shortid from 'shortid'

/**
 * Editor component
 */
const Editor = () => {
  /**
   * Redux
   */
  const dispatch = useDispatch()
  const Components = useSelector(({ components }) => components)
  const ShouldCompsUpdate = useSelector(
    ({ shouldComponentsUpdate }) => shouldComponentsUpdate
  )
  const SelectedCompID = useSelector(({ selectedCompID }) => selectedCompID)

  /**
   * State
   */
  const [Initialized, setInitialized] = useState(0)

  /**
   * Initial component
   */
  const initialize = () => {
    const generatedComp = codeGen({
      id: shortid.generate(),
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
   * Watch for update flag from redux
   */
  useEffect(() => {
    if (ShouldCompsUpdate) {
      const { id, name, type, props, styles } = Components[0]
      const updatedComp = codeGen({ id, name, type, props, styles })

      dispatch({ type: UPDATE_COMPONENT, payload: updatedComp })
      dispatch({ type: SHOULD_COMPONENTS_UPDATE, payload: false })
    }
  }, [ShouldCompsUpdate])

  /**
   * Render Elements
   */
  const RenderComponents = () =>
    Components.map(({ id, component: CustomComp }) => (
      <CustomComp
        key={id}
        isSelected={id == SelectedCompID}
        onClick={() => {
          dispatch({
            type: SET_SELECTED_COMPONENT_ID,
            payload: id,
          })
        }}
      />
    ))

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
