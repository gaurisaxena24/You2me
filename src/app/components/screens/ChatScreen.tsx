import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { ArrowLeft, Send, MoreVertical, Smile } from "lucide-react";
import { useState } from "react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "other";
  timestamp: Date;
}

interface ChatScreenProps {
  matchName: string;
  matchInterests: string[];
  onBack: () => void;
}

export function ChatScreen({ matchName, matchInterests, onBack }: ChatScreenProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hey! I noticed we both love photography 📸",
      sender: "other",
      timestamp: new Date(Date.now() - 120000),
    },
    {
      id: "2",
      text: "Hi! Yes, I'm always looking for great spots around here!",
      sender: "user",
      timestamp: new Date(Date.now() - 60000),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        text: newMessage,
        sender: "user",
        timestamp: new Date(),
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white border-b border-gray-200 p-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <Button
            onClick={onBack}
            variant="ghost"
            className="w-10 h-10 p-0 rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1E40AF] to-[#60A5FA] flex items-center justify-center">
              <span className="text-white font-semibold text-[16px]">
                {matchName.charAt(0)}
              </span>
            </div>
            
            <div>
              <p className="text-[16px] font-semibold text-[#1F2937]">
                {matchName}
              </p>
              <p className="text-[12px] text-[#6B7280]">
                {matchInterests.join(", ")}
              </p>
            </div>
          </div>
        </div>

        <Button variant="ghost" className="w-10 h-10 p-0 rounded-full">
          <MoreVertical className="w-5 h-5 text-[#6B7280]" />
        </Button>
      </motion.div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`
                max-w-[75%] rounded-2xl px-4 py-3
                ${
                  message.sender === "user"
                    ? "bg-[#1E40AF] text-white rounded-br-md"
                    : "bg-[#F3F4F6] text-[#1F2937] rounded-bl-md"
                }
              `}
            >
              <p className="text-[15px] leading-relaxed">{message.text}</p>
              <p
                className={`
                  text-[11px] mt-1
                  ${message.sender === "user" ? "text-white/70" : "text-[#9CA3AF]"}
                `}
              >
                {formatTime(message.timestamp)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Safety reminder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="bg-[#FEF3C7] border-t border-[#FCD34D] px-4 py-3"
      >
        <p className="text-[12px] text-[#92400E] text-center">
          💙 Remember to keep conversations respectful and safe
        </p>
      </motion.div>

      {/* Input */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="bg-white border-t border-gray-200 p-4"
      >
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="w-10 h-10 p-0 rounded-full flex-shrink-0"
          >
            <Smile className="w-5 h-5 text-[#6B7280]" />
          </Button>

          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type a message..."
            className="flex-1 h-10 rounded-full border-gray-200 bg-[#F3F4F6] focus:border-[#1E40AF] focus:ring-[#1E40AF]"
          />

          <Button
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={`
              w-10 h-10 p-0 rounded-full flex-shrink-0
              ${
                newMessage.trim()
                  ? "bg-[#1E40AF] hover:bg-[#1E3A8A]"
                  : "bg-[#E5E7EB] cursor-not-allowed"
              }
            `}
          >
            <Send className="w-5 h-5 text-white" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
