import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { AlertCircle } from "lucide-react";

interface GenericErrorScreenProps {
  onRetry: () => void;
  message?: string;
}

export function GenericErrorScreen({ 
  onRetry, 
  message = "Oops, you made a mistake. Try again?" 
}: GenericErrorScreenProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
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
          className="relative"
        >
          <div className="w-24 h-24 rounded-full bg-[#FEE2E2] flex items-center justify-center">
            <AlertCircle className="w-12 h-12 text-[#DC2626]" />
          </div>

          {/* Pulsing ring */}
          <motion.div
            className="absolute inset-0 border-4 border-[#FCA5A5] rounded-full"
            animate={{
              scale: [1, 1.2, 1.2],
              opacity: [0.5, 0, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </motion.div>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[20px] text-[#1F2937] leading-relaxed"
        >
          {message}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full"
        >
          <Button
            onClick={onRetry}
            className="w-full h-12 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white rounded-xl"
          >
            Try again
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
