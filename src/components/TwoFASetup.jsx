import { useSession } from "@/context/SessionContext";

const TwoFASetup = () => {
    const {user} = useSession();
    return (
        <div>
            <h1>Setup 2FA for {user.email}</h1>
        </div>
    );
};

export default TwoFASetup;