import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white' | 'gold';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wide uppercase transition-all duration-500 rounded-none focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-xl hover:-translate-y-0.5";
  
  const variants = {
    primary: "bg-primary-900 text-white hover:bg-primary-800 focus:ring-primary-900 border border-transparent",
    gold: "bg-gold-500 text-white hover:bg-gold-600 focus:ring-gold-500 border border-transparent",
    outline: "bg-transparent text-primary-900 border-2 border-primary-900 hover:bg-primary-50 focus:ring-primary-900",
    white: "bg-white text-primary-900 hover:bg-gray-50 focus:ring-white border border-transparent"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;