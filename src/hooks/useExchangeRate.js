// src/hooks/useExchangeRate.js
import { useState, useEffect } from 'react';

const useExchangeRate = (fromCurrency, toCurrency) => {
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = 'c4fbc1a208363203aba8099b'; // Replace with your API key

  useEffect(() => {
    const fetchExchangeRate = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`
        );
        const data = await response.json();
        if (data.result === 'success') {
          setExchangeRate(data.conversion_rates[toCurrency]);
        } else {
          throw new Error('Failed to fetch exchange rate');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  return { exchangeRate, loading, error };
};

export default useExchangeRate;