import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { Bluetooth, Radio, CheckCircle2, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";

interface DeviceScanningScreenProps {
  onSelectDevice: (deviceId: string, deviceName: string) => void;
  onBack: () => void;
  onError?: () => void;
}

interface Device {
  id: string;
  name: string;
  distance: string;
}

const scanningMessages = [
  "Searching for your YOU2ME…",
  "Almost there…",
  "Still looking…",
];

export function DeviceScanningScreen({ onSelectDevice, onBack, onError }: DeviceScanningScreenProps) {
  const [isScanning, setIsScanning] = useState(true);
  const [devices, setDevices] = useState<Device[]>([]);
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Rotate scanning messages
    const messageTimer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % scanningMessages.length);
    }, 2000);

    // Simulate device scanning
    const scanTimer = setTimeout(() => {
      setIsScanning(false);
      // Add mock devices - 80% chance of success
      if (Math.random() > 0.2) {
        setDevices([
          { id: "1", name: "YOU2ME #A7F3", distance: "Very close" },
          { id: "2", name: "YOU2ME #B2E9", distance: "Close" },
          { id: "3", name: "YOU2ME #C8D1", distance: "Nearby" },
        ]);
      }
    }, 4000);

    return () => {
      clearInterval(messageTimer);
      clearTimeout(scanTimer);
    };
  }, []);

  // If no devices found after scanning, show error
  useEffect(() => {
    if (!isScanning && devices.length === 0 && onError) {
      const errorTimer = setTimeout(() => {
        onError();
      }, 500);
      return () => clearTimeout(errorTimer);
    }
  }, [isScanning, devices, onError]);

  const handleSelectDevice = (device: Device) => {
    setSelectedDevice(device.id);
    setTimeout(() => {
      onSelectDevice(device.id, device.name);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col p-6 pb-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-8"
      >
        <Button
          onClick={onBack}
          variant="ghost"
          className="w-10 h-10 p-0 rounded-full"
        >
          ←
        </Button>
        <h1 className="text-[28px] font-bold text-[#1F2937]">
          Select your device
        </h1>
      </motion.div>

      {/* Scanning animation or device list */}
      <div className="flex-1 flex flex-col items-center justify-center gap-8 w-full max-w-[400px] mx-auto">
        {isScanning ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Scanning icon */}
            <motion.div
              className="relative w-32 h-32"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 rounded-full bg-[#DBEAFE] flex items-center justify-center">
                <Bluetooth className="w-16 h-16 text-[#1E40AF]" />
              </div>
              
              {/* Scanning waves */}
              <motion.div
                className="absolute inset-0 border-2 border-[#1E40AF] rounded-full"
                animate={{
                  scale: [1, 1.5, 1.5],
                  opacity: [0.5, 0, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              <motion.div
                className="absolute inset-0 border-2 border-[#60A5FA] rounded-full"
                animate={{
                  scale: [1, 1.5, 1.5],
                  opacity: [0.5, 0, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.5,
                }}
              />
            </motion.div>

            {/* Rotating messages */}
            <div className="text-center">
              <motion.p
                key={messageIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-[18px] font-semibold text-[#1F2937]"
              >
                {scanningMessages[messageIndex]}
              </motion.p>
            </div>

            {/* Instructions */}
            <div className="bg-[#FEF3C7] border border-[#FCD34D] rounded-xl p-4 max-w-sm">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="text-[14px] text-[#92400E] font-medium mb-2">
                    Keep device nearby
                  </p>
                  <ul className="text-[13px] text-[#92400E] space-y-1">
                    <li>• Bluetooth on</li>
                    <li>• Long-press device button if needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col gap-3"
          >
            <p className="text-[14px] text-[#6B7280] mb-2">
              {devices.length} {devices.length === 1 ? "device" : "devices"} found
            </p>

            {devices.map((device) => (
              <motion.button
                key={device.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                onClick={() => handleSelectDevice(device)}
                disabled={selectedDevice !== null}
                className={`
                  w-full p-4 rounded-xl border-2 flex items-center justify-between
                  transition-all duration-200
                  ${
                    selectedDevice === device.id
                      ? "border-[#10B981] bg-[#D1FAE5]"
                      : "border-gray-200 bg-white hover:border-[#1E40AF] hover:bg-[#EFF6FF]"
                  }
                  ${selectedDevice && selectedDevice !== device.id ? "opacity-50" : ""}
                `}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#DBEAFE] flex items-center justify-center">
                    <Radio className="w-6 h-6 text-[#1E40AF]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[16px] font-semibold text-[#1F2937]">
                      {device.name}
                    </p>
                    <p className="text-[14px] text-[#6B7280]">
                      {device.distance}
                    </p>
                  </div>
                </div>
                
                {selectedDevice === device.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#10B981]" />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}