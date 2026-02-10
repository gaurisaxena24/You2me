import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { useState } from "react";

interface InterestsSelectionScreenProps {
  onContinue: (interests: string[]) => void;
  title: string;
  subtitle: string;
  maxSelection?: number;
  allowSkip?: boolean;
  onSkip?: () => void;
}

const AVAILABLE_INTERESTS = [
  "Photography",
  "Hiking",
  "Coffee",
  "Music",
  "Art",
  "Reading",
  "Gaming",
  "Cooking",
  "Travel",
  "Fitness",
  "Movies",
  "Tech",
  "Yoga",
  "Dancing",
  "Food",
  "Nature",
  "Writing",
  "Fashion",
  "Podcasts",
  "Sports",
];

export function InterestsSelectionScreen({
  onContinue,
  title,
  subtitle,
  maxSelection = 3,
  allowSkip = false,
  onSkip,
}: InterestsSelectionScreenProps) {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else if (selectedInterests.length < maxSelection) {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleContinue = () => {
    if (selectedInterests.length === maxSelection) {
      onContinue(selectedInterests);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col p-6 pb-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="pt-8 pb-6"
      >
        <h1 className="text-[28px] font-bold text-[#1F2937] mb-3">{title}</h1>
        <p className="text-[18px] text-[#6B7280]">{subtitle}</p>
        <div className="mt-4">
          <span className="text-[16px] font-medium text-[#1E40AF]">
            {selectedInterests.length}/{maxSelection} selected
          </span>
        </div>
      </motion.div>

      {/* Interests grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
        className="flex-1 overflow-y-auto pb-4"
      >
        <div className="grid grid-cols-2 gap-3">
          {AVAILABLE_INTERESTS.map((interest, index) => {
            const isSelected = selectedInterests.includes(interest);
            return (
              <motion.button
                key={interest}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleInterest(interest)}
                className={`
                  h-14 rounded-full flex items-center justify-center
                  transition-all duration-200 ease-in-out
                  ${
                    isSelected
                      ? "bg-[#1E40AF] text-white shadow-lg shadow-[#1E40AF]/30"
                      : "bg-[#F3F4F6] text-[#1F2937] hover:bg-[#E5E7EB]"
                  }
                `}
              >
                {interest}
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col gap-3 pt-4"
      >
        <Button
          onClick={handleContinue}
          disabled={selectedInterests.length !== maxSelection}
          className={`
            w-full h-12 rounded-full
            ${
              selectedInterests.length === maxSelection
                ? "bg-[#1E40AF] hover:bg-[#1E3A8A] text-white"
                : "bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed"
            }
          `}
        >
          Continue
        </Button>
        {allowSkip && onSkip && (
          <Button
            onClick={onSkip}
            variant="ghost"
            className="w-full h-12 text-[#6B7280] hover:text-[#1F2937] rounded-full"
          >
            Skip
          </Button>
        )}
      </motion.div>
    </div>
  );
}
