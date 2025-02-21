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
    width: 100%; /* Ensure footer takes full width */
    background-color: #D6E9F2; /* Soft sky blue */
    text-align: center;
    color: #333; /* Text color */
    display: flex;
    flex-direction: row; /* Keep items in a row by default */
    justify-content: space-between; /* Space items evenly */
    align-items: center; /* Center items vertically */
    height: 100%; /* Set a fixed height for the footer */

    @media (max-width: 768px) { /* Adjust the breakpoint as needed */
        flex-direction: column; /* Stack items vertically on mobile */
        height: auto; /* Allow height to adjust based on content */
    }
`;

const FooterSection = styled.div`
    flex: 1; /* Each section takes up equal space */
    display: flex;
    justify-content: center; /* Center content horizontally */
    align-items: center; /* Center content vertically */
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
                <FooterLinks links={links} 
                    color='#333' // Default link color
                    fontSize='16px' // Default font size
                    padding='10px' // Default padding
                    width='30%' // Default width
                />
            </FooterSection>
            {/* Use the new Copyright component */}
            <FooterSection>
                <Copyright />
            </FooterSection>
            {/* Add social media links here */}
            <FooterSection>
                <NewsletterSignup
                    labelColor='#000' // Default label color
                    inputColor='#fff' // Default input background color
                    buttonColor='#87b5ca' // Default button background color
                    buttonTextColor='#fff' // Default button text color
                    linkColor='#000' // Default link color
                    width='50%' // Default width
                    height='40px' // Default height
                    inputBorderColor='#ccc' // Default input border color
                    inputBorderRadius='20px' // Default input border radius
                    inputPadding='10px' // Default input padding
                />
            </FooterSection>
        </FooterContainer>
    );
};

export default Footer; 