/**
 * Card component that displays information in a visually appealing format.
 * This component can be reused to show different types of content.
 */

import React from 'react';
import styled from 'styled-components';

// Create a styled card container
const CardContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.white}; /* Background color */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    padding: 20px;
    margin: 20px;
    text-align: left;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.05); /* Scale effect on hover */
    }
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

// Create a styled button
const CardButton = styled.button`
    background-color: ${({ theme }) => theme.colors.softPink}; /* Use theme color */
    color: ${({ theme }) => theme.colors.white}; /* Use theme color */
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
        background-color: ${({ theme }) => theme.colors.warmRed}; /* Change color on hover */
    }
`;

interface CardProps {
    title: string;
    description: string;
    buttonText: string;
    onButtonClick: () => void; // Function to handle button click
}

const Card: React.FC<CardProps> = ({ title, description, buttonText, onButtonClick }) => {
    return (
        <CardContainer>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <CardButton onClick={onButtonClick}>{buttonText}</CardButton>
        </CardContainer>
    );
};

export default Card; 