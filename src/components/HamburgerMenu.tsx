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
    cursor: pointer;
`;

// Create a styled line for the hamburger icon
const Line = styled.div`
    height: 3px;
    width: 25px;
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