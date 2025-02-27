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
import HeroSection from '../components/HeroSection/HeroSection';
import Button from '../components/Button';
import AboutHandworkSection from '../components/AboutHandworkSection/AboutHandworkSection';
import { BUTTON_STYLES } from '../constants/styles';
import WelcomeSection from '../components/WelcomeSection/WelcomeSection';
import { IMAGES } from '../constants/images';

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
            imageUrl: IMAGES.CARDS.CARD_3,
            imageAlt: "Private lessons illustration",
            link: "/lessons",
            titleColor: "#f79c9c",
        },
        {
            title: "Small Group Classes",
            description: "Social, group-based classes to build skills and community",
            buttonText: "Learn More",
            imageUrl: IMAGES.CARDS.CARD_1,
            imageAlt: "Small group classes illustration",
            link: "/classes",
            titleColor: "#9ddfff",
        },
        {
            title: "Workshops & Special Events",
            description: "Seasonal, one-time experiences to explore new techniques and materials together",
            buttonText: "Learn More",
            imageUrl: IMAGES.CARDS.CARD_5,
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
        IMAGES.KNOTS.KNOT_1,
        IMAGES.KNOTS.KNOT_2,
        IMAGES.KNOTS.KNOT_3,
        IMAGES.KNOTS.KNOT_4,
        IMAGES.KNOTS.KNOT_5
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
                        link="/inquire"
                        {...BUTTON_STYLES.primary}
                        {...BUTTON_STYLES.shared}
                    />
                </HeroSection>
            </section>
        
            {/* Introduction section with personal message */}
            <section aria-labelledby="intro-title">
                <WelcomeSection 
                    image={IMAGES.CARDS.HEARTSPUN}
                    backgroundColor="#D6E9F2"
                    title="hi! i'm happy you're here!"
                    titleId="intro-title"
                >
                    <Button 
                        text="MORE ABOUT ME"
                        link="/about"
                        {...BUTTON_STYLES.secondary}
                        {...BUTTON_STYLES.shared}
                    />
                    <Button 
                        text="MORE ABOUT HANDWORK"
                        link="/handwork"
                        {...BUTTON_STYLES.secondary}
                        {...BUTTON_STYLES.shared}
                    />
                </WelcomeSection>
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
            <AboutHandworkSection
                image={IMAGES.KNOTS.COLOR_WHEEL}
                backgroundColor="#D6E9F2"
            >
                <Button 
                    text="MORE ABOUT ME"
                    link="/about"
                    {...BUTTON_STYLES.secondary}
                    {...BUTTON_STYLES.shared}
                />
                <Button 
                    text="MORE ABOUT HANDWORK"
                    link="/handwork"
                    {...BUTTON_STYLES.secondary}
                    {...BUTTON_STYLES.shared}
                />
            </AboutHandworkSection>

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