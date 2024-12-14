export const convertToICS = (amount: number, exchangeRate: number) => {
  return (amount * exchangeRate).toFixed(2)
}

export const convertToGCS = (amount: number, exchangeRate: number) => {
  if (!amount) return '0.00'
  return (amount / exchangeRate).toFixed(2)
}
