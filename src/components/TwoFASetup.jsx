import { useSession } from "@/context/SessionContext";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import { setup2FA } from "@/lib/authApi";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const TwoFASetup = ({ onSetupComplete }) => {
  const { isLoading } = useSession();
  const [response, setResponse] = useState({});

  const fetchQRCode = async () => {
    const {data} = await setup2FA();
    setResponse(data);
   }
   useEffect(()=>{
    fetchQRCode();
   },[])
  const copyCode = async () => {
    await navigator.clipboard.writeText(response.secret);
    toast.success("Code copied to clipboard");
  };
  if(isLoading){
    return <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Loading...
        </h2>
      </div>
    </div>
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Turn on 2FA Verification
        </h2>
        <p className="text-gray-600 mb-4 text-center">
          Scan the QR code below with your authenticator app.
        </p>
        <div className="flex justify-center mb-4">
          {/* Replace with your actual QR code component or image */}
          <div className="bg-gray-200 p-4 rounded">
            {response.qrCode ? (
              <img src={response.qrCode} alt="2 FA qr code" />
            ) : (
              <Loader2 className="h-4 w-4 animate-spin" />
            )}
          </div>
        </div>
        <p className="text-center text-sm text-gray-500">
          Or enter the code manually
        </p>
        <div className="my-4">
          <input
            readOnly
            defaultValue={response.secret}
            value={response.secret}
            className="w-full bg-gray-200 p-2 rounded-md text-sm font-medium"
            onClick={copyCode}
          />
        </div>
        <Button
          onClick={onSetupComplete}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white"
        >
          Continue to Verification
        </Button>
      </div>
    </div>
  );
};

export default TwoFASetup;