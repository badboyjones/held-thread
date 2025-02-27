/**
 * Styled components for the WelcomeSection component.
 * Handles layout, responsiveness, and visual styling.
 */
import styled from 'styled-components';

export const Section = styled.section<{ backgroundColor: string }>`
    display: grid;
    grid-template-columns: 50% 50%;
    background-color: ${props => props.backgroundColor};
    width: 100%;
    min-height: 500px;
    height: 80vh;
    overflow: hidden;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
        height: auto;
        min-height: unset;
    }
`;

export const TextContent = styled.div`
    text-align: left;
    margin: 2rem;
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
`;

export const Description = styled.div`
    font-size: 1.1rem;
    line-height: 1.6;
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;

    @media (max-width: 768px) {
        width: 100%;
        height: 300px;
        margin: 0;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 2rem;

    @media (max-width: 768px) {
        margin: 1rem;
        width: calc(100% - 2rem);
        height: calc(100% - 2rem);
    }
`; 
