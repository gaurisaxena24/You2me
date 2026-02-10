import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";

interface SolutionScreenProps {
  onNext: () => void;
  onSkip: () => void;
}

export function SolutionScreen({ onNext, onSkip }: SolutionScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#DBEAFE] to-[#EFF6FF] flex flex-col items-center justify-between p-6 pb-8">
      {/* Skip button */}
      <div className="w-full flex justify-end">
        <button
          onClick={onSkip}
          className="text-[#1E40AF] hover:opacity-70 transition-opacity"
        >
          Skip
        </button>
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex flex-col items-center gap-12 flex-1 justify-center"
      >
        {/* Two shapes moving closer */}
        <div className="relative w-full h-32 flex items-center justify-center">
          <motion.div
            initial={{ x: -60 }}
            animate={{ x: -20 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-[#A5B4FC] to-[#1E40AF] opacity-60"
          />
          <motion.div
            initial={{ x: 60 }}
            animate={{ x: 20 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] opacity-60"
          />
        </div>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[24px] text-[#1F2937] text-center max-w-[320px] leading-relaxed px-4"
        >
          YOU2ME helps you find people who already share something with you.
        </motion.p>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full"
      >
        <Button
          onClick={onNext}
          className="w-full h-12 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white rounded-full"
        >
          Next
        </Button>
      </motion.div>
    </div>
  );
}
