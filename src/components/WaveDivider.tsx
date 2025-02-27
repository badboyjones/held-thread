import React from 'react';
import styled from 'styled-components';

/**
 * WaveDivider component renders two sections with a wave SVG divider.
 * It accepts colors for the background and the wave as props.
 */
interface WaveDividerProps {
  backgroundColor: string; // Background color for the top section
  waveColor: string;       // Color for the wave
}

const WaveContainer = styled.div<{ $backgroundColor: string }>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  width: 100%;
  overflow: hidden;
`;

const Wave = styled.svg<{ $waveColor: string }>`
  fill: ${({ $waveColor }) => $waveColor};
`;

const WaveDivider: React.FC<WaveDividerProps> = ({ backgroundColor, waveColor }) => {
  const getSvgHeight = (amplitude: number): number => {
    return Math.max(50, amplitude + 20);
  };

  const generateWavePath = () => {
    const amplitude = 40; // Use a static value or define it as needed
    const waves = 2; // Use a static value or define it as needed
    const phaseShift = 0; // Use a static value or define it as needed
    const height = getSvgHeight(amplitude);
    const points = [];
    const segments = 100;

    points.push(`M 0,${height}`);
    points.push('L 0,' + (height / 2));

    for (let i = 0; i <= segments; i++) {
      const x = (i / segments) * 500;
      const radians = (x / 500) * Math.PI * 2 * waves + (phaseShift * Math.PI / 180);
      const y = (height / 2) + Math.sin(radians) * (amplitude / 2);
      points.push(`${i === 0 ? 'M' : 'L'} ${x},${y}`);
    }

    points.push(`L 500,${height} L 0,${height} Z`);

    return points.join(' ');
  };

  const svgHeight = getSvgHeight(40); // Use a static value or define it as needed

  return (
    <WaveContainer $backgroundColor={backgroundColor}>
      <div style={{ maxWidth: '100%', margin: '0 auto' }}>
        <div style={{
          padding: '2rem',
          paddingBottom: `calc(2rem + ${svgHeight}px)`,
          position: 'relative',
        }}>
          <Wave
            $waveColor={waveColor}
            style={{ position: 'absolute', bottom: 0, left: 0, width: '100vw' }}
            height={svgHeight}
            viewBox={`0 0 500 ${svgHeight}`}
            preserveAspectRatio="none"
          >
            <path
              d={generateWavePath()}
              style={{ transition: 'all 0.3s ease-in-out' }}
            />
          </Wave>
        </div>

        <div style={{ backgroundColor: '#ffe6e6', marginTop: '-1px' }}>
          {/* Content for Section 2 can be added here */}
        </div>
      </div>
    </WaveContainer>
  );
};

export default WaveDivider; 