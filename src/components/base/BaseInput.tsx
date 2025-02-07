import React, { forwardRef } from 'react';
import { useTheme } from '../../theme';
import './BaseInput.css';

export interface BaseInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /** Input variant */
    variant?: 'default' | 'filled' | 'outlined';
    /** Input size */
    size?: 'small' | 'medium' | 'large';
    /** Error state */
    error?: boolean;
    /** Success state */
    success?: boolean;
    /** Whether the input is full width */
    fullWidth?: boolean;
    /** Additional CSS class names */
    className?: string;
}

/**
 * Base input component that provides core input functionality and styling.
 * Used as the foundation for all input variants in the component library.
 */
export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(({
    variant = 'default',
    size = 'medium',
    error = false,
    success = false,
    fullWidth = false,
    disabled = false,
    className = '',
    ...props
}, ref) => {
    const { theme } = useTheme();

    const inputClasses = [
        'base-input',
        `base-input--${variant}`,
        `base-input--${size}`,
        error && 'base-input--error',
        success && 'base-input--success',
        fullWidth && 'base-input--full-width',
        disabled && 'base-input--disabled',
        className
    ].filter(Boolean).join(' ');

    return (
        <input
            ref={ref}
            className={inputClasses}
            disabled={disabled}
            data-theme={theme}
            {...props}
        />
    );
});
