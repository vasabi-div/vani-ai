
import ChatBody from "./ChatBody";
import ChatInput from "./ChatInput";
import SuggestedPrompts from "./SuggestedPrompts";

import type { Message } from "@/types/chat";

type ChatWindowProps = {
  messages: Message[];
  onSend: (message: string) => void;
  isLoading: boolean;
};

export default function ChatWindow({
  messages,
  onSend,
  isLoading,
}: ChatWindowProps) {
  return (
    <div className="fixed bottom-24fixed
bottom-24
right-6
flex
h-[min(520px,calc(100vh-3rem))]
w-96
flex-col
overflow-hidden
rounded-2xl
border
bg-white
shadow-xl">
     

     <ChatBody
  messages={messages}
  isLoading={isLoading}
  onPromptClick={onSend}
/>

<ChatInput
  onSend={onSend}
  isLoading={isLoading}
/>
    </div>
  );
}