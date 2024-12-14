import '@testing-library/jest-dom'
import { server } from './mocks/server'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: jest.fn(),
    i18n: {
      changeLanguage: jest.fn(),
      language: 'en',
    },
  }),
}))

// Establish API mocking before all tests.
beforeAll(() => server.listen())
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  jest.resetAllMocks()
  server.resetHandlers()
})
// Clean up after the tests are finished.
afterAll(() => server.close())
