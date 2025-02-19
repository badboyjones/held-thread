/**
 * HamburgerMenu component that toggles the visibility of navigation links
 * on mobile devices. It displays a menu icon that can be clicked to show
 * or hide the navigation links.
 */

import React from 'react';
import styled from 'styled-components';

// Create a styled container for the hamburger menu
const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    align-items: center; /* Center the lines horizontally */
    width: 30px; /* Set a fixed width for the hamburger menu */
    margin: 0 auto; /* Center the hamburger menu in its parent */
    @media (min-width: 768px) {       
        display: none; /* Hide the hamburger menu on small screens */
        
    }
`;

// Create a styled line for the hamburger icon
const Line = styled.div`
    height: 3px;
    width: 100%; /* Make the lines take the full width of the container */
    background-color: #333; /* Color of the hamburger lines */
    margin: 3px 0; /* Space between lines */
`;

interface HamburgerMenuProps {
    onClick: () => void; // Function to handle click event
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClick }) => {
    return (
        <MenuContainer onClick={onClick}>
            <Line />
            <Line />
            <Line />
        </MenuContainer>
    );
};

export default HamburgerMenu; 