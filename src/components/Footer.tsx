/**
 * Footer component that provides additional information and links for the application.
 * It includes copyright information and social media links.
 */

import React from 'react';
import styled from 'styled-components';

// Create a styled container for the Footer with a sky blue background
const FooterContainer = styled.footer`
    width: 100%; /* Ensure footer takes full width */
    background-color: #D6E9F2; /* Soft sky blue */
    text-align: center;
    color: #333; /* Text color */
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <p>© 2023 Held Thread Handwork. All rights reserved.</p>
            {/* Add social media links here */}
        </FooterContainer>
    );
};

export default Footer; 