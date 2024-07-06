// useBitcoinRates.jsx
import { useState, useEffect } from "react";

const useBitcoinRates = (currency) => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        );
        const data = await response.json();
        setPrice(data.bitcoin[currency.toLowerCase()]);
      } catch (error) {
        console.error("Error fetching the Bitcoin price:", error);
      }
    };

    fetchPrice();

    return () => {
      setPrice(null);
    };
  }, [currency]);

  return price;
};

export default useBitcoinRates;
