import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { Bluetooth } from "lucide-react";
import { useState } from "react";
import deviceImage from "figma:asset/4b1c5aa853dc821bbef9b833d84edd1525b7009c.png";

interface DeviceConnectionScreenProps {
  onConnect: () => void;
  onSkip: () => void;
}

export function DeviceConnectionScreen({ onConnect, onSkip }: DeviceConnectionScreenProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = () => {
    setIsConnecting(true);
    // Simulate Bluetooth connection
    setTimeout(() => {
      onConnect();
    }, 2000);
  };

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
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[32px] font-bold text-[#1F2937]"
          >
            Connect your YOU2ME device
          </motion.h1>

          {/* Animation Container */}
          <div className="relative w-full h-[280px] flex items-center justify-center">
            {/* Device Image with Glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              <img 
                src={deviceImage} 
                alt="YOU2ME Device" 
                className="w-32 h-auto drop-shadow-xl"
              />
              
              {/* Glow effect (animated only if motion is allowed) */}
              {!shouldReduceMotion && (
                <>
                  {/* Primary glow pulse */}
                  <motion.div
                    className="absolute inset-0 -m-4 bg-[#1E40AF] rounded-full opacity-20 blur-xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Secondary soft glow */}
                  <motion.div
                    className="absolute inset-0 -m-6 bg-[#DBEAFE] rounded-full opacity-30 blur-2xl"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.3, 0.1, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  />
                </>
              )}
            </motion.div>

            {/* Animated waves (connection rings) */}
            {!shouldReduceMotion && (
              <>
                {/* Wave 1 */}
                <motion.div
                  className="absolute w-48 h-48 border-2 border-[#1E40AF] rounded-full"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: [0.8, 2.2, 2.5],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
                
                {/* Wave 2 */}
                <motion.div
                  className="absolute w-48 h-48 border-2 border-[#60A5FA] rounded-full"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: [0.8, 2.2, 2.5],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 1,
                  }}
                />
                
                {/* Wave 3 */}
                <motion.div
                  className="absolute w-48 h-48 border-2 border-[#BFDBFE] rounded-full"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: [0.8, 2.2, 2.5],
                    opacity: [0, 0.4, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 2,
                  }}
                />

                {/* Sparkles/Beep indicators */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-[#1E40AF] rounded-full"
                    style={{
                      top: `${50 + Math.sin((i * Math.PI) / 2) * 40}%`,
                      left: `${50 + Math.cos((i * Math.PI) / 2) * 40}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </>
            )}

            {/* Reduced motion alternative - static rings */}
            {shouldReduceMotion && (
              <>
                <div className="absolute w-48 h-48 border-2 border-[#BFDBFE] rounded-full opacity-40" />
                <div className="absolute w-64 h-64 border-2 border-[#DBEAFE] rounded-full opacity-20" />
              </>
            )}
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[16px] text-[#6B7280] leading-relaxed px-4"
          >
            Your YOU2ME device gently alerts you when someone with similar interests passes by.
          </motion.p>
        </motion.div>
      </div>

      {/* Privacy disclaimer + CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="w-full flex flex-col gap-4 max-w-[400px]"
      >
        {/* Privacy Note */}
        <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-4">
          <p className="text-[14px] text-[#1E40AF] leading-relaxed text-center">
            Bluetooth is used only to connect your YOU2ME device. No data is shared.
          </p>
        </div>

        {/* Connect Button */}
        <Button
          onClick={handleConnect}
          disabled={isConnecting}
          className={`
            w-full h-12 rounded-xl flex items-center justify-center gap-3
            ${
              isConnecting
                ? "bg-[#93C5FD] text-white cursor-wait"
                : "bg-[#1E40AF] hover:bg-[#1E3A8A] text-white"
            }
          `}
        >
          <Bluetooth className="w-5 h-5" />
          {isConnecting ? "Connecting..." : "Connect via Bluetooth — YOU2ME Device"}
        </Button>

        {/* Skip Button */}
        <Button
          onClick={onSkip}
          disabled={isConnecting}
          variant="ghost"
          className="w-full h-12 text-[#6B7280] hover:text-[#1F2937] rounded-xl"
        >
          Skip for now
        </Button>
      </motion.div>
    </div>
  );
}