
import React from 'react';
// @ts-ignore
import ReactMarkdown from 'https://esm.sh/react-markdown@9';
// @ts-ignore
import remarkGfm from 'https://esm.sh/remark-gfm@4';


interface PlanDisplayProps {
  plan: string;
  isLoading: boolean;
  error: string | null;
}

const LoadingSkeleton: React.FC = () => (
  <div className="space-y-6 animate-pulse">
    <div className="h-8 bg-slate-200 rounded-md w-1/3"></div>
    <div className="space-y-3">
      <div className="h-4 bg-slate-200 rounded-md w-full"></div>
      <div className="h-4 bg-slate-200 rounded-md w-5/6"></div>
      <div className="h-4 bg-slate-200 rounded-md w-full"></div>
    </div>
    <div className="h-8 bg-slate-200 rounded-md w-1/3"></div>
    <div className="space-y-3">
      <div className="h-4 bg-slate-200 rounded-md w-full"></div>
      <div className="h-4 bg-slate-200 rounded-md w-5/6"></div>
    </div>
    <div className="h-8 bg-slate-200 rounded-md w-1/3"></div>
    <div className="space-y-3">
      <div className="h-4 bg-slate-200 rounded-md w-full"></div>
    </div>
  </div>
);

export const PlanDisplay: React.FC<PlanDisplayProps> = ({ plan, isLoading, error }) => {
  const renderContent = () => {
    if (isLoading) {
      return <LoadingSkeleton />;
    }
    if (error) {
      return (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md" role="alert">
          <p className="font-bold">Error</p>
          <p>{error}</p>
        </div>
      );
    }
    if (plan) {
      return (
        <article className="prose prose-slate max-w-none prose-headings:font-semibold prose-h2:text-xl prose-h2:border-b prose-h2:pb-2 prose-h2:border-slate-200">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {plan}
            </ReactMarkdown>
        </article>
      );
    }
    return (
      <div className="text-center py-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h3 className="mt-2 text-lg font-medium text-slate-800">Your strategic plan will appear here</h3>
        <p className="mt-1 text-sm text-slate-500">
          Enter your business goal above and click "Generate Plan" to begin.
        </p>
      </div>
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md min-h-[20rem]">
      {renderContent()}
    </div>
  );
};
