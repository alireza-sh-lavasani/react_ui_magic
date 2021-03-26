import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
import React, { useState } from 'react'
import { Body, Head, Laser, Main, Separator, Title } from './sidebar_styles'

const Sidebar = ({ direction, children, title }) => {
  /**
   * State
   */
  const [IsOpen, setIsOpen] = useState(false)

  /**
   * Render
   */
  return (
    <>
      <Main isOpen={IsOpen} direction={direction}>
        <Head onClick={() => setIsOpen(!IsOpen)}>
          {/* Arrow for left side */}
          {direction === 'left' ? (
            <>
              {/* Hide title when minimized */}
              {IsOpen && <Title>{title}</Title>}

              {/* Change arrow based on sidebar state */}
              {IsOpen ? (
                <ArrowBackIos fontSize='small' style={{ color: '#a1a1a1' }} />
              ) : (
                <ArrowForwardIos
                  fontSize='small'
                  style={{ color: '#a1a1a1' }}
                />
              )}
            </>
          ) : (
            // Arrow for right side
            <>
              {/* Change arrow based on sidebar state */}
              {IsOpen ? (
                <ArrowForwardIos
                  fontSize='small'
                  style={{ color: '#a1a1a1' }}
                />
              ) : (
                <ArrowBackIos fontSize='small' style={{ color: '#a1a1a1' }} />
              )}

              {/* Hide body when minimized */}
              {IsOpen && <Title>{title}</Title>}
            </>
          )}
        </Head>

        <Separator />
        <Laser direction={direction} />

        <Body idOpen={IsOpen}>{children}</Body>
      </Main>
    </>
  )
}

export default Sidebar
