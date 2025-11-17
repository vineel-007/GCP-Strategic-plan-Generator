
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto max-w-4xl p-4 sm:p-6 flex items-center justify-between">
        <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-800">GCP Strategic Plan Generator</h1>
            <p className="text-sm text-slate-500">From Business Goals to Actionable GCP Execution Plans</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3M5.636 5.636l-1.414-1.414m15.152 15.152l-1.414-1.414M5.636 18.364l-1.414 1.414m15.152-15.152l-1.414 1.414" />
        </svg>
      </div>
    </header>
  );
};
