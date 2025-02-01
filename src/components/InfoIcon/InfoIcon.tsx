import React from 'react';
import { Tooltip, TooltipPosition } from '../Tooltip/Tooltip';
import './InfoIcon.css';

export interface InfoIconProps {
    /** The tooltip content to show */
    content: React.ReactNode;
    /** Position of the tooltip */
    position?: TooltipPosition;
    /** Size of the icon in pixels */
    size?: number;
    /** Optional className for custom styling */
    className?: string;
    /** Whether the tooltip is disabled */
    disabled?: boolean;
}

/**
 * An information icon that shows a tooltip on hover
 */
export const InfoIcon: React.FC<InfoIconProps> = ({
    content,
    position = 'top',
    size = 16,
    className = '',
    disabled = false
}) => {
    return (
        <Tooltip
            content={content}
            position={position}
            disabled={disabled}
            className={className}
        >
            <div
                className="info-icon"
                role="button"
                tabIndex={0}
                style={{ width: size, height: size }}
                aria-label="More information"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
            </div>
        </Tooltip>
    );
};
