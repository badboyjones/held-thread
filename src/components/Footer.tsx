/**
 * Footer Component
 * This component serves as the footer for the website, providing links and support information.
 */

import React from 'react';
import styled from 'styled-components';

// Styled component for the footer
const FooterContainer = styled.footer`
    background-color: #D6E9F2; /* Soft sky blue */
    padding: 20px;
    text-align: center;
    width: 100%; /* Ensure full width */
    margin: 0; /* Remove any default margin */
`;

// Styled component for the footer text
const FooterText = styled.p`
    color: #333333; /* Dark text for readability */
    margin: 0;
`;

// Styled component for the links
const FooterLink = styled.a`
    color: #A06B8F; /* Plum color for links */
    text-decoration: none;
    margin: 0 10px;

    &:hover {
        text-decoration: underline;
    }
`;

// Footer component
const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterText>
                Links: 
                <FooterLink href="/blog">Blog</FooterLink>
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
            </FooterText>
            <FooterText>
                Support: If you've found this helpful, consider buying me a coffee!
            </FooterText>
            <FooterText>
                Made with love by Crumpet Club
            </FooterText>
        </FooterContainer>
    );
};

export default Footer; 