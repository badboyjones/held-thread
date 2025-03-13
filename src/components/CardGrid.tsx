/**
 * CardGrid component renders a grid of cards based on the provided card data.
 * It allows for a dynamic display of various offerings.
 */

import React from 'react';
import styled from 'styled-components';
import { CardData } from '../types/CardData'; // Import the shared CardData interface
import Card from './Card'; // Ensure this import is correct

interface CardGridProps {
    cards: CardData[];
}

const CardGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    width: 100%;
    padding: 10px;
    
    // Step 1: Center align grid items
    justify-items: center;
    
    @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        padding: 20px;
    }
    
    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

// Main CardGrid component
const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
    return (
        <CardGridContainer>
            {cards.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </CardGridContainer>
    );
};

export default CardGrid; 