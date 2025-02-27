/**
 * WaveDivider component creates a decorative wave pattern transition
 * between different sections of the page.
 * 
 * Features:
 * - Customizable colors
 * - Responsive wave pattern
 * - Decorative SVG element
 */
import React from 'react';
import { WaveContainer, Wave } from './WaveDivider.styles';

interface WaveDividerProps {
    backgroundColor: string;
    waveColor: string;
}

const WaveDivider: React.FC<WaveDividerProps> = ({
    backgroundColor,
    waveColor
}) => {
    return (
        <WaveContainer backgroundColor={backgroundColor}>
            {/* Step 1: Render wave SVG pattern */}
            <Wave 
                waveColor={waveColor}
                viewBox="0 0 1200 120" 
                preserveAspectRatio="none"
                role="presentation"
                aria-hidden="true"
            >
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
            </Wave>
        </WaveContainer>
    );
};

export default WaveDivider; 