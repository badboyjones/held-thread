import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { buttonStyles, spacing, breakpoints } from '../../styles/constants';
import { IMAGES } from '../../constants/images';
const Column = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    max-width: ${breakpoints.desktop};
    margin: 0 auto;
`;

const Title = styled.h1`
    font-size: clamp(1.5rem, 5vw, 2rem);
    text-align: left;
    margin-bottom: ${spacing.medium};

    @media (max-width: ${breakpoints.mobile}) {
        text-align: center;
        margin-bottom: ${spacing.small};
    }
`;

const Text = styled.p`
    font-size: clamp(1rem, 3vw, 1.2rem);
    text-align: left;
    margin: ${spacing.small} 0;
    line-height: 1.6;
    text-indent: clamp(1.5rem, 4vw, 2rem);
    position: relative;
    z-index: 1;
`;

const DividerImage = styled.img`
    width: min(100%, 600px);
    height: auto;
    margin: clamp(-4rem, -8vw, -8rem) auto;
    position: relative;
    z-index: -1;
`;

const ButtonContainer = styled.div`
    margin-top: ${spacing.medium};
    height: ${spacing.large};
    align-self: center;
    color: ${({ theme }) => theme.colors.warmYellow};

    @media (max-width: ${breakpoints.mobile}) {
        margin-top: ${spacing.small};
        height: ${spacing.medium};
    }
`;

/**
 * TextSection component contains the about text content,
 * philosophy section, and call-to-action button.
 */
const TextSection: React.FC = () => {
    return (
        <Column role="main" aria-label="About Teacher Morrissey and Teaching Philosophy">
            <DividerImage 
                src={IMAGES.CARDS.TRANSPARENT_STARS}
                alt="Decorative star divider"
                aria-hidden="true"
            />
            <Title id="about-heading">About Teacher Morrissey</Title>
            <Text aria-labelledby="about-heading">
                I'm Morrissey, a textile artist and teacher with a lifelong love for handwork. 
                I first found comfort in fabric, thread, and yarn as a child, first learning to sew after begging my grandmother to teach me. 
                That love turned into a career, teaching in public schools, leading community workshops and projects, and helping others discover the quiet joy of 
                making by hand.
            </Text>
            <DividerImage 
                src={IMAGES.CARDS.TRANSPARENT_STARS}
                alt="Decorative star divider"
                aria-hidden="true"
            />
            <Title id="philosophy-heading">My Philosophy</Title>
            <Text aria-labelledby="philosophy-heading">
                Through <b>Held Thread</b>, I offer handwork classes for children that emphasize patience, creativity, 
                and emotional growth. Having trained in traditional Waldorf handwork pedagogy, my teaching 
                approach is gentle and adaptable, meeting each child where they are. I believe handwork is about 
                more than just learning to create a product. It teaches us to create ourselves.
            </Text>
            <Text>
                My goal is to create a learning environment where <b>mistakes are part of the process</b>. Here, slowness is valued, and every child can feel a sense of accomplishment. Whether they are knitting their first stitches or completing a their 100th sweater, my job is to support them in building resilience, creativity, and a connection to the rich tradition of textile arts.
            </Text>
            <ButtonContainer>
                <Button 
                    text="MORE ABOUT HANDWORK"
                    {...buttonStyles.primary}
                    link="/about/handwork"
                    aria-label="Learn more about our handwork teaching approach"
                />
            </ButtonContainer>
        </Column>
    );
};

export default TextSection; 