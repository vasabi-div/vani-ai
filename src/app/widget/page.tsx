import ChatWidget from "@/components/ChatWidget";

export default function WidgetPage() {
  return (
    <main className="fixed inset-0 bg-transparent pointer-events-none">
      <div className="pointer-events-auto">
        <ChatWidget />
      </div>
    </main>
  );
}