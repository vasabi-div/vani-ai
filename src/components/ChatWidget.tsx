"use client";

import { useState } from "react";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

import type { Message } from "@/types/chat";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  async function handleSend(message: string) {
    // Show the user's message immediately
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        message,
      },
    ]);

    setIsLoading(true);

    try {
      const updatedMessages = [
  ...messages,
  {
    sender: "user",
    message,
  },
];
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
           messages: updatedMessages,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          message: data.reply,
        },
      ]);

      setIsLoading(false);
    } catch (error) {
      console.error("Error calling API:", error);

      setIsLoading(false);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          message:
            "Sorry, something went wrong while contacting Gemini.",
        },
      ]);
    }
  }

  return (
    <>
      {isOpen && (
        <ChatWindow
          messages={messages}
          onSend={handleSend}
          isLoading={isLoading}
        />
      )}

      <ChatButton
        isOpen={isOpen}
        toggleChat={() => setIsOpen(!isOpen)}
      />
    </>
  );
}  