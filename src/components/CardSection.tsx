import React from 'react';
import styled from 'styled-components';
import Card from './Card'; // Import the Card component

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
}

interface CardSectionProps {
    cards: CardData[];
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%; /* Full width of the viewport */
    padding: 40px 20px; /* Padding around the section */
    background-color: ${({ theme }) => theme.colors.white}; /* White background */
`;

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Responsive grid */
    gap: 20px; /* Space between cards */
    max-width: 1200px; /* Max width for the grid */
    width: 100%; /* Full width */
`;

const CardSection: React.FC<CardSectionProps> = ({ cards }) => {
    return (
        <Container>
            <CardGrid>
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        description={card.description}
                        buttonText={card.buttonText}
                        onButtonClick={card.onButtonClick}
                    />
                ))}
            </CardGrid>
        </Container>
    );
};

export default CardSection; 