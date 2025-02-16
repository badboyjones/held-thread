/**
 * Card component that displays information in a visually appealing format.
 * This component can be reused to show different types of content.
 * It now includes an image at the top, followed by a title, description, and a button.
 */

import React from 'react';
import styled from 'styled-components';
import { CardData } from '../types/CardData'; // Import the shared CardData interface

// Create a styled card container
const CardContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.white}; /* Background color */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    padding: 20px; /* Padding inside the card */
    margin: 20px; /* Margin around the card */
    text-align: center; /* Center align text */
    display: flex; /* Use flexbox */
    flex-direction: column; /* Stack children vertically */
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.05); /* Scale effect on hover */
    }
`;

// Create a styled image
const CardImage = styled.img`
    width: 100%; /* Full width */
    height: auto; /* Maintain aspect ratio */
    border-radius: 10px 10px 0 0; /* Rounded top corners */
    margin-bottom: 10px; /* Space below the image */
`;

// Create a styled title
const CardTitle = styled.h2`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.warmRed}; /* Use theme color */
    margin-bottom: 10px;
`;

// Create a styled paragraph
const CardDescription = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.black}; /* Use theme color */
`;

// Button component
const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.colors.softPink}; /* Use theme color */
    color: ${({ theme }) => theme.colors.white}; /* Use theme color */
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
    margin: 10px auto; /* Center the button */
    display: block; /* Make the button a block element */
    width: 150px; /* Set a fixed width for uniformity */
    margin-top: auto; /* Push the button to the bottom of the card */

    &:hover {
        background-color: ${({ theme }) => theme.colors.warmRed}; /* Change color on hover */
    }
`;

// Update the CardProps interface to use the shared CardData
interface CardProps extends CardData {}

const Card: React.FC<CardProps> = ({ title, description, buttonText, onButtonClick, imageUrl }) => {
    return (
        <CardContainer>
            <CardImage src={imageUrl} alt={title} /> {/* Image at the top */}
            <CardTitle>{title}</CardTitle> {/* Use the default title color */}
            <CardDescription>{description}</CardDescription>
            <StyledButton onClick={onButtonClick}>{buttonText}</StyledButton> {/* Use StyledButton here */}
        </CardContainer>
    );
};

export default Card; 