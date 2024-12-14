import { SKELETON_TEST_ID } from 'components/skeleton'
import {
  ExchangeRateContainer,
  ExchangeRateType,
} from '../ExchangeRateContainer'
import { render, screen, waitFor } from 'utils/testUtils'
import { EXCHANGE_RATE_TEST_VALUE } from 'mocks/handlers/exchangeRateHandler'

describe('ExchangeRateContainer', () => {
  it('should render the component and show the rate', async () => {
    render(<ExchangeRateContainer />)

    expect(screen.getAllByTestId(SKELETON_TEST_ID)).toHaveLength(1)

    await waitFor(() => {
      expect(screen.queryAllByTestId(SKELETON_TEST_ID)).toHaveLength(0)
    })

    expect(
      screen.getByText(
        `1 ${ExchangeRateType.ICS} = ${EXCHANGE_RATE_TEST_VALUE} ${ExchangeRateType.GCS}`
      )
    ).toBeInTheDocument()
  })
})
