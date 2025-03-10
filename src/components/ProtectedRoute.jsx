import { useSession } from "@/context/SessionContext";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, isLoading } = useSession();
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg p-8 w-96">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Loading...
          </h2>
        </div>
      </div>
    );
  }
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
