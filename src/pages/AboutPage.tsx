/**
 * AboutPage component that shares the teaching philosophy and values of the program.
 * This page provides insights into emotional learning through craft and the community focus.
 */

import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { spacing, breakpoints } from '../styles/constants';

/**
 * Container component that wraps the entire about page content.
 * Provides main layout structure and responsive padding adjustments.
 */
const Container = styled.main`
    margin: 0 auto;
    padding: ${spacing.large};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    color-scheme: light;
    max-width: ${breakpoints.desktop};

    @media (max-width: ${breakpoints.mobile}) {
        padding: ${spacing.medium};
    }
`;

/**
 * Title component for section headings.
 * Adjusts font size and alignment based on screen size.
 */
const Title = styled.h1`
    font-size: ${({ theme }) => theme.typography.scale.h1};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    text-align: left;
    color: ${({ theme }) => theme.colors.black};

    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.typography.scale.h2};
        text-align: center;
    }
`;

/**
 * TwoColumnLayout component creates a responsive grid layout.
 * Switches from two columns to single column on mobile devices.
 */
const TwoColumnLayout = styled.section`
    display: flex;
    gap: ${spacing.large};
    align-items: stretch;
    margin: ${spacing.medium} 0;
    min-height: 100vh;

    @media (max-width: ${breakpoints.mobile}) {
        flex-direction: column;
        gap: ${spacing.medium};
    }
`;

/**
 * Column component serves as a base for vertical content arrangement.
 * Used as foundation for both image and text columns.
 */
const Column = styled.article`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

/**
 * Image component for the main collage display.
 * Features a subtle rotation effect on desktop that removes on mobile.
 */
const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
    transform: rotate(5deg);
    max-height: 80vh;

    @media (max-width: 768px) {
        max-height: 50vh;
        transform: none;
    }
`;

/**
 * DividerImage component for decorative star separators.
 * Uses negative margins to create overlapping effect with text.
 */
const DividerImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
    margin-top: -1rem;
    margin-bottom: -7rem;
    display: block;

    @media (max-width: 768px) {
        margin-top: 0;
        margin-bottom: -4rem;
    }
`;

/**
 * Text component for paragraph content.
 * Implements responsive typography and indentation.
 */
const Text = styled.p`
    font-size: ${({ theme }) => theme.typography.scale.body};
    line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
    font-weight: ${({ theme }) => theme.typography.weight.normal};
    text-align: left;
    margin: ${spacing.small} 0 ${spacing.medium};
    text-indent: ${spacing.medium};
    color: ${({ theme }) => theme.colors.black};

    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.typography.scale.small};
        text-indent: 1.5rem;
    }
`;

/**
 * IndentedText extends Text component.
 * Used for consistent paragraph styling throughout the page.
 */
const IndentedText = styled(Text)`
`;

/**
 * ButtonContainer wraps the call-to-action button.
 * Provides consistent spacing and responsive sizing.
 */
const ButtonContainer = styled.footer`
    margin-top: ${spacing.large};
    padding: ${spacing.medium} 0;
    align-self: center;
    color: ${({ theme }) => theme.colors.warmYellow};

    @media (max-width: 768px) {
        margin-top: 1rem;
        height: 3rem;
    }
`;

/**
 * ImageColumn component for the left side of the layout.
 * Handles image positioning and responsive behavior.
 */
const ImageColumn = styled(Column)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;

    @media (max-width: 768px) {
        position: static;
        margin-bottom: 1rem;
    }
`;

const AboutPage: React.FC = () => {
    return (
        <Container>
            <TwoColumnLayout>
                <ImageColumn>
                    <Image 
                        src="src/images/card images/card images/about me collage.png"
                        alt="A collage of various items on a quilt. The items include buttons, yarn, and knick knacks. Among them are three pictures. One is of Morrissey as a child, one is of them and their partner Daneil, and one is of their cat named Monkey." 
                    />
                </ImageColumn>
                <Column>
                    <DividerImage 
                        src="src/images/card images/card images/Transparent Stars.png"
                        alt="Glittery stars serving as a divider between sections of text."
                    />
                    <Title>About Teacher Morrissey</Title>
                    <IndentedText>
                        I'm Morrissey, a textile artist and teacher with a lifelong love for handwork. 
                        I first found comfort in fabric, thread, and yarn as a child, first learning to sew after begging my grandmother to teach me. 
                        That love turned into a career, teaching in public schools, leading community workshops and projects, and helping others discover the quiet joy of 
                        making by hand.
                    </IndentedText>
                    <DividerImage 
                        src="src/images/card images/card images/Transparent Stars.png"
                        alt="Glittery stars serving as a divider between sections of text."
                    />
                    <Title>My Philosophy</Title>
                    <IndentedText>
                        Through <b>Held Thread</b>, I offer handwork classes for children that emphasize patience, creativity, 
                        and emotional growth. Having trained in traditional Waldorf handwork pedagogy, my teaching 
                        approach is gentle and adaptable, meeting each child where they are. I believe handwork is about 
                        more than just learning to create a product. It teaches us to create ourselves.
                    </IndentedText>
                    <IndentedText>
                        My goal is to create a learning environment where <b>mistakes are part of the process</b>. Here, slowness is valued, and every child can feel a sense of accomplishment. Whether they are knitting their first stitches or completing a their 100th sweater, my job is to support them in building resilience, creativity, and a connection to the rich tradition of textile arts.
                    <br></br>
                    </IndentedText>
                    <ButtonContainer>
                        <Button 
                            text="MORE ABOUT HANDWORK"
                            backgroundColor="#A06B8F"
                            color="#FFFFFF"
                            hoverColor="#D6E9F2"
                            link="/about/handwork"
                        />
                    </ButtonContainer>
                </Column>
            </TwoColumnLayout>
        </Container>
    );
};

export default AboutPage; 