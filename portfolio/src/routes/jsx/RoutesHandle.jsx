import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import PortfolioRoutes from '@routes/jsx/PortfolioRoutes';
import NotFoundPage from '@pages/not_found/jsx/NotFoundPage';

const RoutesHandle = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate replace to="/Portfolio" />}
                />
                <Route
                    path="/Portfolio/*"
                    element={<PortfolioRoutes />}
                />
                <Route 
                    path="/*" 
                    element={<NotFoundPage />}
                />
            </Routes>
        </Router>
    );
}

export default RoutesHandle;
