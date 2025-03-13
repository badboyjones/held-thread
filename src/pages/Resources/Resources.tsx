/**
 * Resources component provides helpful resources and materials for families 
 * interested in handwork, reflecting Held Thread's teaching philosophy of 
 * patience, creativity, and resilience.
 */
import React from 'react';
import styled from 'styled-components';
import { PageContainer } from '../../components/Layout';
import WaveDivider from '../../components/WaveDivider';
import { IMAGES } from '../../constants/images';
import { BookList } from './components/BookList';
import { CommunitySection } from './components/CommunitySection';

// Style the main content container
const ContentWrapper = styled.div`
  max-width: 50%;
  margin: 0 auto;
  margin-top: 3rem;
  @media (max-width: 768px) {
        max-width: 80%;
    }
`;

const Divider = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
    z-index: -1;

    @media (max-width: 768px) {
        margin-top: 0;
        margin-bottom: 0rem;
    }
`;

// Style the introduction section
const Introduction = styled.div`
 
  
  h1 {
    color: ${({ theme }) => theme.colors.black};
    text-align: center;
    margin-top: -8rem;

  }
  
  p {
    color: ${({ theme }) => theme.colors.black};
    font-size: 1.125rem;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
    text-align: left;
    text-indent: 1rem;
    margin-bottom: 8rem;
    margin-top: 3rem;
  }
`;

const Resources: React.FC = () => {

    return (
        <>
            <PageContainer>
                <ContentWrapper>
                    <Divider src={IMAGES.CARDS.TRANSPARENT_STARS} alt="Decorative divider" />
                    <Introduction>
                        <h1>Handwork Resources</h1>
                        <p>
                            Handwork is a lifelong skill that has roots going backward and forward in time.
                            Through working and creating with our hands, we nurture patience,
                            creativity, and resilience. <br /> <br /> I've gotten together some
                            resources that may be helpful to you. I often
                            remind my students that in this kind of work, there is no mistake you can make that
                            someone hasn't made before. Hopefully, between these books, these shops (and don't forget
                            you can always ask me!), you'll figure out a solution that makes your skills even stronger than before.
                        </p>
                    </Introduction>
                    <BookList />
                    <CommunitySection />
                    {/* <Newsletter /> */}
                </ContentWrapper>
            </PageContainer>
            <WaveDivider backgroundColor="#ffffff" waveColor="#f3f4f6" />
        </>
    );
};

export default Resources; 