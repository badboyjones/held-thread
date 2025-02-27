import React from 'react';
import styled from 'styled-components';
import CardGrid from './CardGrid'; // Import the CardGrid component
import { CardData } from '../types/CardData'; // Import the shared CardData interface

/**
 * CardSection component displays a grid of cards with an optional title.
 * It accepts card data and displays each card in a structured layout.
 */

interface CardSectionProps {
    cards: CardData[];
    backgroundColor?: string;
    title?: string;
    titleColor?: string;
    titleFontSize?: string;
    titleMargin?: string;
    titleId?: string;
}

const ParentContainer = styled.div`
    width: 100%; /* Ensure the parent spans the full width */
    height: 100%; /* Allow the parent to take full height */
`;

// Create a styled section with a gradient background
const SectionContainer = styled.section<{ backgroundColor?: string }>`
    width: 100%; /* Ensure it spans the full width */
    height: 100%; /* Set height to 100% to cover the entire section */
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
    /* Retain original styling */
`;

// Create a styled container for the title
const Title = styled.h2<{ color: string; fontSize: string; margin: string }>`
    color: ${({ color }) => color};
    font-size: ${({ fontSize }) => fontSize};
    margin: ${({ margin }) => margin};
`;

// Create a styled container for the card section
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// Main CardSection component
const CardSection: React.FC<CardSectionProps> = ({ cards, backgroundColor, title, titleColor = "#000", titleFontSize = "24px", titleMargin = "20px", titleId }) => {
    return (
        <ParentContainer>
            <SectionContainer backgroundColor={backgroundColor}>
                <Container>
                    {title && (
                        // Render the title if provided
                        <Title color={titleColor} fontSize={titleFontSize} margin={titleMargin} id={titleId}>
                            {title}
                        </Title>
                    )}
                    <CardGrid cards={cards} />
                </Container>
            </SectionContainer>
        </ParentContainer>
    );
};

export default CardSection; 