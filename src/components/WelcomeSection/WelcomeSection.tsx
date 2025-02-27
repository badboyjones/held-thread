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
                    i'm morrissey and i am the teacher and artist behind held thread.
                    <br /><br />
                    held thread is built on the belief that traditional handwork nurtures both skill and soul.
                    <br /><br />
                    through slow, mindful making, we develop patience, perseverance, and connection to craft and community.
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