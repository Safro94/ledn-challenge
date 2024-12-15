import { Button, ButtonTypes } from 'components/button'
import { AlertCircle } from 'icons/AlertCircle'
import { useNavigate } from 'react-router-dom'
import { Routes } from 'routes/routes.types'
import { ErrorContainer } from './Error.styles'
import { useTranslation } from 'react-i18next'

export const Error = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <ErrorContainer>
      <AlertCircle width={100} />
      <h1>{t('error.title')}</h1>
      <p>{t('error.subtitle')}</p>

      <Button
        variant={ButtonTypes.SECONDARY}
        onClick={() => navigate(Routes.SUMMARY)}
      >
        {t('error.goBack')}
      </Button>
    </ErrorContainer>
  )
}
