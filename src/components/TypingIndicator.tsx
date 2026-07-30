export default function TypingIndicator() {
  return (
    <div className="flex w-fit items-center gap-1 rounded-2xl bg-zinc-100 px-4 py-3">
      <span className="typing-dot h-2 w-2 rounded-full bg-zinc-500" />
      <span className="typing-dot h-2 w-2 rounded-full bg-zinc-500" />
      <span className="typing-dot h-2 w-2 rounded-full bg-zinc-500" />
    </div>
  );
}