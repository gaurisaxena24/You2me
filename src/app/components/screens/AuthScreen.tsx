import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Apple, Mail, Phone } from "lucide-react";
import { useState } from "react";

interface AuthScreenProps {
  onAuth: (method: "apple" | "google" | "email" | "phone", data?: { email?: string; phone?: string; password?: string }) => void;
}

export function AuthScreen({ onAuth }: AuthScreenProps) {
  const [authMethod, setAuthMethod] = useState<"none" | "email" | "phone">("none");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailSubmit = () => {
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    onAuth("email", { email, password });
  };

  const handlePhoneSubmit = () => {
    if (!phone) {
      setError("Please enter your phone number");
      return;
    }
    onAuth("phone", { phone });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between p-6 pb-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full pt-8 text-center"
      >
        <h1 className="text-[32px] font-bold text-[#1F2937] mb-2">
          Let's get you connected
        </h1>
        <p className="text-[16px] text-[#6B7280]">
          This takes under a minute
        </p>
      </motion.div>

      {/* Auth options or inline form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col gap-3 w-full max-w-[400px]"
      >
        {authMethod === "none" ? (
          <>
            {/* Social auth buttons */}
            <Button
              onClick={() => onAuth("apple")}
              className="w-full h-12 bg-black hover:bg-gray-800 text-white rounded-xl flex items-center justify-center gap-3"
            >
              <Apple className="w-5 h-5" />
              Continue with Apple
            </Button>

            <Button
              onClick={() => onAuth("google")}
              className="w-full h-12 bg-white hover:bg-gray-50 text-[#1F2937] border-2 border-gray-200 rounded-xl flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </Button>

            <Button
              onClick={() => setAuthMethod("email")}
              className="w-full h-12 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white rounded-xl flex items-center justify-center gap-3"
            >
              <Mail className="w-5 h-5" />
              Continue with Email
            </Button>

            <Button
              onClick={() => setAuthMethod("phone")}
              className="w-full h-12 bg-white hover:bg-gray-50 text-[#1E40AF] border-2 border-[#1E40AF] rounded-xl flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Continue with Phone
            </Button>
          </>
        ) : authMethod === "email" ? (
          <>
            {/* Email inline form */}
            <div className="flex flex-col gap-4 p-4 border-2 border-[#1E40AF] rounded-xl bg-[#EFF6FF]">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#1F2937]">Email</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="you@example.com"
                  className="h-10 rounded-lg bg-white border-gray-200"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#1F2937]">Password</label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  placeholder="Create a password"
                  className="h-10 rounded-lg bg-white border-gray-200"
                />
              </div>

              <button
                onClick={() => {
                  // Show password reset modal/sheet
                  alert("Password reset link will be sent to your email");
                }}
                className="text-[14px] text-[#1E40AF] hover:underline text-left"
              >
                Forgot password?
              </button>

              <Button
                onClick={handleEmailSubmit}
                className="w-full h-10 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white rounded-xl"
              >
                Continue
              </Button>

              <Button
                onClick={() => setAuthMethod("none")}
                variant="ghost"
                className="w-full h-10 text-[#6B7280] rounded-xl"
              >
                Back
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* Phone inline form */}
            <div className="flex flex-col gap-4 p-4 border-2 border-[#1E40AF] rounded-xl bg-[#EFF6FF]">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#1F2937]">Phone Number</label>
                <Input
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setError("");
                  }}
                  placeholder="+1 (555) 000-0000"
                  className="h-10 rounded-lg bg-white border-gray-200"
                />
              </div>

              <p className="text-[12px] text-[#6B7280]">
                We'll send you an OTP to verify your number
              </p>

              <Button
                onClick={handlePhoneSubmit}
                className="w-full h-10 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white rounded-xl"
              >
                Send OTP
              </Button>

              <Button
                onClick={() => setAuthMethod("none")}
                variant="ghost"
                className="w-full h-10 text-[#6B7280] rounded-xl"
              >
                Back
              </Button>
            </div>
          </>
        )}

        {/* Error message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#FEE2E2] border border-[#FCA5A5] rounded-xl p-3 text-center"
          >
            <p className="text-[14px] text-[#DC2626]">
              Oops, something went wrong. Let's try again.
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Footer spacing */}
      <div className="h-8" />
    </div>
  );
}
