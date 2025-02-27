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
    width: 100%;
    position: relative;
    overflow: hidden;

`;

// Create a styled section with a gradient background
const SectionContainer = styled.section<{ backgroundColor?: string }>`
    width: 100vw;
    /* margin-left: 50%;
    transform: translateX(-50%); */
    min-height: 100%;
    padding: 4rem 0;
    position: relative;
    z-index: 1;
    
    background: ${({ backgroundColor, theme }) => backgroundColor || `linear-gradient(
        to right,
        ${theme.colors.warmRed},
        ${theme.colors.peach},
        ${theme.colors.warmYellow},
        ${theme.colors.sage},
        ${theme.colors.sky},
        ${theme.colors.lavender},
        ${theme.colors.softPink}
    )`};
`;

// Create a styled container for the title
const Title = styled.h2<{ color: string; fontSize: string; margin: string }>`
    color: ${({ color }) => color};
    font-size: calc(${({ fontSize }) => fontSize} * 0.8);
    margin: ${({ margin }) => margin};
    text-align: center;
    
    @media (min-width: 768px) {
        font-size: ${({ fontSize }) => fontSize};
    }
`;

// Create a styled container for the card section
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    

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