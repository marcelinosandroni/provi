import styled from 'styled-components'

export const Wraper = styled.section`
  width: 100%;
  background-color: ${(p) => p.theme.background.secondary};
  color: ${(p) => p.theme.text.primary};
`

export const Container = styled.div`
  max-width: 1300px;
  margin: auto;
  padding: 5rem 0;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`
export const Title = styled.h3`
  font-size: 2.5rem;
  font-weight: 400;
  max-width: 1000px;
  text-align: center;
`
export const CardContainer = styled.div`
  font-size: 1.5rem;
  display: flex;
  padding: 2rem;
  gap: 5rem;
`
