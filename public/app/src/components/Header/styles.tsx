import styled, { css } from 'styled-components'
import { flex } from 'styles/mixins'
import logo from '../../../public/provi.svg'

type Props = {
  scrolled: boolean
}

export const Logo = styled(logo)<Props>`
  & > path:first-of-type {
    fill: ${(p) =>
      p.scrolled ? p.theme.text.secondary : p.theme.text.primary};
  }
`

export const Wraper = styled.header<Props>`
  ${(p) =>
    p.scrolled &&
    css`
      background-color: ${(p) => p.theme.background.primary};
    `};
  padding: 1rem;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  position: fixed;
  display: grid;
  place-items: center;
`

export const Container = styled.header`
  ${flex};
  justify-content: space-between;
  width: 100%;
  max-width: 1300px;
  gap: 1.5rem;
`
