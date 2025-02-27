/**
 * HeroSection component displays the main banner of the homepage
 * with a title, subtitle, and call-to-action button.
 * It includes decorative knot images arranged in a border pattern.
 */

import React from 'react';
import styled from 'styled-components';
import Button from './Button';

interface HeroSectionProps {
    backgroundColor: string;
    titleColor: string;
    subtitleColor: string;
    title: string;
    subtitle: string;
    knotImages: string[];
    titleId?: string;
    children?: React.ReactNode;
}

// Container for the entire hero section
const HeroContainer = styled.section<{ backgroundColor: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 80vh;
    background-color: ${props => props.backgroundColor};
    position: relative;
`;

// Styled components for title and subtitle
const Title = styled.h1<{ color: string }>`
    color: ${props => props.color};
    font-size: 3.5rem;
    text-align: center;
    margin-bottom: 1rem;
`;

const Subtitle = styled.h2<{ color: string }>`
    color: ${props => props.color};
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 2rem;
`;

// Container for the knot images
const KnotContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    position: absolute;
    bottom: 0;
`;

const KnotImage = styled.img`
    width: 50px;
    height: 50px;
`;

const HeroSection: React.FC<HeroSectionProps> = ({
    backgroundColor,
    titleColor,
    subtitleColor,
    title,
    subtitle,
    knotImages,
    titleId,
    children
}) => {
    return (
        <HeroContainer backgroundColor={backgroundColor}>
            <Title id={titleId} color={titleColor}>{title}</Title>
            <Subtitle color={subtitleColor}>{subtitle}</Subtitle>
            {children}
            <KnotContainer>
                {knotImages.map((image, index) => (
                    <KnotImage key={index} src={image} alt={`Decorative knot ${index + 1}`} />
                ))}
            </KnotContainer>
        </HeroContainer>
    );
};

export default HeroSection; 