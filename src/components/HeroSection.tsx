/**
 * HeroSection component displays the main title and subtitle
 * for the homepage, creating an inviting introduction for visitors.
 */

import React from 'react';

interface HeroSectionProps {
    title: string;
    subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
    // Render the hero section with title and subtitle
    return (
        <div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    );
};

export default HeroSection; 