import styled from 'styled-components'

export const Base = styled.div`
  width: ${({ width }) => width || '100%'};
  position: relative;
`

export const Input = styled.input`
  box-shadow: none;
  border: none;
  border-bottom: 1px solid ${({ color }) => color || '#a1a1a1'};
  color: ${({ color }) => color || '#a1a1a1'};
  font-size: ${({ fontSize }) => fontSize || '1em'};
  background: transparent;
  transition: all ease-in 0.15s;

  &:focus-visible {
    outline: none;
    border-bottom: 1px solid ${({ color }) => color || '#ddd'};
  }
`
export const Label = styled.label`
  color: ${({ color }) => color || '#a1a1a1'};
  position: absolute;
  left: 0.1em;
  bottom: 0.5em;
  font-size: ${({ fontSize }) => fontSize || '1em'};
  transition: all ease-in 0.15s;

  ${({ value }) =>
    value &&
    `
    bottom: 2em;
    font-size: 0.85em;
  `}

  ${Base}:focus-within & {
    bottom: 2em;
    font-size: 0.85em;
  }
`
