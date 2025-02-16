import React from 'react';
import styled from 'styled-components';
import Card from './Card'; // Import the Card component
import CardGrid from './CardGrid'; // Import the CardGrid component
import { CardData } from '../types/CardData'; // Import the shared CardData interface

/**
 * CardSection component displays a collection of cards
 * with whitespace on either side, creating a visually
 * appealing layout.
 */
interface CardSectionProps {
    cards: CardData[];
    backgroundColor?: string; // New prop for background color
}

// Styled container for the CardSection
const Container = styled.section<{ backgroundColor?: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%; /* Full width of the viewport */
    padding: 30px 30px; /* Padding around the section */
    background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.colors.white}; /* Use prop or default to white */
`;

// Main CardSection component
const CardSection: React.FC<CardSectionProps> = ({ cards, backgroundColor }) => {
    return (
        <Container backgroundColor={backgroundColor}>
            <CardGrid cards={cards} />
        </Container>
    );
};

export default CardSection; 