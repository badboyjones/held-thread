/**
 * FooterLinks component renders a list of links in a container.
 * It is designed to stack on mobile devices for better accessibility.
 * Accepts an array of link objects with text and URL.
 */

import React from 'react';

interface Link {
    text: string; // Text to display for the link
    url: string; // URL the link points to
    color?: string; // Color for the link
    fontSize?: string; // Font size for the link
    padding?: string; // Padding for the link
}

interface FooterLinksProps {
    links: Link[]; // Array of links to render
    color?: string; // Default color for the links
    fontSize?: string; // Default font size for the links
    padding?: string; // Default padding for the links
}

const FooterLinks: React.FC<FooterLinksProps> = ({ links, color, fontSize, padding }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Render each link */}
            {links.map((link, index) => (
                <a key={index} href={link.url} style={{ margin: '5px 0', color: color || '#000', fontSize: fontSize || '16px', padding: padding || '10px 20px' }}>
                    {link.text}
                </a>
            ))}
        </div>
    );
};

export default FooterLinks; 