/**
 * HomePage component displays a welcoming introduction
 * and an image with craft materials, creating a warm
 * and inviting atmosphere for visitors.
 */

import React from 'react';
import styled from 'styled-components';
import WelcomeSection from '../components/WelcomeSection'; // Import the WelcomeSection component
import IntroSection from '../components/IntroSection'; // Import the IntroSection component
import CardSection from '../components/CardSection'; // Import the CardSection component
import Footer from '../components/Footer'; // Import the new Footer component

// Import the image
import cardImage3 from '../images/card images/3.png'; // Adjust the path as necessary
import cardImage4 from '../images/card images/4.png'; // Adjust the path as necessary
import cardImage1 from '../images/card images/1.png'; // Adjust the path as necessary
import cardImage2 from '../images/card images/2.png'; // Adjust the path as necessary
import cardImage5 from '../images/card images/5.png'; // Adjust the path as necessary


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
            title: "Beginning in Knitting",
            description: "Perfect for absolute beginners, knitting is the first thing taught in traditional handwork ciriculum. Ages 6 and up.",
            buttonText: "Learn More",
            imageUrl: cardImage3, // Use the imported image
            onButtonClick: () => alert('Learn More clicked!'),
            titleColor: "#FFD6D6", // Set title color for this card
        },
        {
            title: "Advancing in Knitting",
            description: "For intermediate knitters who are ready to move beyond knitting basics. Ages 7 and up.",
            buttonText: "Learn More",
            imageUrl: cardImage5,
            onButtonClick: () => alert('View Workshops clicked!'),
            titleColor: "#E6EDD5", // Set title color for this card
        },
        {
            title: "Beginning in Crochet",
            description: "Crochet uses a hook to create a series of loops and chains, forming something beautiful and new. ",
            buttonText: "Learn More",
            imageUrl: cardImage2,
            onButtonClick: () => alert('Discover More clicked!'),
            titleColor: "#FFF3D6", // Set title color for this card
        },
        {
            title: "Waldorf Doll Making",
            description: "Combine drafting, hand sewing, and embroidery to create a one-of-a-kind doll.",
            buttonText: "Learn More",
            imageUrl: cardImage1,
            onButtonClick: () => alert('Join Club clicked!'),
            titleColor: "#FFE6D5", // Set title color for this card
        },



    ];

    return (
        <Container>
            <WelcomeSection 
                title="Welcome to Our Crafting Community"
                subtitle="Join us for hands-on experiences"
                backgroundImage="https://shorturl.at/ov1sJ" // Ensure this URL is valid
            />
            <IntroSection 
                image="https://shorturl.at/NtGsF" // Set your image here
                backgroundColor="#E6EDD5" // Set your background color here
                title="Let creativity, tradition, and craft be your guide."
                description="Join us for hands-on experiences through the art of handwork."
            />
            <CardSection cards={cardData} backgroundColor="#FFF3D6" />
            <Footer />
        </Container>
    );
};

export default HomePage;