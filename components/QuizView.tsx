import React from 'react';
import { StepConfig } from '../types';
import { ChevronRight } from 'lucide-react';

interface QuizViewProps {
  step: StepConfig;
  onNext: () => void;
}

const QuizView: React.FC<QuizViewProps> = ({ step, onNext }) => {
  return (
    <div className="w-full max-w-xl mx-auto flex flex-col animate-fade-in-up">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
          {step.title}
        </h2>
      </div>

      <div className="space-y-3">
        {step.options?.map((option, index) => (
          <button
            key={index}
            onClick={onNext}
            className="group w-full text-left p-5 rounded-lg border border-gray-800 bg-gray-900/40 
                       hover:border-brand-red hover:bg-gray-900/80 transition-all duration-200
                       flex items-center justify-between"
          >
            <span className="text-lg text-gray-200 group-hover:text-white transition-colors">
              {option}
            </span>
            <div className="w-6 h-6 rounded-full border border-gray-600 group-hover:border-brand-red group-hover:bg-brand-red flex items-center justify-center transition-all">
              <ChevronRight className="w-4 h-4 text-white opacity-0 group-hover:opacity-100" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizView;