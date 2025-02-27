/**
 * WelcomeSection component displays the personal introduction and mission statement
 * with an image and descriptive text.
 * 
 * Features:
 * - Responsive layout with image and text side by side
 * - Call-to-action buttons
 * - Accessible structure
 */
import React from 'react';
import {
    Section,
    TextContent,
    Title,
    Description,
    ImageContainer,
    Image
} from './WelcomeSection.styles';

interface WelcomeSectionProps {
    image: string;
    backgroundColor: string;
    title: string;
    titleId: string;
    children?: React.ReactNode;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({
    image,
    backgroundColor,
    title,
    titleId,
    children
}) => {
    return (
        <Section backgroundColor={backgroundColor}>
            <TextContent>
                <Title id={titleId}>{title}</Title>
                <Description>
                    I'm Morrissey and I am the teacher and artist behind Held Thread Handwork.
                    <br /><br />
                    I built Held Thread on the belief that working with our hands nurtures both skill and soul. It is my goal to share these skills with whoever is called to them.
                    <br /><br />
                    Through slow, mindful making, we can develop patience, perseverance, and connection to one another and to our selves.
                </Description>
                {children}
            </TextContent>
            <ImageContainer>
                <Image 
                    src={image} 
                    alt="An image of Morrissey surrounded by images of flowers and clouds"
                    loading="lazy"
                />
            </ImageContainer>
        </Section>
    );
};

export default WelcomeSection; 