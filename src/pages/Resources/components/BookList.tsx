/**
 * BookList component displays recommended books for handwork learning
 */
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin: 2rem 0;
`;

const BookListItem = styled.li`
  list-style-type: none;
  padding: 0;
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.5rem;

`;
const BookListItemLink = styled.a`
  color: '#5c94ae';
  text-decoration: none;
  font-weight: bold;
  line-height: .5rem;
  margin-bottom: .5rem;
`;
const BookListItemDescription = styled.p`
  margin-bottom: 1rem;
  margin-top: 0;
`;

export const BookList: React.FC = () => {
  return (
    <Section>
      <h2>Book Recommendations</h2>
      <p>
        Here are some sweet books I have found to be endearing and helpful in learning.
        Most of these are free to read online, and some are available to purchase.
        I hope you find them useful!
      </p>
      <h3>Knitting Books</h3>
      <ul>
        <BookListItem>
          <BookListItemLink href="https://openlibrary.org/works/OL2738728W/Kids_Knitting?edition=key%3A/books/OL697277M">
            - Kids Knitting
          </BookListItemLink>
          <BookListItemDescription>
            One of the sweetest books I have found for kids to learn how to knit. This book is an all time favorite of mine.
          </BookListItemDescription>
        </BookListItem>
        <BookListItem>
          <BookListItemLink href="https://openlibrary.org/works/OL5716439W/Kids_knit%21?edition=key%3A/books/OL20944275M">
            -Kids Knit!: Simple Steps to Nifty Projects
          </BookListItemLink>
          <BookListItemDescription>
            Another great, simple book full of engaging projects and beautiful photos. I love these knitting books from the 90s and early 2000s. They really capture the spirit and fun of knitting.
          </BookListItemDescription>
        </BookListItem>
      </ul>
      <h3>Crochet Books</h3>
      <ul>
        <BookListItem>
          <BookListItemLink href="https://archive.org/details/kidscrochet0000ronc/mode/2up?view=theater">
            - Kids Crochet
          </BookListItemLink>
          <BookListItemDescription>
            Another one from the 90s, this one has great illustrations and covers all the basics and some pretty fun projects, too. The scan on this site has a little note written on the front page, pretty delightful.
          </BookListItemDescription>
        </BookListItem>
      </ul>
      <h3>On Handwork Education</h3>
      <ul>
        <BookListItem>
          <BookListItemLink href="https://archive.org/details/waldorfeducation0000unse/page/14/mode/2up?ref=ol&view=theater">
            - Waldorf Education: A Family Guide
          </BookListItemLink>
          <BookListItemDescription>
            This book is a great resource for families seeking insight into Waldorf philosophy and its perspective on handwork.
          </BookListItemDescription>
        </BookListItem>
      </ul>
    </Section>
  );
}; 