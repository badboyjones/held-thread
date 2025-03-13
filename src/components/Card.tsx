/**
 * Card component that displays information in a visually appealing format.
 * This component is designed to be accessible, responsive, and reusable.
 * Features:
 * - Semantic HTML structure
 * - ARIA attributes for better screen reader support
 * - Responsive design for all screen sizes
 */

import React from 'react';
import styled from 'styled-components';
import { CardData } from '../types/CardData'; // Import the shared CardData interface
import Button from './Button'; // Import the Button component

// Update CardContainer with smaller dimensions
const CardContainer = styled.article`
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    display: flex;
    flex-direction: column;
    transition: transform 0.2s;
    
    // Mobile-first approach
    width: 100%;
    max-width: 250px; // Reduced from 300px
    margin: 0.5rem auto;
    padding: 0.5rem;
    
    // Tablet breakpoint
    @media (min-width: 768px) {
        margin: 1rem;
        padding: 0.75rem;
        max-width: 280px; // Reduced from 350px
    }
    
    // Desktop breakpoint
    @media (min-width: 1024px) {
        max-width: 300px; // Reduced from 400px
        padding: 1rem;
    }
    
    // Add hover effects only for devices that support hover
    @media (hover: hover) {
        &:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        }
    }
`;

// Update CardImage with smaller heights
const CardImage = styled.img`
    width: 100%;
    height: auto; // Reduced from 200px
    object-fit: cover;
    border-radius: 8px 8px 0 0;
    margin-bottom: 0.5rem;
    
    @media (min-width: 768px) {
        height: 100%; // Reduced from 250px
        margin-bottom: 0.75rem;
    }
    
    @media (min-width: 1024px) {
        height: 100%; // Reduced from 300px
        margin-bottom: 1rem;
    }
`;

// Update PlaceholderImage to match CardImage dimensions
const PlaceholderImage = styled.div`
    width: 100%;
    height: 150px; // Match CardImage height
    background-color: ${({ theme }) => theme.colors.sage};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px 8px 0 0;
    color: ${({ theme }) => theme.colors.plum};
    font-size: 1rem;
    
    @media (min-width: 768px) {
        height: 180px; // Match CardImage height
    }
    
    @media (min-width: 1024px) {
        height: 200px; // Match CardImage height
    }
`;

// Update CardContent with better spacing
const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 0.5rem;
    
    @media (min-width: 768px) {
        gap: 0.75rem;
    }
    
    @media (min-width: 1024px) {
        gap: 1rem;
    }
`;

// Adjust typography sizes
const CardTitle = styled.h2<{ $color: string }>`
    font-size: 0.9rem; // Reduced from 1rem
    font-weight: 700; // Make title bolder
    letter-spacing: 0.5px; // Slight letter spacing for emphasis
    color: ${({ $color }) => $color};
    margin-bottom: 4px;
    
    @media (min-width: 768px) {
        font-size: 1.2rem; // Reduced from 1.5rem
        margin-bottom: 8px;
    }
`;

// Adjust typography sizes
const CardDescription = styled.p`
    font-size: 0.7rem; // Reduced from 0.75rem
    font-weight: 400; // Regular weight for description
    line-height: 1.5; // Better line height for readability
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 1rem; // Add space before button
    
    @media (min-width: 768px) {
        font-size: 0.9rem; // Reduced from 1.25rem
    }
`;

// Add styles for button container to create spacing
const ButtonContainer = styled.div`
    margin-top: auto; // Push button to bottom of card
    padding: 0.5rem;
`;

// Create a styled version of the Button component with enhanced styling
const StyledButton = styled(Button)`
    border: 1px solid rgba(135, 181, 202, 0.2);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

// Add a styled link wrapper
const CardLink = styled.a`
    text-decoration: none;
    color: inherit;
    display: contents; // This preserves the card's layout while making it clickable
    
    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.plum};
        border-radius: 10px;
    }
`;

// Update the CardProps interface to include titleColor and link
interface CardProps extends CardData {
    titleColor: string; // Make titleColor required
    link: string; // Make link required
}

// Add React.memo to prevent unnecessary re-renders
const Card: React.FC<CardProps> = React.memo(({
    title,
    description,
    buttonText,
    imageUrl,
    imageAlt,
    titleColor,
    link
}) => {
    const [imageError, setImageError] = React.useState(false);
    const titleId = React.useMemo(() =>
        `card-title-${title.toLowerCase().replace(/\s+/g, '-')}`,
        [title]
    );

    return (
        <CardLink href={link} aria-labelledby={titleId}>
            <CardContainer role="article">
                {!imageError ? (
                    <CardImage
                        src={imageUrl}
                        alt={imageAlt || `Illustration for ${title}`}
                        role="img"
                        onError={() => setImageError(true)}
                        loading="lazy"
                        decoding="async"
                    />
                ) : (
                    <PlaceholderImage>
                        <span>{title}</span>
                    </PlaceholderImage>
                )}
                <CardContent>
                    <CardTitle
                        $color={titleColor}
                        id={titleId}
                    >{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                    <ButtonContainer>
                        <StyledButton
                            text={buttonText}
                            link={link}
                            backgroundColor="#87b5ca"
                            color="white"
                            padding="10px 20px"
                            borderRadius="30px"
                            hoverColor="#9dbfd1"
                            hoverTextColor="white"
                            width="auto"
                            aria-label={`${buttonText} for ${title}`}
                        />
                    </ButtonContainer>
                </CardContent>
            </CardContainer>
        </CardLink>
    );
});

// Add display name for debugging
Card.displayName = 'Card';

export default Card; 