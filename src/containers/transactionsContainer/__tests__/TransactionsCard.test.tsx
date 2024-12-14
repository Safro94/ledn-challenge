import { render, screen, waitFor } from 'utils/testUtils'
import { TransactionsCard } from '../TransactionsCard'
import { SKELETON_TEST_ID } from 'components/skeleton'
import { TRANSACTION_TEST_ID } from 'components/transaction/Transaction'
import userEvent from '@testing-library/user-event'

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

const mockBlockTransactionsMutation = jest.fn()
jest.mock('../useBlockTransactionsMutation', () => ({
  useBlockTransactionsMutation: () => ({
    mutate: mockBlockTransactionsMutation,
  }),
}))

describe('TransactionsCard', () => {
  it('should show the skeleton when isLoading is true', async () => {
    render(
      <TransactionsCard isLoading={true} isFetched={false} transactions={[]} />
    )

    expect(screen.getAllByTestId(SKELETON_TEST_ID)).toHaveLength(6)
  })

  it('should show the empty state when isFetched is false', async () => {
    render(
      <TransactionsCard
        isLoading={false}
        isFetched={false}
        transactions={[]}
        showEmptyState
      />
    )

    expect(screen.queryAllByTestId(TRANSACTION_TEST_ID)).toHaveLength(0)
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
  })

  it('should show the transactions when isFetched is true', async () => {
    render(
      <TransactionsCard
        isFetched
        isLoading={false}
        transactions={MOCKED_TRANSACTIONS}
        showEmptyState={false}
      />
    )

    expect(screen.queryAllByTestId(SKELETON_TEST_ID)).toHaveLength(0)
    expect(screen.getAllByTestId(TRANSACTION_TEST_ID)).toHaveLength(4)
  })

  it('should filter the transactions by the selected currency', async () => {
    render(
      <TransactionsCard
        isFetched
        isLoading={false}
        transactions={MOCKED_TRANSACTIONS}
        showEmptyState={false}
      />
    )

    const selectCurrency = screen.getByRole('button', {
      name: /selectCurrency/i,
    })

    userEvent.click(selectCurrency)

    await waitFor(() => {
      expect(screen.getAllByRole('menuitem')).toHaveLength(3)
    })

    const icsOption = screen.getAllByRole('menuitem').at(1)
    if (icsOption) userEvent.click(icsOption)

    const filteredTransactions = MOCKED_TRANSACTIONS.filter(
      (transaction) => transaction.currency === 'ICS'
    )

    await waitFor(() => {
      expect(screen.queryAllByTestId(TRANSACTION_TEST_ID)).toHaveLength(
        filteredTransactions.length
      )
    })

    userEvent.click(selectCurrency)

    await waitFor(() => {
      expect(screen.getAllByRole('menuitem')).toHaveLength(3)
    })

    const allOption = screen.getAllByRole('menuitem').at(0)
    if (allOption) userEvent.click(allOption)

    await waitFor(() => {
      expect(screen.queryAllByTestId(TRANSACTION_TEST_ID)).toHaveLength(
        MOCKED_TRANSACTIONS.length
      )
    })
  })

  it('should call the blockTransactions mutation when the block button is clicked', async () => {
    render(
      <TransactionsCard
        isFetched
        isLoading={false}
        transactions={MOCKED_TRANSACTIONS}
        showEmptyState={false}
      />
    )

    const blockButton = screen.getByRole('button', { name: /blockInProgress/i })
    if (blockButton) userEvent.click(blockButton)

    await waitFor(() => {
      expect(mockBlockTransactionsMutation).toHaveBeenCalledTimes(1)
    })

    expect(mockBlockTransactionsMutation).toHaveBeenCalledWith(
      MOCKED_TRANSACTIONS.filter(
        (transaction) => transaction.status === 'inProgress'
      )
    )
  })
})
