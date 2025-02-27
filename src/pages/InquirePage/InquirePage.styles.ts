/**
 * Styled components for the InquirePage component.
 * Handles layout and visual styling.
 */
import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: 2rem;
`;

export const Title = styled.h1`
    font-size: clamp(2rem, 5vw, 3rem);
    color: #87b5ca;
    margin-bottom: 2rem;
    text-align: center;
`;

export const Content = styled.div`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
`;

export const Description = styled.p`
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    text-align: center;
`; 