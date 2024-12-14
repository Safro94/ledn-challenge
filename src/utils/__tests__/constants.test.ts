import { API_ENDPOINTS, API_PREFIX } from 'utils/constants'

describe('Constants', () => {
  it('should return the correct API_PREFIX', () => {
    expect(API_PREFIX).toBe('/api')
  })

  it('should return the correct API_ENDPOINTS', () => {
    expect(API_ENDPOINTS.planets).toBe('/planets')
    expect(API_ENDPOINTS.users).toBe('/users')
    expect(API_ENDPOINTS.transactions).toBe('/transactions')
    expect(API_ENDPOINTS.exchangeRate).toBe('/exchange-rate')
    expect(API_ENDPOINTS.transactionsByUsers).toBe('/transactions/users')
    expect(API_ENDPOINTS.usersByPlanet).toBe('/users/planet')
    expect(API_ENDPOINTS.updateBatch).toBe('/transactions/update-batch')
  })
})
