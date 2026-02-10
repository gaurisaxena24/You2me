import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { useState } from "react";

interface NameInputScreenProps {
  onContinue: (name: string) => void;
}

export function NameInputScreen({ onContinue }: NameInputScreenProps) {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onContinue(name.trim());
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#DBEAFE] to-[#EFF6FF] flex flex-col items-center justify-between p-6 pb-8">
      {/* Main content */}
      <div className="flex-1 flex items-center justify-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col gap-8 w-full max-w-[400px]"
        >
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[32px] font-bold text-[#1F2937] mb-3"
            >
              What's your name?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[18px] text-[#6B7280]"
            >
              This is how others will see you
            </motion.p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="text-[#1F2937]">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="h-12 rounded-xl border-gray-200 bg-white focus:border-[#1E40AF] focus:ring-[#1E40AF]"
                required
                autoFocus
              />
            </div>

            <Button
              type="submit"
              disabled={!name.trim()}
              className={`
                w-full h-12 rounded-full mt-4
                ${
                  name.trim()
                    ? "bg-[#1E40AF] hover:bg-[#1E3A8A] text-white"
                    : "bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed"
                }
              `}
            >
              Continue
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
