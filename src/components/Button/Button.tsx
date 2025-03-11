/**
 * Button component provides a consistent, styled button or link element
 * with hover effects and accessibility features.
 * 
 * Features:
 * - Configurable colors and styles
 * - Hover and focus states
 * - Accessible keyboard navigation
 * - Link or button functionality
 */
import React from 'react';
import { StyledAnchor, StyledButton } from './Button.styles';

interface ButtonProps {
    to?: string;
    onClick?: () => void;
    children: React.ReactNode;
    $backgroundColor: string;
    $color: string;
    $padding: string;
    $borderRadius: string;
    $margin: string;
    $hoverColor?: string;
    $hoverTextColor?: string;
    className?: string;
    asButton?: boolean;
}

/**
 * Button component that renders either as an anchor or button element
 * based on whether it's being used as a link or action trigger
 */
const Button: React.FC<ButtonProps> = ({ 
    to,
    onClick,
    children,
    asButton = false,
    ...styleProps
}) => {
    // If asButton is true or we have an onClick handler, render as button
    if (asButton || onClick) {
        return (
            <StyledButton
                onClick={onClick}
                type="button"
                {...styleProps}
            >
                {children}
            </StyledButton>
        );
    }

    // Otherwise render as anchor
    return (
        <StyledAnchor
            href={to}
            {...styleProps}
        >
            {children}
        </StyledAnchor>
    );
};

export default Button; 