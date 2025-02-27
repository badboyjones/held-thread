/**
 * Button component renders a styled button with customizable styles.
 * It can be reused throughout the application for consistency.
 */

import React from 'react';
import styled from 'styled-components';

// Styled component for the anchor link
const StyledLink = styled.a<{
    $backgroundColor: string;
    $color: string;
    $padding: string;
    $borderRadius: string;
    $hoverColor: string;
    $hoverTextColor: string;
    $margin?: string;
}>`
    display: inline-block;
    text-decoration: none;
    background-color: ${({ $backgroundColor }) => $backgroundColor};
    color: ${({ $color }) => $color};
    padding: ${({ $padding }) => $padding};
    border-radius: ${({ $borderRadius }) => $borderRadius};
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    margin: ${({ $margin }) => $margin};

    &:hover {
        background-color: ${({ $hoverColor }) => $hoverColor};
        color: ${({ $hoverTextColor }) => $hoverTextColor};
    }
`;

// Props for the Button component
interface ButtonProps {
    text: string;
    link: string;  // URL to navigate to
    backgroundColor: string;
    color: string;
    padding: string;
    borderRadius: string;
    hoverColor: string;
    hoverTextColor: string;
    margin?: string;
    width: string;
    type?: 'button' | 'submit' | 'reset';
}

// Main Button component
const Button: React.FC<ButtonProps> = ({
    text,
    link,
    backgroundColor,
    color,
    padding,
    borderRadius,
    hoverColor,
    hoverTextColor,
    margin
}) => {
    return (
        <StyledLink 
            href={link}
            $backgroundColor={backgroundColor}
            $color={color}
            $padding={padding}
            $borderRadius={borderRadius}
            $hoverColor={hoverColor}
            $hoverTextColor={hoverTextColor}
            $margin={margin}
        >
            {text}
        </StyledLink>
    );
};

export default Button; 