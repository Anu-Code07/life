import PageLayout from "@/components/PageLayout";
import ChatJournal from "@/components/ChatJournal";
import PageHeader from "@/components/PageHeader";

export default function ChatPage() {
  return (
    <PageLayout>
      <div className="py-8 sm:py-12">
        <PageHeader
          label="Journal"
          title="Write in the margin"
          description="A conversation through stories — not advice, just parallels."
        />
        <ChatJournal />
      </div>
    </PageLayout>
  );
}
