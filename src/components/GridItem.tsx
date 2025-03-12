/**
 * GridItem component represents an individual item in the grid.
 * It can span multiple rows or columns based on the provided props.
 */

import React from 'react';
import styled from 'styled-components';

// Styled component for individual grid items
const StyledGridItem = styled.div<{ rowSpan?: number; colSpan?: number }>`
    grid-row: span ${props => props.rowSpan || 1};
    grid-column: span ${props => props.colSpan || 1};
`;

// Props for the GridItem component
interface GridItemProps {
    rowSpan?: number;
    colSpan?: number;
    children?: React.ReactNode;
}

// Main GridItem component
const GridItem: React.FC<GridItemProps> = ({ rowSpan, colSpan, children }) => {
    return (
        <StyledGridItem rowSpan={rowSpan} colSpan={colSpan}>
            {children}
        </StyledGridItem>
    );
};

// Export the GridItem component
export default GridItem; 