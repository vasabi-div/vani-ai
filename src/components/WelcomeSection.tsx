import SuggestedPrompts from "./SuggestedPrompts";

type WelcomeSectionProps = {
  onPromptClick: (prompt: string) => void;
};

export default function WelcomeSection({
  onPromptClick,
}: WelcomeSectionProps) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-zinc-900">
        Hi, here to help you navigate
      </h2>

      <p className="mt-2 text-sm leading-6 text-zinc-600">
        I'm here to answer questions about Vani's projects,
        design process, experience and skills.
      </p>

      <div className="mt-5 border-t border-zinc-200 pt-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Try asking
        </p>

        <SuggestedPrompts
          onPromptClick={onPromptClick}
        />
      </div>
    </div>
  );
}