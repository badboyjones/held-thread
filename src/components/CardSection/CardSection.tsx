/**
 * CardSection component displays a grid of service cards with consistent styling
 * and accessibility features.
 * 
 * Features:
 * - Responsive grid layout
 * - Hover effects
 * - Accessible structure
 * - Consistent card styling
 */
import React from 'react';
import Button from '../Button';
import { BUTTON_STYLES } from '../../constants/styles';
import {
    SectionTitle,
    CardGrid,
    Card,
    CardImage,
    CardTitle,
    CardDescription,
    ButtonContainer
} from './CardSection.styles';

interface CardData {
    title: string;
    description: string;
    buttonText: string;
    imageUrl: string;
    imageAlt: string;
    link: string;
    titleColor: string;
}

interface CardSectionProps {
    cards: CardData[];
    title: string;
    titleId: string;
    titleColor: string;
    titleFontSize: string;
    titleMargin: string;
}

const CardSection: React.FC<CardSectionProps> = ({
    cards,
    title,
    titleId,
    titleColor,
    titleFontSize,
    titleMargin
}) => {
    return (
        <>
            {/* Step 1: Render section title */}
            <SectionTitle 
                id={titleId}
                color={titleColor}
                fontSize={titleFontSize}
                margin={titleMargin}
            >
                {title}
            </SectionTitle>

            {/* Step 2: Display card grid */}
            <CardGrid>
                {cards.map((card, index) => (
                    <Card key={index}>
                        {/* Step 3: Card image */}
                        <CardImage 
                            src={card.imageUrl} 
                            alt={card.imageAlt}
                            loading="lazy"
                        />
                        
                        {/* Step 4: Card content */}
                        <CardTitle color={card.titleColor}>
                            {card.title}
                        </CardTitle>
                        <CardDescription>
                            {card.description}
                        </CardDescription>
                        
                        {/* Step 5: Card button */}
                        <ButtonContainer>
                            <Button
                                text={card.buttonText}
                                link={card.link}
                                {...BUTTON_STYLES.primary}
                                {...BUTTON_STYLES.shared}
                            />
                        </ButtonContainer>
                    </Card>
                ))}
            </CardGrid>
        </>
    );
};

export default CardSection; 