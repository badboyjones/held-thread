/**
 * Navbar component that provides navigation links for the application.
 * It includes links to the shop, classes, resources, and about pages.
 * The Navbar is responsive and includes a hamburger menu for mobile devices.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu'; // Import the new HamburgerMenu component

// Create a styled container for the Navbar with a gradient background
const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%; /* Ensure navbar takes full width */
    background: linear-gradient(to right, 
        #FFD6D6, /* Soft coral */
        #FFE6D5, /* Warm peach */
        #FFF3D6, /* Soft butter */
        #E6EDD5, /* Gentle sage green */
        #D6E9F2, /* Soft sky blue */
        #E6D6F2, /* Gentle purple */
        #F4B5D9 /* Accent pink */
    ), #ffffff; /* Fallback color */

    @media (max-width: 768px) {
        flex-direction: column; /* Stack items on small screens */
        align-items: flex-start; /* Align items to the start */
    }
`;

// Create a styled logo
const Logo = styled.h1`
    font-family: 'YourFont', sans-serif; /* Replace with your font */
    font-size: 2rem;
    color: #333; /* Text color */
`;

// Create a styled link list
const NavLinks = styled.div<{ isOpen: boolean }>`
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; /* Show or hide links */
    flex-direction: column; /* Stack links vertically */
    gap: 10px; /* Space between links */
    width: 100%; /* Full width for mobile */
`;

// Create a styled link
const NavLink = styled(Link)`
    text-decoration: none;
    color: #333; /* Text color */
    font-weight: bold;
    padding: 10px; /* Add padding for better touch targets */

    &:hover {
        color: #Fff; /* Change color on hover */
    }
`;

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

    // Toggle the visibility of the navigation links
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <NavbarContainer>
            <Logo>HEARTSPUN STUDIO</Logo>
            <HamburgerMenu onClick={toggleMenu} /> {/* Add the hamburger menu */}
            <NavLinks isOpen={isOpen}>
                <NavLink to="/about">ABOUT</NavLink>
                <NavLink to="/classes">CLASSES</NavLink>
                <NavLink to="/resources">RESOURCES</NavLink>
            </NavLinks>
        </NavbarContainer>
    );
};

export default Navbar; 