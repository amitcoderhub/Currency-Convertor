import React from 'react';

const CurrencyInput = ({ label, amount, currency, onAmountChange, onCurrencyChange, currencies, readOnly }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium text-white">{label}</label>
      <div className="flex space-x-2">
        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          readOnly={readOnly}
          className={`p-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full ${
            readOnly ? 'cursor-not-allowed' : 'hover:bg-white/30'
          }`}
        />
        <select
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="p-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:bg-white/30"
        >
          {currencies.map((curr) => (
            <option key={curr} value={curr} className="bg-gray-800">
              {curr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CurrencyInput;