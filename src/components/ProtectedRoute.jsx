import { Navigate } from 'react-router';

const ProtectedRoute = ({ children }) => {
    const isLoggedIn = true;
    return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;