import React from 'react';
import styled from 'styled-components';

// Create a styled button
const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.colors.softPink}; /* Use theme color */
    color: ${({ theme }) => theme.colors.white}; /* Use theme color */
    border: none;
    border-radius: 50px; /* Keep this for a fully rounded button */
    padding: 10px 15px; /* Padding for better button appearance */
    cursor: pointer;
    margin: 10px auto; /* Center the button */
    display: block; /* Make the button a block element */
    width: 150px; /* Set a fixed width for uniformity */

    &:hover {
        background-color: ${({ theme }) => theme.colors.warmRed}; /* Change color on hover */
    }
`;

// Define the Button component
interface ButtonProps {
    text: string; // Text to display on the button
    onClick: () => void; // Function to handle button click
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button; 