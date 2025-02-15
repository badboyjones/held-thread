/**
 * ResourcesPage component that displays curated materials for users.
 * This page provides information but does not include digital sales.
 */

import React from 'react';
import styled from 'styled-components';

// Create a styled container
const Container = styled.div`
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.lavender}; // Use theme color
    color: ${({ theme }) => theme.colors.black}; // Use theme color
`;

const ResourcesPage: React.FC = () => {
    // Render the resources available for users
    return (
        <Container>
            <h1>Resources</h1>
            <p>Here you will find curated materials to support your learning journey.</p>
        </Container>
    );
};

export default ResourcesPage; 