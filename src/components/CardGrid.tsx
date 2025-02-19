/**
 * CardGrid component renders a grid of cards based on the provided card data.
 * It allows for a dynamic display of various offerings.
 */

import React from 'react';
import Card from './Card'; // Ensure this import is correct
import { CardData } from '../types/CardData'; // Import the shared CardData interface

interface CardGridProps {
    cards: CardData[];
}

// Main CardGrid component
const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
    // Render the grid of cards
    return (
        // Set the width to 75% and center the grid
        <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
            gap: '30px', 
            width: '75%',// Limit the width to 75%
            margin: '0 auto' // Center the grid
        }}>
            {cards.map((card, index) => (
                <Card key={index} {...card} /> // Ensure Card is being used here
            ))}
        </div>
    );
};

export default CardGrid; 