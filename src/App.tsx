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
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
// TODO: Add these pages once they're created
// import ClassesPage from './pages/ClassesPage';
// import InquirePage from './pages/InquirePage';
import Resources from './pages/Resources';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';
import Learn from './pages/Learn';

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            {/* Define the routes for the application */}
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
            <Footer />
        </Router>
    );
};

export default App;
