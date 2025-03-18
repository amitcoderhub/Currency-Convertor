import React from 'react';

const SwapButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 backdrop-blur-sm rounded-lg border border-white/10 text-white hover:from-purple-500 hover:to-blue-500 transition-all duration-200 flex items-center justify-center mx-auto"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    </button>
  );
};

export default SwapButton;