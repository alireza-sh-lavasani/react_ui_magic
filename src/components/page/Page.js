import React, { useState } from 'react'
import { InitialIcon, InitialText, Main } from './page_styles'

const Page = () => {
  const [Initialized, setInitialized] = useState(false)

  return (
    <>
      <Main>
        {Initialized ? (
          <p style={{ color: 'lightgray' }}>Let the game begin ...</p>
        ) : (
          <InitialIcon onClick={() => setInitialized(true)}>
            <InitialText>Click Here To Initialize The Page</InitialText>
          </InitialIcon>
        )}
      </Main>
    </>
  )
}

export default Page
