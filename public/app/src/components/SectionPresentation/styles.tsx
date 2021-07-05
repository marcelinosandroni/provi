import styled from 'styled-components'

export const Wraper = styled.section`
  background-image: url('/cover.png');
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
  padding-top: 70px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const TextContainer = styled.main`
  flex: 1;
  padding-right: 40%;
  color: ${(p) => p.theme.text.primary};
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
`

export const Title = styled.h1`
  font-size: 3.8rem;
  font-weight: 400;
`

export const BoldTitle = styled.strong`
  font-weight: bold;
  display: block;
`
export const SubTitle = styled.p`
  text-decoration: underline;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 2rem;
`
