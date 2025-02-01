import React from 'react';
import { BaseButton, BaseButtonProps } from '../base/BaseButton';
import './Button.css';

export interface ButtonProps extends BaseButtonProps {
    /** Optional loading state */
    loading?: boolean;
    /** Optional icon to display before the button text */
    startIcon?: React.ReactNode;
    /** Optional icon to display after the button text */
    endIcon?: React.ReactNode;
}

/**
 * Button component that extends BaseButton with additional features
 * like loading state and icon support.
 * 
 * @example
 * ```tsx
 * <Button variant="primary" onClick={() => console.log('clicked')}>
 *   Click me
 * </Button>
 * ```
 */
export const Button: React.FC<ButtonProps> = ({
    loading = false,
    startIcon,
    endIcon,
    children,
    disabled,
    className = '',
    ...props
}) => {
    const buttonClasses = [
        'button',
        loading && 'button--loading',
        className
    ].filter(Boolean).join(' ');

    return (
        <BaseButton
            className={buttonClasses}
            disabled={disabled || loading}
            {...props}
        >
            {loading && (
                <span className="button__spinner" aria-hidden="true" />
            )}
            {!loading && startIcon && (
                <span className="button__icon button__icon--start">
                    {startIcon}
                </span>
            )}
            <span className="button__text">{children}</span>
            {!loading && endIcon && (
                <span className="button__icon button__icon--end">
                    {endIcon}
                </span>
            )}
        </BaseButton>
    );
};
