import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { Body, Head, Laser, Main, Separator, Title } from './sidebar_styles'

/**
 * Sidebar component
 */
const Sidebar = ({ direction, children, title, open }) => {
  /**
   * State
   */
  const [IsOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Prevent unwanted redraws
    if (open !== IsOpen) setIsOpen(open)
  }, [open])

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

        <Body isOpen={IsOpen}>{children}</Body>
      </Main>
    </>
  )
}

export default Sidebar
