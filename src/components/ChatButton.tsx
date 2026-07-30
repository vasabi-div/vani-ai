import Image from "next/image";

type ChatButtonProps = {
  isOpen: boolean;
  toggleChat: () => void;
};

export default function ChatButton({
  isOpen,
  toggleChat,
}: ChatButtonProps) {
  return (
    <button
      onClick={toggleChat}
      className={`fixed bottom-6 right-6 flex items-center justify-center transition-all duration-300 ${
    isOpen
      ? "h-14 w-14 rounded-full bg-black text-white shadow-lg hover:scale-105"
      : "hover:scale-105"
  }`}
>
  {isOpen ? (
    <span className="text-xl">✕</span>
  ) : (
    <Image
      src="/vani-ai-icon.svg"
      alt="Vani AI"
      width={52}
      height={52}
      priority
      className="transition-transform duration-300"
    />
  )}
</button>
  );
}