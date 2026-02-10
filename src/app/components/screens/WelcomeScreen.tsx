import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";

interface WelcomeScreenProps {
  onNext: () => void;
}

export function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex flex-col items-center text-center gap-8 mt-32 w-full max-w-[400px]"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-32 h-32 bg-gradient-to-br from-[#1E40AF] to-[#60A5FA] rounded-3xl flex items-center justify-center shadow-2xl"
        >
          <div className="text-[48px] font-bold text-white">Y2M</div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[40px] font-bold text-[#1F2937]"
        >
          Welcome to YOU2ME
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[18px] text-[#6B7280]"
        >
          Let’s connect your device to get started.
        </motion.p>

        {/* CTA — SAME spacing as text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full"
        >
          <Button
            onClick={onNext}
            className="w-full h-12 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white rounded-xl"
          >
            Connect my device
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
