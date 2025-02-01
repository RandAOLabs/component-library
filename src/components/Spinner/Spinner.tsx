import React from 'react';
import './Spinner.css';

export interface SpinnerProps {
    /** Size of the spinner in pixels */
    size?: number;
    /** Color of the spinner */
    color?: string;
    /** Optional className for custom styling */
    className?: string;
}

/**
 * A loading spinner component with a morphing shapes animation
 */
export const Spinner: React.FC<SpinnerProps> = ({
    size = 16,
    color,
    className = ''
}) => {
    const style: React.CSSProperties = {
        width: size,
        height: size,
        ...(color && { '--spinner-color': color } as any)
    };

    return (
        <div
            className={`spinner ${className}`}
            style={style}
            aria-label="Loading"
        >
            <div className="spinner__shape spinner__shape--1" />
            <div className="spinner__shape spinner__shape--2" />
            <div className="spinner__shape spinner__shape--3" />
        </div>
    );
};
