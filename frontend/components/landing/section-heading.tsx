type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";
  const eyebrowAlignment = align === "center" ? "justify-center" : "";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      <div className={`flex items-center gap-3 ${eyebrowAlignment}`}>
        <span className="h-px w-10 bg-brand/55" />
        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-brand">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-[2rem] font-semibold tracking-[-0.05em] text-ink sm:text-[2.75rem]">
        {title}
      </h2>
      <p className="max-w-[42rem] text-[1.02rem] leading-8 text-muted sm:text-lg">
        {description}
      </p>
    </div>
  );
}
