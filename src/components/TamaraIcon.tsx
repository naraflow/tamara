import React from 'react';

interface TamaraIconProps {
  className?: string;
}

export const TamaraIcon: React.FC<TamaraIconProps> = ({ className = "w-8 h-8" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Modern Hotel Service Bell Icon */}
      <circle cx="12" cy="16" r="6" fill="currentColor" opacity="0.1"/>
      <path
        d="M8 16h8c0-2.21-1.79-4-4-4s-4 1.79-4 4z"
        fill="currentColor"
      />
      <path
        d="M12 8v4M6 16h12v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="8"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
};
