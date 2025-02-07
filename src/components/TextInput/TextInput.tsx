import React, { forwardRef } from 'react';
import { BaseInput, BaseInputProps } from '../base/BaseInput';
import './TextInput.css';

export interface TextInputProps extends BaseInputProps {
    /** Label for the input */
    label?: string;
    /** Helper text to display below the input */
    helperText?: string;
    /** Start icon or element */
    startIcon?: React.ReactNode;
    /** End icon or element */
    endIcon?: React.ReactNode;
}

/**
 * TextInput component for short-form text input with optional label,
 * helper text, and icons.
 */
export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({
    label,
    helperText,
    startIcon,
    endIcon,
    error = false,
    success = false,
    fullWidth = false,
    className = '',
    id,
    ...props
}, ref) => {
    // Generate a unique ID if none provided
    const inputId = id || `text-input-${Math.random().toString(36).slice(2, 11)}`;

    const wrapperClasses = [
        'text-input',
        fullWidth && 'text-input--full-width',
        error && 'text-input--error',
        success && 'text-input--success',
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={wrapperClasses}>
            {label && (
                <label
                    htmlFor={inputId}
                    className="text-input__label"
                >
                    {label}
                </label>
            )}
            <div className="text-input__container">
                {startIcon && (
                    <span className="text-input__icon text-input__icon--start">
                        {startIcon}
                    </span>
                )}
                <BaseInput
                    ref={ref}
                    id={inputId}
                    error={error}
                    success={success}
                    fullWidth={fullWidth}
                    className={`text-input__field ${startIcon ? 'text-input__field--with-start-icon' : ''} ${endIcon ? 'text-input__field--with-end-icon' : ''}`}
                    {...props}
                />
                {endIcon && (
                    <span className="text-input__icon text-input__icon--end">
                        {endIcon}
                    </span>
                )}
            </div>
            {helperText && (
                <span className={`text-input__helper ${error ? 'text-input__helper--error' : ''} ${success ? 'text-input__helper--success' : ''}`}>
                    {helperText}
                </span>
            )}
        </div>
    );
});
