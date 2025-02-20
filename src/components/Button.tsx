/**
 * Button component renders a styled button with customizable styles.
 * It can be reused throughout the application for consistency.
 */

import React from 'react';
import styled from 'styled-components';

// Styled component for the button
const StyledButton = styled.button<{
    backgroundColor: string;
    color: string;
    padding: string;
    borderRadius: string;
    hoverColor: string;
    hoverTextColor: string;
    margin?: string; // Add margin as an optional prop
}>`
    background-color: ${({ backgroundColor }) => backgroundColor}; /* Background color */
    color: ${({ color }) => color}; /* Text color */
    border: none; /* No border */
    padding: ${({ padding }) => padding}; /* Padding for the button */
    cursor: pointer; /* Pointer cursor on hover */
    border-radius: ${({ borderRadius }) => borderRadius}; /* Rounded corners */
    transition: background-color 0.3s, color 0.3s; /* Smooth transition for hover effect */

    &:hover {
        background-color: ${({ hoverColor }) => hoverColor}; /* Darker shade on hover */
        color: ${({ hoverTextColor }) => hoverTextColor}; /* Use hover text color */
    }
`;

// Styled component for the anchor link
const StyledLink = styled.a<{
    backgroundColor: string;
    color: string;
    padding: string;
    borderRadius: string;
    hoverColor: string;
    hoverTextColor: string;
    margin?: string; // Add margin as an optional prop
}>`
    display: inline-block; /* Make it behave like a button */
    text-decoration: none; /* Remove underline */
    background-color: ${({ backgroundColor }) => backgroundColor}; /* Background color */
    color: ${({ color }) => color}; /* Text color */
    padding: ${({ padding }) => padding}; /* Padding for the link */
    border-radius: ${({ borderRadius }) => borderRadius}; /* Rounded corners */
    cursor: pointer; /* Pointer cursor on hover */
    transition: background-color 0.3s, color 0.3s; /* Smooth transition for hover effect */
    margin: ${({ margin }) => margin}; /* Apply margin */

    &:hover {
        background-color: ${({ hoverColor }) => hoverColor}; /* Darker shade on hover */
        color: ${({ hoverTextColor }) => hoverTextColor}; /* Use hover text color */
    }
`;

// Props for the Button component
interface ButtonProps {
    text: string; // Button text
    onClick?: () => void; // Click handler (optional)
    link?: string; // Link to navigate to (optional)
    backgroundColor?: string; // Background color
    color?: string; // Text color
    padding?: string; // Padding
    borderRadius?: string; // Border radius
    hoverColor?: string; // Hover color
    hoverTextColor?: string; // Hover text color
    margin?: string; // Margin
}

// Main Button component
const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    link,
    backgroundColor = '#f79c9c', // Default background color
    color = 'white', // Default text color
    padding = '15px 25px', // Default padding
    borderRadius = '50px', // Default border radius
    hoverColor = '#d68a8a', // Default hover color
    hoverTextColor = 'white', // Default hover text color
    margin = '10px', // Default margin
}) => {
    if (link) {
        return (
            <StyledLink
                href={link}
                backgroundColor={backgroundColor}
                color={color}
                padding={padding}
                borderRadius={borderRadius}
                hoverColor={hoverColor}
                hoverTextColor={hoverTextColor}
                margin={margin}
            >
                {text}
            </StyledLink>
        );
    }

    return (
        <StyledButton
            onClick={onClick}
            backgroundColor={backgroundColor}
            color={color}
            padding={padding}
            borderRadius={borderRadius}
            hoverColor={hoverColor}
            hoverTextColor={hoverTextColor}
            margin={margin}
        >
            {text}
        </StyledButton>
    );
};

export default Button; 