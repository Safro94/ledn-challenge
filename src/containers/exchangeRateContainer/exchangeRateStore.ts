import { create } from 'zustand'

interface ExchangeRateState {
  rate: number | undefined
  setRate: (rate: number) => void
}

export const useExchangeRateStore = create<ExchangeRateState>((set) => ({
  rate: undefined,
  setRate: (rate: number) => set({ rate }),
}))
