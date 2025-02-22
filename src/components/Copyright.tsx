/**
 * Copyright component displays the copyright information for the application.
 * It includes the year and the name of the organization.
 */

import React from 'react';
import styled from 'styled-components';

// Styled component for the copyright section
const CopyrightContainer = styled.div`
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: flex-end; /* Align items to the bottom */
    height: 100%; /* Ensure it takes full height */
    padding: 10px; /* Add some padding */
    text-align: center; /* Center the text */
    color: #333; /* Text color */
`;

const Copyright: React.FC = () => {
    return (
        <CopyrightContainer>
            © 2023 Held Thread Handwork. All rights reserved.
        </CopyrightContainer>
    );
};

export default Copyright; 