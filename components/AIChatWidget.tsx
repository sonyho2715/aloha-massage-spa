"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";

interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
}

export default function AIChatWidget() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Aloha! 🌺 I'm your virtual spa assistant. I can help you book appointments, answer questions about our services, or provide information about membership benefits. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  // AI Response Handler (simulated - can be connected to OpenAI/Anthropic API)
  const getAIResponse = async (userMessage: string): Promise<string> => {
    // Simulate AI thinking delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const lowercaseMsg = userMessage.toLowerCase();

    // Knowledge base for spa services
    if (lowercaseMsg.includes("book") || lowercaseMsg.includes("appointment") || lowercaseMsg.includes("schedule")) {
      return "I'd be happy to help you book an appointment! We're open 7 days a week from 9 AM to 8 PM. You can:\n\n1. Use our live availability calendar on the homepage\n2. Call us at (808) 942-5000\n3. Or tell me your preferred date and time, and I'll guide you through the process!\n\nWhat works best for you?";
    }

    if (lowercaseMsg.includes("service") || lowercaseMsg.includes("massage") || lowercaseMsg.includes("price")) {
      return "We offer several premium services:\n\n🌺 **Lomi Lomi Massage** - $80 (60 min)\nTraditional Hawaiian massage with flowing ocean-like strokes\n\n💆 **Deep Tissue Massage** - $90 (60 min)\nFocused pressure to release chronic tension\n\n🦶 **Foot Reflexology** - $50 (45 min)\nPressure point therapy for ultimate relaxation\n\n✨ **Combo Massage** - $70 (60 min)\nFoot reflexology + upper body massage (best value!)\n\n💑 **Couples Massage** - Starting at $140\nRelax together in our couples suite\n\nWhich service interests you?";
    }

    if (lowercaseMsg.includes("hour") || lowercaseMsg.includes("open") || lowercaseMsg.includes("close") || lowercaseMsg.includes("time")) {
      return "We're open 7 days a week:\n\n📅 **Monday - Sunday**\n🕐 9:00 AM - 8:00 PM\n\nWalk-ins are welcome, but appointments are recommended to ensure availability. Would you like to book a time slot?";
    }

    if (lowercaseMsg.includes("membership") || lowercaseMsg.includes("member") || lowercaseMsg.includes("loyalty")) {
      return "Great question! While we're currently finalizing our membership program, here's what we're planning:\n\n🌟 **Benefits Coming Soon:**\n- Priority booking\n- 10-20% discounts on services\n- Special member-only promotions\n- Birthday month treats\n- Loyalty rewards program\n\nIn the meantime, we track your visits and provide special perks to our regular guests. Would you like me to add your contact info to our VIP notification list?";
    }

    if (lowercaseMsg.includes("gift") || lowercaseMsg.includes("card")) {
      return "Our gift cards make the perfect gift! 🎁\n\nYou can purchase:\n- $50 (perfect for foot reflexology)\n- $100 (full body massage)\n- $150 (couples session)\n- Custom amounts ($25-$500)\n\n✨ **Benefits:**\n- Instant digital delivery\n- Never expires\n- Can be used for any service\n- Personalized message option\n\nCheck out our Gift Cards section on the homepage or tell me the amount you'd like!";
    }

    if (lowercaseMsg.includes("location") || lowercaseMsg.includes("address") || lowercaseMsg.includes("where")) {
      return "We're conveniently located in Honolulu, Hawaii! 🌺\n\nFor our exact address and directions, please call us at (808) 942-5000 or check the contact section on our website.\n\nWe have:\n- Easy parking\n- Accessible facilities\n- Serene tropical ambiance\n\nWould you like to book an appointment?";
    }

    if (lowercaseMsg.includes("thank") || lowercaseMsg.includes("mahalo")) {
      return "Mahalo nui loa! 🌺 It's my pleasure to help. If you have any other questions about our services, booking, or membership, feel free to ask anytime!\n\nAloha and we look forward to welcoming you soon! ✨";
    }

    if (lowercaseMsg.includes("hi") || lowercaseMsg.includes("hello") || lowercaseMsg.includes("aloha")) {
      return "Aloha! 🌺 Welcome to Aloha Massage Spa. I'm here to help you with:\n\n- 📅 Booking appointments\n- 💆 Service information and pricing\n- 🎁 Gift card purchases\n- 🌟 Membership inquiries\n- ❓ Any questions you have\n\nWhat can I help you with today?";
    }

    // Default helpful response
    return "I'd be happy to help! I can assist with:\n\n📅 **Booking appointments** - Check availability and schedule\n💆 **Service details** - Information about our massages and treatments\n💰 **Pricing** - Get pricing for all our services\n🕐 **Hours** - Our operating schedule\n🎁 **Gift cards** - Purchase gift certificates\n🌟 **Membership** - Learn about upcoming benefits\n\nWhat would you like to know more about?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Get AI response
    try {
      const aiResponse = await getAIResponse(userMessage.content);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: aiResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("AI Response Error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I apologize, but I'm having trouble responding right now. Please call us at (808) 942-5000 for immediate assistance. 🌺",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Quick action buttons
  const quickActions = [
    { label: "📅 Book Now", message: "I'd like to book an appointment" },
    { label: "💆 Our Services", message: "What services do you offer?" },
    { label: "🕐 Hours", message: "What are your hours?" },
    { label: "🎁 Gift Cards", message: "Tell me about gift cards" },
  ];

  return (
    <>
      {/* Chat Widget Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-coral via-coral-dark to-coral-dark text-white rounded-full w-16 h-16 shadow-glow hover:shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
          aria-label="Open AI Chat Assistant"
        >
          <div className="relative">
            <span className="text-3xl">💬</span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-sage rounded-full animate-pulse"></div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-3rem)] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border-2 border-ocean-blue/10 animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-br from-ocean-blue via-teal to-ocean-blue-light text-white p-6 rounded-t-3xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl border-2 border-white/30">
                  🌺
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-sage rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold">Aloha Assistant</h3>
                <p className="text-xs text-white/80">Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Close chat"
            >
              <span className="text-xl">×</span>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-warm-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-gradient-to-br from-ocean-blue to-teal text-white rounded-br-sm"
                      : "bg-white border border-stone-light/40 text-charcoal rounded-bl-sm shadow-soft"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                  <span
                    className={`text-xs mt-2 block ${
                      message.role === "user" ? "text-white/70" : "text-stone"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-stone-light/40 rounded-2xl rounded-bl-sm px-4 py-3 shadow-soft">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-ocean-blue rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-teal rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                    <div className="w-2 h-2 bg-sage rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length <= 1 && (
            <div className="px-4 py-3 bg-sand-light/30 border-t border-stone-light/20">
              <p className="text-xs text-stone-dark mb-2 font-semibold">Quick Actions:</p>
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setInputValue(action.message);
                      setTimeout(() => handleSendMessage(), 100);
                    }}
                    className="text-xs bg-white hover:bg-ocean-blue hover:text-white text-ocean-blue px-3 py-1.5 rounded-full border border-ocean-blue/20 transition-all duration-200"
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-stone-light/20">
            <div className="flex gap-2 items-end">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-3 border-2 border-stone-light/40 rounded-xl focus:border-ocean-blue focus:ring-4 focus:ring-ocean-blue/20 transition-all text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-to-br from-coral to-coral-dark hover:from-coral-dark hover:to-coral text-white p-3 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-glow hover:shadow-xl transform hover:scale-105 disabled:transform-none"
                aria-label="Send message"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-stone mt-2 text-center">
              Powered by AI • Available 24/7 🌺
            </p>
          </div>
        </div>
      )}
    </>
  );
}
