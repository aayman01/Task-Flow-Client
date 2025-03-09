import LoginForm from '@/components/LoginForm';
import { useSession } from '@/context/SessionContext';
import React from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
    const {login} = useSession();
    const navigate = useNavigate();

    const handleLoginSuccess = (userData) => {
      login(userData);
      if (!userData.isEmailVerified) {
        navigate("/verify-email");
      } else if (userData.isEmailVerified) {
        navigate("/setup-2fa");
      } else if (userData.isFaActive) {
        navigate("/verify-2fa");
      } else {
        navigate("/dashboard");
      }
    };
    return <LoginForm onLoginSuccess={handleLoginSuccess} />
};

export default Login;