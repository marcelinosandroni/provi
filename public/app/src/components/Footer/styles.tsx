import styled from 'styled-components'
import { flex } from 'styles/mixins'

export const Container = styled.header`
  ${flex};
  justify-content: space-between;
  background-color: ${(p) => p.theme.secondary};
`

export const Title = styled.h1`
  font-size: ${(p) => p.theme.rem(80)};
  display: inline;
  color: ${(p) => p.theme.primary};
`
