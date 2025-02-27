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
    Content,
    TextContent,
    Title,
    Description,
    ImageContainer,
    Image
} from './WelcomeSection.styles';
import Button from '../Button';
import { BUTTON_STYLES } from '../../constants/styles';

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
            <Content>
                {/* Step 1: Display the welcome text */}
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

                {/* Step 2: Display the image */}
                <ImageContainer>
                    <Image 
                        src={image} 
                        alt="Heartspun handwork illustration"
                        loading="lazy"
                    />
                </ImageContainer>
            </Content>
        </Section>
    );
};

export default WelcomeSection; 