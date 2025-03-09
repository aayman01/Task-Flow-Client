import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import LoginForm from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import Setup2FA from "./pages/Setup2FA";
import Verify2FA from "./pages/Verify2FA";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "./context/SessionContext";
import VerifyEmail from "./pages/VerifyEmail";

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/setup-2fa"
              element={
                <ProtectedRoute>
                  <Setup2FA />
                </ProtectedRoute>
              }
            />
            <Route
              path="/verify-2fa"
              element={
                <ProtectedRoute>
                  <Verify2FA />
                </ProtectedRoute>
              }
            />
            <Route
              path="/verify-email"
              element={
                <ProtectedRoute>
                  <VerifyEmail />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Toaster />
        </QueryClientProvider>
      </SessionProvider>
    </BrowserRouter>
  );
};

export default App;
