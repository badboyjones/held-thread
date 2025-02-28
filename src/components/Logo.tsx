/**
 * Logo component that displays the site title with consistent styling.
 * It includes both the logo text and its wrapper link component.
 * 
 * @example
 * <Logo text="HELD THREAD HANDWORK" />
 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Step 1: Create the styled logo heading
const LogoHeading = styled.h1`
    font-family: 'Rubik', sans-serif;
    font-size: 2rem;
    color: #333;
    
    &:hover {
        color: #Fff;
    }
`;

// Step 2: Create the styled link wrapper
const LogoWrapper = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

// Step 3: Create the Logo component
interface LogoProps {
    text: string;
}

const Logo: React.FC<LogoProps> = ({ text }) => (
    <LogoWrapper to="/">
        <LogoHeading>{text}</LogoHeading>
    </LogoWrapper>
);

export default Logo; 