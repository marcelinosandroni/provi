import styled from 'styled-components'

export const Wraper = styled.section`
  width: 100%;
  background: url('/people.png') no-repeat;
  background-position: right bottom;
  min-height: 100vh;
`

export const Container = styled.div`
  max-width: 1300px;
  margin: auto;
  padding: 5rem 0;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: start;
  padding: 5rem;
  gap: 3rem;
`
export const Title = styled.h3`
  font-size: 2.5rem;
  text-align: center;
  color: ${(p) => p.theme.primary};
  font-weight: bold;
`

export const SubTitle = styled.h3``
export const Description = styled.p``
export const Link = styled.a``
