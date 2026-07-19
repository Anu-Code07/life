import PageTurnLoader from "@/components/PageTurnLoader";

interface LoadingReflectionProps {
  message?: string;
}

export default function LoadingReflection({
  message = "Turning the page...",
}: LoadingReflectionProps) {
  return <PageTurnLoader message={message} />;
}
