const colorMap = {
  pink: "bg-[#ff4d8b] text-white",
  teal: "bg-[#1a3a3a] text-white",
  lavender: "bg-[#b8a4ed] text-[#0a0a0a]",
  peach: "bg-[#ffb084] text-[#0a0a0a]",
  ochre: "bg-[#e8b94a] text-[#0a0a0a]",
  cream: "bg-[#f5f0e0] text-[#0a0a0a] border border-[#e5e5e5]",
};

interface FeatureCardProps {
  title: string;
  description: string;
  color?: keyof typeof colorMap;
}

export default function FeatureCard({
  title,
  description,
  color = "cream",
}: FeatureCardProps) {
  return (
    <div
      className={`rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 ${colorMap[color]}`}
    >
      <h3 className="font-serif text-lg sm:text-xl mb-2">{title}</h3>
      <p className="text-sm sm:text-base leading-relaxed opacity-90">{description}</p>
    </div>
  );
}
