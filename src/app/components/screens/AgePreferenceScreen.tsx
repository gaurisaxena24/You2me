import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { useState } from "react";

interface AgePreferenceScreenProps {
  onContinue: (preference: string) => void;
}

const preferences = [
  { value: "±1", label: "±1 year" },
  { value: "±2", label: "±2 years" },
  { value: "±3", label: "±3 years" },
  { value: "±5", label: "±5 years" },
  { value: "any", label: "Doesn't matter" },
];

export function AgePreferenceScreen({ onContinue }: AgePreferenceScreenProps) {
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
          Age preference
        </h1>
        <p className="text-[16px] text-[#6B7280]">
          For comfort and relevance — not strict filtering.
        </p>
      </motion.div>

      {/* Options */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col gap-3 w-full max-w-[400px]"
      >
        {preferences.map((pref, index) => (
          <motion.button
            key={pref.value}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
            onClick={() => setSelected(pref.value)}
            className={`
              w-full p-4 rounded-xl border-2 text-left transition-all duration-200
              ${
                selected === pref.value
                  ? "border-[#1E40AF] bg-[#EFF6FF]"
                  : "border-gray-200 bg-white hover:border-[#93C5FD]"
              }
            `}
          >
            <div className="flex items-center justify-between">
              <span className="text-[16px] font-medium text-[#1F2937]">
                {pref.label}
              </span>
              {selected === pref.value && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-6 h-6 rounded-full bg-[#1E40AF] flex items-center justify-center"
                >
                  <svg
                    className="w-4 h-4 text-white"
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
          </motion.button>
        ))}
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
          Continue
        </Button>
      </motion.div>
    </div>
  );
}
