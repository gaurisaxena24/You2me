import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { Apple, Mail } from "lucide-react";

interface SignUpOptionsScreenProps {
  onEmailSignUp: () => void;
  onLogin: () => void;
  onSocialSignUp: (provider: "apple" | "google") => void;
}

export function SignUpOptionsScreen({ onEmailSignUp, onLogin, onSocialSignUp }: SignUpOptionsScreenProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between p-6 pb-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-full pt-8"
      >
        <h1 className="text-[32px] font-bold text-[#1F2937] text-center">
          Create your account
        </h1>
      </motion.div>

      {/* Sign up options */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
        className="flex flex-col gap-3 w-full max-w-[400px]"
      >
        <Button
          onClick={() => onSocialSignUp("apple")}
          className="w-full h-12 bg-black hover:bg-gray-800 text-white rounded-xl flex items-center justify-center gap-3"
        >
          <Apple className="w-5 h-5" />
          Continue with Apple
        </Button>

        <Button
          onClick={() => onSocialSignUp("google")}
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
          onClick={onEmailSignUp}
          className="w-full h-12 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white rounded-xl flex items-center justify-center gap-3"
        >
          <Mail className="w-5 h-5" />
          Continue with Email
        </Button>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center"
      >
        <p className="text-[#6B7280]">
          Already have an account?{" "}
          <button onClick={onLogin} className="text-[#1E40AF] font-medium hover:underline">
            Log in
          </button>
        </p>
      </motion.div>
    </div>
  );
}