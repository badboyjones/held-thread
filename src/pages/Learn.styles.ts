import styled from 'styled-components'

/**
 * Styled components for the Learn page
 * Following the warm, traditional aesthetic with subtle whimsy
 */

export const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
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

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`

export const SkillCard = styled.div`
  background: ${({ theme }) => theme.colors.warmYellow};
  border-radius: 8px;
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

export const SkillIcon = styled.img`
  width: 80px;
  height: 80px;
  margin: 1rem auto;
`

export const ClassOptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`

export const ClassCard = styled.div`
  background: ${({ theme }) => theme.colors.peach};
  border-radius: 8px;
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

export const FAQSection = styled.div`
  max-width: 800px;
  margin: 0 auto 4rem;
  text-align: center;

  h2 {
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 2rem;
  }

  .styled-button {
    margin-top: 2rem;
  }
`

export const FAQItem = styled.div`
  text-align: left;
  margin-bottom: 2rem;

  h3 {
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  p {
    color: ${({ theme }) => theme.colors.black};
    line-height: 1.6;
  }
`

export const PageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
  width: 100%;
` 