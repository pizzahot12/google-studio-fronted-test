import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  [key: string]: any;
}

export const Card = ({ children, className, hover = true, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        'rounded-2xl bg-bg-card border border-white/5 overflow-hidden transition-all duration-300',
        hover && 'hover:border-white/20 hover:scale-[1.02] hover:shadow-xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
