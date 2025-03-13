/**
 * InquirePage component provides a contact form and information
 * about classes and private lessons.
 * 
 * Features:
 * - Contact form
 * - Class information
 * - Responsive layout
 */
import React from 'react';
import {
    Container,
    Content,
    Description,
    Title
} from './InquirePage.styles';

const InquirePage: React.FC = () => {
    return (
        <Container>
            {/* Step 1: Display page title and description */}
            <Title>Get in Touch</Title>
            <Content>
                <Description>
                    Interested in classes or private lessons? I'd love to hear from you!
                    Please fill out the form below and I'll get back to you soon.
                </Description>

                {/* Step 2: Contact form will be added here */}
                {/* TODO: Add contact form component */}
            </Content>
        </Container>
    );
};

export default InquirePage; 