import { Routes } from 'routes/routes.types'
import { ErrorBoundary } from '../ErrorBoundary'
import { render, screen, waitFor } from 'utils/testUtils'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRouteError: () => ({ message: 'error' }),
  useNavigate: () => mockNavigate,
}))

describe('ErrorBoundary', () => {
  it('should render the error component and navigate to the summary page', async () => {
    render(
      <BrowserRouter>
        <ErrorBoundary />
      </BrowserRouter>
    )

    const button = screen.getByRole('button', { name: /error.goBack/i })
    userEvent.click(button)

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledTimes(1)
    })
    expect(mockNavigate).toHaveBeenCalledWith(Routes.SUMMARY)
  })
})
