import React from 'react';
import './Button.css';

export interface ButtonProps {
    /** The button's content */
    children: React.ReactNode;
    /** Optional variant for different button styles */
    variant?: 'primary' | 'secondary' | 'outline';
    /** Optional click handler */
    onClick?: () => void;
    /** Disabled state */
    disabled?: boolean;
    /** Additional CSS class names */
    className?: string;
}

/**
 * A customizable button component with different variants
 * 
 * @example
 * ```tsx
 * <Button variant="primary" onClick={() => console.log('clicked')}>
 *   Click me
 * </Button>
 * ```
 */
export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    onClick,
    disabled = false,
    className = '',
}) => {
    return (
        <button
            className={`btn btn-${variant} ${className}`.trim()}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
