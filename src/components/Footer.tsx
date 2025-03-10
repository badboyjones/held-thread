/**
 * Footer Component
 * 
 * Responsive Layout Structure:
 * Desktop (>1024px): Three columns - Links | Resources | Newsletter
 * Tablet (768px-1024px): Two columns - (Links, Resources) | Newsletter
 * Mobile (<768px): Single column - All sections stack vertically
 */
import styled from 'styled-components'
import { Link } from 'react-router-dom'

/**
 * Main footer wrapper that spans full width
 * Centers the content horizontally
 */
const FooterContainer = styled.footer`
  background-color: #f3f4f6;
  width: 100%;
  display: flex;
  justify-content: center;
`

/**
 * Grid container that defines the footer's layout structure
 * Uses named grid areas for clear organization:
 * - First row: logo | links | space | newsletter
 * - Second row: footer (spans full width)
 */
const FooterContent = styled.div`
  // Step 1: Base styles
  max-width: 1200px;
  width: 100%;
  display: grid;
  gap: 2rem;
  padding: 2rem;

  // Step 2: Responsive grid layouts
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 
      "links space newsletter"
      "footer footer footer";
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 2fr 1fr;
    grid-template-areas: 
      "links newsletter"
      "space newsletter"
      "footer footer";
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-areas: 
      "links"
      "space"
      "newsletter"
      "footer";
  }
`

/**
 * Section Components
 * Each corresponds to a named grid area
 */
// const LogoSection = styled.div`
//   grid-area: logo;
// `

const LinksSection = styled.div`
  grid-area: links;
`

const SpaceSection = styled.div`
  grid-area: space;
`

const NewsletterSection = styled.div`
  grid-area: newsletter;

  // Step 3: Responsive newsletter heading
  h2 {
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    margin-bottom: 1rem;
  }
`

const FooterBottom = styled.div`
  grid-area: footer;
  text-align: center;
  color: ${props => props.theme.colors.black};
  
  // Step 4: Responsive padding for footer bottom
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`

/**
 * Typography and Content Styling
//  */
// const LogoText = styled.h1`
//   font-size: 1.5rem;
//   color: ${props => props.theme.colors.plum};
//   margin: 0;
// `

/**
 * Navigation section styling
 * Used in both Links and Space sections
 */
const NavSection = styled.div`
  // Step 5: Responsive navigation sections
  h3 {
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    margin-bottom: clamp(0.75rem, 2vw, 1rem);
    color: ${props => props.theme.colors.black};
  }

  // Add margin bottom on mobile
  @media (max-width: 767px) {
    margin-bottom: 1.5rem;
  }
`

/**
 * Navigation links container
 * Displays links in a vertical column
 */
const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  // Step 6: Responsive link styling
  a {
    color: ${props => props.theme.colors.black};
    text-decoration: none;
    font-size: clamp(0.875rem, 1.5vw, 1rem);
    padding: 0.5rem 0;

    &:hover {
      color: ${props => props.theme.colors.white};
    }

    // Larger touch targets on mobile
    @media (max-width: 767px) {
      padding: 0.75rem 0;
    }
  }
`

/**
 * Newsletter iframe styling
 * Embeds the Buttondown newsletter signup form
 */
const NewsletterIframe = styled.iframe`
  width: 100%;
  height: auto;
  min-height: 150px;
  border: 0;
  background-color: '#fff';
  overflow: hidden;
  margin: 0;
  padding: 0;
  border-radius: 4px;
  box-shadow: none;
  display: block;
  max-width: 100%;

  // Step 7: Adjust iframe height on mobile
  @media (max-width: 767px) {
    min-height: 200px;
  }
`

/**
 * Footer Component Implementation
 * Assembles all sections into the final layout
 */
const Footer = () => {
  // Step 1: Get current year
  const currentYear = new Date().getFullYear()

  return (
    <FooterContainer>
      <FooterContent>
        {/* Brand Logo Section
        <LogoSection>
          <LogoText>Held Thread</LogoText>
        </LogoSection> */}

        {/* Main Navigation Links */}
        <LinksSection>
          <NavSection>
            <h3><Link to="/">HELD THREAD</Link></h3>
            <NavLinks>
              <Link to="/">Home</Link>
              <Link to="/about">About Held Thread</Link>
              <Link to="/resources">More About Handwork</Link>
              <Link to="/learn">Learn With Us</Link>
            </NavLinks>
          </NavSection>
        </LinksSection>

        {/* Resources Navigation */}
        <SpaceSection>
          <NavSection>
 
          </NavSection>
        </SpaceSection>

        {/* Newsletter Signup Section */}
        <NewsletterSection>
          <h2>Sign Up For the Newsletter</h2>
          <NewsletterIframe
            src="https://buttondown.com/held.thread.handwork?as_embed=true"
            title="Newsletter signup form"
          />
        </NewsletterSection>

        {/* Copyright Notice */}
        <FooterBottom>
          <p>© {currentYear} Held Thread. All rights reserved.</p>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer 