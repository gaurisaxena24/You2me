import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { Frown } from "lucide-react";

interface DashboardEmptyScreenProps {
  onChooseInterests: () => void;
}

export function DashboardEmptyScreen({ onChooseInterests }: DashboardEmptyScreenProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-b from-[#DBEAFE] to-white p-6 pb-8"
      >
        <h1 className="text-[24px] font-bold text-[#1F2937]">YOU2ME</h1>
      </motion.div>

      {/* Empty state */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8 text-center max-w-[400px]"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            animate={{
              rotate: [0, -10, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            <div className="w-24 h-24 rounded-full bg-[#F3F4F6] flex items-center justify-center">
              <Frown className="w-12 h-12 text-[#6B7280]" />
            </div>
          </motion.div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <h2 className="text-[24px] font-bold text-[#1F2937]">
              You haven't picked interests yet
            </h2>
            <p className="text-[16px] text-[#6B7280] leading-relaxed">
              Choose what you're interested in so YOU2ME can find people nearby who share them.
            </p>
          </div>

          {/* CTA */}
          <Button
            onClick={onChooseInterests}
            className="w-full h-12 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white rounded-xl"
          >
            Choose interests
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
