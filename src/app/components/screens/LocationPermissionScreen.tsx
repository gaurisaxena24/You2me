import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { MapPin } from "lucide-react";

interface LocationPermissionScreenProps {
  onAllow: () => void;
  onSkip: () => void;
}

export function LocationPermissionScreen({ onAllow, onSkip }: LocationPermissionScreenProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between p-6 pb-8">
      {/* Main content */}
      <div className="flex-1 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col items-center gap-8 text-center max-w-[360px]"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-24 rounded-full bg-[#DBEAFE] flex items-center justify-center"
          >
            <MapPin className="w-12 h-12 text-[#1E40AF]" />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[28px] font-bold text-[#1F2937]"
          >
            Enable location
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[18px] text-[#6B7280] leading-relaxed"
          >
            We use location only to show nearby people with shared interests.
          </motion.p>

          {/* Privacy note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-4"
          >
            <p className="text-[14px] text-[#1E40AF] leading-relaxed">
              <strong>Your privacy matters.</strong> Location data is only used within the app to find nearby connections. We never share your exact location with other users or third parties.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="w-full flex flex-col gap-3 max-w-[400px]"
      >
        <Button
          onClick={onAllow}
          className="w-full h-12 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white rounded-xl"
        >
          Allow location
        </Button>
        <Button
          onClick={onSkip}
          variant="ghost"
          className="w-full h-12 text-[#6B7280] hover:text-[#1F2937] rounded-xl"
        >
          Not now
        </Button>
      </motion.div>
    </div>
  );
}