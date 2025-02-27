/**
 * Styled components for the AboutHandworkSection component.
 * Handles layout, responsiveness, and visual styling.
 */
import styled from 'styled-components';

export const Section = styled.section<{ backgroundColor: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.backgroundColor};
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1200px;
    gap: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const TextContent = styled.div`
    flex: 1;
    text-align: left;
    order: 2;

    @media (max-width: 768px) {
        order: 1;
    }
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
`;

export const Description = styled.div`
    font-size: 1.1rem;
    line-height: 1.6;
    white-space: pre-wrap;
`;

export const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    order: 1;

    @media (max-width: 768px) {
        order: 2;
    }
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
    transform: rotate(270deg);
`; 