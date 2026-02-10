import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { Mail, CheckCircle2 } from "lucide-react";

interface EmailVerificationScreenProps {
  email: string;
  onContinue: () => void;
  onResend: () => void;
}

export function EmailVerificationScreen({ email, onContinue, onResend }: EmailVerificationScreenProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between p-6 pb-8">
      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-[400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col items-center gap-8 text-center w-full"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="w-24 h-24 rounded-full bg-[#DBEAFE] flex items-center justify-center">
              <Mail className="w-12 h-12 text-[#1E40AF]" />
            </div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
              className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#10B981] rounded-full flex items-center justify-center"
            >
              <CheckCircle2 className="w-5 h-5 text-white" />
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[32px] font-bold text-[#1F2937]"
          >
            Check your email
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <p className="text-[16px] text-[#6B7280] leading-relaxed">
              We've sent a verification link to
            </p>
            <p className="text-[16px] font-semibold text-[#1E40AF]">
              {email}
            </p>
            <p className="text-[14px] text-[#9CA3AF] leading-relaxed">
              Click the link in the email to verify your account and continue.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="w-full flex flex-col gap-3 max-w-[400px]"
      >
        <Button
          onClick={onContinue}
          className="w-full h-12 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white rounded-xl"
        >
          I've verified my email
        </Button>
        
        <Button
          onClick={onResend}
          variant="ghost"
          className="w-full h-12 text-[#6B7280] hover:text-[#1F2937] rounded-xl"
        >
          Resend verification email
        </Button>
      </motion.div>
    </div>
  );
}
