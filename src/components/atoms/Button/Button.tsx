import clsx from '@/lib/clsx';
import React, { ForwardedRef } from 'react';

export type ButtonColor = 'primary' | 'secondary' | 'danger';
export type ButtonVariant = 'outlined' | 'solid' | 'text';

export interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: ButtonColor;
  variant?: ButtonVariant;
}

const Button = React.forwardRef((props: Button, ref: ForwardedRef<HTMLButtonElement>) => {
  const { className, color = 'primary', variant = 'solid', children, ...rest } = props;

  return (
    <button
      {...rest}
      className={clsx('rounded  px-4 py-2', className, {
        'bg-blue-600 hover:bg-blue-400 text-white': color === 'primary' && variant === 'solid',
        'border hover:bg-blue-400 text-black': color === 'primary' && variant === 'outlined',
        'bg-red-600 hover:bg-red-400': color === 'danger' && variant === 'solid',
        'border  hover:bg-red-500 hover:text-white': color === 'danger' && variant === 'outlined',
        'text-blue-600 hover:underline': color === 'primary' && variant === 'text',
      })}
      ref={ref}
    >
      {children}
    </button>
  );
});

export default Button;
