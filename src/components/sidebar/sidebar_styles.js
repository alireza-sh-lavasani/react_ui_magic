import styled from 'styled-components'

export const Main = styled.section`
  min-height: calc(100vh - (5em + 4em));
  min-width: ${({ isOpen }) => (isOpen ? '30vw' : 0)};
  max-width: 75vw;
  overflow-x: hidden;
  width: fit-content;
  background-color: #222e36;
  ${({ direction }) =>
    direction === 'left'
      ? `border-right: 1px solid #545f68`
      : `border-left: 1px solid #545f68`};
  position: absolute;
  top: 0;
  ${({ direction }) => (direction === 'left' ? 'left: 0;' : 'right: 0')};
  z-index: 1;
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
export const TabsWrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'grid' : 'none')};
  grid-template-columns: repeat(${({ tabCount }) => tabCount}, 1fr);
`

export const TabHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({isSelected}) => isSelected ? '#222e36' : '#a1a1a1'};
  padding: 1em 0.5em;
  border-left: 1px solid #a1a1a1;
  border-right: 1px solid #a1a1a1;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? '#a1a1a1' : '#222e36')};
  transition: all ease-in 0.1s;
`
