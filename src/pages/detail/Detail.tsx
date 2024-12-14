import { ExchangeRateContainer, TransactionsContainer } from 'containers'
import { DetailBackButton, DetailContainer } from './Detail.styles'
import { ButtonTypes } from 'components/button'
import { useNavigate } from 'react-router-dom'
import { Routes } from 'routes/routes.types'
import { LeftArrow } from 'icons/LeftArrow'
import { useTranslation } from 'react-i18next'

export const Detail = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <>
      <DetailBackButton
        variant={ButtonTypes.SECONDARY}
        onClick={() => navigate(Routes.SUMMARY)}
      >
        <LeftArrow width={12} height={12} />
        {t('detail.backToSummary')}
      </DetailBackButton>

      <DetailContainer>
        <TransactionsContainer />
        <ExchangeRateContainer />
      </DetailContainer>
    </>
  )
}
