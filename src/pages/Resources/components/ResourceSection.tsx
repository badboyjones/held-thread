/**
 * ResourceSection component displays a categorized list of resources
 * with a title and optional description for each category.
 * Includes responsive design for various screen sizes.
 */
import React from 'react';
import styled from 'styled-components';

interface Category {
    title: string;
    items: string[];
    description?: string;
}

interface ResourceSectionProps {
    title: string;
    categories: Category[];
}

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.sage};
  border-radius: 8px;
  margin: 2rem auto;
  width: 100%;
  max-width: 1200px;
  
  padding: 2rem;
  @media (max-width: 768px) {
    padding: 0;
  }
  @media (max-width: 480px) {
    padding: 0;
  }
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.plum};
  margin-bottom: 1.5rem;
  font-size: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const CategoryContainer = styled.div`
  margin-bottom: 2rem;
  
  h3 {
    color: ${({ theme }) => theme.colors.plum};
    margin-bottom: 1rem;
    font-size: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }
  
  p {
    font-style: italic;
    margin-bottom: 1rem;
    line-height: 1.6;
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
  
  ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    
    @media (max-width: 480px) {
      grid-template-columns: 1fr;
      gap: 0.5rem;
    }
    
    li {
      color: ${({ theme }) => theme.colors.black};
      line-height: 1.4;
      
      @media (max-width: 480px) {
        font-size: 0.9rem;
      }
    }
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const ResourceSection: React.FC<ResourceSectionProps> = ({ 
    title, 
    categories 
}) => {
    return (
        <Section>
            <SectionTitle>{title}</SectionTitle>
            {categories.map((category, index) => (
                <CategoryContainer key={index}>
                    <h3>{category.title}</h3>
                    {category.description && <p>{category.description}</p>}
                    <ul>
                        {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                        ))}
                    </ul>
                </CategoryContainer>
            ))}
        </Section>
    );
}; 