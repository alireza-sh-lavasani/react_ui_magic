import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import {
  Body,
  Head,
  Laser,
  Main,
  Separator,
  TabHead,
  TabsWrapper,
  Title,
} from './sidebar_styles'

/**
 * Sidebar component
 */
const Sidebar = ({ direction, children, title, open, tabs }) => {
  /**
   * State
   */
  const [IsOpen, setIsOpen] = useState(false)
  const [SelectedTab, setSelectedTab] = useState(0)

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

        {tabs && (
          <TabsWrapper tabCount={2} isOpen={IsOpen}>
            {' '}
            {tabs.map(({ title }, index) => (
              <TabHead
                key={index}
                onClick={() => setSelectedTab(index)}
                isSelected={index == SelectedTab}
              >
                <span>{title}</span>
              </TabHead>
            ))}
          </TabsWrapper>
        )}
        <Separator />
        <Laser direction={direction} />

        {tabs && <Body isOpen={IsOpen}>{tabs[SelectedTab].component}</Body>}

        <Body isOpen={IsOpen}>{children}</Body>
      </Main>
    </>
  )
}

export default Sidebar
