import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { Shield, MessageCircleOff, UserCheck } from "lucide-react";

interface SafetyScreenProps {
  onNext: () => void;
  onSkip: () => void;
}

export function SafetyScreen({ onNext, onSkip }: SafetyScreenProps) {
  const features = [
    { icon: MessageCircleOff, text: "No forced conversations" },
    { icon: UserCheck, text: "You choose when to connect" },
    { icon: Shield, text: "Designed for comfort" },
  ];

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
        className="flex flex-col items-center gap-10 flex-1 justify-center"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[28px] font-bold text-[#1F2937] text-center"
        >
          You're in charge
        </motion.h2>

        {/* Features list */}
        <div className="flex flex-col gap-6 w-full max-w-[320px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: "easeInOut" }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-[#1E40AF] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-[#1E40AF]" />
              </div>
              <p className="text-[18px] text-[#1F2937]">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="w-full"
      >
        <Button
          onClick={onNext}
          className="w-full h-12 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white rounded-full"
        >
          Get Started
        </Button>
      </motion.div>
    </div>
  );
}
