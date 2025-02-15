/**
 * HeroSection component displays a welcoming hero section
 * with a title and subtitle for the homepage.
 * 
 * @param {string} title - The main title to display.
 * @param {string} subtitle - The subtitle to provide additional context.
 */
import React from 'react';
import styled from 'styled-components';

// Create a styled section for the title and subtitle
const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh; /* Full height of the viewport */
    width: 100%; /* Full width of the viewport */
    background-image: url(https://shorturl.at/TUAk9); /* Ensure this path is correct */
    background-size: cover;
    color: ${({ theme }) => theme.colors.white}; /* Use theme color */
    text-align: center;
`;

// Remove the unused StyledHeroSection
// const StyledHeroSection = styled.div`
//     // Add your styles here
// `;

// HeroSection functional component
const HeroSection: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
    return (
        <HeroContainer>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </HeroContainer>
    );
};

export default HeroSection; 