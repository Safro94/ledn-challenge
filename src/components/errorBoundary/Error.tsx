import { Button, ButtonTypes } from 'components/button'
import { AlertCircle } from 'icons/AlertCircle'
import { useNavigate } from 'react-router-dom'
import { Routes } from 'routes/routes.types'
import { ErrorContainer } from './Error.styles'

export const Error = () => {
  const navigate = useNavigate()

  return (
    <ErrorContainer>
      <AlertCircle width={100} />
      <h1>Something went wrong...</h1>
      <p>An error occurred while trying to load this page.</p>

      <Button
        variant={ButtonTypes.SECONDARY}
        onClick={() => navigate(Routes.SUMMARY)}
      >
        Go back to the home page
      </Button>
    </ErrorContainer>
  )
}
