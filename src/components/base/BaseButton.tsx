import React from 'react';
import { useTheme } from '../../theme';

export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** The button's variant */
    variant?: 'primary' | 'secondary' | 'outline';
    /** The button's size */
    size?: 'small' | 'medium' | 'large';
    /** Additional CSS class names */
    className?: string;
}

/**
 * Base button component that provides common functionality and styling
 * for all button variants in the component library.
 */
export const BaseButton: React.FC<BaseButtonProps> = ({
    variant = 'primary',
    size = 'medium',
    className = '',
    children,
    ...props
}) => {
    const { theme } = useTheme();

    const baseClasses = [
        'btn',
        `btn--${variant}`,
        `btn--${size}`,
        `btn--${theme}`,
        className
    ].filter(Boolean).join(' ');

    return (
        <button
            className={baseClasses}
            data-theme={theme}
            {...props}
        >
            {children}
        </button>
    );
};
