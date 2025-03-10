import { reset2FA, verify2FA } from "@/lib/authApi";
import React, { useState } from "react";
import { Button } from "./ui/button";

const TwoFAVerification = ({ onVerificationSuccess, onResetSuccess }) => {
  const [totp, setTotp] = useState("");
  const [error, setError] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();
    console.log(totp);
    try {
        const {data} = await verify2FA(totp);
        onVerificationSuccess(data);
    } catch (error) {
        setTotp("");
        console.log(error);
        setError("Invalid OTP");
    }
  };

  const handleReset = async () => {
    try {
        const {data} = await reset2FA();
        onResetSuccess(data);
    } catch (error) {
        setTotp("");
        console.log(error);
        setError("Invalid OTP");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Validate TOTP
        </h2>
        <p className="text-gray-600 mb-4 text-center">
          Please enter 6-digit Time based OTP to verify 2FA authentication.
        </p>
        <form className="mb-4" onSubmit={handleVerify}>
          <label className="block text-sm font-medium text-gray-700">
            TOTP
          </label>
          <input
            type="text"
            value={totp}
            onChange={(e) => setTotp(e.target.value)}
            placeholder="Enter Your TOTP"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 bg-gray-200 px-2"
          />
          {error && <p className="text-red-500 text-center text-sm mt-2">{error}</p>}
          <Button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md mt-3"
          >
            Verify TOTP
          </Button>
        </form>

        <Button
          type="button"
          onClick={handleReset}
          className="w-full py-2 px-4 bg-gray-600 hover:bg-gray-700 text-white rounded-md"
        >
          Reset 2FA
        </Button>
      </div>
    </div>
  );
};

export default TwoFAVerification;
