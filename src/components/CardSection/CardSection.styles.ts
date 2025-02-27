/**
 * Styled components for the CardSection component.
 * Handles layout, responsiveness, and card styling.
 */
import styled from 'styled-components';

export const SectionTitle = styled.h2<{ color: string; fontSize: string; margin: string }>`
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    margin: ${props => props.margin};
    text-align: center;
`;

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

export const Card = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: translateY(-4px);
    }
`;

export const CardImage = styled.img`
    width: 100vw;
    height: auto;
    object-fit: cover;
`;

export const CardTitle = styled.h3<{ color: string }>`
    color: ${props => props.color};
    font-size: 1.5rem;
    margin: 1rem 0;
`;

export const CardDescription = styled.p`
    font-size: 1.1rem;
    line-height: 1.6;
    margin: 0 1rem 1.5rem;
    color: #333;
`;

export const ButtonContainer = styled.div`
    margin-top: auto;
`; 