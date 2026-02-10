import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/app/components/ui/input-otp";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

interface ForgotPasswordScreenProps {
  onBack: () => void;
  onComplete: () => void;
}

export function ForgotPasswordScreen({ onBack, onComplete }: ForgotPasswordScreenProps) {
  const [step, setStep] = useState<"email" | "otp" | "reset">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStep("otp");
    }
  };

  const handleOtpComplete = (value: string) => {
    setOtp(value);
    if (value.length === 6) {
      setTimeout(() => setStep("reset"), 500);
    }
  };

  const handleResetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword) {
      onComplete();
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col p-6">
      {/* Header with back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="pt-4 pb-8"
      >
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#1E40AF] hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex-1 flex flex-col max-w-[400px]"
      >
        {step === "email" && (
          <>
            <h1 className="text-[32px] font-bold text-[#1F2937] mb-4">
              Reset password
            </h1>
            <p className="text-[#6B7280] mb-8">
              We'll send a one-time code to your email.
            </p>

            <form onSubmit={handleEmailSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="reset-email" className="text-[#1F2937]">
                  Email
                </Label>
                <Input
                  id="reset-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="h-12 rounded-xl border-gray-200 focus:border-[#1E40AF] focus:ring-[#1E40AF]"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white rounded-full mt-4"
              >
                Send Code
              </Button>
            </form>
          </>
        )}

        {step === "otp" && (
          <>
            <h1 className="text-[32px] font-bold text-[#1F2937] mb-4">
              Enter code
            </h1>
            <p className="text-[#6B7280] mb-8">
              We sent a code to {email}
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 items-center">
                <Label className="text-[#1F2937] self-start">
                  One-time code
                </Label>
                <InputOTP maxLength={6} value={otp} onChange={handleOtpComplete}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="h-14 w-12 text-xl" />
                    <InputOTPSlot index={1} className="h-14 w-12 text-xl" />
                    <InputOTPSlot index={2} className="h-14 w-12 text-xl" />
                    <InputOTPSlot index={3} className="h-14 w-12 text-xl" />
                    <InputOTPSlot index={4} className="h-14 w-12 text-xl" />
                    <InputOTPSlot index={5} className="h-14 w-12 text-xl" />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <button className="text-[#1E40AF] hover:underline text-center">
                Resend code
              </button>
            </div>
          </>
        )}

        {step === "reset" && (
          <>
            <h1 className="text-[32px] font-bold text-[#1F2937] mb-4">
              Create new password
            </h1>
            <p className="text-[#6B7280] mb-8">
              Enter your new password below.
            </p>

            <form onSubmit={handleResetSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="new-password" className="text-[#1F2937]">
                  New Password
                </Label>
                <Input
                  id="new-password"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••"
                  className="h-12 rounded-xl border-gray-200 focus:border-[#1E40AF] focus:ring-[#1E40AF]"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white rounded-full mt-4"
              >
                Reset Password
              </Button>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
}
