import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { Heart, User, MessageCircle, Edit } from "lucide-react";
import { useState } from "react";

interface Person {
  id: string;
  name: string;
  interests: string[];
  icon: string;
  distance: string;
}

interface LandingScreenProps {
  userInterests: string[];
  userName: string;
  onStartChat?: (person: Person) => void;
  onEditInterests?: () => void;
}

const MOCK_PEOPLE: Person[] = [
  {
    id: "1",
    name: "Alex Chen",
    interests: ["Photography", "Coffee", "Travel"],
    icon: "🎨",
    distance: "1.2 km",
  },
  {
    id: "2",
    name: "Jordan Smith",
    interests: ["Hiking", "Music", "Nature"],
    icon: "🌟",
    distance: "0.8 km",
  },
  {
    id: "3",
    name: "Taylor Kim",
    interests: ["Reading", "Coffee", "Art"],
    icon: "📚",
    distance: "1.5 km",
  },
  {
    id: "4",
    name: "Morgan Lee",
    interests: ["Gaming", "Tech", "Music"],
    icon: "🎮",
    distance: "2.0 km",
  },
  {
    id: "5",
    name: "Casey Brown",
    interests: ["Cooking", "Food", "Travel"],
    icon: "🍳",
    distance: "0.5 km",
  },
];

export function LandingScreen({ userInterests, userName, onStartChat, onEditInterests }: LandingScreenProps) {
  const [savedPeople, setSavedPeople] = useState<string[]>([]);

  const toggleSave = (personId: string) => {
    if (savedPeople.includes(personId)) {
      setSavedPeople(savedPeople.filter((id) => id !== personId));
    } else {
      setSavedPeople([...savedPeople, personId]);
    }
  };

  const getSharedInterests = (personInterests: string[]) => {
    return personInterests.filter((interest) => userInterests.includes(interest));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="bg-gradient-to-b from-[#DBEAFE] to-white p-6 pb-8"
      >
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[24px] font-bold text-[#1F2937]">YOU2ME</h1>
          <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
            <User className="w-5 h-5 text-[#1E40AF]" />
          </button>
        </div>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[18px] text-[#4B5563]">Your interests for today</h2>
          {onEditInterests && (
            <button
              onClick={onEditInterests}
              className="flex items-center gap-2 text-[14px] text-[#1E40AF] hover:underline"
            >
              <Edit className="w-4 h-4" />
              Edit
            </button>
          )}
        </div>

        {/* Interest pills */}
        <div className="flex flex-wrap gap-2">
          {userInterests.map((interest, index) => (
            <motion.div
              key={interest}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="px-4 py-2 bg-white rounded-full text-[#1E40AF] shadow-sm"
            >
              {interest}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* People list */}
      <div className="p-6">
        <h3 className="text-[20px] font-bold text-[#1F2937] mb-1">
          People nearby with similar interests
        </h3>
        <p className="text-[14px] text-[#6B7280] mb-4">
          {MOCK_PEOPLE.length} {MOCK_PEOPLE.length === 1 ? "person" : "people"} found
        </p>

        <div className="flex flex-col gap-4">
          {MOCK_PEOPLE.map((person, index) => {
            const sharedInterests = getSharedInterests(person.interests);
            const isSaved = savedPeople.includes(person.id);

            return (
              <motion.div
                key={person.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeInOut" }}
                className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#DBEAFE] to-[#A5B4FC] flex items-center justify-center text-3xl flex-shrink-0">
                    {person.icon}
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-[18px] font-bold text-[#1F2937]">
                          {person.name}
                        </h4>
                        <p className="text-[12px] text-[#6B7280]">{person.distance}</p>
                      </div>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleSave(person.id)}
                        className={`
                          w-9 h-9 rounded-full flex items-center justify-center
                          transition-colors duration-200
                          ${
                            isSaved
                              ? "bg-[#1E40AF] text-white"
                              : "bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]"
                          }
                        `}
                      >
                        <Heart className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`} />
                      </motion.button>
                    </div>

                    {/* Shared interests */}
                    {sharedInterests.length > 0 && (
                      <div className="mb-3">
                        <p className="text-[12px] text-[#6B7280] mb-1">Shared interests:</p>
                        <div className="flex flex-wrap gap-1">
                          {sharedInterests.map((interest) => (
                            <span
                              key={interest}
                              className="px-2 py-1 bg-[#EFF6FF] text-[#1E40AF] text-[12px] rounded-full"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Actions */}
                    <Button
                      onClick={() => onStartChat?.(person)}
                      className="w-full h-10 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white rounded-xl flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Press to start chatting
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}