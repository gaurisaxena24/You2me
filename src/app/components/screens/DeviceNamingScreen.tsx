import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { useState } from "react";
import deviceImage from "figma:asset/4b1c5aa853dc821bbef9b833d84edd1525b7009c.png";

interface DeviceNamingScreenProps {
  onContinue: (deviceName: string) => void;
}

export function DeviceNamingScreen({ onContinue }: DeviceNamingScreenProps) {
  const [deviceName, setDeviceName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (deviceName.trim()) {
      onContinue(deviceName.trim());
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between p-6 pb-8">
      
      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full max-w-[400px] flex flex-col items-center"
        >
          {/* Device Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8" // 8px system
          >
            <img
              src={deviceImage}
              alt="YOU2ME Device"
              className="w-32 h-auto drop-shadow-lg"
            />
          </motion.div>

{/* Title */}
<motion.h1
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="w-full text-center text-[32px] font-bold text-[#1F2937] mb-8"
>
  Name your YOU2ME Keyform
</motion.h1>


          {/* Form — aligned to “Name” */}
          <motion.form
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-2"
          >
            <div className="flex flex-col gap-2">
              <Label htmlFor="deviceName" className="text-[#1F2937]">
                YOU2ME Keyform Name
              </Label>

              <Input
                id="deviceName"
                type="text"
                value={deviceName}
                onChange={(e) => setDeviceName(e.target.value)}
                placeholder="e.g., My YOU2ME"
                className="h-12 rounded-xl border-gray-200 bg-white focus:border-[#1E40AF] focus:ring-[#1E40AF]"
                required
                autoFocus
              />

              <p className="text-[14px] text-[#6B7280]">
                This helps you recognise your device.
              </p>
            </div>

            <Button
              type="submit"
              disabled={!deviceName.trim()}
              className={`
                w-full h-12 rounded-xl mt-2
                ${
                  deviceName.trim()
                    ? "bg-[#1E40AF] hover:bg-[#1E3A8A] text-white"
                    : "bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed"
                }
              `}
            >
              Continue
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}
