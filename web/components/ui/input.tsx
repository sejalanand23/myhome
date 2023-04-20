import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return <input className={cn('flex h-10 w-full rounded-md border border-base-300 bg-transparent py-2 px-3 text-sm placeholder:text-base-400 focus:outline-none focus:ring-2 focus:ring-base-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-base-700 dark:text-base-50 dark:focus:ring-base-400 dark:focus:ring-offset-base-900', className)} ref={ref} {...props} />;
});
Input.displayName = 'Input';

export { Input };
