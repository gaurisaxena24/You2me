import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

interface EmailSignUpScreenProps {
  onSignUp: (email: string, password: string) => void;
  onForgotPassword: () => void;
  onBack: () => void;
}

export function EmailSignUpScreen({ onSignUp, onForgotPassword, onBack }: EmailSignUpScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onSignUp(email, password);
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
        className="flex-1 flex flex-col"
      >
        <h1 className="text-[32px] font-bold text-[#1F2937] mb-8">
          Sign up with email
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-[400px]">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-[#1F2937]">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="h-12 rounded-xl border-gray-200 focus:border-[#1E40AF] focus:ring-[#1E40AF]"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="password" className="text-[#1F2937]">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="h-12 rounded-xl border-gray-200 focus:border-[#1E40AF] focus:ring-[#1E40AF]"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white rounded-full mt-4"
          >
            Sign Up
          </Button>

          <button
            type="button"
            onClick={onForgotPassword}
            className="text-[#1E40AF] hover:underline text-center"
          >
            Forgot password?
          </button>
        </form>
      </motion.div>
    </div>
  );
}
