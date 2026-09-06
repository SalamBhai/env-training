import { useEffect, useRef, useState, type ReactNode } from "react";

export function ScaledSlide({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.25);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      const { width, height } = el.getBoundingClientRect();
      if (!width || !height) return;
      setScale(Math.min(width / 1920, height / 1080));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full overflow-hidden ${className}`}
    >
      <div className="slide-wrapper" style={{ ["--scale" as string]: scale }}>
        {children}
      </div>
    </div>
  );
}
