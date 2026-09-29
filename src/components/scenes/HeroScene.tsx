import type { CSSProperties } from "react";
import { FiCheck, FiCheckCircle, FiSmartphone } from "react-icons/fi";
import { Notification, Phone, Scene } from "./Phone";

const stack = [
  { name: "React Native", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Expo", color: "#A1A1AA" },
  { name: "Firebase", color: "#FFCA28" },
];

// Editor palette is fixed: the editor and terminal are always dark, like the real thing.
const C = {
  kw: "#c792ea",
  fn: "#82aaff",
  tag: "#f07178",
  attr: "#ffcb6b",
  str: "#c3e88d",
  p: "#89ddff",
  t: "#d4d4d8",
};

type Seg = [string, string];
const code: Seg[][] = [
  [["export ", C.kw], ["function ", C.kw], ["Release", C.fn], ["() {", C.p]],
  [["  const ", C.kw], ["{ ship } ", C.t], ["= ", C.p], ["useStores", C.fn], ["();", C.p]],
  [["  return ", C.kw], ["(", C.p]],
  [["    <", C.p], ["Screen ", C.tag], ["title", C.attr], ["=", C.p], ['"v4.8.0"', C.str], [">", C.p]],
  [["      <", C.p], ["Stack ", C.tag], ["items", C.attr], ["={", C.p], ["stack", C.t], ["} />", C.p]],
  [["      <", C.p], ["Build ", C.tag], ["progress", C.attr], [" />", C.p]],
  [["      <", C.p], ["Button ", C.tag], ["onPress", C.attr], ["={", C.p], ["ship", C.t], ["}>", C.p]],
  [["        Ship to stores", C.t]],
  [["      </", C.p], ["Button", C.tag], [">", C.p]],
  [["    </", C.p], ["Screen", C.tag], [">", C.p]],
  [["  );", C.p]],
];

const typed = (len: number) =>
  ({ "--w": `${len}ch`, "--steps": `steps(${Math.max(len, 1)}, end)` }) as CSSProperties;

function Editor() {
  return (
    <div className="w-[340px] overflow-hidden rounded-xl bg-[#0f0f12] font-mono text-[11.5px] leading-[1.75] shadow-2xl ring-1 ring-white/10">
      <div className="flex items-center gap-2 border-b border-white/10 px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[11px] text-white/50">Release.tsx</span>
      </div>
      <ol className="px-3 py-3">
        {code.map((line, i) => {
          const len = line.reduce((n, [s]) => n + s.length, 0);
          return (
            <li key={i} className="flex whitespace-pre">
              <span className="w-6 shrink-0 select-none text-right text-white/25">{i + 1}</span>
              <span className="ml-4 flex">
                <span className={`sc-type${i + 1} inline-block overflow-hidden`} style={typed(len)}>
                  {line.map(([s, color], j) => (
                    <span key={j} style={{ color }}>
                      {s}
                    </span>
                  ))}
                </span>
                <span className={`sc-caret${i + 1}`}>
                  <span className="sc-blink inline-block h-[1.2em] w-[2px] translate-y-[0.2em] bg-[#82aaff]" />
                </span>
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

const CMD = "eas build --platform all";

function Terminal() {
  return (
    <div className="w-[290px] overflow-hidden rounded-xl bg-[#0f0f12] font-mono text-[11px] leading-[1.8] text-[#d4d4d8] shadow-2xl ring-1 ring-white/10">
      <div className="border-b border-white/10 px-3.5 py-2 text-[10px] uppercase tracking-[0.14em] text-white/40">
        Terminal
      </div>
      <div className="px-3.5 py-3">
        <div className="flex whitespace-pre">
          <span className="text-[#c3e88d]">$ </span>
          <span className="sc-tcmd inline-block overflow-hidden" style={typed(CMD.length)}>
            {CMD}
          </span>
        </div>
        <div className="sc-tline1 text-white/60">Compiling 1,284 modules…</div>
        <div className="sc-tline2"><span className="text-[#c3e88d]">✓</span> iOS build finished</div>
        <div className="sc-tline3"><span className="text-[#c3e88d]">✓</span> Android build finished</div>
        <div className="sc-tline4"><span className="text-[#82aaff]">→</span> Submitted to both stores</div>
      </div>
    </div>
  );
}

function Chip({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <div
      className={`absolute z-40 flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-sm shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}

export function HeroScene() {
  return (
    <Scene
      label="A code editor typing a React Native screen while a phone assembles, builds and ships the app, and a terminal reports both store builds finishing"
      className="relative mx-auto h-[440px] w-full max-w-[480px] sm:h-[560px] lg:h-[620px]"
    >
      <div className="absolute left-1/2 top-0 h-[620px] w-[480px] origin-top -translate-x-1/2 scale-[0.7] sm:scale-90 lg:scale-100">
        <div
          aria-hidden
          className="absolute inset-10 rounded-full bg-accent/25 blur-3xl"
        />

        <div className="parallax absolute left-0 top-6 z-10 -rotate-2" style={{ "--depth": -10 } as CSSProperties}>
          <Editor />
        </div>

        <div className="parallax absolute right-0 top-10 z-20" style={{ "--depth": 6 } as CSSProperties}>
          <Phone width={250}>
            <Notification
              className="sc-hero-notif"
              icon={<FiCheck size={16} />}
              title="Release approved"
              body="v4.8.0 is live on both stores"
            />
            <div className="px-5 pt-1">
              <div className="label text-[10px]">Release</div>
              <div className="text-lg font-semibold tracking-[-0.02em]">v4.8.0</div>
            </div>
            <div className="mx-3.5 mt-3 rounded-2xl border border-line p-3">
              <div className="label text-[10px]">Stack</div>
              <ul className="mt-2 space-y-1.5">
                {stack.map((s, i) => (
                  <li
                    key={s.name}
                    className={`sc-drop${i + 1} flex items-center gap-2.5 rounded-xl bg-bg px-3 py-2 text-[12px] font-medium`}
                  >
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: s.color }} />
                    {s.name}
                    <FiCheck size={13} className="ml-auto text-accent" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="mx-4 mt-4">
              <div className="relative h-4 text-[11px] text-muted">
                <span className="sc-lbl-building absolute inset-0">Building…</span>
                <span className="sc-lbl-ready absolute inset-0">Ready to ship</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line">
                <div className="sc-progress h-full origin-left rounded-full bg-accent" />
              </div>
            </div>
            <div className="mt-auto p-3.5">
              <div className="sc-btn relative flex h-11 items-center justify-center overflow-hidden rounded-full bg-fg text-[13px] font-medium text-bg">
                <span className="sc-btn-idle absolute">Ship to stores</span>
                <span className="sc-btn-done absolute inline-flex items-center gap-2">
                  <FiCheck /> Shipped
                </span>
                <span className="sc-ripple absolute h-24 w-24 rounded-full bg-bg/40" />
              </div>
            </div>
          </Phone>
        </div>

        <div className="parallax absolute bottom-4 left-3 z-30" style={{ "--depth": 14 } as CSSProperties}>
          <Terminal />
        </div>

        <Chip className="sc-bob right-[190px] top-0">
          <FiSmartphone className="text-accent" /> iOS & Android
        </Chip>
        <Chip className="sc-bob-late -right-3 bottom-24">
          <FiCheckCircle className="text-accent" /> Tests passing
        </Chip>
      </div>
    </Scene>
  );
}
