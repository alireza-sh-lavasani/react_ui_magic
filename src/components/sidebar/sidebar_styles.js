import styled from 'styled-components'

export const Main = styled.section`
  min-height: calc(100vh - (7em + 4em));
  min-width: 17em;
  background-color: #222e36;
  border-right: 1px solid #545f68;
  padding: 3em 2em;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

export const Laser = styled.div`
  width: 2px;
  height: 100%;
  background-color: #202b33;
  position: absolute;
  top: 0;
  right: 0;
`

export const Title = styled.span`
  color: #a1a1a1;
  font-size: 1.5em;
  letter-spacing: 2px;
`
