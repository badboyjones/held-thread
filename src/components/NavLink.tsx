/**
 * NavLink component that provides styled navigation links for the application.
 * It extends React Router's Link component with consistent styling and hover effects.
 * 
 * @example
 * <NavLink to="/about">ABOUT</NavLink>
 */

import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface NavLinkProps {
    // Step 1: Add onClick handler to props
    onClick?: () => void;
}

// Create a styled navigation link with consistent styling
const StyledLink = styled(Link)`
    // Step 1: Set up basic text styling
    text-decoration: none;
    color: #333;
    font-weight: bold;

    // Step 2: Add padding for better touch targets
    padding: 10px;

    // Step 3: Add hover effect
    &:hover {
        color: #Fff;
    }
`;

// Step 2: Update component to use onClick prop
const NavLink: React.FC<NavLinkProps & { to: string; children: React.ReactNode }> = ({ 
    to, 
    children, 
    onClick 
}) => (
    <StyledLink to={to} onClick={onClick}>
        {children}
    </StyledLink>
);

export default NavLink; 