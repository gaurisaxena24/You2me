import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";

interface GreetingScreenProps {
  userName: string;
  onContinue: () => void;
}

export function GreetingScreen({ userName, onContinue }: GreetingScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#DBEAFE] to-[#EFF6FF] flex flex-col items-center justify-between p-6 pb-8">
      {/* Main content */}
      <div className="flex-1 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[36px] font-bold text-[#1F2937]"
          >
            Hello, {userName} 👋
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[20px] text-[#4B5563] max-w-[320px] leading-relaxed"
          >
            Let's find people who share your interests today.
          </motion.p>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="w-full"
      >
        <Button
          onClick={onContinue}
          className="w-full h-12 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white rounded-full"
        >
          Continue
        </Button>
      </motion.div>
    </div>
  );
}
