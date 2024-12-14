import { LanguageDropdown } from '../LanguageDropdown'
import { render, screen, waitFor } from 'utils/testUtils'
import userEvent from '@testing-library/user-event'

const mockChangeLanguage = jest.fn()
jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  useTranslation: () => ({
    t: jest.fn(),
    i18n: {
      changeLanguage: mockChangeLanguage,
      language: 'en',
    },
  }),
}))

describe('LanguageDropdown', () => {
  it('should render the component with 2 options', async () => {
    render(<LanguageDropdown />)

    const en = screen.getByRole('button', { name: /en/i })
    const es = screen.queryByText(/es/i)

    expect(en).toBeInTheDocument()
    expect(es).not.toBeInTheDocument()

    userEvent.click(en)

    await waitFor(() => {
      expect(screen.getAllByRole('menuitem')).toHaveLength(2)
    })

    expect(screen.getAllByRole('menuitem').at(0)).toHaveTextContent('EN')
    expect(screen.getAllByRole('menuitem').at(1)).toHaveTextContent('ES')
  })

  it('should call the changeLanguage function on dropdown item click', async () => {
    render(<LanguageDropdown />)

    const en = screen.getByRole('button', { name: /en/i })

    userEvent.click(en)

    await waitFor(() => {
      expect(screen.getAllByRole('menuitem')).toHaveLength(2)
    })

    const esOption = screen.getAllByRole('menuitem').at(1)

    if (esOption) userEvent.click(esOption)

    await waitFor(() => {
      expect(mockChangeLanguage).toHaveBeenCalledTimes(1)
    })

    expect(mockChangeLanguage).toBeCalledWith('es')
  })
})
