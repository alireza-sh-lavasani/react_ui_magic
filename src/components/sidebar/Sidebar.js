import React from 'react'
import { Laser, Main, Separator, Title } from './sidebar_styles'

const Sidebar = ({ direction, children, title }) => {
  return (
    <>
      <Main direction={direction} onMouseOver={() => console.log('hover')}>
        <Title>{title}</Title>
        <Separator />
        <Laser direction={direction} />

        {children}
      </Main>
    </>
  )
}

export default Sidebar
