import ReactMarkdown from "react-markdown";

type MessageBubbleProps = {
  message: string;
  sender: "user" | "ai";
  isTyping?: boolean;
};

export default function MessageBubble({
  message,
  sender,
  isTyping = false,
}: MessageBubbleProps) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
          isUser
            ? "bg-black text-white"
            : "bg-zinc-100 text-black"
        }`}
      >
        {isTyping ? (
          <div className="flex gap-1">
            <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-500 [animation-delay:-0.3s]" />
            <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-500 [animation-delay:-0.15s]" />
            <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-500" />
          </div>
        ) : (
          <ReactMarkdown
  components={{
    p: ({ children }) => (
      <p className="mb-2 last:mb-0">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mb-2 list-disc pl-5">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-2 list-decimal pl-5">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="mb-1">
        {children}
      </li>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold">
        {children}
      </strong>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="rounded bg-zinc-200 px-1 py-0.5 text-sm">
        {children}
      </code>
    ),
    h2: ({ children }) => (
  <h2 className="mb-2 mt-4 text-lg font-semibold">
    {children}
  </h2>
),

h3: ({ children }) => (
  <h3 className="mb-2 mt-3 text-base font-semibold">
    {children}
  </h3>
),

blockquote: ({ children }) => (
  <blockquote className="my-3 border-l-4 border-zinc-300 pl-4 italic text-zinc-600">
    {children}
  </blockquote>
),
  }}
>
  {message}
</ReactMarkdown>
        )}
      </div>
    </div>
  );
}