import React from 'react';
import styled from 'styled-components';

/**
 * WelcomeSection component displays a welcoming message
 * and can include additional content like a grid.
 */

// Styled component for the WelcomeSection
const SectionContainer = styled.div<{ backgroundColor: string }>`
    background-color: ${props => props.backgroundColor};
    width: 100%; /* Ensure it takes full width */
    // padding: 20px; /* You can adjust this as needed */
    text-align: center;
`;

// Props for the WelcomeSection component
interface WelcomeSectionProps {
    title: string;
    subtitle: string;
    backgroundColor: string;
    titleColor?: string; // Optional prop for title color
    subtitleColor?: string; // Optional prop for subtitle color
    children?: React.ReactNode; // Allow children to be passed
}

// Main WelcomeSection component
const WelcomeSection: React.FC<WelcomeSectionProps> = ({
    title,
    subtitle,
    backgroundColor,
    titleColor = '#000', // Default color
    subtitleColor = '#000', // Default color
    children,
}) => {
    return (
        <SectionContainer backgroundColor={backgroundColor}>
            <h1 style={{ color: titleColor }}>{title}</h1>
            <h2 style={{ color: subtitleColor }}>{subtitle}</h2>
            {children} {/* Render children here */}
        </SectionContainer>
    );
};

export default WelcomeSection; 