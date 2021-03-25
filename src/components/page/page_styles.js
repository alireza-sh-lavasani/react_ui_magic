import styled from 'styled-components'

export const Main = styled.section`
  background-color: #2c3942;
  padding: 3em;
  width: 100%;
`

export const InitialText = styled.span`
  color: rgba(173, 216, 230, 0.164);
  font-size: 1.85em;
  letter-spacing: 4px;
  transition: all ease-in 0.15s;
`

export const InitialIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1vw dashed rgba(173, 216, 230, 0.164);
  border-radius: 10px;
  width: 100%;
  height: 100%;
  transition: all ease-in 0.15s;
  cursor: pointer;

  &:hover {
    border-color: #3781d6;
  }

  :hover ${InitialText} {
    color: #3781d6;
  }
`
