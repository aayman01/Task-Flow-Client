import { useSession } from '@/context/SessionContext';
import { Navigate } from 'react-router';

const ProtectedRoute = ({ children }) => {
    const {isLoggedIn} = useSession();
    return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;