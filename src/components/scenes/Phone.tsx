import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

/** Plays its CSS keyframe loops only while on screen. */
export function Scene({
  children,
  className = "",
  label,
}: {
  children: ReactNode;
  className?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setPlaying(entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      role="img"
      aria-label={label}
      className={`scene ${playing ? "is-playing" : ""} ${className}`}
    >
      <div aria-hidden className="contents">
        {children}
      </div>
    </div>
  );
}

export function Phone({
  children,
  width = 280,
  ratio = "9 / 19",
}: {
  children: ReactNode;
  width?: number;
  ratio?: string;
}) {
  return (
    <div
      className="phone"
      style={{ "--phone-w": `${width}px`, "--phone-ratio": ratio } as CSSProperties}
    >
      <div className="phone-island" />
      <div className="phone-screen">
        <div className="flex h-11 shrink-0 items-center justify-between px-6 pt-1 text-[11px] font-semibold">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <span className="h-2 w-3 rounded-sm bg-fg/80" />
            <span className="h-2 w-4 rounded-sm border border-fg/60" />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

export function Notification({
  className,
  title,
  body,
  icon,
}: {
  className: string;
  title: string;
  body: string;
  icon: ReactNode;
}) {
  return (
    <div
      className={`${className} absolute inset-x-2 top-2 z-40 flex items-center gap-2.5 rounded-2xl border border-line bg-surface/95 p-2.5 shadow-lg backdrop-blur`}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent text-on-accent">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[11px] font-semibold leading-tight">{title}</span>
        <span className="block truncate text-[11px] leading-tight text-muted">{body}</span>
      </span>
    </div>
  );
}
