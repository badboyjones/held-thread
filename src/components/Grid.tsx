/**
 * Grid component creates a flexible grid layout.
 * It allows specifying the number of rows and columns,
 * and supports sections that can span multiple rows or columns.
 */

import React from 'react';
import styled from 'styled-components';

// Styled component for the grid container
const GridContainer = styled.div<{ rows: number; columns: number }>`
    display: grid;
    grid-template-rows: repeat(${props => props.rows}, 1fr);
    grid-template-columns: repeat(${props => props.columns}, 1fr);
    gap: 10px; /* Adjust gap between grid items */
    
`;

// Styled component for individual grid items
const GridItem = styled.div<{ rowSpan?: number; colSpan?: number }>`
    grid-row: span ${props => props.rowSpan || 1};
    grid-column: span ${props => props.colSpan || 1};
    background-color: #f0f0f0; /* Default background color */
`;

// Props for the Grid component
interface GridProps {
    rows: number;
    columns: number;
    children: React.ReactNode;
}

// Main Grid component
const Grid: React.FC<GridProps> = ({ rows, columns, children }) => {
    return (
        <GridContainer rows={rows} columns={columns}>
            {children}
        </GridContainer>
    );
};

// Export the Grid component
export default Grid; 