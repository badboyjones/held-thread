/**
 * Styled components for the Button component.
 * Handles visual styling and hover effects.
 */
import styled, { css } from 'styled-components';

interface StyledButtonProps {
    $backgroundColor: string;
    $color: string;
    $padding: string;
    $borderRadius: string;
    $margin: string;
    $hoverColor?: string;
    $hoverTextColor?: string;
}

// Shared styles between button and anchor
const sharedStyles = css<StyledButtonProps>`
    display: inline-block;
    background-color: ${props => props.$backgroundColor};
    color: ${props => props.$color};
    padding: ${props => props.$padding};
    border-radius: ${props => props.$borderRadius};
    margin: ${props => props.$margin};
    text-decoration: none;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    border: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: ${props => props.$hoverColor || props.$backgroundColor};
        color: ${props => props.$hoverTextColor || props.$color};
        transform: translateY(-2px);
    }

    &:focus {
        outline: 2px solid ${props => props.$color};
        outline-offset: 2px;
    }

    &:active {
        transform: translateY(0);
    }
`;

export const StyledAnchor = styled.a<StyledButtonProps>`
    ${sharedStyles}
`;

export const StyledButton = styled.button<StyledButtonProps>`
    ${sharedStyles}
`; 