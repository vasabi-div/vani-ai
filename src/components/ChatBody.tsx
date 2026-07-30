"use client";

import { useEffect, useRef } from "react";

import MessageBubble from "./MessageBubble";
import WelcomeSection from "./WelcomeSection";

import type { Message } from "@/types/chat";

type ChatBodyProps = {
  messages: Message[];
  isLoading: boolean;
  onPromptClick: (prompt: string) => void;
};

export default function ChatBody({
  messages,
  isLoading,
  onPromptClick,
}: ChatBodyProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  return (
    <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
      <WelcomeSection
        onPromptClick={onPromptClick}
      />

      <div className="border-t border-zinc-200" />

      {messages.map((message, index) => (
        <MessageBubble
          key={index}
          sender={message.sender}
          message={message.message}
        />
      ))}

      {isLoading && (
        <MessageBubble
          sender="ai"
          message=""
          isTyping
        />
      )}

      <div ref={bottomRef} />
    </div>
  );
}