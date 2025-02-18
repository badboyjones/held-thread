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
import Grid from '../components/Grid'; // Import the Grid component
import GridItem from '../components/GridItem'; // Import the GridItem component

// Import the card image
import cardImage3 from '../images/card images/card images/3.png'; // Adjust the path as necessary
// import cardImage4 from '../images/card images/4.png'; // Adjust the path as necessary
import cardImage1 from '../images/card images/card images/1.png'; // Adjust the path as necessary
import cardImage2 from '../images/card images/card images/2.png'; // Adjust the path as necessary
import cardImage5 from '../images/card images/card images/5.png'; // Adjust the path as necessary

// Import the knot images
import knotImage1  from '../images/card images/knots/1.png'; // Adjust the path as necessary
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

// Create a styled GridItem for text
const StyledGridItem = styled(GridItem)`
    color: #333333; /* Set text color */
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

    return (
        <Container>
            <WelcomeSection 
                backgroundColor="#ffffff"
                titleColor="#333333" // Set title color
                subtitleColor="#333333" // Set subtitle color
            >
                <Grid rows={2} columns={7}>
                    <StyledGridItem colSpan={7}>
                        <h1 style={{ color: '#333333' }}>Welcome to Our Crafting Community</h1>
                        <h2 style={{ color: '#333333' }}>Join us for hands-on experiences</h2>
                    </StyledGridItem>
                    <GridItem>
                    </GridItem>
                    <GridItem>
                        <img src={knotImage1} alt="Knot 1" style={{ width: '100%', height: 'auto' }} />
                    </GridItem>
                    <GridItem>
                        <img src={knotImage2} alt="Knot 2" style={{ width: '100%', height: 'auto' }} />
                    </GridItem>
                    <GridItem>
                        <img src={knotImage3} alt="Knot 3" style={{ width: '100%', height: 'auto' }} />
                    </GridItem>
                    <GridItem>
                        <img src={knotImage4} alt="Knot 4" style={{ width: '100%', height: 'auto' }} />
                    </GridItem>
                    <GridItem>
                        <img src={knotImage5} alt="Knot 5" style={{ width: '100%', height: 'auto' }} />
                    </GridItem>
                    <GridItem>
                    </GridItem>
                    <GridItem rowSpan={8}>
                    </GridItem>
                </Grid>
            </WelcomeSection>
            <IntroSection 
                image="src/images/card images/card images/HEARTSPUN handwork.png" // Set your image here
                backgroundColor="#D6E9F2" // Set your background color here
                title="Let creativity, tradition, and craft be your guide."
                description="Join us for hands-on experiences through the art of handwork."
            />
            <CardSection cards={cardData}/>
            <Footer />
        </Container>
    );
};

export default HomePage;