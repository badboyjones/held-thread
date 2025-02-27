/**
 * Card component that displays information in a visually appealing format.
 * This component can be reused to show different types of content.
 * It now includes an image at the top, followed by a title, description, and a button.
 */

import React from 'react';
import styled from 'styled-components';
import { CardData } from '../types/CardData'; // Import the shared CardData interface
import Button from './Button'; // Import the Button component

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

// Add the missing CardContent component
const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
`;

// Create a styled title
const CardTitle = styled.h2<{ $color: string }>`
    font-size: 1.5rem;
    color: ${({ $color }) => $color};
    margin-bottom: 10px;
`;

// Create a styled paragraph
const CardDescription = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.black}; /* Use theme color */
`;

// Update the CardProps interface to include titleColor and link
interface CardProps extends CardData {
    titleColor: string; // Make titleColor required
    link: string; // Make link required
}

const Card: React.FC<CardProps> = ({
    title,
    description,
    buttonText,
    imageUrl,
    imageAlt,
    titleColor,
    link
}) => {
    return (
        <CardContainer>
            <CardImage src={imageUrl} alt={imageAlt} />
            <CardContent>
                <CardTitle $color={titleColor}>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <Button 
                    text={buttonText}
                    link={link}
                    backgroundColor="#87b5ca"
                    color="white"
                    padding="10px 20px"
                    borderRadius="30px"
                    hoverColor="#9dbfd1"
                    hoverTextColor="white"
                />
            </CardContent>
        </CardContainer>
    );
};

export default Card; 