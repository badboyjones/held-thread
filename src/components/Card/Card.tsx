/**
 * Card component displays content in a consistent, styled container
 * with a title, description, and call-to-action button.
 */
import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

interface CardProps {
    title: string;
    description: string;
    buttonText: string;
    link: string;
    imageUrl?: string;
    imageAlt?: string;
    titleColor?: string;
}

const CardContainer = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    border-radius: 15px;
    overflow: hidden;
    width: 100%;
    max-width: 350px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardContent = styled.div`
    padding: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

const CardTitle = styled.h3<{ $color?: string }>`
    font-size: 1.5rem;
    margin: 0;
    color: ${props => props.$color || '#333'};
`;

const CardDescription = styled.p`
    font-size: 1rem;
    color: #666;
    margin: 0;
    line-height: 1.5;
`;

const CardImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

/**
 * Default button styling for card actions
 */
const CARD_BUTTON_STYLES = {
    $backgroundColor: "#87b5ca",
    $color: "white",
    $padding: "10px 20px",
    $borderRadius: "30px",
    $margin: "10px",
    $hoverColor: "#9dbfd1",
    $hoverTextColor: "white"
} as const;

/**
 * Card component displays information about a service or offering
 * with consistent styling and interactive elements
 */
const Card: React.FC<CardProps> = ({ 
    title, 
    description, 
    buttonText, 
    link, 
    imageUrl,
    imageAlt,
    titleColor,
}) => {
    return (
        <CardContainer role="article">
            {imageUrl && (
                <CardImage 
                    src={imageUrl} 
                    alt={imageAlt || `Image for ${title}`}
                />
            )}
            <CardContent>
                <CardTitle $color={titleColor}>
                    {title}
                </CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
                <Button
                    asButton={true}
                    onClick={() => {
                        if (link.startsWith('/')) {
                            // Use history for internal links
                            window.history.pushState({}, '', link);
                        } else {
                            // Use location.href for external links
                            window.location.href = link;
                        }
                    }}
                    {...CARD_BUTTON_STYLES}
                >
                    {buttonText}
                </Button>
            </CardContent>
        </CardContainer>
    );
};

export default Card; 