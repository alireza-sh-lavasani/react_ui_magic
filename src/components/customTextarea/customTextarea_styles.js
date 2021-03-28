import styled from 'styled-components'

export const Base = styled.div`
  width: ${({ width }) => width || '100%'};
  height: 40vh;
  position: relative;
  margin: 4em 0 0 0;
`

export const Textarea = styled.textarea`
  box-shadow: none;
  border: none;
  border: 1px solid ${({ color }) => color || '#a1a1a1'};
  color: ${({ color }) => color || '#a1a1a1'};
  font-size: ${({ fontSize }) => fontSize || '1em'};
  background: transparent;
  transition: all ease-in 0.15s;
  width: 100%;
  height: 100%;
  padding: 1em;
  overflow: auto;
  border-radius: 4px;

  &:focus {
    outline: none;
    border: 1px solid ${({ color }) => color || '#ddd'};
    color: ${({ color }) => color || '#ddd'};
  }
`
export const Label = styled.label`
  color: ${({ color }) => color || '#a1a1a1'};
  position: absolute;
  left: 0.1em;
  top: 0.5em;
  font-size: ${({ fontSize }) => fontSize || '1em'};
  transition: all ease-in 0.15s;

  ${({ value }) =>
    value &&
    `
    top: -2em;
    font-size: 0.85em;
  `}

  ${Base}:focus-within & {
    top: -2em;
    font-size: 0.85em;
  }
`
