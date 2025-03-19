import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import SuccessMessage from '../components/SuccessMessage';
import WaveDivider from '../components/WaveDivider';

// Declare the emailjs type to avoid TypeScript errors
declare global {
  interface Window {
    emailjs: any;
  }
}

/**
 * ContactPage component - Displays a contact form and information
 * Allows visitors to reach out to Held Thread for inquiries using EmailJS
 */
const ContactPage: React.FC = () => {
  // Step 1: Set up state and refs
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Step 2: Load the EmailJS script
  useEffect(() => {
    // Add EmailJS script to the document
    const script = document.createElement('script');
    script.src = 'https://cdn.emailjs.com/dist/email.min.js';
    script.async = true;
    document.body.appendChild(script);
    
    // Initialize EmailJS when script loads
    script.onload = () => {
      window.emailjs.init('RbTpTi0fCM0-Wl-Bv');
    };
    
    // Clean up
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // Step 3: Define the email sending function
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    // Set submitting state to show loading indicator
    setIsSubmitting(true);

    // Use EmailJS to send the form data
    window.emailjs
      .sendForm('service_vzobcye', 'template_yx7tzqt', form.current)
      .then(
        () => {
          console.log('SUCCESS!');
          setShowSuccess(true);
          if (form.current) form.current.reset();
        },
        (error: any) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again later.');
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  // Step 4: Define the page structure with title and description
  return (
    <>
      <ContactContainer>
        {showSuccess && (
          <SuccessMessage 
            message="Message sent successfully! We'll get back to you soon." 
            onClose={() => setShowSuccess(false)} 
          />
        )}
        
        <ContactHeader>
          <h1>Let's get in touch!</h1>
        
          <p>Say hello at <a href="mailto:hello@heldthreadhandwork.com">hello@heldthreadhandwork.com</a>!<br />
          <a href="https://buttondown.com/held.thread.handwork?as_embed=true">Sign up</a> for my newsletter!<br />
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdAmp102YfEhFMvZLKhpBM_srUrXGv4lY3AKQrkP2pxYcMGMw/viewform">Inquire</a> about lessons!<br />
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdAmp102YfEhFMvZLKhpBM_srUrXGv4lY3AKQrkP2pxYcMGMw/viewform">Join the waitlist</a> for my upcoming workshops and classes!<br  /></p>
          <p> <b>or fill out the form below and I will get in touch as soon as I can!</b></p>

         </ContactHeader>
        <ContactForm ref={form} onSubmit={sendEmail}>
          <FormGroup>
            <label htmlFor="user_name">Name</label>
            <input type="text" id="user_name" name="user_name" required />
          </FormGroup>
          
          <FormGroup>
            <label htmlFor="user_email">Email</label>
            <input type="email" id="user_email" name="user_email" required />
          </FormGroup>
          
          <FormGroup>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
          </FormGroup>
          
          <FormGroup>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required></textarea>
          </FormGroup>
          
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
        </ContactForm>
      </ContactContainer>
      <WaveDivider backgroundColor="#ffffff" waveColor="#f3f4f6" />
    </>
  );
};

// Styled components for the contact page
const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactHeader = styled.div`
  text-align: center;
  
  h1 {
    color: ${props => props.theme.colors.black};
    margin-bottom: 1rem;
  }
  
  p {
    color: ${props => props.theme.colors.black};
    font-size: 1.1rem;
    text-align: center;
    font-weight: 200;
  }

  b {
    font-weight: 800;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: ${props => props.theme.colors.sky};
  border-radius: 50px;
  padding: 2rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  label {
    font-weight: 500;
    color: ${props => props.theme.colors.black};
  }
  
  input, textarea {
    padding: 0.75rem;
    border: 1px solid ${props => props.theme.colors.lavender};
    border-radius: 50px;
    font-family: inherit;
    
    &:focus {
      outline: 2px solid #73b6d5;
    }
  }
  
  textarea {
    border-radius: 25px;
  }
`;

const SubmitButton = styled.button`
  background-color: #73b6d5;
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  align-self: flex-start;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.sky};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export default ContactPage; 