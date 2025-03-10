import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import { Loader2 } from "lucide-react";
import { verifyEmail } from "@/lib/authApi";
import { useNavigate } from "react-router";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [isLoading,setIsLoading] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    if (!code) {
      setError("Please enter the verification code");
      return;
    }

    if (code.length !== 6) {
      setError("Verification code must be 6 digits");
      return;
    }
    // console.log(code);
    try {
      await verifyEmail(code);
      navigate("/setup-2fa");
    } catch (err) {
      setError("Invalid verification code. Please try again.",err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatedContainer animation="fade-in" className="w-full max-w-md mx-auto flex justify-center items-center h-screen">
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl text-center font-bold">
            Email Verification
          </CardTitle>
          <CardDescription className="text-center">
            We've sent a verification code to your email. Please enter it below
            to continue.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="code" className="block text-sm font-medium mb-1">
                6-Digit Verification Code
              </label>
              <Input
                id="code"
                type="text"
                value={code}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, "");
                  if (value.length <= 6) {
                    setCode(value);
                  }
                }}
                placeholder="OTP"
                className="form-input text-center text-xl tracking-widest"
                maxLength={6}
                autoComplete="one-time-code"
              />
            </div>

            {error && <p className="text-sm text-red-500 mt-2">{error}</p>}

            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                "Verify Code"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </AnimatedContainer>
  );
};

export default VerifyEmail;
