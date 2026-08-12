import Link from "next/link";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/* -------------------------------------------------------------------------- */
/*  Container                                                                  */
/* -------------------------------------------------------------------------- */

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px] px-6 md:px-10", className)}>
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section                                                                    */
/* -------------------------------------------------------------------------- */

export function Section({
  as: Tag = "section",
  className,
  children,
  ...props
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"section">) {
  return (
    <Tag className={cn("py-20 md:py-28", className)} {...props}>
      {children}
    </Tag>
  );
}

/* -------------------------------------------------------------------------- */
/*  Eyebrow                                                                    */
/* -------------------------------------------------------------------------- */

export function Eyebrow({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <p className={cn("text-eyebrow font-medium text-accent", className)}>
      {children}
    </p>
  );
}

/* -------------------------------------------------------------------------- */
/*  Headings                                                                   */
/* -------------------------------------------------------------------------- */

export function Display({
  as: Tag = "h2",
  className,
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      className={cn(
        "font-display text-balance text-[2.25rem] leading-[1.1] font-light tracking-[-0.01em] md:text-[3.25rem]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Lead({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <p className={cn("text-pretty text-lg leading-relaxed text-ink-soft", className)}>
      {children}
    </p>
  );
}

/* -------------------------------------------------------------------------- */
/*  Button                                                                     */
/* -------------------------------------------------------------------------- */

type ButtonVariant = "solid" | "deep" | "soft" | "outline" | "ghost";

const buttonBase =
  "inline-flex items-center justify-center gap-1.5 rounded-full px-7 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const buttonVariants: Record<ButtonVariant, string> = {
  solid: "bg-accent text-ink-invert hover:bg-accent-hover",
  deep: "bg-accent-deep text-white hover:bg-accent-hover",
  soft: "bg-accent-soft text-accent-hover hover:bg-accent hover:text-ink-invert",
  outline:
    "border border-line-strong text-ink hover:border-accent hover:text-accent",
  ghost: "text-ink hover:text-accent",
};

export function Button({
  href,
  variant = "solid",
  className,
  children,
  ...props
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">) {
  return (
    <Link
      href={href}
      className={cn(buttonBase, buttonVariants[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/*  Arrow                                                                      */
/* -------------------------------------------------------------------------- */

export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={cn("size-3.5", className)}
    >
      <path
        d="M6.5 13.5 13.5 6.5m0 0H7.75m5.75 0v5.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={cn("size-4", className)}
    >
      <path
        d="M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
