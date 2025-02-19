import React from 'react';
import styled from 'styled-components';
import Card from './Card'; // Import the Card component
import CardGrid from './CardGrid'; // Import the CardGrid component
import { CardData } from '../types/CardData'; // Import the shared CardData interface

/**
 * CardSection component that displays a section of cards with a gradient background.
 * This component is used to group related cards together.
 */

interface CardSectionProps {
    cards: CardData[];
    backgroundColor?: string;
}

const ParentContainer = styled.div`
    width: 100%; /* Ensure the parent spans the full width */
`;

// Create a styled section with a gradient background
const SectionContainer = styled.section<{ backgroundColor?: string }>`
    width: 100%; /* Ensure it spans the full width */
    height: auto; /* Allow height to adjust based on content */
    background: ${({ backgroundColor, theme }) => backgroundColor || `linear-gradient(
        to right,
        ${theme.colors.warmRed},
        ${theme.colors.peach},
        ${theme.colors.warmYellow},
        ${theme.colors.sage},
        ${theme.colors.sky},
        ${theme.colors.lavender},
        ${theme.colors.softPink}
    )`}; /* Use backgroundColor prop or default to gradient */
    /* Retain original padding and styling */
`;

// Main CardSection component
const CardSection: React.FC<CardSectionProps> = ({ cards, backgroundColor }) => {
    return (
        <ParentContainer>
            <SectionContainer backgroundColor={backgroundColor}>
                <CardGrid cards={cards} />
            </SectionContainer>
        </ParentContainer>
    );
};

export default CardSection; 