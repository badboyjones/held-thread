/**
 * HomePage component serves as the landing page for Held Thread.
 * 
 * Structure:
 * 1. Hero Section - Displays main title and call-to-action
 * 2. Intro Section - Introduces the teacher and philosophy
 * 3. Offerings Section - Shows available classes and services
 * 4. About Handwork Section - Explains the importance of handwork
 * 5. Footer - Contains site navigation and contact info
 * 
 * Features:
 * - Accessible navigation and feedback
 * - Consistent button styling
 * - Responsive layout
 */

import React, { useMemo, useCallback, useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import IntroSection from '../components/IntroSection';
import CardSection from '../components/CardSection';
import Footer from '../components/Footer';
import WaveDivider from '../components/WaveDivider';
import HeroSection from '../components/HeroSection';
import Button from '../components/Button';

// Group constant definitions with descriptive comments
/**
 * Image path constants for organizing and accessing
 * card and knot images throughout the component
 */
const CARD_IMAGES_PATH = 'src/images/card images/card images';
const KNOT_IMAGES_PATH = 'src/images/card images/knots';

// Card images
const cardImage1 = `${CARD_IMAGES_PATH}/1.png`;
const cardImage3 = `${CARD_IMAGES_PATH}/3.png`;
const cardImage5 = `${CARD_IMAGES_PATH}/5.png`;

// Knot images 
const knotImage1 = `${KNOT_IMAGES_PATH}/1.png`;
const knotImage2 = `${KNOT_IMAGES_PATH}/2.png`;
const knotImage3 = `${KNOT_IMAGES_PATH}/3.png`;
const knotImage4 = `${KNOT_IMAGES_PATH}/4.png`;
const knotImage5 = `${KNOT_IMAGES_PATH}/5.png`;

/**
 * Button style configurations for maintaining
 * consistent visual hierarchy across the site
 */
const BUTTON_STYLES = {
    primary: {
        backgroundColor: "#87b5ca",
        color: "white",
        hoverColor: "#9dbfd1",
        hoverTextColor: "white",
    },
    secondary: {
        backgroundColor: "#fff",
        color: "#87b5ca",
        hoverColor: "#f4fbff",
        hoverTextColor: "#87b5ca",
    },
    shared: {
        padding: "10px 20px",
        borderRadius: "30px",
        margin: "10px",
    }
} as const;

/**
 * Container component provides the main layout structure.
 * Uses flex layout to organize content vertically and
 * ensures full viewport height coverage.
 */
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
    padding: 0;
    margin: 0;
`;

const HomePage: React.FC = () => {
    /**
     * Card data for the offerings section. Each card represents a service
     * with its own styling, content, and accessibility features.
     * 
     * Steps:
     * 1. Define service details (title, description)
     * 2. Set up visual elements (images, colors)
     * 3. Configure accessible feedback mechanism
     */
    const cardData = useMemo(() => [
        {
            title: "Private Lessons",
            description: "Personalized one-on-one instruction for all ages and skill levels",
            buttonText: "Learn More",
            imageUrl: cardImage3,
            imageAlt: "Private lessons illustration",
            link: "/lessons",
            titleColor: "#f79c9c",
        },
        {
            title: "Small Group Classes",
            description: "Social, group-based classes to build skills and community",
            buttonText: "Learn More",
            imageUrl: cardImage1,
            imageAlt: "Small group classes illustration",
            link: "/classes",
            titleColor: "#9ddfff",
        },
        {
            title: "Workshops & Special Events",
            description: "Seasonal, one-time experiences to explore new techniques and materials together",
            buttonText: "Learn More",
            imageUrl: cardImage5,
            imageAlt: "Workshops and special events illustration",
            link: "/workshops",
            titleColor: "#ffd97d",
        },
    ], []);

    /**
     * Collection of decorative knot images arranged in a border pattern.
     * Images are loaded in sequence to create a consistent visual rhythm.
     */
    const knotImages = useMemo(() => [
        knotImage1, 
        knotImage2, 
        knotImage3, 
        knotImage4, 
        knotImage5
    ], []);
    
    return (
        <Container role="main">
            {/* Navigation section */}
            <nav role="navigation" aria-label="Main navigation"></nav>
            
            {/* Hero section with main call-to-action */}
            <section aria-labelledby="hero-title">
                <HeroSection 
                    backgroundColor="#ffffff"
                    titleColor="#87b5ca"
                    subtitleColor="#87b5ca"
                    title="HANDWORK FOR ALL"
                    subtitle="weaving creativity, resilience, and community"
                    knotImages={knotImages}
                    titleId="hero-title"
                >
                    <Button 
                        text="inquire about lessons"
                        link="https://www.example.com"
                        {...BUTTON_STYLES.primary}
                        {...BUTTON_STYLES.shared}
                    />
                </HeroSection>
            </section>
        
            {/* Introduction section with personal message */}
            <section aria-labelledby="intro-title">
                <IntroSection 
                    image="src/images/card images/card images/HEARTSPUN handwork(2).png"
                    backgroundColor="#D6E9F2"
                    title="hi! i'm happy you're here!"
                    titleId="intro-title"
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
                    imageAlt="Heartspun handwork illustration"
                    loading="lazy"
                >
                    <Button 
                        text="MORE ABOUT ME"
                        link="https://www.example.com"
                        {...BUTTON_STYLES.secondary}
                        {...BUTTON_STYLES.shared}
                    />
                    <Button 
                        text="MORE ABOUT HANDWORK"
                        link="https://www.example.com"
                        {...BUTTON_STYLES.secondary}
                        {...BUTTON_STYLES.shared}
                    />
                </IntroSection>
            </section>

            {/* Offerings section with service cards */}
            <section aria-labelledby="offerings-title">
                <CardSection 
                    cards={cardData} 
                    title="OFFERINGS"
                    titleId="offerings-title"
                    titleColor="#333"
                    titleFontSize="3rem"
                    titleMargin="30px"
                />
            </section>

            {/* About handwork section with philosophy */}
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
                    {...BUTTON_STYLES.secondary}
                    {...BUTTON_STYLES.shared}
                />
                <Button 
                    text="MORE ABOUT HANDWORK"
                    link="https://www.example.com"
                    {...BUTTON_STYLES.secondary}
                    {...BUTTON_STYLES.shared}
                />
            </IntroSection>

            {/* Visual divider with wave pattern */}
            <WaveDivider backgroundColor="#D6E9F2" waveColor="#bcc9a0" />

            {/* Site footer */}
            <Footer />
        </Container>
    );
};

/**
 * GlobalStyle component defines utility classes
 * for accessibility features like screen-reader-only content
 */
const GlobalStyle = createGlobalStyle`
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }
`;

export default HomePage;