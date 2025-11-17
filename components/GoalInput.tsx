
import React, { useState } from 'react';

interface GoalInputProps {
  onSubmit: (goal: string) => void;
  isLoading: boolean;
}

export const GoalInput: React.FC<GoalInputProps> = ({ onSubmit, isLoading }) => {
  const [goal, setGoal] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(goal);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <label htmlFor="business-goal" className="block text-lg font-semibold text-slate-700 mb-2">
          Enter Your High-Level Business Goal
        </label>
        <p className="text-sm text-slate-500 mb-4">
          Describe the outcome you want to achieve. For example, "Launch a real-time sentiment analysis platform for customer feedback to improve product development cycles."
        </p>
        <textarea
          id="business-goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="e.g., Increase user engagement by 20% through personalized content delivery..."
          className="w-full h-32 p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-y"
          disabled={isLoading}
        />
        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors duration-300 flex items-center"
          >
            {isLoading && (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
            {isLoading ? 'Generating...' : 'Generate Plan'}
          </button>
        </div>
      </form>
    </div>
  );
};
