import type { ReactNode } from "react";

export function SlideLayout({
  children,
  index,
  total,
  label,
  tone = "paper",
}: {
  children: ReactNode;
  index?: number;
  total?: number;
  label?: string;
  tone?: "paper" | "forest" | "mint";
}) {
  const bg =
    tone === "forest" ? "bg-forest-deep" : tone === "mint" ? "bg-mint-soft" : "bg-paper";
  const fg = tone === "forest" ? "text-paper" : "text-ink";

  return (
    <div className={`slide-content ${bg} ${fg}`}>
      <div className={`absolute inset-0 grid-paper ${tone === "forest" ? "opacity-25" : ""}`} />
      <div className="relative flex h-full flex-col justify-between px-[80px] py-[44px]">
        {/* Header */}
        <header className="flex shrink-0 items-center justify-between">
          <div className="flex items-center gap-4">
            <span
              className={`slide-kicker font-bold tracking-wider brut-flat border-[3px] px-4 py-1.5 ${
                tone === "forest" ? "bg-mint text-ink" : "bg-paper text-ink"
              }`}
            >
              {label ?? "Environmental Advocacy"}
            </span>
          </div>
          {typeof index === "number" && typeof total === "number" ? (
            <span
              className={`slide-page brut-flat border-[3px] px-5 py-2 font-bold ${
                tone === "forest" ? "bg-mint text-ink" : "bg-card text-ink"
              }`}
            >
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          ) : null}
        </header>

        {/* Content Body */}
        <main className="flex min-h-0 flex-1 flex-col justify-between py-3 overflow-hidden">
          {children}
        </main>

        {/* Footer */}
        <footer className="flex shrink-0 items-center justify-between border-t-[2px] border-ink/20 pt-2.5">
          <span
            className="slide-footer tracking-widest uppercase opacity-75 font-semibold"
            style={{ fontSize: 16 }}
          >
            Sheriffdeen O. Saula · Community Evidence Gathering
          </span>
          <span
            className="slide-footer tracking-widest uppercase opacity-75 font-semibold"
            style={{ fontSize: 16 }}
          >
            From Environmental Concern to Community Action
          </span>
        </footer>
      </div>
    </div>
  );
}

export function Card({
  children,
  className = "",
  tone = "card",
}: {
  children: ReactNode;
  className?: string;
  tone?: "card" | "mint" | "forest" | "accent" | "muted" | "paper";
}) {
  const tones = {
    card: "bg-card text-ink",
    paper: "bg-paper text-ink",
    mint: "bg-mint-soft text-ink",
    accent: "bg-mint text-ink",
    forest: "bg-forest text-paper",
    muted: "bg-[#e5e7eb] text-ink",
  } as const;
  return <div className={`brut ${tones[tone]} ${className}`}>{children}</div>;
}

export function Kicker({
  children,
  tone = "mint",
}: {
  children: ReactNode;
  tone?: "mint" | "forest" | "paper";
}) {
  const bg =
    tone === "forest"
      ? "bg-forest text-paper"
      : tone === "paper"
      ? "bg-paper text-ink"
      : "bg-mint text-ink";

  return (
    <div className="flex">
      <span className={`slide-kicker brut-flat border-[3px] px-4 py-1.5 ${bg}`}>
        {children}
      </span>
    </div>
  );
}

export function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3.5">
      <span className="mt-[6px] block h-[14px] w-[14px] shrink-0 border-[3px] border-ink bg-mint" />
      <span className="slide-body font-medium leading-snug">{children}</span>
    </li>
  );
}
