import * as S from './styles'
import { Button } from 'components/Button'

export const SectionPhone = () => (
  <S.Container>
    <S.ImageContainer>
      <S.Image src="/phone.gif" alt="Phone with Provi app" />
    </S.ImageContainer>
    <S.Description>
      <S.Title>
        Estamos reinventando o <strong>crédito educacional</strong> para
        <strong> cursos profissionalizantes.</strong>
      </S.Title>
      <S.SubTitle>
        Financie o curso dos seus sonhos <strong>sem juros</strong> com
        parceiros selecionados e em até <strong>24x no boleto.</strong>
      </S.SubTitle>
      <Button label="Simular agora" />
    </S.Description>
  </S.Container>
)
