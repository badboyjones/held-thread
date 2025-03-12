import React from 'react';
import styled from 'styled-components';
import Grid from '../components/Grid'; // Import the Grid component
import GridItem from '../components/GridItem'; // Import the GridItem component

const SectionContainer = styled.div<{ backgroundColor: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh; // Full viewport height for hero effect
    min-height: 100vh; // Ensure it fills the viewport even with content
    /* width: 100%; */
    max-width: 60%; // Ensure it fills the viewport width
    background-color: ${({ backgroundColor }) => backgroundColor}; // Use the backgroundColor prop
    text-align: center; // Center text
    margin-top: 60px; // Add margin to create space from the navbar

    @media (max-width: 768px) {
        /* padding: 10px; // Reduce padding on smaller screens */
        margin-top: 30px; // Adjust margin for smaller screens
    }
`;

const Title = styled.h1`
    font-size: 3rem; // Larger font size for the title
    color: #333333; // Title color
    margin: 0; // Remove default margin

    @media (max-width: 768px) {
        font-size: 2.5rem; // Adjust font size for smaller screens
    }
`;

const Subtitle = styled.h2`
    font-size: 1.5rem; // Font size for the subtitle
    color: #666666; // Subtitle color
    /* margin: 10px 0; // Margin for spacing */

    @media (max-width: 768px) {
        font-size: 1.2rem; // Adjust font size for smaller screens
    }
`;

const ImageRow = styled.div`
    display: flex;
    justify-content: space-between; // Even space on either side
    width: 100%; // Full width for alignment
    max-width: 800px; // Limit the width for better appearance
    flex-wrap: wrap; // Allow images to wrap on smaller screens

    @media (max-width: 768px) {
        justify-content: center; // Center images on smaller screens
    }
`;

const KnotImage = styled.img`
    width: 100px; // Set a larger width for images on mobile
    height: auto; // Maintain aspect ratio

    @media (min-width: 769px) {
        width: 120px; // Set a larger width for images on larger screens
    }
`;

/**
 * WelcomeSection component that displays a welcoming message
 * and images, creating an inviting atmosphere for visitors.
 */

interface WelcomeSectionProps {
    backgroundColor: string;
    titleColor: string;
    subtitleColor: string;
    title: string;
    subtitle: string;
    knotImages: string[];
    children?: React.ReactNode;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({
    backgroundColor,
    titleColor,
    subtitleColor,
    title,
    subtitle,
    knotImages,
    children
}) => {
    return (
        <SectionContainer backgroundColor={backgroundColor}>
            <Title style={{ color: titleColor }}>{title}</Title>
            <Subtitle style={{ color: subtitleColor }}>{subtitle}</Subtitle>
            {children} {/* This will render any buttons passed as children */}
            <ImageRow>
                {knotImages.map((image, index) => (
                    <KnotImage key={index} src={image} alt={`Knot ${index + 1}`} />
                ))}
            </ImageRow>
            <Grid columns={2} rows={2}>
                {knotImages.map((image, index) => (
                    <GridItem key={index}>
                        <img src={image} alt={`Knot ${index + 1}`} />
                    </GridItem>
                ))}
            </Grid>
        </SectionContainer>
    );
};

export default WelcomeSection; 