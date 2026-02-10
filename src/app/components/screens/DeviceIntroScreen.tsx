import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import deviceImage from "figma:asset/4b1c5aa853dc821bbef9b833d84edd1525b7009c.png";

interface DeviceIntroScreenProps {
  onContinue: () => void;
}

export function DeviceIntroScreen({ onContinue }: DeviceIntroScreenProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6 pb-8">
      
      {/* Main content */}
      <div className="flex flex-col items-center justify-center w-full max-w-[400px] flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8 w-full"
        >
          {/* Device */}
          <div className="relative self-center">
            <motion.img
              src={deviceImage}
              alt="YOU2ME Device"
              className="w-100 h-auto drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />

            <motion.div
              className="absolute inset-0 -m-8 bg-[#1E40AF] rounded-full opacity-20 blur-2xl"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Copy — CENTER aligned */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-4 text-center"
          >
           <p className="text-[20px] text-[#1F2937] leading-relaxed font-medium">
  Your YOU2ME Keyform alerts you<br />
  when someone nearby shares<br />
  the same interests as you.
</p>
            <p className="text-[16px] text-[#6B7280] leading-relaxed">
              No pressure. You decide when to interact.
            </p>
          </motion.div>

          {/* CTA — moved up */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-2"
          >
            <Button
              onClick={onContinue}
              className="w-full h-12 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white rounded-xl"
            >
              Got it, let&apos;s connect
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
