"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  ExternalLink,
  RefreshCw,
  User
} from 'lucide-react';
import { WhatsAppIcon } from './Icons';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  showWhatsAppButton?: boolean;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    sender: 'bot',
    text: "Hi there! I'm Vibhu's AI Assistant. How can I help you explore Vibhu's work, technical skills, or projects today?",
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  }
];

const SUGGESTIONS = [
  "Tell me about Vibhu 👤",
  "What are Vibhu's top skills? ⚡",
  "Show me main projects 🚀",
  "Message Vibhu on WhatsApp 💬"
];

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919468150076";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hi Vibhu, I connected with your AI Assistant and would like to chat!")}`;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const generateBotResponse = (query: string): { text: string; showWhatsAppButton?: boolean } => {
    const q = query.toLowerCase();

    if (q.includes('whatsapp') || q.includes('phone') || q.includes('number') || q.includes('message')) {
      return {
        text: `You can reach Vibhu directly on WhatsApp at +91 9468150076! Click the button below to start a direct conversation.`,
        showWhatsAppButton: true
      };
    }

    if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('node') || q.includes('react')) {
      return {
        text: `Vibhu specializes in:\n\n• **Core**: MERN Stack (MongoDB, Express, React, Node.js), Next.js 15, TypeScript\n• **AI Engineering**: Agentic RAG, Vector Databases, Gemini API\n• **Architecture & Security**: Scalable APIs, Microservices, Security Audit & Optimization\n• **Styling**: TailwindCSS & Custom Design Systems`,
        showWhatsAppButton: true
      };
    }

    if (q.includes('project') || q.includes('agrowcart') || q.includes('portfolio') || q.includes('work')) {
      return {
        text: `Here are Vibhu's highlight projects:\n\n1. **AgrowCart** - Lead Developer of an agricultural digital platform optimizing local supply chains and farmer connections.\n2. **AI Agentic Solutions** - High-performance Agentic RAG system for context-aware querying.\n3. **Modern Portfolio** - High-performance Next.js application built with semantic design systems.`,
        showWhatsAppButton: true
      };
    }

    if (q.includes('vibhu') || q.includes('who') || q.includes('about') || q.includes('bio')) {
      return {
        text: `Vibhu Suneja is a **NIDU Researcher & MERN Stack Developer** based in Kurukshetra, Haryana, India. He builds scalable AI-integrated platforms, web ecosystems, and modern agentic solutions.`,
        showWhatsAppButton: true
      };
    }

    if (q.includes('hire') || q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('connect')) {
      return {
        text: `Vibhu is available for new projects, full-stack roles, and technical consulting!\n\n• **Email**: vibhusun01@gmail.com\n• **WhatsApp**: +91 9468150076\n• **LinkedIn**: linkedin.com/in/vibhusuneja08\n• **GitHub**: github.com/VibhuSuneja`,
        showWhatsAppButton: true
      };
    }

    return {
      text: `Thanks for your inquiry! Vibhu is experienced in MERN Stack, Next.js, and AI Agentic RAG platforms. Feel free to connect directly via WhatsApp or Email (vibhusun01@gmail.com).`,
      showWhatsAppButton: true
    };
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botRes = generateBotResponse(text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botRes.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        showWhatsAppButton: botRes.showWhatsAppButton,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 right-24 z-50 p-3.5 rounded-full bg-accent text-accent-foreground font-medium shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group border border-accent/40"
            aria-label="Open AI Chatbot"
          >
            <div className="relative">
              <Bot size={22} />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-text opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-text"></span>
              </span>
            </div>
            <span className="text-[13px] font-semibold pr-1 hidden sm:inline-block">
              Ask AI
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chatbot Dialog Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 right-4 sm:right-8 z-50 w-[calc(100vw-2rem)] sm:w-[380px] h-[540px] max-h-[85vh] bg-surface/95 backdrop-blur-xl border border-border-default rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-background/60 border-b border-border-default flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-accent/20 border border-accent/40 flex items-center justify-center text-accent">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold text-primary-text flex items-center gap-2">
                    Vibhu&apos;s AI Assistant
                    <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-accent/15 text-accent font-mono">ONLINE</span>
                  </h3>
                  <p className="text-[11px] text-muted-text">Instant Answers & Direct Contact</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleReset}
                  className="p-2 text-muted-text hover:text-primary-text transition-colors rounded-lg hover:bg-surface"
                  title="Reset conversation"
                >
                  <RefreshCw size={15} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-muted-text hover:text-primary-text transition-colors rounded-lg hover:bg-surface"
                  title="Close chat"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-[13px] font-sans">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-7 h-7 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <Bot size={14} />
                    </div>
                  )}

                  <div className={`max-w-[82%] rounded-2xl p-3.5 leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-accent text-accent-foreground rounded-tr-none font-medium' 
                      : 'bg-background/80 border border-border-default text-primary-text rounded-tl-none'
                  }`}>
                    <div className="whitespace-pre-line">{msg.text}</div>
                    
                    {msg.showWhatsAppButton && (
                      <div className="mt-3 pt-2 border-t border-border-default/40">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#25D366] hover:underline"
                        >
                          <WhatsAppIcon size={16} /> Message on WhatsApp <ExternalLink size={12} />
                        </a>
                      </div>
                    )}
                    
                    <span className={`block text-[9px] mt-1 text-right ${
                      msg.sender === 'user' ? 'text-accent-foreground/70' : 'text-muted-text'
                    }`}>
                      {msg.timestamp}
                    </span>
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-7 h-7 rounded-full bg-primary-text/10 border border-primary-text/20 flex items-center justify-center text-primary-text shrink-0 mt-0.5">
                      <User size={14} />
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex gap-2.5 items-center text-muted-text text-[12px]">
                  <div className="w-7 h-7 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent shrink-0">
                    <Bot size={14} />
                  </div>
                  <div className="bg-background/80 border border-border-default px-4 py-2 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions Chips */}
            <div className="px-4 py-2 bg-background/30 border-t border-border-default/40 flex items-center gap-2 overflow-x-auto no-scrollbar">
              {SUGGESTIONS.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(s)}
                  className="whitespace-nowrap px-3 py-1 rounded-full bg-surface border border-border-default hover:border-accent/50 text-[11px] text-secondary-text hover:text-accent transition-all shrink-0"
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-background/80 border-t border-border-default flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about skills, projects, contact..."
                className="flex-1 bg-surface border border-border-default rounded-xl px-3.5 py-2 text-[13px] text-primary-text placeholder:text-muted-text focus:outline-none focus:border-accent/60 transition-colors"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-2.5 rounded-xl bg-accent text-accent-foreground disabled:opacity-40 hover:opacity-90 transition-opacity"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
