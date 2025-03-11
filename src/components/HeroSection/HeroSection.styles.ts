/**
 * Styled components for the HeroSection component.
 * Handles layout, responsiveness, and visual styling.
 */
import styled from 'styled-components';

export const Section = styled.section<{ $backgroundColor: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${props => props.$backgroundColor};
    text-align: center;
    min-height: 80vh;
`;

export const KnotImagesContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 2rem 0;
    width: 100%;
    max-width: 1200px;

    @media (max-width: 768px) {
        gap: 1rem;
        flex-wrap: wrap;
    }
`;

export const KnotImage = styled.img`
    width: 50px;
    height: 50px;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: rotate(360deg);
    }
`;

export const Title = styled.h1<{ $color: string }>`
    color: ${props => props.$color};
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: 1rem;
    font-weight: bold;
    letter-spacing: 0.1em;
`;

export const Subtitle = styled.h2<{ $color: string }>`
    color: ${props => props.$color};
    font-size: clamp(1.2rem, 2.5vw, 1.5rem);
    margin-bottom: 2rem;
    font-weight: normal;
    letter-spacing: 0.05em;
`;

export const ButtonContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
`; 