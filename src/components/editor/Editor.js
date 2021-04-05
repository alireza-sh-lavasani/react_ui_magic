import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import codeGen from '../../modules/codeGen'
import {
  ADD_COMPONENT,
  SET_SELECTED_COMPONENT_ID,
  TRIGGER_UPDATE,
} from '../../redux/types/components_types'
import { Backdrop, InitialIcon, InitialText, Main } from './editor_styles'
import shortid from 'shortid'
import MyButton from '../customButtons/CustomButtons'

const P = codeGen({
  id: shortid.generate(),
  name: 'First Paragraph',
  type: 'p',
  styles: 'color: #a1a1a1;',
  children: [<span children='some paragraph' />],
})

const comp2_id = shortid.generate()

const comp2 = codeGen({
  id: comp2_id,
  name: 'Second Component',
  type: 'div',
  styles:
    'margin: 0;\npadding: 1em;\nheight: 10em;\nborder: 1px solid #a1a1a1;',
})

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
      id: shortid.generate(),
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
        data: { id, children: inlineChildren, component: Component },
        children,
      }) => {
        const treeChildren = children.map(
          ({ data: { component: Child, children: childChildren } }) => (
            <Child children={childChildren} />
          )
        )

        return (
          <Component
            key={id}
            isSelected={id == SelectedCompID}
            children={inlineChildren || treeChildren}
            onClick={() => {
              dispatch({
                type: SET_SELECTED_COMPONENT_ID,
                payload: id,
              })
            }}
          />
        )
      }
    )

  /**
   * Render
   */
  return Initialized ? (
    <Main>
      <Backdrop
        // Deselet all
        onClick={() =>
          dispatch({
            type: SET_SELECTED_COMPONENT_ID,
            payload: null,
          })
        }
      />
      <RenderComponents />

      <MyButton
        style={{ margin: '2em auto' }}
        onClick={() => {
          dispatch({
            type: ADD_COMPONENT,
            payload: { newComp: P, selectedCompID: comp2_id },
          })

          dispatch({ type: TRIGGER_UPDATE, payload: shortid.generate() })
        }}
      >
        Add paragraph to selected element
      </MyButton>
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
