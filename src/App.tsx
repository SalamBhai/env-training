import { useCallback, useEffect, useRef, useState } from "react";
import { ScaledSlide } from "@/components/deck/ScaledSlide";
import { slides } from "@/components/deck/slides";
import {
  downloadAllPngsZip,
  downloadPdf,
  printVectorPdf,
} from "@/components/deck/exportDeck";

export function App() {
  const [current, setCurrent] = useState(0);
  const [grid, setGrid] = useState(false);
  const [busy, setBusy] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const total = slides.length;

  const getEls = () =>
    Array.from(stageRef.current?.querySelectorAll<HTMLElement>("[data-slide]") ?? []);

  const runExport = async (label: string, fn: () => Promise<void>) => {
    setBusy(label);
    try {
      await fn();
    } catch (err) {
      console.error("Export failed", err);
    } finally {
      setBusy(null);
      setMobileMenuOpen(false);
    }
  };

  const go = useCallback(
    (n: number) => setCurrent((c) => Math.min(total - 1, Math.max(0, n))),
    [total],
  );

  useEffect(() => {
    document.title = `${current + 1}/${total} : ${slides[current].title} · Environmental Advocacy`;
  }, [current, total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (["input", "textarea"].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) return;

      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        go(current + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(current - 1);
      } else if (e.key.toLowerCase() === "g") {
        setGrid((g) => !g);
      } else if (e.key === "F5" || e.key.toLowerCase() === "f") {
        e.preventDefault();
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen?.();
        } else {
          document.exitFullscreen?.();
        }
      } else if (e.key === "Escape") {
        setGrid(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, go]);

  return (
    <div className="flex h-screen flex-col bg-paper text-ink selection:bg-mint selection:text-ink">
      {/* ---------------- Navigation Header ---------------- */}
      <header className="print-hide flex shrink-0 items-center justify-between gap-4 border-b-[3px] border-ink bg-paper px-6 py-3 z-30">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-xl font-extrabold tracking-tight text-forest-deep">
            ENVIRONMENTAL ADVOCACY
          </span>
          <span className="hidden sm:inline text-xs font-bold uppercase tracking-[0.18em] text-forest opacity-80">
            Community Evidence Gathering
          </span>
        </div>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-3">
          <button
            className="deck-ui-btn px-3 py-1.5 text-sm font-semibold"
            onClick={() => setGrid((g) => !g)}
          >
            {grid ? "Slide View" : "Grid (G)"}
          </button>
          <button
            className="deck-ui-btn px-3 py-1.5 text-sm font-semibold"
            onClick={() => {
              if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen?.();
              } else {
                document.exitFullscreen?.();
              }
            }}
          >
            Present (F)
          </button>
          <span className="mx-1 h-5 w-[2px] bg-ink/20" />
          <button
            className="deck-ui-btn px-3 py-1.5 text-sm font-semibold"
            onClick={() => printVectorPdf()}
          >
            Print / Vector PDF
          </button>
          <button
            className="deck-ui-btn px-3 py-1.5 text-sm font-semibold bg-mint"
            disabled={!!busy}
            onClick={() =>
              runExport("pdf", () =>
                downloadPdf(getEls(), "environmental-advocacy-presentation.pdf"),
              )
            }
          >
            Export PDF
          </button>
          <button
            className="deck-ui-btn px-3 py-1.5 text-sm font-semibold"
            disabled={!!busy}
            onClick={() =>
              runExport("zip", () =>
                downloadAllPngsZip(
                  getEls(),
                  slides.map((s) => s.title),
                ),
              )
            }
          >
            Export ZIP
          </button>
          {busy ? (
            <span className="text-xs font-bold uppercase tracking-wider text-forest animate-pulse ml-1">
              Exporting {busy}…
            </span>
          ) : null}
        </div>

        {/* Mobile Controls (Compact Actions Dropdown) */}
        <div className="relative flex md:hidden items-center gap-2">
          {busy ? (
            <span className="text-xs font-bold uppercase tracking-wider text-forest animate-pulse mr-2">
              Exporting…
            </span>
          ) : null}
          <button
            className="deck-ui-btn px-3 py-1.5 text-sm font-bold bg-mint"
            onClick={() => setMobileMenuOpen((o) => !o)}
          >
            Actions ▾
          </button>

          {mobileMenuOpen ? (
            <>
              <div
                className="fixed inset-0 z-40 bg-black/20"
                onClick={() => setMobileMenuOpen(false)}
              />
              <div className="absolute right-0 top-full mt-2 w-52 border-[3px] border-ink bg-paper p-2 shadow-[4px_4px_0_0_var(--ink)] z-50 flex flex-col gap-1">
                <button
                  className="w-full text-left px-3 py-2 text-sm font-bold hover:bg-mint"
                  onClick={() => {
                    setGrid((g) => !g);
                    setMobileMenuOpen(false);
                  }}
                >
                  {grid ? "Slide View" : "Grid View"}
                </button>
                <button
                  className="w-full text-left px-3 py-2 text-sm font-bold hover:bg-mint"
                  onClick={() => {
                    document.documentElement.requestFullscreen?.();
                    setMobileMenuOpen(false);
                  }}
                >
                  Present Mode
                </button>
                <div className="my-1 border-t border-ink/20" />
                <button
                  className="w-full text-left px-3 py-2 text-sm font-semibold hover:bg-mint"
                  onClick={() => {
                    printVectorPdf();
                    setMobileMenuOpen(false);
                  }}
                >
                  Print / Vector PDF
                </button>
                <button
                  className="w-full text-left px-3 py-2 text-sm font-semibold hover:bg-mint"
                  disabled={!!busy}
                  onClick={() =>
                    runExport("pdf", () =>
                      downloadPdf(getEls(), "environmental-advocacy-presentation.pdf"),
                    )
                  }
                >
                  Export PDF
                </button>
                <button
                  className="w-full text-left px-3 py-2 text-sm font-semibold hover:bg-mint"
                  disabled={!!busy}
                  onClick={() =>
                    runExport("zip", () =>
                      downloadAllPngsZip(
                        getEls(),
                        slides.map((s) => s.title),
                      ),
                    )
                  }
                >
                  Export ZIP (Images)
                </button>
              </div>
            </>
          ) : null}
        </div>
      </header>

      {/* ---------------- Main Slide Stage / Grid ---------------- */}
      {grid ? (
        <div className="min-h-0 flex-1 overflow-y-auto p-4 md:p-8 bg-paper">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-[1800px] mx-auto">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => {
                  go(i);
                  setGrid(false);
                }}
                className="group text-left cursor-pointer transition-transform hover:-translate-y-1 focus:outline-none"
              >
                <div
                  className={`aspect-[16/9] w-full border-[3px] border-ink bg-paper shadow-[5px_5px_0_0_var(--ink)] overflow-hidden transition-all ${
                    current === i ? "ring-4 ring-forest" : ""
                  }`}
                >
                  <ScaledSlide>{s.render({ index: i, total })}</ScaledSlide>
                </div>
                <div className="mt-2 text-sm font-bold text-ink flex items-center justify-between">
                  <span>
                    {String(i + 1).padStart(2, "0")} · {s.title}
                  </span>
                  {current === i ? (
                    <span className="text-[10px] uppercase font-extrabold bg-mint px-2 py-0.5 border border-ink">
                      Active
                    </span>
                  ) : null}
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex min-h-0 flex-1 flex-col">
          {/* Slide stage */}
          <div className="min-h-0 flex-1 md:p-6 p-2 flex items-center justify-center">
            <div className="mx-auto h-full w-full max-w-[1600px] md:border-[4px] border border-ink bg-paper md:shadow-[12px_12px_0_0_var(--ink)] shadow-none overflow-hidden">
              <ScaledSlide>{slides[current].render({ index: current, total })}</ScaledSlide>
            </div>
          </div>

          {/* Bottom Controls Bar */}
          <div className="print-hide flex shrink-0 items-center justify-between gap-6 border-t-[3px] border-ink bg-paper px-6 py-3 z-20">
            <p className="hidden max-w-[65%] truncate text-sm text-forest-deep font-semibold md:block">
              {slides[current].notes}
            </p>
            <div className="flex items-center gap-3 ml-auto">
              <button
                className="deck-ui-btn px-4 py-2 text-sm font-bold"
                onClick={() => go(current - 1)}
                disabled={current === 0}
                aria-label="Previous Slide"
              >
                ←
              </button>
              <span className="font-display text-sm font-bold tabular-nums px-2">
                {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <button
                className="deck-ui-btn px-4 py-2 text-sm font-bold"
                onClick={() => go(current + 1)}
                disabled={current === total - 1}
                aria-label="Next Slide"
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- Offscreen Full-Resolution Stage (For High-Res Exports) ---------------- */}
      <div
        ref={stageRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 -z-50 opacity-0"
        style={{ width: 1920, height: 1080, overflow: "hidden" }}
      >
        {slides.map((s, i) => (
          <div key={s.id} data-slide style={{ width: 1920, height: 1080 }}>
            {s.render({ index: i, total })}
          </div>
        ))}
      </div>

      {/* ---------------- Print Slide Container (Native Vector Print-to-PDF) ---------------- */}
      <div className="hidden print:block">
        {slides.map((s, i) => (
          <div key={s.id} className="print-slide">
            {s.render({ index: i, total })}
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
