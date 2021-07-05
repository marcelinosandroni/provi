import styled from 'styled-components'

export const Container = styled.button`
  height: 50px;
  background-color: ${(p) => p.theme.primary};
  border-radius: 5rem;
  min-width: 256px;
  border: 1px solid ${(p) => p.theme.secondary};

  :hover {
    background-color: ${(p) => p.theme.contrast};
  }
`

export const Content = styled.p`
  color: ${(p) => p.theme.text.primary};
  font-weight: bold;
  font-size: 0.9rem;
`
