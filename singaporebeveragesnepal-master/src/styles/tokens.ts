export const FONTS = {
  heading: "'Playfair Display', Georgia, serif",
  body: "'Inter', system-ui, sans-serif",
} as const;

export const TYPE_SCALE = {
  heroHeading:
    "text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight",
  sectionHeading: "text-3xl md:text-4xl font-bold leading-tight",
  cardTitle: "text-xl font-semibold",
  body: "text-base leading-relaxed",
  small: "text-sm",
} as const;

export const SPACING = {
  sectionY: "py-32 md:py-48",
  containerX: "px-4 md:px-8 lg:px-12",
  heroY: "py-16 md:py-24",
} as const;

export const RADIUS = {
  pill: "rounded-full",
  card: "rounded-2xl",
  button: "rounded-full",
  image: "rounded-3xl",
} as const;

export const TRANSITION = {
  default: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  slow: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  spring: { type: "spring", stiffness: 120, damping: 20 },
} as const;
