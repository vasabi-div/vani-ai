const prompts = [
  "Tell me about Picklebay",
  "What's your design process?",
  "Tell me about your experience",
  "What tools do you use?",
];

type SuggestedPromptsProps = {
  onPromptClick: (prompt: string) => void;
};

export default function SuggestedPrompts({
  onPromptClick,
}: SuggestedPromptsProps) {
  return (
    <div className="flex flex-wrap gap-2 px-4 pb-2">
      {prompts.map((prompt) => (
        <button
          key={prompt}
          onClick={() => onPromptClick(prompt)}
          className="rounded-full border border-zinc-300 px-3 py-2 text-sm transition hover:bg-zinc-100"
        >
          {prompt}
        </button>
      ))}
    </div>
  );
}