import { ExchangeRateContainer, TransactionsContainer } from 'containers'
import { DetailBackButton, DetailContainer } from './Detail.styles'
import { ButtonTypes } from 'components/button'
import { useNavigate } from 'react-router-dom'
import { Routes } from 'routes/routes.types'
import { LeftArrow } from 'icons/LeftArrow'

export const Detail = () => {
  const navigate = useNavigate()

  return (
    <>
      <DetailBackButton
        variant={ButtonTypes.SECONDARY}
        onClick={() => navigate(Routes.SUMMARY)}
      >
        <LeftArrow width={12} height={12} />
        Back to Summary
      </DetailBackButton>

      <DetailContainer>
        <TransactionsContainer />
        <ExchangeRateContainer />
      </DetailContainer>
    </>
  )
}
