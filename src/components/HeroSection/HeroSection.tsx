/**
 * HeroSection component serves as the main banner of the website.
 * Displays the main heading, subtitle, decorative knot images, and call-to-action.
 * 
 * Features:
 * - Responsive layout
 * - Animated knot images
 * - Accessible structure
 * - Fluid typography
 */
import React from 'react';
// Import the styled components from the styles file
import { Section, Title, Subtitle, ButtonContainer } from './HeroSection.styles';

interface HeroSectionProps {
    backgroundColor: string;
    titleColor: string;
    subtitleColor: string;
    title: string;
    subtitle: string;
    knotImages: string[];
    titleId: string;
    children: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    backgroundColor,
    titleColor,
    subtitleColor,
    title,
    subtitle,
    titleId,
    children
}) => {
    return (
        <Section $backgroundColor={backgroundColor}>
            {/* Step 2: Display main heading and subtitle */}
            <Title 
                id={titleId} 
                $color={titleColor}
            >
                {title}
            </Title>
            <Subtitle $color={subtitleColor}>
                {subtitle}
            </Subtitle>

            {/* Step 3: Display call-to-action buttons */}
            <ButtonContainer>
                {children}
            </ButtonContainer>
        </Section>
    );
};

export default HeroSection; 