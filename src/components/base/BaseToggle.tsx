import React from 'react';
import './BaseToggle.css';

export interface BaseToggleProps {
    /** Whether the toggle is checked */
    checked: boolean;
    /** Callback when the toggle state changes */
    onChange: (checked: boolean) => void;
    /** Optional label for the toggle */
    label?: string;
    /** Optional className for custom styling */
    className?: string;
    /** Whether the toggle is disabled */
    disabled?: boolean;
    /** Size of the toggle - affects overall dimensions */
    size?: 'small' | 'medium' | 'large';
    /** Optional children to render inside the toggle */
    children?: React.ReactNode;
}

/**
 * Base toggle switch component that provides core toggle functionality
 */
export const BaseToggle: React.FC<BaseToggleProps> = ({
    checked,
    onChange,
    label,
    className = '',
    disabled = false,
    size = 'medium',
    children
}) => {
    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            if (!disabled) {
                onChange(!checked);
            }
        }
    };

    const toggleClasses = [
        'toggle',
        `toggle--${size}`,
        checked && 'toggle--checked',
        disabled && 'toggle--disabled',
        className
    ].filter(Boolean).join(' ');

    return (
        <div className="toggle-container">
            {label && (
                <label className="toggle__label">
                    {label}
                </label>
            )}
            <div
                className={toggleClasses}
                role="switch"
                aria-checked={checked}
                aria-disabled={disabled}
                tabIndex={disabled ? -1 : 0}
                onClick={() => !disabled && onChange(!checked)}
                onKeyDown={handleKeyDown}
            >
                <div className="toggle__track">
                    <div className="toggle__thumb" />
                    {children}
                </div>
            </div>
        </div>
    );
};
