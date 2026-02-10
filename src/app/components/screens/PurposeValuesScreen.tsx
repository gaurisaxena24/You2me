import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { Heart, Shield, Users } from "lucide-react";

interface PurposeValuesScreenProps {
  onContinue: () => void;
}

const values = [
  {
    icon: Heart,
    title: "No awkward intros",
    description: "Connect naturally through shared interests, not forced conversations.",
  },
  {
    icon: Users,
    title: "Belonging without pressure",
    description: "Find your people without the anxiety of making the first move.",
  },
  {
    icon: Shield,
    title: "Safe & comfortable",
    description: "You're always in control of when and how you interact.",
  },
];

export function PurposeValuesScreen({ onContinue }: PurposeValuesScreenProps) {
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
          How YOU2ME works
        </h1>
      </motion.div>

      {/* Values */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col gap-6 w-full max-w-[400px]"
      >
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
            className="flex gap-4 items-start"
          >
            {/* Icon with animation */}
            <motion.div
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#DBEAFE] to-[#A5B4FC] flex items-center justify-center flex-shrink-0"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
              }}
            >
              <value.icon className="w-7 h-7 text-[#1E40AF]" />
            </motion.div>

            {/* Content */}
            <div className="flex flex-col gap-1 flex-1">
              <h3 className="text-[18px] font-bold text-[#1F2937]">
                {value.title}
              </h3>
              <p className="text-[15px] text-[#6B7280] leading-relaxed">
                {value.description}
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
