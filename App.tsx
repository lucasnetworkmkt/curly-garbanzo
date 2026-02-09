import React, { useState, useEffect } from 'react';
import { STEPS } from './constants';
import { StepType } from './types';
import NarrativeView from './components/NarrativeView';
import QuizView from './components/QuizView';
import ProcessingView from './components/ProcessingView';
import Button from './components/Button';
import { AlertTriangle } from 'lucide-react';

const App: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentStep = STEPS[currentStepIndex];

  // Calculate progress percentage
  // We add 1 to index because arrays are 0-based, but visual steps start at 1
  const progressPercentage = Math.min(((currentStepIndex + 1) / STEPS.length) * 100, 100);

  // Preload images
  useEffect(() => {
    STEPS.forEach(step => {
      if (step.image) {
        const img = new Image();
        img.src = step.image;
      }
    });
  }, []);

  const handleNext = () => {
    if (currentStep.type === StepType.FINAL && currentStep.redirectUrl) {
      window.location.href = currentStep.redirectUrl;
      return;
    }
    
    if (currentStepIndex < STEPS.length - 1) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const renderContent = () => {
    switch (currentStep.type) {
      case StepType.QUIZ:
        return <QuizView step={currentStep} onNext={handleNext} />;
      
      case StepType.PROCESSING:
        return <ProcessingView step={currentStep} onNext={handleNext} />;
      
      case StepType.DIAGNOSIS:
        return (
          <div className="w-full max-w-xl mx-auto flex flex-col items-center animate-fade-in-up">
            <div className="w-full border-l-4 border-brand-gold bg-gray-900/30 p-6 rounded-r-lg mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">DIAGNÓSTICO CONCLUÍDO</h2>
              <p className="text-brand-gold text-sm uppercase tracking-widest">Análise de Perfil</p>
            </div>
            <NarrativeView step={currentStep} onNext={handleNext} />
          </div>
        );

      case StepType.FINAL:
         return (
          <div className="w-full max-w-xl mx-auto flex flex-col items-center animate-fade-in-up">
            <div className="border border-brand-red/50 bg-red-950/20 p-8 rounded-lg shadow-[0_0_50px_rgba(229,9,20,0.1)] mb-8 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-brand-red"></div>
               <div className="flex justify-center mb-6">
                 <AlertTriangle className="w-12 h-12 text-brand-red" />
               </div>
               <NarrativeView step={currentStep} onNext={handleNext} />
            </div>
          </div>
         );

      case StepType.NARRATIVE:
      default:
        return <NarrativeView step={currentStep} onNext={handleNext} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col relative overflow-x-hidden selection:bg-brand-red selection:text-white">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-red/5 blur-[120px] rounded-full opacity-40"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-gold/5 blur-[120px] rounded-full opacity-30"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      </div>

      {/* Main Container */}
      <main className="flex-grow flex flex-col items-center justify-start pt-10 px-8 pb-8 relative z-10 w-full">
        
        {/* Header Section: Logo & Progress Bar */}
        <div className="w-full max-w-xl flex flex-col items-center mb-8">
          {/* Logo */}
          <div className="mb-6 w-full flex justify-center">
            <img 
              src="https://i.ibb.co/whdGyfFW/logo-evolucao-v5-exact-inverted-cleanup-removebg-preview.png" 
              alt="Código da Evolução" 
              className="h-16 md:h-20 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            />
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden shadow-inner">
            <div 
              className="h-full bg-brand-red shadow-[0_0_10px_rgba(229,9,20,0.8)] transition-all duration-700 ease-out rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Dynamic Content */}
        {renderContent()}
      </main>
    </div>
  );
};

export default App;