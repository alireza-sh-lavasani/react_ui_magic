import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Page from '../page/Page'
import Sidebar from '../sidebar/Sidebar'
import { MainRow } from './home_styles'

const Home = () => {
  return (
    <>
      <Header />

      <MainRow>
        <Sidebar />
        <Page />
      </MainRow>

      <Footer />
    </>
  )
}

export default Home
