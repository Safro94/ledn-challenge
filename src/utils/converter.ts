export const convertToICS = (amount: number, exchangeRate: number) => {
  return (amount * exchangeRate).toFixed(2)
}

export const convertToGCS = (amount: number, exchangeRate: number) => {
  return (amount / exchangeRate).toFixed(2)
}
