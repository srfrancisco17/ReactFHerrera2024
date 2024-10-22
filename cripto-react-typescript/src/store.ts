
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Criptocurrency, CryptoPrice, Pair } from './types';
import { fetchCurrencyCryptoPrice, getCryptos } from './services/CryptoService';

type CryptoStore = {
  cryptocurrencies: Criptocurrency[]
  result: CryptoPrice
  fetchCryptos: () => Promise<void>
  fetchData: (pair: Pair) => Promise<void>

}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
  cryptocurrencies: [],
  result: {} as CryptoPrice,
  fetchCryptos: async() => {
    const cryptocurrencies = await getCryptos();

    set(() => ({
      cryptocurrencies
    }))
  },
  fetchData: async (pair) => {
    const result = await fetchCurrencyCryptoPrice(pair);

    set(() => ({
      result
    }));
    
  }
})));
