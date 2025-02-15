/**
 * HomePage component displays a welcoming introduction
 * and an image with craft materials, creating a warm
 * and inviting atmosphere for visitors.
 */

import React from 'react';
import styled from 'styled-components';
import IntroSection from '../components/IntroSection'; // Import the IntroSection component
import HeroSection from '../components/HeroSection'; // Import the HeroSection component
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

const HomePage: React.FC = () => {
    // Define card data here for clarity
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
        {
            title: "Crafting Resilience",
            description: "Join us to learn how crafting can build emotional resilience.",
            buttonText: "Discover More",
            onButtonClick: () => alert('Discover More clicked!'),
        },
        {
            title: "Creative Workshops",
            description: "Participate in our creative workshops designed for all ages.",
            buttonText: "View Workshops",
            onButtonClick: () => alert('View Workshops clicked!'),
        },
        {
            title: "Community Events",
            description: "Join our community events to connect with fellow crafters.",
            buttonText: "See Events",
            onButtonClick: () => alert('See Events clicked!'),
        },
        {
            title: "Handwork Techniques",
            description: "Learn various handwork techniques to enhance your skills.",
            buttonText: "Learn Techniques",
            onButtonClick: () => alert('Learn Techniques clicked!'),
        },
    ];

    return (
        <Container>
            <HeroSection 
                title="Heartfelt Homespun by Teacher Morrissey"
                subtitle="Waldorf Inspired Handwork Classes"
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