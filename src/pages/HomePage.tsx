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
import NewsletterSignup from '../components/NewsletterSignup'; // Import the NewsletterSignup component
import WaveDivider from '../components/WaveDivider'; // Import the WaveDivider component

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
            title: "Private Lessons",
            description: "Personalized one-on-one instruction for all ages and skill levels",
            buttonText: "Learn More",
            imageUrl: cardImage3, // Use the imported image
            onButtonClick: () => alert('Learn More clicked!'),
            titleColor: "#f79c9c", // Set title color for this card
        },
        {
            title: "Small Group Classes",
            description: "Social, group-based classes to build skills and community",
            buttonText: "Learn More",
            imageUrl: cardImage1,
            onButtonClick: () => alert('Join Club clicked!'),
            titleColor: "#9ddfff", // Set title color for this card
        },
        {
            title: "Workshops & Special Events",
            description: "Seasonal, one-time experiences to explore new techniques and materials together",
            buttonText: "Learn More",
            imageUrl: cardImage5,
            onButtonClick: () => alert('View Workshops clicked!'),
            titleColor: "#ffd97d", // Set title color for this card
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
                title="HANDWORK FOR ALL"
                subtitle="weaving creativity, resilience, and community"
                knotImages={knotImages} // Pass the knot images
            >
                <Button 
                    text="inquire about lessons"
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
                image="src/images/card images/card images/HEARTSPUN handwork(2).png"
                backgroundColor="#D6E9F2"
                title="hi! i'm happy you're here!"
                imageWidth="50%"
                textWidth="50%"
                maxHeight="100%"
                maxWidth="auto%"
                mobileMaxHeight="100%"
                mobileMaxWidth="100%"
                description={
                    <>
                        i'm morrissey and i am the teacher and artist behind held thread.
                        <br /><br />
                        held thread is built on the belief that traditional handwork nurtures both skill and soul.
                        <br /><br />
                        through slow, mindful making, we develop patience, perseverance, and connection to craft and community.
                    </>
                }
                imagePosition="right"
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
            <CardSection 
                cards={cardData} 
                title="OFFERINGS" // Title for the card section
                titleColor="#333" // Color for the title
                titleFontSize="3rem" // Font size for the title
                titleMargin="30px" // Margin for the title
            />
            <IntroSection 
                image="src/images/card images/knots/Natural_dye_colour_wheel.jpg"
                backgroundColor="#D6E9F2"
                title="why handwork?"
                description={
                    <>
                        in a world full of screens and distractions, handwork gives us the chance to slow down,
                        focus, and create with our own hands.
                        <br /><br />
                        the deep and complex tradition of handwork isn't about a finished product, but a way to build 
                        the self. working with yarn, fabric, and thread work to strengthen physical skills like fine 
                        motor control as well as a greater sense of rhythm in the body and world.
                        <br /><br />
                        we have to remember that these skills have been passed down for millennia. 
                        working with your hands is a connection to tradition and community. we take these skills and 
                        make them our own, creating our own traditions and stories together. the world becomes a more beautiful place 
                        when we share this task with one another.
                        <br /><br />
                        at held thread, handwork is more than craft. it's a way to help us grow, one stitch 
                        at a time.
                    </>
                }
                imagePosition="left"
                style={{ transform: 'rotate(270deg)' }}
                maxHeight="100%" // Ensure the image takes full height
                maxWidth="100%" // Ensure the image does not exceed its container's width
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
            <WaveDivider />
            <Footer />
        </Container>
    );
};

export default HomePage;