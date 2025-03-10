import TwoFAVerification from '@/components/TwoFAVerification';
import { useNavigate } from 'react-router';

const Verify2FA = () => {
    const navigate = useNavigate();
    const handleVerification = async (data) => {
       if(data){
        navigate("/dashboard")
       }
    };
    const handle2FaReset = async (data) => {
      if(data){
        navigate("/setup-2fa");
      }
    };
    return <TwoFAVerification onVerificationSuccess={handleVerification} onResetSuccess={handle2FaReset} />
};

export default Verify2FA;