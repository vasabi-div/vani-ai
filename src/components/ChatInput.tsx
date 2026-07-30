"use client";

import { useState } from "react";

type ChatInputProps = {
  onSend: (message: string) => void;
    isLoading: boolean;
};

export default function ChatInput({
  onSend,
   isLoading,
}: ChatInputProps) {
  const [message, setMessage] = useState("");

  function sendMessage() {
    if (message.trim() === "") return;

    onSend(message);

    setMessage("");
  }

  return (
    <div className="border-t p-4">
      <div className="flex gap-2">
        <input
          value={message}
          disabled={isLoading}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
           className="flex-1 rounded-lg border px-3 py-2 disabled:cursor-not-allowed disabled:bg-zinc-100"
          placeholder={
    isLoading
      ? "thinking..."
      : "Ask me anything..."
  }
        />

        <button
          onClick={sendMessage}
           disabled={isLoading}
            className="rounded-lg bg-black px-4 text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
        >
          ➤
        </button>
      </div>
    </div>
  );
}