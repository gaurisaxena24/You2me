import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { Target, MapPin, MessageSquare } from "lucide-react";

interface SafetyControlScreenProps {
  onContinue: () => void;
}

const controls = [
  {
    icon: Target,
    title: "You control interests",
    description: "Change what you're open to connecting about anytime.",
  },
  {
    icon: MapPin,
    title: "You control distance",
    description: "Set how far away people can be before YOU2ME alerts you.",
  },
  {
    icon: MessageSquare,
    title: "You choose when to chat",
    description: "No obligation to respond. Connect only when you want to.",
  },
];

export function SafetyControlScreen({ onContinue }: SafetyControlScreenProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between p-6 pb-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full pt-8 text-center"
      >
        <h1 className="text-[32px] font-bold text-[#1F2937]">
          You're in control
        </h1>
      </motion.div>

      {/* Controls */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col gap-6 w-full max-w-[400px]"
      >
        {controls.map((control, index) => (
          <motion.div
            key={control.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
            className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-2xl p-4 flex gap-4 items-start"
          >
            {/* Icon with animation */}
            <motion.div
              className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm"
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
              }}
            >
              <control.icon className="w-6 h-6 text-[#1E40AF]" />
            </motion.div>

            {/* Content */}
            <div className="flex flex-col gap-1 flex-1">
              <h3 className="text-[16px] font-bold text-[#1F2937]">
                {control.title}
              </h3>
              <p className="text-[14px] text-[#6B7280] leading-relaxed">
                {control.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="w-full max-w-[400px]"
      >
        <Button
          onClick={onContinue}
          className="w-full h-12 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white rounded-xl"
        >
          Continue
        </Button>
      </motion.div>
    </div>
  );
}
