import TwoFASetup from '@/components/TwoFASetup';
import React from 'react';
import { useNavigate } from 'react-router';

const Setup2FA = () => {
    const navigate = useNavigate();
    const onSetupComplete = () => {
        navigate("/verify-2fa");
    }
    return <TwoFASetup onSetupComplete={onSetupComplete} />
};

export default Setup2FA;