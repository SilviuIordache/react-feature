// src/components/Button.tsx
import React from 'react';

interface CustomButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  color?: 'yellow' | 'blue' | 'red' | 'green'; // Add more colors as needed
  className?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  children,
  color = 'yellow',
  className,
}) => {
  const baseClasses =
    'text-white p-2 rounded-md transition duration-300 ease-in-out transform';
  const colorClasses = {
    yellow: 'bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700',
    blue: 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700',
    red: 'bg-red-500 hover:bg-red-600 active:bg-red-700',
    green: 'bg-green-500 hover-bg-green-600 active:bg-green-700',
  };

  return (
    <button
      className={`${baseClasses} ${colorClasses[color]} hover:scale-105 active:scale-95 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
