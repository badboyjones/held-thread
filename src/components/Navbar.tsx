/**
 * Navbar component that provides navigation links for the application.
 * It includes links to the shop, classes, resources, and about pages.
 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Create a styled navbar container
const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    width: 100%; /* Ensure navbar takes full width */
    background-color: white; /* Background color */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
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
        color: #FF6F61; /* Change color on hover */
    }
`;

const Navbar: React.FC = () => {
    return (
        <Nav>
            <Logo>HEARTSPUN STUDIO</Logo>
            <NavLinks>
                <NavLink to="/shop">ABOUT</NavLink>
                <NavLink to="/classes">CLASSES</NavLink>
                <NavLink to="/resources">RESOURCES</NavLink>
            </NavLinks>
        </Nav>
    );
};

export default Navbar; 