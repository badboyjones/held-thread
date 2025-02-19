import React from 'react';
import styled from 'styled-components';

/**
 * Button component renders a styled button.
 * It accepts props for text and an onClick handler.
 */

const StyledButton = styled.button`
    background-color: #FFD6D6; /* Soft coral */
    color: #333333; /* Text color */
    border: none; /* No border */
    padding: 10px 20px; /* Padding for the button */
    cursor: pointer; /* Pointer cursor on hover */
    border-radius: 5px; /* Rounded corners */
    font-size: 16px; /* Font size */
    transition: background-color 0.3s; /* Smooth transition for hover effect */

    &:hover {
        background-color: #FFE6D5; /* Change color on hover */
    }
`;

// Props for the Button component
interface ButtonProps {
    text: string;
    onClick: () => void; // Function to handle click
}

// Main Button component
const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button; 