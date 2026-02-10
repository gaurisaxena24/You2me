import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { BluetoothOff, AlertCircle } from "lucide-react";

interface DeviceErrorScreenProps {
  onTryAgain: () => void;
  onSkip: () => void;
}

export function DeviceErrorScreen({ onTryAgain, onSkip }: DeviceErrorScreenProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between p-6 pb-8">
      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-[400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8 text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-24 h-24 rounded-full bg-[#FEE2E2] flex items-center justify-center"
          >
            <BluetoothOff className="w-12 h-12 text-[#DC2626]" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[32px] font-bold text-[#1F2937]"
          >
            Hmm, we can't find it yet.
          </motion.h1>

          {/* Suggestions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4 w-full"
          >
            <div className="bg-[#FEF3C7] border border-[#FCD34D] rounded-xl p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-2 text-left">
                  <p className="text-[14px] text-[#92400E] font-medium">
                    Try these steps:
                  </p>
                  <ul className="text-[14px] text-[#92400E] space-y-2">
                    <li>• Make sure Bluetooth is turned on</li>
                    <li>• Long-press the button on your YOU2ME device</li>
                    <li>• Keep your device within 2 meters</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full flex flex-col gap-3 max-w-[400px]"
      >
        <Button
          onClick={onTryAgain}
          className="w-full h-12 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white rounded-xl"
        >
          Try again
        </Button>

        <Button
          onClick={onSkip}
          variant="ghost"
          className="w-full h-12 text-[#6B7280] hover:text-[#1F2937] rounded-xl"
        >
          Skip for now
        </Button>
      </motion.div>
    </div>
  );
}
