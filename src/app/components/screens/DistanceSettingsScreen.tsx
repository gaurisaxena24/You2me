import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { Radio } from "lucide-react";
import { useState } from "react";

interface DistanceSettingsScreenProps {
  onContinue: (distance: string) => void;
}

const distances = [
  {
    value: "low",
    title: "Low",
    range: "20m",
    description: "Very close proximity",
    color: "from-[#EAF2FF] to-[#D6E6FF]",
  },
  {
    value: "medium",
    title: "Medium",
    range: "50m",
    description: "Same area or building",
    color: "from-[#A5B4FC] to-[#818CF8]",
  },
  {
    value: "high",
    title: "High",
    range: "2km",
    description: "General neighborhood",
    color: "from-[#1E40AF] to-[#3B82F6]",
  },
];

export function DistanceSettingsScreen({
  onContinue,
}: DistanceSettingsScreenProps) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between p-6 pb-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full pt-8 text-center"
      >
        <h1 className="text-[32px] font-bold text-[#1F2937] mb-2">
          Distance settings
        </h1>
        <p className="text-[16px] text-[#6B7280]">
          How far away should people be to get alerts?
        </p>
      </motion.div>

      {/* Distance cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col gap-3 w-full max-w-[400px]"
      >
        {distances.map((distance, index) => {
          const isLow = distance.value === "low";
          const isSelected = selected === distance.value;

          return (
            <motion.button
              key={distance.value}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: 0.25 + index * 0.1 }}
              onClick={() => setSelected(distance.value)}
              className={`
                w-full rounded-2xl overflow-hidden transition-all duration-200
                ${isSelected ? "ring-4 ring-[#1E40AF] ring-offset-2" : ""}
              `}
            >
              <div
                className={`bg-gradient-to-br ${distance.color} px-5 py-4 relative`}
              >
                {/* Icon + check */}
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center
                      ${
                        isLow
                          ? "bg-[#327AD9]/10"
                          : "bg-white/30 backdrop-blur-sm"
                      }
                    `}
                  >
                    <Radio
                      className={`w-5 h-5 ${
                        isLow ? "text-[#327AD9]" : "text-white"
                      }`}
                    />
                  </div>

                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="w-7 h-7 rounded-full bg-white flex items-center justify-center"
                    >
                      <svg
                        className="w-4 h-4 text-[#1E40AF]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>
                  )}
                </div>

                {/* Content */}
                <div className="text-left">
                  <h3
                    className={`text-[20px] font-bold mb-0.5 ${
                      isLow ? "text-[#327AD9]" : "text-white"
                    }`}
                  >
                    {distance.title}
                  </h3>

                  <p
                    className={`text-[16px] font-semibold mb-1 ${
                      isLow ? "text-[#327AD9]" : "text-white/90"
                    }`}
                  >
                    {distance.range}
                  </p>

                  <p
                    className={`text-[13px] ${
                      isLow ? "text-[#327AD9]/80" : "text-white/80"
                    }`}
                  >
                    {distance.description}
                  </p>
                </div>
              </div>
            </motion.button>
          );
        })}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="w-full max-w-[400px]"
      >
        <Button
          onClick={() => selected && onContinue(selected)}
          disabled={!selected}
          className={`
            w-full h-12 rounded-xl
            ${
              selected
                ? "bg-[#1E40AF] hover:bg-[#1E3A8A] text-white"
                : "bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed"
            }
          `}
        >
          Finish setup
        </Button>
      </motion.div>
    </div>
  );
}
