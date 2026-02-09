import React, { useEffect, useState } from 'react';
import { StepConfig } from '../types';
import { Cpu, ShieldCheck, Lock } from 'lucide-react';

interface ProcessingViewProps {
  step: StepConfig;
  onNext: () => void;
}

const ProcessingView: React.FC<ProcessingViewProps> = ({ step, onNext }) => {
  const [progress, setProgress] = useState(0);
  const duration = (step.duration || 8) * 1000; // milliseconds
  const intervalTime = 50; // Update every 50ms

  useEffect(() => {
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(timer);
        setTimeout(onNext, 500); // Small delay before transition for smoothness
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [duration, onNext]);

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center justify-center min-h-[50vh] animate-fade-in-up">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-brand-red blur-xl opacity-20 animate-pulse"></div>
        <Cpu className="w-16 h-16 text-brand-red relative z-10 animate-pulse-slow" />
      </div>

      <h2 className="text-xl font-bold text-white mb-8 text-center uppercase tracking-wider">
        {step.content?.[0]}
      </h2>

      <div className="w-full h-4 bg-gray-900 rounded-full overflow-hidden border border-gray-800 shadow-inner relative">
         <div 
          className="h-full bg-gradient-to-r from-red-900 via-brand-red to-red-500 transition-all ease-linear"
          style={{ width: `${progress}%` }}
        />
        {/* Shine effect */}
        <div className="absolute top-0 bottom-0 right-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
      </div>
      
      <div className="w-full flex justify-between mt-2 text-xs text-gray-500 font-mono">
        <span>ANALISANDO DADOS...</span>
        <span>{Math.floor(progress)}%</span>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 opacity-50">
        <div className="flex items-center gap-2 text-gray-400 text-sm">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            <span>Ambiente Seguro</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Lock className="w-4 h-4 text-brand-gold" />
            <span>Diagnóstico Privado</span>
        </div>
      </div>
    </div>
  );
};

export default ProcessingView;
