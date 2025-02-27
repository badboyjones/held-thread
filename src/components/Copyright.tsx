/**
 * Copyright component displays the copyright information for the application.
 * It includes the year and the name of the organization.
 * The text is positioned at the bottom of its container.
 */

import React from 'react';
import styled from 'styled-components';

// Styled component for the copyright section that maintains bottom alignment
const CopyrightContainer = styled.div`
    // Ensure container takes full height and sets up flex positioning
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    text-align: center;
    color: ${props => props.theme.colors.black};
`;

// Style the copyright text with margin to ensure clean bottom spacing
const CopyrightText = styled.p`
    margin: 0;
    line-height: 1.5;
`;

const Copyright: React.FC = () => {
    return (
        <CopyrightContainer>
            <CopyrightText>
                © {new Date().getFullYear()} Held Thread Handwork. All rights reserved.
            </CopyrightText>
        </CopyrightContainer>
    );
};

export default Copyright; 