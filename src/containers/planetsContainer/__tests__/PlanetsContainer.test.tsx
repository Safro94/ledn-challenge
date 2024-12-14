import { act, render, screen, waitFor } from 'utils/testUtils'
import { PlanetsContainer } from '../PlanetsContainer'
import { SKELETON_TEST_ID } from 'components/skeleton'
import { CARD_TEST_ID } from 'components/card/Card'
import planets from 'mockData/planets'
import { Routes } from 'routes/routes.types'
import userEvent from '@testing-library/user-event'

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}))

describe('PlanetsContainer', () => {
  it('should render all the cards', async () => {
    render(<PlanetsContainer />)

    expect(screen.getAllByTestId(SKELETON_TEST_ID)).toHaveLength(50)

    await waitFor(() => {
      expect(screen.queryAllByTestId(SKELETON_TEST_ID)).toHaveLength(0)
    })

    expect(screen.getAllByTestId(CARD_TEST_ID)).toHaveLength(planets.length)
  })

  it('should navigate to the planet detail page when clicking on a card', async () => {
    render(<PlanetsContainer />)

    await waitFor(() => {
      expect(screen.getAllByTestId(CARD_TEST_ID)).toHaveLength(planets.length)
    })

    const card = screen.getAllByTestId(CARD_TEST_ID).at(0)
    expect(card).toBeInTheDocument()

    if (card) card.click()

    expect(mockNavigate).toHaveBeenCalledTimes(1)
    expect(mockNavigate).toHaveBeenCalledWith(
      `/${Routes.DETAIL}/${planets[0].id}`
    )
  })

  it('should filter the cards by the search value', async () => {
    render(<PlanetsContainer />)

    await waitFor(() => {
      expect(
        screen.getByRole('textbox', { name: /search/i })
      ).toBeInTheDocument()
    })

    const searchInput = screen.getByRole('textbox')
    const inputValue = 'tat'
    const filteredPlanets = planets.filter((planet) =>
      planet.name.toLowerCase().includes(inputValue.toLowerCase())
    )

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      userEvent.type(searchInput, inputValue)
    })

    await waitFor(() => {
      expect(screen.getAllByTestId(CARD_TEST_ID)).toHaveLength(
        filteredPlanets.length
      )
    })
  })

  it('should filter the cards by the search value and show the empty state', async () => {
    render(<PlanetsContainer />)

    await waitFor(() => {
      expect(
        screen.getByRole('textbox', { name: /search/i })
      ).toBeInTheDocument()
    })

    const searchInput = screen.getByRole('textbox')
    const inputValue = 'planet'
    const filteredPlanets = planets.filter((planet) =>
      planet.name.toLowerCase().includes(inputValue.toLowerCase())
    )

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      userEvent.type(searchInput, inputValue)
    })

    await waitFor(() => {
      expect(screen.queryAllByTestId(CARD_TEST_ID)).toHaveLength(
        filteredPlanets.length
      )
    })

    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
  })
})
