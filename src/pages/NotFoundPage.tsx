/**
 * NotFoundPage component that displays a friendly message when a page is not found.
 * This is used for handling 404 errors in the application.
 */

import React from 'react';
import styled from 'styled-components';

// Create a styled container
const Container = styled.div`
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.softPink}; // Use theme color
    color: ${({ theme }) => theme.colors.black}; // Use theme color
`;

const NotFoundPage: React.FC = () => {
    // Render a friendly "Page Not Found" message
    return (
        <Container>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        </Container>
    );
};

export default NotFoundPage; 