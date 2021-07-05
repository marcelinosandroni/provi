import styled from 'styled-components'

type Props = {
  scrolled: boolean
}

export const Container = styled.nav<Props>`
  display: flex;
  gap: 2.5rem;
  margin-left: auto;
  color: ${(p) => (p.scrolled ? p.theme.text.contrast : p.theme.text.primary)};
`

export const MenuItem = styled.span`
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
`
