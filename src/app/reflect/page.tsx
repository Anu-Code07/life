import { redirect } from "next/navigation";

export default async function ReflectRedirectPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const q = params.q?.trim();
  redirect(q ? `/?q=${encodeURIComponent(q)}` : "/");
}
