import { convertToGCS, convertToICS } from 'utils/converter'

describe('Converter', () => {
  it('should convert to ICS', () => {
    const amount = 100
    const exchangeRate = 0.5
    const result = convertToICS(amount, exchangeRate)
    expect(result).toBe('50.00')
  })

  it('should convert to GCS', () => {
    const amount = 100
    const exchangeRate = 0.5
    const result = convertToGCS(amount, exchangeRate)
    expect(result).toBe('200.00')
  })
})
