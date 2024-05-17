export const useRates = () => {
  const pricePremium = useState('pricePremium', () => 1015)
  const priceGiraffe = useState('priceStandard', () => 900)
  const priceCopper = useState('priceCopper', () => 950)
  const pricePool = useState('pricePool', () => 1050)

  return {
    pricePremium,
    priceGiraffe,
    priceCopper,
    pricePool,
  }
}
