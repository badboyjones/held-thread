import React from 'react';
import styled from 'styled-components';

/**
 * WelcomeSection component displays a title, subtitle,
 * and buttons for navigation, creating an inviting
 * introduction to the application.
 */
interface WelcomeSectionProps {
    title: string;
    subtitle: string;
    backgroundImage: string;
}

const Container = styled.section<{ backgroundImage: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%; /* Full width of the viewport */
    padding: 40px;
    background-image: url(${props => props.backgroundImage}); /* Set your background image */
    background-size: cover; /* Cover the entire section */
    background-position: center; /* Center the image */
    color: #FFFFFF; /* White text for better contrast */
    text-align: center;
`;

const Title = styled.h1`
    font-size: 3rem;
    margin-bottom: 10px;
`;

const Subtitle = styled.p`
    font-size: 1.5rem;
    margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 20px; /* Space between buttons */
`;

const Button = styled.button`
    background-color: rgba(244, 181, 217, 0.8); /* Soft pink with transparency */
    color: #FFFFFF; /* White text */
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
        background-color: rgba(255, 214, 214, 0.8); /* Soft coral with transparency on hover */
    }
`;

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ title, subtitle, backgroundImage }) => {
    return (
        <Container backgroundImage={backgroundImage}>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <ButtonContainer>
                <Button>CALENDAR</Button>
                <Button>SHOP</Button>
            </ButtonContainer>
        </Container>
    );
};

export default WelcomeSection; 