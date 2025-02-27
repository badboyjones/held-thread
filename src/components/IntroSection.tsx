import React from 'react';
import styled from 'styled-components';
import Button from './Button'; // Ensure this is the new Button component

/**
 * IntroSection component displays an introductory section
 * with an image and text, allowing for customizable layout.
 * The image can be positioned on the left or right based on the 'imagePosition' prop.
 */

// Define props for the IntroSection
interface IntroSectionProps {
    image: string;
    backgroundColor: string;
    title: string;
    description: React.ReactNode;
    imagePosition?: 'left' | 'right'; // New prop for image position
    children?: React.ReactNode; // Allow children to be passed
    style?: React.CSSProperties; // Accept style prop
    imageWidth?: string; // New prop for image section width
    textWidth?: string; // New prop for text section width
    maxHeight?: string; // New prop for maximum height of the image
    maxWidth?: string; // New prop for maximum width of the image
    mobileMaxHeight?: string; // New prop for mobile maximum height of the image
    mobileMaxWidth?: string; // New prop for mobile maximum width of the image
    width?: string; // Add width prop
    height?: string; // Add height prop
    titleId?: string; // Add titleId prop
    imageAlt?: string; // Add imageAlt prop for accessibility
    loading?: 'lazy' | 'eager'; // Add loading prop with correct types
}

// Create a styled container for the IntroSection
const SectionContainer = styled.div<{ backgroundColor: string; imagePosition: 'left' | 'right' }>`
    display: flex;
    flex-direction: ${({ imagePosition }) => (imagePosition === 'left' ? 'row' : 'row-reverse')}; // Adjust layout based on image position
    background-color: ${({ backgroundColor }) => backgroundColor};
    align-items: center;
    width: 100%; /* Ensure it takes full width */
    height: 100vh; /* Set height to fill the viewport */
    text-align: center;

    @media (max-width: 768px) {
        flex-direction: column; /* Stack elements vertically on mobile */
        height: auto; /* Allow height to adjust on mobile */
    }
`;

// Styled component for the text section
const TextSection = styled.div<{ width: string }>`
    flex: 0 0 ${({ width }) => width}; /* Use the width prop */
    display: flex;
    flex-direction: column; /* Stack text vertically */
    justify-content: center; /* Center text vertically */
`;

// Styled component for the text container
const TextContainer = styled.div`
    margin: 0 auto; /* Keep horizontal centering */
    text-align: left;
`;

// Styled component for the image section
const ImageSection = styled.div`
    flex: 0 0 50%; /* Set the width to 50% of the section */
    display: flex;
    justify-content: center;
    align-items: center; /* Center the image */
    height: 100%; /* Ensure it takes full height */
    overflow: hidden; /* Prevent overflow */
`;

// Styled component for the image
const StyledImage = styled.img<{ maxHeight?: string; maxWidth?: string; mobileMaxHeight?: string; mobileMaxWidth?: string }>`
    max-width: ${({ maxWidth }) => maxWidth || '100%'}; // Ensure the image does not exceed its container's width
    max-height: ${({ maxHeight }) => maxHeight || '100%'}; // Ensure the image does not exceed its container's height
    height: auto; // Maintain aspect ratio
    width: auto; // Allow width to adjust while maintaining aspect ratio
    object-fit: cover; // Cover the area while maintaining aspect ratio

    @media (max-width: 768px) {
        max-width: ${({ mobileMaxWidth }) => mobileMaxWidth || '100%'}; // Set max-width for mobile
        max-height: ${({ mobileMaxHeight }) => mobileMaxHeight || '100%'}; // Set max-height for mobile
    }
`;

// Main IntroSection component
const IntroSection: React.FC<IntroSectionProps> = ({
    image,
    backgroundColor,
    title,
    description,
    imagePosition = 'left',
    children,
    style,
    imageWidth = '50%', // Default width for image section
    textWidth = '50%', // Default width for text section
    maxHeight, // Accept maxHeight prop
    maxWidth, // Accept maxWidth prop
    mobileMaxHeight, // Accept mobileMaxHeight prop
    mobileMaxWidth, // Accept mobileMaxWidth prop
    width, // Accept width prop
    height, // Accept height prop
    titleId,
    imageAlt = '', // Default to empty string if not provided
    loading,
}) => {
    return (
        <SectionContainer backgroundColor={backgroundColor} imagePosition={imagePosition}>
            <ImageSection>
                <StyledImage 
                    src={image} 
                    alt={imageAlt}
                    loading={loading}
                    style={style} 
                    maxHeight={maxHeight} 
                    maxWidth={maxWidth} 
                    mobileMaxHeight={mobileMaxHeight} 
                    mobileMaxWidth={mobileMaxWidth} 
                />
            </ImageSection>
            <TextSection width={textWidth}>
                <TextContainer>
                    <h2 id={titleId}>{title}</h2>
                    <p>{description}</p>
                    {children} {/* Render children here */}
                </TextContainer>
            </TextSection>
        </SectionContainer>
    );
};

export default IntroSection; 