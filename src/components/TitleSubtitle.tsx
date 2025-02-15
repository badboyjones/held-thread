/**
 * TitleSubtitle component displays a title and subtitle.
 * 
 * @param {string} title - The title to display.
 * @param {string} subtitle - The subtitle to display.
 */
import React from 'react';
import styled from 'styled-components';

// Styled component for TitleSubtitle
const StyledTitleSubtitle = styled.div`
    // Add your styles here
`;

// TitleSubtitle functional component
const TitleSubtitle: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
    return (
        <StyledTitleSubtitle>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </StyledTitleSubtitle>
    );
};

export default TitleSubtitle; 