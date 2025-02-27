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
    text-align: center; /* Center align text */
    display: flex; /* Use flexbox */
    flex-direction: column; /* Stack children vertically */
    transition: transform 0.2s;
    
    // Step 1: Set max-width for mobile and center with margin
    width: 75%;
    max-width: 300px;
    margin: 5px auto;
    
    @media (min-width: 768px) {
        margin: 1rem;
        width: 100%;
        max-width: none;
    }

    // Step 2: Disable hover effect on mobile devices
    @media (hover: hover) {
        &:hover {
            transform: none;
        }
    }

    // Step 3: Adjust padding for mobile
    padding: 8px;
    
    @media (min-width: 768px) {
        padding: 0px;
    }
`;

// Create a styled image
const CardImage = styled.img`
    width: 100%; /* Full width */
    height: auto; /* Maintain aspect ratio */
    border-radius: 8px 8px 0 0; /* Rounded top corners */
    
    // Step 3: Reduce image margin on mobile
    margin-bottom: 4px;
    
    @media (min-width: 768px) {
        margin-bottom: 10px;
    }
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
    // Step 4: Smaller font size on mobile
    font-size: 1rem;
    color: ${({ $color }) => $color};
    margin-bottom: 4px;
    
    @media (min-width: 768px) {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }
`;

// Create a styled paragraph
const CardDescription = styled.p`
    // Step 5: Smaller description text on mobile
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.black}; /* Use theme color */
    
    @media (min-width: 768px) {
        font-size: 1.25rem;
    }
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
                    width="auto"
                />
            </CardContent>
        </CardContainer>
    );
};

export default Card; 