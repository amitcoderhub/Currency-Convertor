import React from 'react';

const ConvertButton = ({ onClick, loading, fromCurrency, toCurrency }) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="w-full p-3 bg-gradient-to-r from-green-500 to-blue-500 backdrop-blur-sm rounded-lg border border-white/10 text-white hover:from-blue-500 hover:to-green-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? 'Converting...' : `Convert ${fromCurrency} to ${toCurrency}`}
    </button>
  );
};

export default ConvertButton;