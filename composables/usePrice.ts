export const useRates = () => {
  const priceZanzibarMali = useState("priceZanzibarMali", () => 1015);
  const priceGiraffe = useState("priceGiraffe", () => 900);
  const priceCopper = useState("priceCopper", () => 950);
  const pricePool = useState("pricePool", () => 1050);

  return {
    priceZanzibarMali,
    priceGiraffe,
    priceCopper,
    pricePool,
  };
};
