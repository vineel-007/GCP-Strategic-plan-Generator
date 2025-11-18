import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { GoalInput } from './components/GoalInput';
import { PlanDisplay } from './components/PlanDisplay';
import { generatePlan } from './services/geminiService';

const App: React.FC = () => {
  const [strategicPlan, setStrategicPlan] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGeneratePlan = useCallback(async (goal: string) => {
    if (!goal.trim()) {
      setError('Business goal cannot be empty.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setStrategicPlan('');

    try {
      const plan = await generatePlan(goal);
      setStrategicPlan(plan);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header />
      <main className="container mx-auto max-w-4xl p-4 sm:p-6 md:p-8">
        <div className="space-y-8">
          <GoalInput onSubmit={handleGeneratePlan} isLoading={isLoading} />
          <PlanDisplay
            plan={strategicPlan}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </main>
      <footer className="text-center py-4 text-xs text-slate-500">
        <p>Powered by Google Cloud and Gemini API</p>
      </footer>
    </div>
  );
};

export default App;