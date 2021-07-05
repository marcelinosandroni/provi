import * as S from './styles'

export const SectionSpotlight = () => {
  const companys = ['negocios', 'valor', 'forbes', 'exame', 'start']

  return (
    <S.Spotlight>
      {companys.map((company) => (
        <S.Company key={company} src={`${company}.png`} alt={company} />
      ))}
    </S.Spotlight>
  )
}
