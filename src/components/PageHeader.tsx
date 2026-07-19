interface PageHeaderProps {
  label?: string;
  title: string;
  description?: string;
}

export default function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <div className="text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
      {label && (
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#9a9a9a] mb-3">
          {label}
        </p>
      )}
      <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0a0a0a] leading-tight tracking-tight">
        {title}
      </h1>
      {description && (
        <p className="mt-3 sm:mt-4 text-[#6a6a6a] text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
