/**
 * TitleSubtitle component displays a title and subtitle text.
 * It is used for consistent presentation of headings throughout the app.
 */

import React from 'react';

interface TitleSubtitleProps {
    title: string;
    subtitle: string;
}

const TitleSubtitle: React.FC<TitleSubtitleProps> = ({ title, subtitle }) => {
    // Render the title and subtitle
    return (
        <div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    );
};

export default TitleSubtitle; 