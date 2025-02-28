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
    to: string;
    children: React.ReactNode;
    backgroundColor?: string;
    color?: string;
    padding?: string;
    borderRadius?: string;
    hoverColor?: string;
    hoverTextColor?: string;
    margin?: string;
    width?: string;
    type?: 'button' | 'submit' | 'reset';
}

// Main Button component
const Button: React.FC<ButtonProps> = ({ ...props }) => {
    return (
        <StyledLink 
            className="styled-button"
            {...props}
        >
            {props.children}
        </StyledLink>
    );
};

export default Button; 