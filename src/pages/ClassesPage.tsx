/**
 * ClassesPage component that displays information about available classes and private lessons.
 * This page provides details on offerings and how the waitlist works.
 */

import React from 'react';
import styled from 'styled-components';

// Create a styled container
const Container = styled.div`
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.warmYellow}; // Use theme color
    color: ${({ theme }) => theme.colors.black}; // Use theme color
`;

const ClassesPage: React.FC = () => {
    // Render the classes and private lessons information
    return (
        <Container>
            <h1>Classes & Private Lessons</h1>
            <p>Here you can find information about our offerings and how the waitlist works.</p>
        </Container>
    );
};

export default ClassesPage; 