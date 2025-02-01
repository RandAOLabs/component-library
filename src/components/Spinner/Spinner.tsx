import React from 'react';
import './Spinner.css';

export interface SpinnerProps {
    /** Size of the spinner in pixels */
    size?: number;
    /** Optional className for custom styling */
    className?: string;
}

/**
 * A loading spinner component with a morphing shapes animation
 */
export const Spinner: React.FC<SpinnerProps> = ({
    size = 16,
    className = ''
}) => {
    return (
        <div
            className={`spinner ${className}`}
            style={{
                width: size,
                height: size
            }}
            aria-label="Loading"
        >
            <div className="spinner__shape spinner__shape--1" />
            <div className="spinner__shape spinner__shape--2" />
            <div className="spinner__shape spinner__shape--3" />
        </div>
    );
};
