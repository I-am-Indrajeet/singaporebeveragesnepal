import { cn } from "@/lib/utils/cn";


export type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  accentColor?: string;
  titleColor?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  accentColor,
  titleColor,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left";

  return (
    <div className={cn("flex max-w-3xl flex-col gap-3", alignClass)}>
      {eyebrow ? (
        <p
          className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500"
          style={accentColor ? { color: accentColor } : undefined}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.1] tracking-tighter drop-shadow-sm"
        style={titleColor ? { color: titleColor } : undefined}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="text-base leading-7 text-zinc-600">{subtitle}</p>
      ) : null}
    </div>
  );
}
