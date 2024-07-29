import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from '@pages/home/jsx/HomePage';
import AboutPage from '@pages/about/jsx/AboutPage';
import ProjectsPage from '@pages/projects/jsx/ProjectsPage';
import ContactPage from '@pages/contact/jsx/ContactPage';
import BlogPage from '@pages/blog/jsx/BlogPage';
import CurriculumPage from '@pages/curriculum/jsx/CurriculumPage';
import NotFoundPage from '@pages/not_found/jsx/NotFoundPage';

const PortfolioRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Navigate replace to="Home" />}
            />
            <Route
                key="/Home"
                path="/Home"
                element={<HomePage />}
            />
            <Route
                key="/About"
                path="/About"
                element={<AboutPage />}
            />
            <Route
                key="/Projects"
                path="/Projects"
                element={<ProjectsPage />}
            />
            <Route
                key="/Contact"
                path="/Contact"
                element={<ContactPage />}
            />
            <Route
                key="/Blog"
                path="/Blog"
                element={<BlogPage />}
            />
            <Route
                key="/Curriculum"
                path="/Curriculum"
                element={<CurriculumPage />}
            />
            <Route 
                path="/*" 
                element={<NotFoundPage />}
            />
        </Routes>
    );
}

export default PortfolioRoutes;
