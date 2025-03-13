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

import React, { useMemo } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import AboutHandworkSection from '../components/AboutHandworkSection/AboutHandworkSection';
import Button from '../components/Button';
import CardSection from '../components/CardSection';
import HeroSection from '../components/HeroSection/HeroSection';
import StarDivider from '../components/StarDivider';
import WaveDivider from '../components/WaveDivider';
import WelcomeSection from '../components/WelcomeSection/WelcomeSection';
import { IMAGES } from '../constants/images';
import { BUTTON_STYLES } from '../constants/styles';

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
    position: relative;
    z-index: 1;
`;

// Add this styled component near the top with other styled components
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
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
            description: <>I offer personalized one-on-one instruction for all ages and skill levels. Learn more about classes <a href="/learn">here</a>.</>,
            buttonText: "Inquire About Lessons",
            imageUrl: IMAGES.CARDS.CARD_3,
            imageAlt: "Private lessons illustration",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSdAmp102YfEhFMvZLKhpBM_srUrXGv4lY3AKQrkP2pxYcMGMw/viewform",
            titleColor: "#ff9dbd",
        },
        {
            title: "Small Group Classes",
            description: <>Small group classes are a way to build skills and community together. We currently have a waitlist for these classes but you can learn more about group classes <a href="/learn">here</a>.</>,
            buttonText: "Join the Waitlist",
            imageUrl: IMAGES.CARDS.CARD_1,
            imageAlt: "Small group classes illustration",
            link: "https://docs.google.com/forms/d/e/1FAIpQLScNpBYNHdLgjNQKFKW6euZ7Foaz6KEETaBicXTAixiAUh9CiA/viewform",
            titleColor: "#9ddfff",
        },
        {
            title: "Workshops & Special Events",
            description: <>Workshops are seasonal, one-time experiences to explore new techniques and materials in community. These offerings are limited and fill up fast. Learn more about workshops <a href="/learn">here</a>.</>,
            buttonText: "Join the Waitlist",
            imageUrl: IMAGES.CARDS.CARD_5,
            imageAlt: "Workshops and special events illustration",
            link: "https://docs.google.com/forms/d/e/1FAIpQLScNpBYNHdLgjNQKFKW6euZ7Foaz6KEETaBicXTAixiAUh9CiA/viewform",
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
        <>
            <GlobalStyle />
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
                        <ButtonContainer>
                            <Button
                                to="/inquire"
                                {...BUTTON_STYLES.primary}
                                {...BUTTON_STYLES.shared}
                            >
                                inquire about lessons
                            </Button>
                        </ButtonContainer>
                    </HeroSection>
                </section>

                {/* Introduction section with personal message */}
                <section aria-labelledby="intro-title">
                    <WelcomeSection
                        image={IMAGES.CARDS.HEARTSPUN}
                        backgroundColor="#D6E9F2"
                        title="I'm happy you're here."
                        titleId="intro-title"
                    >
                        <ButtonContainer>
                            <Button
                                to="/about"
                                {...BUTTON_STYLES.secondary}
                                {...BUTTON_STYLES.shared}
                            >
                                More About Me
                            </Button>
                            <Button
                                to="/learn"
                                {...BUTTON_STYLES.secondary}
                                {...BUTTON_STYLES.shared}
                            >
                                More About Lessons
                            </Button>
                        </ButtonContainer>
                    </WelcomeSection>
                </section>

                <StarDivider height="0px" />

                {/* Offerings section with no margin */}
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
                />

                {/* Visual divider with wave pattern */}
                <WaveDivider backgroundColor="#D6E9F2" waveColor="#f3f4f6" />
            </Container>
        </>
    );
};

/**
 * GlobalStyle component defines utility classes and forces light mode
 * by setting explicit background and text colors
 */
const GlobalStyle = createGlobalStyle`
    // Force light mode colors regardless of system preferences
    @media (prefers-color-scheme: dark) {
        html, body {
            background-color: #ffffff;
            color: #333333;
        }
    }

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