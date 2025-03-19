import React from 'react';
import styled from 'styled-components';

/**
 * SuccessMessage component - Displays a success notification after form submission
 * Provides visual feedback to users when their message has been sent successfully
 */
const SuccessMessage: React.FC<{ message: string; onClose: () => void }> = ({ message, onClose }) => {
  // Step 1: Set up auto-dismiss after 5 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    
    // Clean up the timer
    return () => clearTimeout(timer);
  }, [onClose]);

  // Step 2: Render the success message with close button
  return (
    <MessageContainer>
      <MessageContent>
        <p>{message}</p>
        <CloseButton onClick={onClose}>×</CloseButton>
      </MessageContent>
    </MessageContainer>
  );
};

// Styled components for the success message
const MessageContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  animation: slideIn 0.3s ease-out;
  
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const MessageContent = styled.div`
  background-color: ${props => props.theme.colors.sage};
  color: ${props => props.theme.colors.black};
  border-radius: 50px;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  p {
    margin: 0;
    font-weight: 500;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.black};
  font-size: 1.5rem;
  cursor: pointer;
  margin-left: 1rem;
  line-height: 1;
`;

export default SuccessMessage; 