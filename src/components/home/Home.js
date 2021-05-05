
import React from 'react'
import ControlsForm from '../controls_form/ControlsForm'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Editor from '../editor/Editor'
import Sidebar from '../sidebar/Sidebar'
import { MainRow } from './home_styles'
import MyButton from '../customButtons/CustomButtons'
import { useDispatch, useSelector } from 'react-redux'
import {
  ADD_COMPONENT,
  TRIGGER_UPDATE,
} from '../../redux/types/components_types'
import shortid from 'shortid'
import codeGen from '../../modules/codeGen'

const P = codeGen({
  name: 'First Paragraph',
  type: 'p',
  styles: 'color: #a1a1a1;',
  children: [<span children='some paragraph' />],
})

/**
 * Home
 */
const Home = () => {
  /**
   * Redux
   */
  const dispatch = useDispatch()
  const selectedCompID = useSelector(({ selectedCompID }) => selectedCompID)

  /**
   * Render
   */
  return (
    <>
      <Header />

      <MainRow>
        <Sidebar title='Tools' direction='left'>
          <MyButton
            style={{ margin: '2em auto' }}
            onClick={() => {
              dispatch({
                type: ADD_COMPONENT,
                payload: { newComp: P, selectedCompID },
              })

              dispatch({ type: TRIGGER_UPDATE, payload: shortid.generate() })
            }}
          >
            Add paragraph to selected element
          </MyButton>
        </Sidebar>

        <Editor />

        <Sidebar
          title='Controls'
          direction='right'
          tabs={[
            { title: 'Inputs', component: <ControlsForm /> },
            {
              title: 'Outputs',
              component: () => <></>,
            },
          ]}
        />
      </MainRow>

      <Footer />
    </>
  )
}

export default Home
