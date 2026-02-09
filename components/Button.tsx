import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full bg-brand-red text-white font-bold 
        py-4 px-6 rounded-lg uppercase tracking-wide
        shadow-[0_0_20px_rgba(229,9,20,0.4)]
        hover:bg-red-700 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(229,9,20,0.6)]
        transition-all duration-300 active:scale-95
        text-lg md:text-xl border-b-4 border-red-900
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
