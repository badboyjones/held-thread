/**
 * AboutHandworkSection component presents the philosophy and importance of handwork
 * with an image and descriptive text.
 * 
 * Features:
 * - Responsive layout with image and text side by side
 * - Call-to-action buttons
 * - Accessible structure
 * - Image rotation for proper display
 */
import React from 'react';
import {
    Section,
    Content,
    TextContent,
    Title,
    Description,
    ImageContainer,
    Image
} from './AboutHandworkSection.styles';

interface AboutHandworkSectionProps {
    image: string;
    backgroundColor: string;
    children?: React.ReactNode;
}

const ABOUT_HANDWORK_TEXT = `In a world full of screens and distractions, handwork gives us the chance to slow down,
focus, and create with our own hands.

The deep and complex tradition of handwork isn't about a finished product, but a way to build the self. Working with yarn, fabric, and thread work to strengthen physical skills like fine motor control as well as a greater sense of rhythm in the body and world.

We have to remember that these skills have been passed down for millennia. Working with your hands is a connection to tradition and community. We take these skills and make them our own, creating our own traditions and stories together. The world becomes a more beautiful place when we share this task with one another.

At Held Thread, handwork is more than craft. It's a way to help us grow, one stitch at a time.`;

const AboutHandworkSection: React.FC<AboutHandworkSectionProps> = ({
    image,
    backgroundColor,
    children
}) => {
    return (
        <Section backgroundColor={backgroundColor}>
            <Content>
                {/* Step 1: Display the content */}
                <TextContent>
                    <Title>why handwork?</Title>
                    <Description>
                        {ABOUT_HANDWORK_TEXT}
                    </Description>
                    {children}
                </TextContent>

                {/* Step 2: Display the image */}
                <ImageContainer>
                    <Image 
                        src={image} 
                        alt="Natural dye colour wheel"
                        loading="lazy"
                    />
                </ImageContainer>
            </Content>
        </Section>
    );
};

export default AboutHandworkSection; 