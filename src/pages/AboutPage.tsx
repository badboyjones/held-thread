/**
 * AboutPage component that shares the teaching philosophy and values of the program.
 * This page provides insights into emotional learning through craft and the community focus.
 */

import React from 'react';
import styled from 'styled-components';

// Create a styled container
const Container = styled.div`
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.peach}; // Use theme color
    color: ${({ theme }) => theme.colors.black}; // Use theme color
`;

const AboutPage: React.FC = () => {
    // Render the teaching philosophy and values
    return (
        <Container>
            <h1>About Us</h1>
            <p>Our teaching philosophy is rooted in tradition and heart, focusing on emotional skills through craft.</p>
            <p>We emphasize social-emotional learning and community-building through our classes.</p>
        </Container>
    );
};

export default AboutPage; 