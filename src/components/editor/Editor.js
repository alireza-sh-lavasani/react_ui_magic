import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import codeGen from '../../modules/codeGen'
import {
  ADD_COMPONENT,
  SET_SELECTED_COMPONENT_ID,
} from '../../redux/types/components_types'
import { Backdrop, InitialIcon, InitialText, Main } from './editor_styles'

/**
 * Editor component
 */
const Editor = () => {
  /**
   * Redux
   */
  const dispatch = useDispatch()
  const Components = useSelector(({ components }) => components.children)
  // used to re-render the component un redux update
  const updateTrigger = useSelector(({ updateTrigger }) => updateTrigger)
  const SelectedCompID = useSelector(({ selectedCompID }) => selectedCompID)

  /**
   * State
   */
  const [Initialized, setInitialized] = useState(0)

  /**
   * Initial component
   */
  const initialize = () => {
    // Generate new component and related code
    const generatedComp = codeGen({
      name: 'First Component',
      type: 'div',
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
      children: [<p children='some text' />, <button children='test' />],
    })

    dispatch({
      type: ADD_COMPONENT,
      payload: { newComp: generatedComp },
    })

    const comp2 = codeGen({
      name: 'Second Component',
      type: 'div',
      styles:
        'margin: 0;\npadding: 1em;\nheight: 10em;\nborder: 1px solid #a1a1a1;',
    })

    dispatch({
      type: ADD_COMPONENT,
      payload: { newComp: comp2 },
    })

    setInitialized(true)
  }

  /**
   * Render Elements
   */
  const RenderComponents = () =>
    Components.map(
      ({
        data: { id, children: inlineChildren, component: Component, render },
        children,
      }) => {
        const treeChildren = children.map(
          ({ data: { component: Child, children: childChildren } }) => (
            <Child children={childChildren} />
          )
        )

        return render({
          children: inlineChildren || treeChildren,
          isSelected: id == SelectedCompID,
        })
      }
    )

  /**
   * Render
   */
  return Initialized ? (
    <Main>
      <Backdrop
        // Deselect all
        onClick={() =>
          dispatch({
            type: SET_SELECTED_COMPONENT_ID,
            payload: null,
          })
        }
      />
      <RenderComponents />
    </Main>
  ) : (
    <Main>
      <InitialIcon onClick={initialize}>
        <InitialText>Click Here To Initialize The Page</InitialText>
      </InitialIcon>
    </Main>
  )
}

export default Editor
