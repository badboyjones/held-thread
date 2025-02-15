import React from 'react';
import styled from 'styled-components';
import Card from './Card'; // Import the Card component
import WavyBorder from './WavyBorder'; // Import the WavyBorder component

/**
 * CardSection component displays a collection of cards
 * with whitespace on either side, creating a visually
 * appealing layout.
 */
interface CardData {
    title: string;
    description: string;
    buttonText: string;
    onButtonClick: () => void;
    imageUrl: string;
}

interface CardSectionProps {
    cards: CardData[];
    backgroundColor?: string; // New prop for background color
}

const Container = styled.section<{ backgroundColor?: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%; /* Full width of the viewport */
    padding: 30px 30px; /* Padding around the section */
    background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.colors.white}; /* Use prop or default to white */
`;

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Responsive grid */
    gap: 20px; /* Set a consistent gap between cards */
    max-width: 1200px; /* Max width for the grid */
    width: 100%; /* Full width */
`;

const CardSection: React.FC<CardSectionProps> = ({ cards, backgroundColor }) => {
    return (
        <>
            <WavyBorder color={backgroundColor || '#FFFFFF'} /> {/* Add WavyBorder above */}
            <Container backgroundColor={backgroundColor}>
                <CardGrid>
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            description={card.description}
                            buttonText={card.buttonText}
                            onButtonClick={card.onButtonClick}
                            imageUrl={card.imageUrl}
                        />
                    ))}
                </CardGrid>
            </Container>
            <WavyBorder color={backgroundColor || '#FFFFFF'} /> {/* Add WavyBorder below */}
        </>
    );
};

export default CardSection; 