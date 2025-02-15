/**
 * HomePage component displays a welcoming introduction
 * and an image with craft materials, creating a warm
 * and inviting atmosphere for visitors.
 */

import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card'; // Import the Card component
import IntroSection from '../components/IntroSection'; // Import the IntroSection component
import WelcomeSection from '../components/WelcomeSection'; // Import the WelcomeSection component
import CardSection from '../components/CardSection'; // Import the CardSection component

// Create a styled container for the homepage
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; /* Align items to the start */
    width: 100%; /* Full width of the viewport */
    min-height: 100vh; /* Ensure it takes at least full height */
`;

// Create a styled section for the title and subtitle
const HeroSection = styled.section`
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

// Create a styled grid for the cards
const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Responsive grid */
    gap: 20px; /* Space between cards */
`;

// Create a styled heading
const Title = styled.h1`
    font-size: 3rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.warmRed}; /* Use theme color */
`;

// Create a styled paragraph
const Subtitle = styled.p`
    font-size: 1.5rem;
    margin-bottom: 2rem;
`;

// Create a styled button
const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.softPink}; /* Use theme color */
    color: ${({ theme }) => theme.colors.white}; /* Use theme color */
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1.2rem;
    cursor: pointer;
    margin: 0 10px;

    &:hover {
        background-color: ${({ theme }) => theme.colors.warmRed}; /* Change color on hover */
    }
`;

const HomePage: React.FC = () => {
    const cardData = [
        {
            title: "Teaching Classes",
            description: "I am the felting teacher in residence at Zuckercreme in Portland, where I teach 2-4 workshops per month.",
            buttonText: "Learn More",
            onButtonClick: () => alert('Learn More clicked!'),
        },
        {
            title: "Felt Club",
            description: "Felt Club is my monthly crafty gathering for experienced felters. Sign up for the next club on the calendar page.",
            buttonText: "Join Club",
            onButtonClick: () => alert('Join Club clicked!'),
        },
    ];

    return (
        <Container>
            <WelcomeSection 
                title="Heartfelt Homespun by Teacher Morrissey"
                subtitle="Waldorf Inspired Handwork Classes"
                backgroundImage="https://shorturl.at/TUAk9" // Set your background image here
            />
            <IntroSection 
                image="https://shorturl.at/NtGsF" // Set your image here
                backgroundColor="#E6EDD5" // Set your background color here
                title="Let creativity, tradition, and craft be your guide."
                description="Join us for hands-on experiences through the art of handwork."
            />
            <CardSection cards={cardData} />
        </Container>
    );
};

export default HomePage;