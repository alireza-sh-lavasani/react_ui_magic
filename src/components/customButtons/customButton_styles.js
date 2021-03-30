import styled from 'styled-components'

export const Base = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  width: 100%;
  height: 3em;
  color: #a1a1a1;
  border: 1px solid #a1a1a1;
  background-color: #222e36;
  cursor: pointer;
  border-radius: 4px;
  margin: 1em auto;
  transition: all ease-in 0.15s;

  &:hover {
    background-color: #a1a1a1;
    color: #222e36;
    font-weight: bold;
  }
`

export const Text = styled.span`
  font-size: 0.85em;
`