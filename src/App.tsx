/**
 * The main application component that sets up routing for the application.
 * It defines the routes for the homepage, about page, classes page, inquiry page, resources page, and 404 page.
 */

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/theme';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ClassesPage from './pages/ClassesPage';
import InquiryPage from './pages/InquiryPage';
import ResourcesPage from './pages/ResourcesPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
    // Wrap the application in Router for routing functionality
    return (
        <Router>
            <GlobalStyle />
            <Navbar />
            {/* Define the routes for the application */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/classes" element={<ClassesPage />} />
                <Route path="/inquiry" element={<InquiryPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};

export default App;
