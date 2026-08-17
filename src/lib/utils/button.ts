import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--accent)] text-[var(--accent-foreground)] hover:bg-[var(--accent-hover)] active:brightness-95 shadow-[0_8px_24px_var(--accent-glow)]",
  secondary:
    "bg-[#2a2930] text-white hover:bg-[#34323b] active:bg-[#3c3a44]",
  ghost: "bg-transparent text-white hover:bg-white/8 active:bg-white/12",
  outline:
    "bg-transparent text-white border border-white/35 hover:border-white hover:bg-white/5",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 px-5 text-[0.8125rem] tracking-[0.04em]",
  md: "h-11 px-6 text-sm tracking-[0.04em]",
  lg: "h-12 px-7 text-[0.9375rem] tracking-[0.04em]",
};

export function buttonClassName(options?: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}): string {
  const variant = options?.variant ?? "primary";
  const size = options?.size ?? "md";

  return cn(
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-btn)] font-semibold uppercase transition-[background-color,border-color,color,transform,box-shadow] duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:scale-[0.98]",
    variantClasses[variant],
    sizeClasses[size],
    options?.className,
  );
}
