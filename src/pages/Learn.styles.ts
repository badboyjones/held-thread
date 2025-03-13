import styled from 'styled-components'

/**
 * Styled components for the Learn page
 * Following the warm, traditional aesthetic with subtle whimsy
 */

export const HeroSection = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
`

export const PageTitle = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 3rem;
  margin-bottom: 1rem;
`

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.5rem;
  margin-bottom: 2rem;
`

export const HeroImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 8px;
  margin-top: -2rem;
`

export const IntroSection = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  
  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.black};
  }
`

export const ClassOptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-bottom: 4rem;
`

export const ClassCard = styled.div`
  background: ${({ theme }) => theme.colors.sky};
  border-radius: 50px;
  text-align: center;
  padding: 2rem;
  
  h3 {
    color: ${({ theme }) => theme.colors.black};
    margin: 1rem 0;
  }
  
  p {
    color: ${({ theme }) => theme.colors.black};
    line-height: 1.4;
  }
`

export const ClassCardButton = styled.a`
    // Step 1: Set basic button styling
    background-color:rgb(154, 206, 230);
    color: #fff;
    border-radius: 50px;
    padding: 10px 20px;
    border: none;
    text-decoration: none;
    display: inline-block;
    
    // Step 2: Add hover effects
    &:hover {
        background-color: rgb(119, 189, 222);
        color: #FFFFFF;
        transform: translateY(-2px);
        transition: all 0.2s ease-in-out;
    }
    
    // Step 3: Set positioning and spacing
    margin-top: 1rem;
    align-self: center;
`;

export const SignUpSection = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 4rem;
  
  h2 {
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 2rem;
    line-height: 1.6;
  }
`

export const PageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
  width: 100%;
` 