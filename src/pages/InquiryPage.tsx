/**
 * InquiryPage component that provides a contact form and information for inquiries.
 * This page allows users to reach out for more information or to schedule a call.
 */

import React from 'react';
import styled from 'styled-components';

// Create a styled container
const Container = styled.div`
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.sage}; // Use theme color
    color: ${({ theme }) => theme.colors.black}; // Use theme color
`;

const InquiryPage: React.FC = () => {
    // Render the inquiry form and information
    return (
        <Container>
            <h1>Inquiry</h1>
            <p>If you have any questions or would like to schedule a call, please fill out the form below.</p>
            {/* Add form elements here */}
        </Container>
    );
};

export default InquiryPage; 