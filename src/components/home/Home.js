import React from 'react'
import ControlsForm from '../controls_form/ControlsForm'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Editor from '../editor/Editor'
import Sidebar from '../sidebar/Sidebar'
import { MainRow } from './home_styles'

const Home = () => {
  return (
    <>
      <Header />

      <MainRow>
        <Sidebar title='Tools' direction='left'>
          <button onClick={() => {}}>Add a button</button>
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
