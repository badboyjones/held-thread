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
import { StyledButton } from './Button.styles';

interface ButtonProps {
    text: string;
    link: string;
    backgroundColor: string;
    color: string;
    padding: string;
    borderRadius: string;
    margin: string;
    hoverColor?: string;
    hoverTextColor?: string;
}

const Button: React.FC<ButtonProps> = ({
    text,
    link,
    backgroundColor,
    color,
    padding,
    borderRadius,
    margin,
    hoverColor,
    hoverTextColor
}) => {
    return (
        <StyledButton
            href={link}
            backgroundColor={backgroundColor}
            color={color}
            padding={padding}
            borderRadius={borderRadius}
            margin={margin}
            hoverColor={hoverColor}
            hoverTextColor={hoverTextColor}
            role="button"
        >
            {text}
        </StyledButton>
    );
};

export default Button; 