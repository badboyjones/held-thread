/**
 * Navbar component that provides navigation links for the application.
 * It includes links to the shop, classes, resources, and about pages.
 * The Navbar is responsive and includes a hamburger menu for mobile devices.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import HamburgerMenu from './HamburgerMenu';
import NavLink from './NavLink';
import Logo from './Logo';

// Step 1: Update NavbarContainer styling
const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: linear-gradient(to right, 
        #FFD6D6, #FFE6D5, #FFF3D6, #E6EDD5, 
        #D6E9F2, #E6D6F2, #F4B5D9
    ), #ffffff;
    position: sticky;
    top: 0;
    z-index: 400;
`;

// Add a wrapper for logo and hamburger menu
const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

// Step 2: Update NavLinks to handle both mobile and desktop views
const NavLinks = styled.div<{ $isOpen: boolean }>`
    display: flex;
    gap: 10px;
    
    @media (max-width: 768px) {
        display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
        flex-direction: column;
        width: 100%;
        background: #ffffff;
        align-items: center;
        position: absolute;
        top: 100%;
        left: 0;
    }
`;

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <NavbarContainer>
            <TopSection>
                <Logo text="HELD THREAD HANDWORK" />
                <HamburgerMenu onClick={toggleMenu} isOpen={isOpen} />
            </TopSection>
            <NavLinks $isOpen={isOpen} id="navigation-menu">
                <NavLink to="/about">ABOUT</NavLink>
                <NavLink to="/learn">LEARN</NavLink>
                <NavLink to="/resources">RESOURCES</NavLink>
            </NavLinks>
        </NavbarContainer>
    );
};

export default Navbar; 