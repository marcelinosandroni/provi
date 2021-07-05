import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1300px;
  width: 100%;
  background-color: ${(p) => p.theme.background.primary};
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  margin: auto;

  & > {
    flex-basis: 50%;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const ImageContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
`

export const Image = styled.img`
  width: 400px;
  object-fit: contain;
  display: block;
  margin-left: auto;
`

export const Description = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: start;
  width: 45%;
  gap: 3rem;
`

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 400;
`
export const SubTitle = styled.p`
  font-size: 2rem;
`
