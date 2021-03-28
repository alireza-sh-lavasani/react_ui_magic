import styled from 'styled-components'

export const Main = styled.section`
  min-height: calc(100vh - (5em + 4em));
  min-width: ${({ isOpen }) => (isOpen ? '17em' : 0)};
  width: fit-content;
  background-color: #222e36;
  ${({ direction }) =>
    direction === 'left'
      ? `border-right: 1px solid #545f68`
      : `border-left: 1px solid #545f68`};
  position: absolute;
  top: 0;
  ${({ direction }) => (direction === 'left' ? 'left: 0;' : 'right: 0')};
`

export const Laser = styled.div`
  width: 2px;
  height: 100%;
  background-color: #202b33;
  position: absolute;
  top: 0;
  right: 0;
`

export const Head = styled.div`
  height: 3em;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
`

export const Title = styled.span`
  color: #a1a1a1;
  font-size: 1em;
  letter-spacing: 4px;
  text-transform: uppercase;
`

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: #545f68;
`

export const Body = styled.div`
  padding: 2em 1em;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
`
