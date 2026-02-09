import React from 'react';
import { StepConfig } from '../types';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

interface NarrativeViewProps {
  step: StepConfig;
  onNext: () => void;
}

const NarrativeView: React.FC<NarrativeViewProps> = ({ step, onNext }) => {
  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center animate-fade-in-up">
      {step.title && (
        <h1 className="text-2xl md:text-3xl font-bold text-brand-red text-center mb-6 uppercase tracking-wider leading-tight">
          {step.title}
        </h1>
      )}

      <div className="space-y-4 mb-8 text-gray-200 text-lg leading-relaxed w-full">
        {step.content?.map((paragraph, idx) => (
          <p 
            key={idx} 
            className={paragraph.startsWith('•') ? 'pl-4 text-brand-white font-medium' : ''}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </div>

      {step.image && (
        <div className="mb-6 w-full rounded-lg overflow-hidden border border-gray-800 shadow-2xl">
          <img src={step.image} alt="Illustrative" className="w-full h-auto object-cover" />
        </div>
      )}

      {step.imageCaption && (
        <div className="mb-8 text-center italic text-brand-gold border-l-2 border-brand-gold pl-4 py-2 bg-gray-900/50 rounded-r">
            {step.imageCaption.split('\n').map((line, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: line }} />
            ))}
        </div>
      )}

      {step.ctaText && (
        <Button onClick={onNext} className="mt-4 flex items-center justify-center gap-2">
          {step.ctaText}
          <ArrowRight className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
};

export default NarrativeView;