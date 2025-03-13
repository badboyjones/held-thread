/**
 * CommunitySection displays local craft communities and learning opportunities
 */
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-top: 10rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};

  h2 {
    font-size: clamp(1.5rem, 4vw, 2rem);
  }

  p {
    font-size: clamp(1rem, 3vw, 1.2rem);
  }
`;

const ShopList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.white};

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "shop1 shop1 img1"
      "img2 shop2 shop2"
      "shop3 shop3 img3"
      "img4 shop4 shop4"
      "shop5 shop5 img5"
      "img6 shop6 shop6"
      "shop7 shop7 img7"
      "img8 shop8 shop8"
      "shop9 shop9 img9"
      "img10 shop10 shop10"
      "shop11 shop11 img11";
  }
`;

const ShopItem = styled.li`
  list-style-type: none;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};

  @media (min-width: 768px) {
    &:nth-of-type(1) { grid-area: shop1; }
    &:nth-of-type(2) { grid-area: shop2; }
    &:nth-of-type(3) { grid-area: shop3; }
    &:nth-of-type(4) { grid-area: shop4; }
    &:nth-of-type(5) { grid-area: shop5; }
    &:nth-of-type(6) { grid-area: shop6; }
    &:nth-of-type(7) { grid-area: shop7; }
    &:nth-of-type(8) { grid-area: shop8; }
  }
`;

const ShopImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 1;
  border-radius: 20px;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const ShopText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  margin-bottom: 1rem;
  margin-top: 0;
  line-height: 1.5;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: clamp(0.9rem, 2vw, 1rem);
`;

const ShopName = styled.h3`
  color: #93a172;
  text-decoration: none;
  margin-bottom: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: clamp(1.1rem, 3vw, 1.3rem);
`;

const ShopAddress = styled.h4`
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 0.5rem;
  margin-top: 0;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: clamp(0.9rem, 2vw, 1rem);
  font-weight: normal;
`;


export const CommunitySection: React.FC = () => {
  return (
    <Section>
      <h2>Local Yarn Shops</h2>
      <p>We are lucky to live in a city with such a variety of yarn shops. Each of these are special in their own way, but I've included a little description for each to help you choose the right one. You should also know that if you're having trouble with your project, you can typically take you project into a shop like this and they will be happy to troubleshoot the issue with you! </p>
      <ShopList>
        <ShopItem>
          <ShopName>Portland Starlight Knitting Society</ShopName>
          <ShopAddress>7028 SE 52nd Ave, Portland, OR 97206</ShopAddress>
          <ShopText>A very cute shop with a great selection of yarns, friendly staff, and some fun accessories and books. Very cosy atmosphere, too!</ShopText>
        </ShopItem>
        <ShopItem>
          <ShopName>Fiber Rhythm Craft and Design</ShopName>
          <ShopAddress>2505 SE 11th Ave STE 119 Entrance on SE Division at SE 10th Ave</ShopAddress>
          <ShopText>An extremely friendly and cool place with a LARGE selection of yarns, books, and supplies. They are great and very eager to help!</ShopText>
        </ShopItem>

        <ShopItem>
          <ShopName>Northwest Wools</ShopName>
          <ShopAddress>3524 SW Troy St</ShopAddress>
          <ShopText>A lovely shop with great selection.</ShopText>
        </ShopItem>

        <ShopItem>
          <ShopName>Ritual Dyes</ShopName>
          <ShopAddress>1117 SE Division St</ShopAddress>
          <ShopText>Beautiful, hand dyed yarns in all sorts of colors.</ShopText>
        </ShopItem>

        <ShopItem>
          <ShopName>Backstory Books</ShopName>
          <ShopAddress>3129 SE Hawthorne Blvd</ShopAddress>
          <ShopText>A well kept secret, this bookstore has a great and eclectic variety of second hand yarns for really good prices! You can even trade in old yarn and books for credit.</ShopText>
        </ShopItem>

        <ShopItem>
          <ShopName>SCRAP PDX</ShopName>
          <ShopAddress>1736 SW Alder St</ShopAddress>
          <ShopText>Scrap is a creative reuse center with a great selection of yarns, books, and supplies of all kinds.</ShopText>
        </ShopItem>

        <ShopImage src="https://lh3.googleusercontent.com/p/AF1QipOfKXfa-ST6ItZnXqFUstCbmjjHLHDvvt10zWyw=s1360-w1360-h1020" alt="Portland Starlight Knitting Society" />
        <ShopImage src="https://lh3.googleusercontent.com/p/AF1QipN7RCOwAVMfbMCE0VvnZlNJybPZwsm52mMCGbKV=s1360-w1360-h1020" alt="Fiber Rhythm Craft and Design" />
        <ShopImage src="https://lh3.googleusercontent.com/p/AF1QipNoXq2kysStM9WF9rINgb6p6H2Wh8PxcWTYbvo1=s1360-w1360-h1020" alt="Northwest Wools" />
        <ShopImage src="https://lh3.googleusercontent.com/p/AF1QipM2XKInPzsW9s1c48XFpaJtjPJXRWmG95qprU1b=s1360-w1360-h1020" alt="Ritual Dyes" />
        <ShopImage src="https://lh3.googleusercontent.com/p/AF1QipPicfK-A_3mu2yM8G06UaBAflXgaCb67ikhB7yE=s1360-w1360-h1020" alt="Backstory Books" />
        <ShopImage src="https://portland.scrapcreativereuse.org/files/galleries/PDX_Store_front2.JPG" alt="SCRAP PDX" />

      </ShopList>
    </Section>
  );
}; 