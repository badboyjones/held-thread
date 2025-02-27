/**
 * Styled components for the Footer component.
 * Handles layout and visual styling for the site footer.
 */
import styled from 'styled-components';

export const FooterContainer = styled.footer`
    width: 100%;
    background-color: #87b5ca;
    color: white;
    padding: 3rem 0;
`;

export const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    padding: 0 2rem;
`;

export const FooterSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const FooterTitle = styled.h3`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    letter-spacing: 0.05em;
`;

export const FooterLink = styled.a`
    color: white;
    text-decoration: none;
    transition: opacity 0.2s ease-in-out;

    &:hover {
        opacity: 0.8;
    }

    &:focus {
        outline: 2px solid white;
        outline-offset: 2px;
    }
`;

export const FooterText = styled.p`
    line-height: 1.6;
`;

export const SocialLinks = styled.div`
    display: flex;
    gap: 1rem;
`;

export const Copyright = styled.div`
    text-align: center;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
`; 