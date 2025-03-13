/**
 * NotFoundPage component displays a friendly 404 error message
 * and provides navigation options.
 * 
 * Features:
 * - Friendly error message
 * - Navigation buttons
 * - Responsive layout
 */
import React from 'react';
import Button from '../../components/Button';
import { BUTTON_STYLES } from '../../constants/styles';
import {
    ButtonContainer,
    Container,
    Message,
    Title
} from './NotFoundPage.styles';

const NotFoundPage: React.FC = () => {
    return (
        <Container>
            {/* Step 1: Display error message */}
            <Title>Oops! Page Not Found</Title>
            <Message>
                It seems we've dropped a stitch! The page you're looking for
                has wandered off into the yarn basket.
            </Message>

            {/* Step 2: Provide navigation options */}
            <ButtonContainer>
                <Button
                    text="Return Home"
                    link="/"
                    {...BUTTON_STYLES.primary}
                    {...BUTTON_STYLES.shared}
                />
                <Button
                    text="Contact Us"
                    link="/inquire"
                    {...BUTTON_STYLES.secondary}
                    {...BUTTON_STYLES.shared}
                />
            </ButtonContainer>
        </Container>
    );
};

export default NotFoundPage; 