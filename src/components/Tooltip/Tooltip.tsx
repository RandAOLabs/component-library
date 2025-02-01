import React, { useState } from 'react';
import './Tooltip.css';

export type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps {
    /** The content to show in the tooltip */
    content: React.ReactNode;
    /** The element that triggers the tooltip */
    children: React.ReactNode;
    /** Position of the tooltip relative to the trigger element */
    position?: TooltipPosition;
    /** Maximum width of the tooltip in pixels */
    maxWidth?: number;
    /** Optional className for custom styling */
    className?: string;
    /** Whether the tooltip is disabled */
    disabled?: boolean;
}

/**
 * A tooltip component that shows additional information on hover
 */
export const Tooltip: React.FC<TooltipProps> = ({
    content,
    children,
    position = 'top',
    maxWidth = 200,
    className = '',
    disabled = false
}) => {
    const [isVisible, setIsVisible] = useState(false);

    if (disabled) {
        return <>{children}</>;
    }

    const tooltipClasses = [
        'tooltip',
        `tooltip--${position}`,
        isVisible && 'tooltip--visible',
        className
    ].filter(Boolean).join(' ');

    return (
        <div
            className="tooltip-container"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            onFocus={() => setIsVisible(true)}
            onBlur={() => setIsVisible(false)}
        >
            {children}
            <div
                className={tooltipClasses}
                role="tooltip"
                style={{ maxWidth }}
            >
                <div className="tooltip__content">
                    {content}
                </div>
                <div className="tooltip__arrow" />
            </div>
        </div>
    );
};
