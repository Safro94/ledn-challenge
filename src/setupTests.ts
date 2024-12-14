import '@testing-library/jest-dom'
import { server } from './mocks/server'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      changeLanguage: jest.fn(),
      language: 'en',
    },
  }),
}))

beforeAll(() => server.listen())
afterEach(() => {
  jest.resetAllMocks()
  server.resetHandlers()
})
afterAll(() => server.close())
