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
    z-index: 300;
    position: relative;

    &:hover {
        background-color: ${({ $hoverColor }) => $hoverColor};
        color: ${({ $hoverTextColor }) => $hoverTextColor};
    }
`;

// Props for the Button component
interface ButtonProps {
    text?: string;
    backgroundColor?: string;
    color?: string;
    padding?: string;
    borderRadius?: string;
    hoverColor?: string;
    hoverTextColor?: string;
    type?: "submit" | "button";
    width?: string;
    link?: string;
    to?: string;
    children?: React.ReactNode;
    margin?: string;
}

// Main Button component
const Button: React.FC<ButtonProps> = ({
    text,
    backgroundColor,
    color,
    padding,
    borderRadius,
    hoverColor,
    hoverTextColor,
    margin,
    ...props
}) => {
    return (
        <StyledLink
            className="styled-button"
            $backgroundColor={backgroundColor || '#000'}
            $color={color || '#fff'}
            $padding={padding || '1rem 2rem'}
            $borderRadius={borderRadius || '4px'}
            $hoverColor={hoverColor || '#fff'}
            $hoverTextColor={hoverTextColor || '#000'}
            $margin={margin}
            {...props}
        >
            {text || props.children}
        </StyledLink>
    );
};

export default Button; 