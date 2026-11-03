import React from 'react';

interface LogoProps {
  variant?: 'on-white' | 'on-blue';
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'on-white',
  className = '',
  showTagline = false,
}) => {
  const isBlue = variant === 'on-blue';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Geometric Monogram */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-200 group-hover:scale-105"
        >
          {/* Rounded base badge */}
          <rect
            width="36"
            height="36"
            rx="10"
            fill={isBlue ? '#FFFFFF' : '#1746A2'}
            className="transition-colors"
          />
          {/* Inner geometry: R shape with code movement arrow */}
          <path
            d="M10 26V10H18C21.3 10 23.5 12 23.5 15C23.5 17.2 22 19 19.8 19.7L24.5 26H20.2L15.8 20.2H13.8V26H10ZM13.8 17H17.6C19 17 20 16.2 20 15C20 13.8 19 13 17.6 13H13.8V17Z"
            fill={isBlue ? '#1746A2' : '#FFFFFF'}
          />
          {/* Terminal Code Accent Arrow */}
          <path
            d="M22 10.5L25 13.5L22 16.5"
            stroke={isBlue ? '#2563EB' : '#3B82F6'}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center leading-none">
          <span
            className={`text-xl font-bold tracking-tight transition-colors ${
              isBlue ? 'text-white' : 'text-[#1746A2]'
            }`}
          >
            Rev<span className={isBlue ? 'text-blue-300' : 'text-[#2563EB]'}>Code</span>
          </span>
        </div>
        {showTagline && (
          <span
            className={`text-[11px] font-medium tracking-normal mt-0.5 ${
              isBlue ? 'text-blue-200' : 'text-slate-500'
            }`}
          >
            Website Development Studio
          </span>
        )}
      </div>
    </div>
  );
};
