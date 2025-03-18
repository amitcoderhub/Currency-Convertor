import React, { useState } from 'react';
import useExchangeRate from './hooks/useExchangeRate';
import CurrencyInput from './components/CurrencyInput';
import SwapButton from './components/SwapButton';
import ConvertButton from './components/ConvertButton';

const App = () => {
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');

  const { exchangeRate, loading, error } = useExchangeRate(fromCurrency, toCurrency);

  const handleSwap = () => {
    const tempCurrency = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(tempCurrency);
    const tempAmount = fromAmount;
    setFromAmount(toAmount);
    setToAmount(tempAmount);
  };

  const handleConvert = () => {
    if (exchangeRate) {
      setToAmount((fromAmount * exchangeRate).toFixed(2));
    }
  };

  const currencies = ['USD', 'INR', 'EUR', 'GBP']; // Add more currencies as needed

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/growth-graph-finance-business-chart-market-financial-stock-money-background-success-digital-investment-data-concept-economy-analysis-profit-diagram-global-trade-currency-report-exchange_79161-2475.jpg?w=1800')`,
      }}
    >
      <div
        className="bg-white/20 backdrop-blur-lg rounded-lg p-6 sm:p-8 shadow-2xl border border-white/10 w-full max-w-md mx-4"
      >
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Currency Converter
        </h1>
        <div className="space-y-6">
          <CurrencyInput
            label="From"
            amount={fromAmount}
            currency={fromCurrency}
            onAmountChange={setFromAmount}
            onCurrencyChange={setFromCurrency}
            currencies={currencies}
          />

          <SwapButton onClick={handleSwap} />

          <CurrencyInput
            label="To"
            amount={toAmount}
            currency={toCurrency}
            onAmountChange={setToAmount}
            onCurrencyChange={setToCurrency}
            currencies={currencies}
            readOnly
          />

          {error && <p className="text-red-500 text-center">{error}</p>}

          <ConvertButton
            onClick={handleConvert}
            loading={loading}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
          />
        </div>
      </div>
    </div>
  );
};

export default App;