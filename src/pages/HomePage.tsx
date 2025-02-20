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
import Button from '../components/Button'; // This import is not needed in HomePage

// Import the card image
import cardImage3 from '../images/card images/card images/3.png'; // Adjust the path as necessary
import cardImage1 from '../images/card images/card images/1.png'; // Adjust the path as necessary
import cardImage2 from '../images/card images/card images/2.png'; // Adjust the path as necessary
import cardImage5 from '../images/card images/card images/5.png'; // Adjust the path as necessary

// Import the knot images
import knotImage1 from '../images/card images/knots/1.png'; // Adjust the path as necessary
import knotImage2 from '../images/card images/knots/2.png'; // Adjust the path as necessary
import knotImage3 from '../images/card images/knots/3.png'; // Adjust the path as necessary
import knotImage4 from '../images/card images/knots/4.png'; // Adjust the path as necessary
import knotImage5 from '../images/card images/knots/5.png'; // Adjust the path as necessary

// Create a styled container for the homepage
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; /* Align items to the start */
    min-height: 100vh; /* Ensure it takes at least full height */
    padding: 0; /* Ensure no padding is causing overflow */
    margin: 0; /* Ensure no margin is causing overflow */
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
            titleColor: "#f79c9c", // Set title color for this card
        },
        {
            title: "Advancing in Knitting",
            description: "For intermediate knitters who are ready to move beyond knitting basics. Ages 7 and up.",
            buttonText: "Learn More",
            imageUrl: cardImage5,
            onButtonClick: () => alert('View Workshops clicked!'),
            titleColor: "#ffd97d", // Set title color for this card
        },
        {
            title: "Beginning in Crochet",
            description: "Crochet uses a hook to create a series of loops and chains, forming something beautiful and new. ",
            buttonText: "Learn More",
            imageUrl: cardImage2,
            onButtonClick: () => alert('Discover More clicked!'),
            titleColor: "#9eb566", // Set title color for this card
        },
        {
            title: "Waldorf Doll Making",
            description: "Combine drafting, hand sewing, and embroidery to create a one-of-a-kind doll.",
            buttonText: "Learn More",
            imageUrl: cardImage1,
            onButtonClick: () => alert('Join Club clicked!'),
            titleColor: "#9ddfff", // Set title color for this card
        },
    ];

    // Array of knot images
    const knotImages = [knotImage1, knotImage2, knotImage3, knotImage4, knotImage5];

    return (
        <Container>
            <nav></nav>
            <WelcomeSection 
                backgroundColor="#ffffff"
                titleColor="#87b5ca" // Set title color
                subtitleColor="#87b5ca"
                title="HELD THREAD HANDWORK"
                subtitle="textile arts classes for children and adults"
                knotImages={knotImages} // Pass the knot images
            >
                <Button 
                    text="Visit Our Website"
                    link="https://www.example.com"
                    backgroundColor="#87b5ca"
                    color="white"
                    padding="10px 20px"
                    borderRadius="30px"
                    hoverColor="#9dbfd1"
                    hoverTextColor="white"
                />
            </WelcomeSection>
        
            <IntroSection 
                image="src/images/card images/card images/HEARTSPUN handwork(1).png"
                backgroundColor="#D6E9F2"
                title="hi! i'm happy you're here!"
                description="i'm morrissey and i am the teacher and artist behind held thread.
                to me, handwork is a way to build resilience, connection, and creativity within ourselves and within our community.
                as a lifelong crafter, i began learning handwork as a child.
                now, i reside here in beautiful portland, oregon where i get to share my love of craft with you."
            >
                <Button 
                    text="MORE ABOUT ME"
                    link="https://www.example.com"
                    backgroundColor="#fff"
                    color="#87b5ca"
                    padding="10px 20px"
                    borderRadius="30px"
                    hoverColor="#f4fbff"
                    hoverTextColor="#87b5ca"
                    margin="10px"
                />
                 <Button 
                    text="MORE ABOUT HANDWORK"
                    link="https://www.example.com"
                    backgroundColor="#fff"
                    color="#87b5ca"
                    padding="10px 20px"
                    borderRadius="30px"
                    hoverColor="#f4fbff"
                    hoverTextColor="#87b5ca"
                    margin="10px"
                />
            </IntroSection>
            <CardSection cards={cardData}/>
            <Footer />
        </Container>
    );
};

export default HomePage;