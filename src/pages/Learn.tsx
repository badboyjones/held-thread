/**
 * Learn Page Component
 * Displays information about handwork classes and programs offered
 * Structured to guide parents through the learning opportunities available
 */

import React from 'react';
import Button from '../components/Button';
import { PageContainer } from '../components/PageContainer.tsx';
import { HeroSection, PageTitle, SubTitle, HeroImage, IntroSection, SkillsGrid, SkillCard, SkillIcon, ClassOptionsGrid, ClassCard, SignUpSection, FAQSection, FAQItem } from './Learn.styles';

const Learn: React.FC = () => {
    // Step 1: Define the skills data
    const skills = [
        { title: 'Knitting', description: 'Building patience and focus through the rhythmic art of knitting' },
        { title: 'Embroidery', description: 'Developing fine motor skills and creative expression' },
        { title: 'Weaving', description: 'Understanding patterns and building confidence' },
        { title: 'Hand-Sewing', description: 'Learning practical skills while building independence' }
    ];

    // Step 2: Define the class options
    const classOptions = [
        {
            title: 'Private Lessons',
            description: 'One-on-one sessions tailored to the interests and skill level of the student.'
        },
        {
            title: 'Group Lessons & Workshops',
            description: 'Our classes fill up fast! Sign up for the waitlist to be notified as new opportunities become available.'
        }
    ];

    // Step 3: Define FAQ items
    const faqItems = [
        {
            question: 'What ages do you teach?',
            answer: 'Our classes are designed for children ages 6-14.'
        },
        {
            question: 'Where are classes held?',
            answer: 'All classes are held in-person in our warm and welcoming studio space.'
        },
        {
            question: 'How long are the sessions?',
            answer: 'Private lessons are 60 minutes, while group classes typically run for 90 minutes.'
        }
    ];

    return (
        <PageContainer>
            <HeroSection>
                <PageTitle>Let's Learn Together</PageTitle>
                <SubTitle>Handwork Classes for All</SubTitle>
                <HeroImage src="src/images/card images/card images/Transparent Stars.png" alt="Children engaged in handwork" />
            </HeroSection>

            <IntroSection>
                <p>My classes are designed to be accessible to people of all ages and skill levels, teaching what is both engaging and enriching for the student.</p>
                <p>Basing my scope and sequence of skills on the Waldorf handwork curriculum, I offer classes in knitting, crochet, embroidery, weaving, and hand- and machine-sewing.</p>
                <p>I also offer private lessons for those who would like to focus on a specific skill or project as well as group classes for those who would like to learn together.</p>
                
            </IntroSection>

            <SkillsGrid>
                {skills.map(skill => (
                    <SkillCard key={skill.title}>
                        <SkillIcon src={`/images/${skill.title.toLowerCase()}-icon.jpg`} alt={skill.title} />
                        <h3>{skill.title}</h3>
                        <p>{skill.description}</p>
                    </SkillCard>
                ))}
            </SkillsGrid>

            <ClassOptionsGrid>
                {classOptions.map(option => (
                    <ClassCard key={option.title}>
                        <h3>{option.title}</h3>
                        <p>{option.description}</p>
                    </ClassCard>
                ))}
            </ClassOptionsGrid>

            <SignUpSection>
                <h2>Join Our Community</h2>
                <p>Classes are offered on a waitlist basis to ensure each child receives the attention they deserve. Sign up below to be notified when spots become available.</p>
                <Button to="/inquiry">Join the Waitlist</Button>
            </SignUpSection>

            <FAQSection>
                <h2>Frequently Asked Questions</h2>
                {faqItems.map(item => (
                    <FAQItem key={item.question}>
                        <h3>{item.question}</h3>
                        <p>{item.answer}</p>
                    </FAQItem>
                ))}
                <Button to="/inquiry">Have More Questions?</Button>
            </FAQSection>
        </PageContainer>
    );
};

export default Learn; 