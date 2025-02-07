import React, { forwardRef, useImperativeHandle } from 'react';
import { useTheme } from '../../theme';
import './TextArea.css';

export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
    /** TextArea variant */
    variant?: 'default' | 'filled' | 'outlined';
    /** TextArea size */
    size?: 'small' | 'medium' | 'large';
    /** Error state */
    error?: boolean;
    /** Success state */
    success?: boolean;
    /** Whether the textarea is full width */
    fullWidth?: boolean;
    /** Label for the textarea */
    label?: string;
    /** Helper text to display below the textarea */
    helperText?: string;
    /** Number of visible text rows */
    rows?: number;
    /** Maximum number of visible text rows */
    maxRows?: number;
    /** Whether to auto-resize based on content */
    autoResize?: boolean;
    /** Additional CSS class names */
    className?: string;
}

/**
 * TextArea component for long-form text input with auto-resize capability
 * and support for labels and helper text.
 */
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
    variant = 'default',
    size = 'medium',
    error = false,
    success = false,
    fullWidth = false,
    label,
    helperText,
    rows = 3,
    maxRows = 10,
    autoResize = false,
    className = '',
    id,
    onChange,
    ...props
}, ref) => {
    const { theme } = useTheme();
    const internalRef = React.useRef<HTMLTextAreaElement>(null);
    const [currentRows, setCurrentRows] = React.useState(rows);

    // Forward the ref to parent components
    useImperativeHandle(ref, () => internalRef.current!, []);

    // Generate a unique ID if none provided
    const textareaId = id || `textarea-${Math.random().toString(36).slice(2, 11)}`;

    const wrapperClasses = [
        'textarea',
        `textarea--${variant}`,
        `textarea--${size}`,
        error && 'textarea--error',
        success && 'textarea--success',
        fullWidth && 'textarea--full-width',
        className
    ].filter(Boolean).join(' ');

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (autoResize && internalRef.current) {
            const textarea = internalRef.current;
            // Reset height to calculate scroll height
            textarea.style.height = 'auto';

            // Calculate new row count based on scroll height
            const lineHeight = parseInt(getComputedStyle(textarea).lineHeight);
            const paddingTop = parseInt(getComputedStyle(textarea).paddingTop);
            const paddingBottom = parseInt(getComputedStyle(textarea).paddingBottom);
            const newRows = Math.min(
                Math.max(
                    rows,
                    Math.ceil((textarea.scrollHeight - paddingTop - paddingBottom) / lineHeight)
                ),
                maxRows
            );

            setCurrentRows(newRows);
            textarea.style.height = `${newRows * lineHeight + paddingTop + paddingBottom}px`;
        }

        onChange?.(e);
    };

    return (
        <div className={wrapperClasses}>
            {label && (
                <label
                    htmlFor={textareaId}
                    className="textarea__label"
                >
                    {label}
                </label>
            )}
            <textarea
                ref={internalRef}
                id={textareaId}
                className="textarea__field"
                rows={currentRows}
                onChange={handleChange}
                data-theme={theme}
                {...props}
            />
            {helperText && (
                <span className={`textarea__helper ${error ? 'textarea__helper--error' : ''} ${success ? 'textarea__helper--success' : ''}`}>
                    {helperText}
                </span>
            )}
        </div>
    );
});
