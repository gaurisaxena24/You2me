import { motion } from "motion/react";
import { useEffect } from "react";
import { Check } from "lucide-react";
import deviceImage from "figma:asset/4b1c5aa853dc821bbef9b833d84edd1525b7009c.png";

interface ConnectionConfirmationScreenProps {
  onComplete: () => void;
  deviceName?: string;
}

export function ConnectionConfirmationScreen({ 
  onComplete,
  deviceName = "YOUR YOU2ME" 
}: ConnectionConfirmationScreenProps) {
  useEffect(() => {
    // Auto-advance after 2 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#DBEAFE] to-[#EFF6FF] flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex flex-col items-center gap-8 text-center max-w-[400px]"
      >
        {/* Device with checkmark */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={deviceImage} 
              alt="YOU2ME Device" 
              className="w-40 h-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* Animated glow */}
          <motion.div
            className="absolute inset-0 -m-4 bg-[#1E40AF] rounded-full opacity-20 blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Checkmark badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3, type: "spring", stiffness: 200 }}
            className="absolute -top-2 -right-2 w-12 h-12 bg-[#10B981] rounded-full flex items-center justify-center shadow-lg"
          >
            <Check className="w-7 h-7 text-white" strokeWidth={3} />
          </motion.div>
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[32px] font-bold text-[#1F2937]"
        >
          You're now connected 💙
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-[16px] text-[#6B7280] leading-relaxed px-4"
        >
          Your YOU2ME device is ready to help you discover shared interests around you.
        </motion.p>
      </motion.div>
    </div>
  );
}
