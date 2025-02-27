/**
 * Footer component that provides additional information and links for the application.
 * It includes copyright information, social media links, and a newsletter sign-up form.
 */

import React from 'react';
import styled from 'styled-components';
import NewsletterSignup from './NewsletterSignup';
import FooterLinks from './FooterLinks'; // Import the new FooterLinks component
import Copyright from './Copyright'; // Import the new Copyright component

// Create a styled container for the Footer with a sky blue background
const FooterContainer = styled.footer`
    width: 100%;
    background-color: #bcc9a0;
    color: #333;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    min-height: 200px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
`;

const FooterSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 400px;

    @media (max-width: 768px) {
        width: 90%;
        justify-content: center;
    }
`;

const Footer: React.FC = () => {
    // Define the links to be displayed in the footer
    const links = [
        { text: 'Home', url: '/' },
        { text: 'About', url: '/about' },
        { text: 'Classes', url: '/classes' },
        { text: 'Contact', url: '/contact' },
        { text: 'Resources', url: '/resources' },
    ];

    return (
        <FooterContainer>
            {/* Render the FooterLinks component with the defined links */}
            <FooterSection>
                <FooterLinks 
                    links={links} 
                    color='#333' // Default link color
                    hoverColor='#ffffff' // Default link hover color
                    fontSize='16px' // Default font size
                    padding='0px' // Default padding
                    width='100%' // Default width
                />
            </FooterSection>
            {/* Use the new Copyright component */}
            <FooterSection>
                <Copyright />
            </FooterSection>
            {/* Add social media links here */}
            <FooterSection>
                <NewsletterSignup
                    labelColor='#fff'
                    inputColor='#fff'
                    buttonColor='#798b52'
                    buttonTextColor='#fff'
                    width='100%'
                    height='40px'
                    inputBorderColor='#ccc'
                    inputBorderRadius='20px'
                    inputPadding='10px'
                />
            </FooterSection>
        </FooterContainer>
    );
};

export default Footer; 