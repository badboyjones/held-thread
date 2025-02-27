/**
 * Styled components for the NotFoundPage component.
 * Handles layout and visual styling.
 */
import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    text-align: center;
    padding: 2rem;
`;

export const Title = styled.h1`
    font-size: clamp(2rem, 5vw, 3rem);
    color: #87b5ca;
    margin-bottom: 1rem;
`;

export const Message = styled.p`
    font-size: 1.2rem;
    margin-bottom: 2rem;
    max-width: 600px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
`; 