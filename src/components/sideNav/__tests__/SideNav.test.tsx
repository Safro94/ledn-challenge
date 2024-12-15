import { act, render, screen } from 'utils/testUtils'
import { SideNav } from '../SideNav'
import userEvent from '@testing-library/user-event'
import { Routes } from 'routes/routes.types'

describe('SideNav', () => {
  it('should render 1 link that goes to the summary page', async () => {
    render(<SideNav />)

    expect(screen.getByRole('link', { name: /cb/i })).toBeInTheDocument()

    const sumaryLink = screen.getByRole('link', { name: /sideNav.summary/i })

    expect(sumaryLink).toBeInTheDocument()

    await act(async () => {
      userEvent.click(sumaryLink)
    })

    expect(window.location.pathname).toBe(Routes.SUMMARY)
  })
})
