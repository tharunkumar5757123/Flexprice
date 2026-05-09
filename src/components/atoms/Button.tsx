import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { classNames } from '../../lib/classNames';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: ReactNode;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'shine bg-ink text-white shadow-glow hover:bg-ink/95',
  secondary: 'border border-lineStrong bg-white/90 text-ink shadow-soft hover:border-brand/35 hover:bg-white',
  ghost: 'text-ink hover:bg-white/70 hover:shadow-soft',
  danger: 'shine bg-danger text-white shadow-soft hover:bg-danger/90'
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-9 px-4 text-sm',
  lg: 'h-10 px-5 text-sm'
};

/**
 * Button renders the main clickable actions used across the billing UI.
 * It supports visual variants, three sizes, an optional icon, loading, and disabled states.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(
        'premium-focus inline-flex items-center justify-center gap-2 rounded font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0',
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" /> : icon}
      {children}
    </button>
  );
}
