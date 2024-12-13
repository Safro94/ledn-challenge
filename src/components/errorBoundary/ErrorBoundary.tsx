import { useEffect } from 'react'
import { Error } from './Error'
import { LayoutContainer } from 'components/layout/Layout.styles'
import { SideNav } from 'components/sideNav'
import { useRouteError } from 'react-router-dom'

export const ErrorBoundary = () => {
  const error = useRouteError()

  useEffect(() => {
    if (error) {
      // ideally we would log this to sentry or some other error logging service
      console.log(error)
    }
  }, [error])

  return (
    <LayoutContainer>
      <SideNav />
      <Error />
    </LayoutContainer>
  )
}
