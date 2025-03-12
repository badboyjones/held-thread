/**
 * App component serves as the root component for the Held Thread website.
 * Handles routing and global styling.
 * 
 * Features:
 * - Client-side routing
 * - Global styles
 * - Error boundaries
 * - Accessibility features
 */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Resources from './pages/Resources';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';
import Learn from './pages/Learn';

// Create a layout wrapper to handle the fixed navbar spacing
const PageWrapper = styled.div`
  // Add padding to account for the fixed navbar
  padding-top: 60px; // Adjust this value to match your navbar height
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// Create a main content wrapper
const MainContent = styled.main`
  flex: 1;
`;

const App: React.FC = () => {
    return (
        <Router basename="/held-thread">
            <Navbar />
            <PageWrapper>
                <MainContent>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/learn" element={<Learn />} />
                        {/* TODO: Add these routes once pages are created */}
                        {/* <Route path="/classes" element={<ClassesPage />} /> */}
                        {/* <Route path="/inquire" element={<InquirePage />} /> */}
                        <Route path="/resources" element={<Resources />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </MainContent>
                <Footer />
            </PageWrapper>
        </Router>
    );
};

export default App;
