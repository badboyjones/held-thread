/**
 * Navbar component that provides navigation links for the application.
 * It includes links to the shop, classes, resources, and about pages.
 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Create a styled container for the Navbar with a gradient background
const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    // padding: 10px 20px;
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
`;

// Create a styled logo
const Logo = styled.h1`
    font-family: 'YourFont', sans-serif; /* Replace with your font */
    font-size: 2rem;
    color: #333; /* Text color */
`;

// Create a styled link list
const NavLinks = styled.div`
    display: flex;
    gap: 20px; /* Space between links */
`;

// Create a styled link
const NavLink = styled(Link)`
    text-decoration: none;
    color: #333; /* Text color */
    font-weight: bold;

    &:hover {
        color: #Fff; /* Change color on hover */
    }
`;

const Navbar: React.FC = () => {
    return (
        <NavbarContainer>
            <Logo>HEARTSPUN STUDIO</Logo>
            <NavLinks>
                <NavLink to="/about">ABOUT</NavLink>
                <NavLink to="/classes">CLASSES</NavLink>
                <NavLink to="/resources">RESOURCES</NavLink>
            </NavLinks>
        </NavbarContainer>
    );
};

export default Navbar; 