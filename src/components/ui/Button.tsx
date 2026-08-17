import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { buttonClassName } from "@/lib/utils/button";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

type ButtonAsButton = {
  href?: undefined;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

type ButtonAsLink = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
} & Omit<
  ComponentPropsWithoutRef<typeof Link>,
  "className" | "children" | "href"
>;

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: ButtonProps) {
  const classes = buttonClassName({ variant, size, className });

  if ("href" in rest && typeof rest.href === "string") {
    const { href, ...linkProps } = rest;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as Omit<ButtonAsButton, "children" | "variant" | "size" | "className">;
  const { type = "button", ...other } = buttonProps;

  return (
    <button type={type} className={classes} {...other}>
      {children}
    </button>
  );
}
