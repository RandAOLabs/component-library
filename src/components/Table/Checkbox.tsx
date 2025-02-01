import React, { useEffect, useRef } from 'react';

interface CheckboxProps {
    checked: boolean;
    indeterminate?: boolean;
    onChange: () => void;
    className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
    checked,
    indeterminate = false,
    onChange,
    className = ''
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.indeterminate = indeterminate;
        }
    }, [indeterminate]);

    return (
        <input
            ref={inputRef}
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className={className}
        />
    );
};
