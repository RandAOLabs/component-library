import React, { useEffect, useRef } from 'react';
import './BaseCheckbox.css';

export interface BaseCheckboxProps {
    /** Whether the checkbox is checked */
    checked: boolean;
    /** Whether the checkbox is in an indeterminate state */
    indeterminate?: boolean;
    /** Whether the checkbox is disabled */
    disabled?: boolean;
    /** Callback when the checkbox state changes */
    onChange?: () => void;
    /** Optional className for custom styling */
    className?: string;
    /** Optional size in pixels */
    size?: 'small' | 'medium' | 'large';
}

/**
 * A base checkbox component with support for indeterminate state
 */
export const BaseCheckbox: React.FC<BaseCheckboxProps> = ({
    checked,
    indeterminate = false,
    disabled = false,
    onChange,
    className = '',
    size = 'medium'
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.indeterminate = indeterminate;
        }
    }, [indeterminate]);

    const checkboxClasses = [
        'base-checkbox',
        `base-checkbox--${size}`,
        disabled && 'base-checkbox--disabled',
        className
    ].filter(Boolean).join(' ');

    return (
        <label className={checkboxClasses}>
            <input
                ref={inputRef}
                type="checkbox"
                checked={checked}
                disabled={disabled}
                onChange={onChange}
                className="base-checkbox__input"
            />
            <span className="base-checkbox__control" />
        </label>
    );
};
