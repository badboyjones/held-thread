/**
 * FooterLinks component renders a list of links in a container.
 * It is designed to stack on mobile devices for better accessibility.
 * Accepts an array of link objects with text and URL.
 */

import React from 'react';
import styled from 'styled-components';

interface Link {
    text: string; // Text to display for the link
    url: string; // URL the link points to
}

interface FooterLinksProps {
    links: Link[]; // Array of links to render
    color?: string; // Default color for the links
    hoverColor?: string; // Add hover color for the links
    fontSize?: string; // Default font size for the links
    padding?: string; // Default padding for the links
    width?: string; // Add width prop
}

// Styled component for the link
const StyledLink = styled.a<{ color?: string; hoverColor?: string; fontSize?: string; padding?: string }>`
    margin: 5px 0;
    color: ${({ color }) => color || '#000'};
    font-size: ${({ fontSize }) => fontSize || '16px'};
    padding: ${({ padding }) => padding || '5px'};
    text-decoration: none;

    &:hover {
        color: ${({ hoverColor }) => hoverColor || '#000'}; // Change color on hover
    }
`;

const FooterLinks: React.FC<FooterLinksProps> = ({ links, color, fontSize, padding, hoverColor }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Render each link */}
            {links.map((link, index) => (
                <StyledLink key={index} href={link.url} color={color} fontSize={fontSize} padding={padding} hoverColor={hoverColor}>
                    {link.text}
                </StyledLink>
            ))}
        </div>
    );
};

export default FooterLinks; 