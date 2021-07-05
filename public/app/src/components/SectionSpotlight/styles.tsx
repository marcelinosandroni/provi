import styled from 'styled-components'

export const Spotlight = styled.section`
  width: 100%;
  height: 120px;
  background-color: ${(p) => p.theme.background.contrast};
  display: flex;
  justify-content: space-around;
  gap: 2rem;
`
export const Company = styled.img`
  flex-shrink: 1;
  flex-basis: 10%;
  object-fit: contain;
`
