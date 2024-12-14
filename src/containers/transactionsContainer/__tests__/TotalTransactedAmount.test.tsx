import { render, screen } from 'utils/testUtils'
import { TotalTransactedAmount } from '../TotalTransactedAmount'
import { SKELETON_TEST_ID } from 'components/skeleton'
import { ExchangeRateType } from 'containers/exchangeRateContainer/ExchangeRateContainer'
import { convertToGCS, convertToICS } from 'utils/converter'

jest.mock('containers/exchangeRateContainer', () => ({
  useExchangeRateStore: () => 1.2,
}))

const MOCKED_RATE = 1.2
const MOCKED_TRANSACTIONS = [
  {
    amount: 100,
    currency: 'GCS',
    date: '2023-01-01',
    status: 'inProgress',
    user: 1,
    id: '1',
  },
  {
    amount: 200,
    currency: 'GCS',
    date: '2023-01-01',
    status: 'inProgress',
    user: 1,
    id: '2',
  },
  {
    amount: 150,
    currency: 'ICS',
    date: '2023-01-01',
    status: 'inProgress',
    user: 1,
    id: '3',
  },
  {
    amount: 250,
    currency: 'ICS',
    date: '2023-01-01',
    status: 'inProgress',
    user: 1,
    id: '4',
  },
]

describe('TotalTransactedAmount', () => {
  it('should show the loading skeleton', () => {
    render(<TotalTransactedAmount isLoading={true} transactions={[]} />)

    expect(screen.getAllByTestId(SKELETON_TEST_ID)).toHaveLength(3)
  })

  it('should show 0 in the 6 values when there are no transactions', () => {
    render(<TotalTransactedAmount isLoading={false} transactions={[]} />)

    expect(screen.queryAllByTestId(SKELETON_TEST_ID)).toHaveLength(0)
    expect(screen.queryAllByText(/0.00/)).toHaveLength(6)
  })

  it('should show the converted amount when there are transactions', () => {
    render(
      <TotalTransactedAmount
        isLoading={false}
        transactions={MOCKED_TRANSACTIONS}
      />
    )

    expect(screen.queryAllByTestId(SKELETON_TEST_ID)).toHaveLength(0)

    const totals = MOCKED_TRANSACTIONS.reduce<Record<ExchangeRateType, number>>(
      (acc, transaction) => {
        acc[transaction.currency as ExchangeRateType] += transaction.amount

        return acc
      },
      {
        [ExchangeRateType.ICS]: 0,
        [ExchangeRateType.GCS]: 0,
      }
    )

    const totalInICS = totals[ExchangeRateType.ICS].toFixed(2)
    const totalInGCS = totals[ExchangeRateType.GCS].toFixed(2)

    expect(screen.getByText(totalInICS)).toBeInTheDocument()
    expect(screen.getByText(totalInGCS)).toBeInTheDocument()
    expect(
      screen.getByText(convertToGCS(totals[ExchangeRateType.ICS], MOCKED_RATE))
    ).toBeInTheDocument()
    expect(
      screen.getByText(convertToICS(totals[ExchangeRateType.GCS], MOCKED_RATE))
    ).toBeInTheDocument()
  })
})
