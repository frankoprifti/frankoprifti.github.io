import { useEffect, useRef, useState, type CSSProperties } from "react";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { profile } from "../data/profile";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { HeroScene } from "./scenes/HeroScene";

const CV_URL =
  "https://drive.google.com/file/d/17aZCC_griu9cv_3zTpsf5pz8cdMVUC1M/view?usp=drive_link";

const meta = [
  { label: "Currently", value: `${profile.title} at ${profile.currentCompanies}` },
  { label: "Based in", value: `${profile.location} · ${profile.timezone}` },
  { label: "Focus", value: "React Native, React, TypeScript" },
];

const roles = ["React Native apps", "fintech products", "AI interfaces", "web platforms"];

const tokens: { text: string; x: string; y: string; depth: number; dur: number; hideSm?: boolean }[] = [
  { text: "<View />", x: "4%", y: "14%", depth: 18, dur: 15 },
  { text: "useState()", x: "44%", y: "6%", depth: -12, dur: 18, hideSm: true },
  { text: "=>", x: "30%", y: "58%", depth: 24, dur: 13, hideSm: true },
  { text: "{ }", x: "90%", y: "8%", depth: -20, dur: 17 },
  { text: "git push", x: "2%", y: "82%", depth: 10, dur: 19, hideSm: true },
  { text: "</>", x: "52%", y: "88%", depth: -16, dur: 14 },
  { text: "async", x: "86%", y: "92%", depth: 14, dur: 16, hideSm: true },
  { text: "npx expo", x: "20%", y: "36%", depth: -8, dur: 20, hideSm: true },
];

/** Types `length` characters once, returning how many are visible. */
function useTypeOnce(length: number, enabled: boolean, speed = 110, startDelay = 300) {
  const [count, setCount] = useState(enabled ? 0 : length);
  useEffect(() => {
    if (!enabled || count >= length) return;
    const id = setTimeout(() => setCount((c) => c + 1), count === 0 ? startDelay : speed);
    return () => clearTimeout(id);
  }, [count, length, enabled, speed, startDelay]);
  return enabled ? count : length;
}

function useTypewriter(words: string[], enabled: boolean) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(enabled ? "" : words[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const word = words[index];
    let delay = deleting ? 35 : 70;
    if (!deleting && text === word) delay = 1800;
    if (deleting && text === "") delay = 300;

    const id = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(id);
  }, [text, deleting, index, words, enabled]);

  return enabled ? text : words[0];
}

export function Hero() {
  const reduced = useReducedMotion();
  const role = useTypewriter(roles, !reduced);
  const [firstName, lastName] = profile.name.split(" ");
  const typed = useTypeOnce(firstName.length + lastName.length + 1, !reduced);
  const firstTyped = Math.min(typed, firstName.length);
  const lastTyped = Math.max(0, typed - firstName.length);
  const done = typed > firstName.length + lastName.length;
  const cursor = (
    <span
      className={`inline-block h-[0.75em] w-[0.08em] translate-y-[0.04em] bg-accent motion-reduce:hidden ${
        done ? "sc-blink ml-2" : "ml-[0.04em]"
      }`}
    />
  );
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced || !matchMedia("(pointer: fine)").matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        el.style.setProperty("--mx", (x * 2 - 1).toFixed(3));
        el.style.setProperty("--my", (y * 2 - 1).toFixed(3));
        el.style.setProperty("--px", `${(x * 100).toFixed(1)}%`);
        el.style.setProperty("--py", `${(y * 100).toFixed(1)}%`);
      });
    };
    el.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", onMove);
    };
  }, [reduced]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden">
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0" />
      <div aria-hidden className="hero-spot pointer-events-none absolute inset-0" />
      <div aria-hidden className="pointer-events-none absolute inset-0 select-none">
        {tokens.map((t) => (
          <span
            key={t.text}
            className={`parallax absolute ${t.hideSm ? "hidden md:block" : ""}`}
            style={{ left: t.x, top: t.y, "--depth": t.depth } as CSSProperties}
          >
            <span
              className="sc-drift block font-mono text-sm text-subtle/50 md:text-base"
              style={{ "--dur": `${t.dur}s`, "--delay": `-${t.dur / 3}s` } as CSSProperties}
            >
              {t.text}
            </span>
          </span>
        ))}
      </div>

      <div className="container-x relative pb-20 pt-28 md:pb-28 md:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 animate-[fadeUp_700ms_both]">
              <img
                src={profile.avatar}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover ring-1 ring-line"
              />
              <span className="inline-flex items-center gap-2 text-sm text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Currently shipping at {profile.currentCompanies}
              </span>
            </div>

            <h1
              aria-label={profile.name}
              className="mt-8 text-[clamp(3.25rem,10vw,8.5rem)] font-semibold leading-[0.88] tracking-[-0.055em]"
            >
              <span aria-hidden className="block">
                {firstName.slice(0, firstTyped)}
                {typed < firstName.length && cursor}
                <span className="invisible">{firstName.slice(firstTyped)}</span>
              </span>
              <span aria-hidden className="block">
                {lastName.slice(0, lastTyped)}
                {typed >= firstName.length && !done && cursor}
                <span className="invisible">{lastName.slice(lastTyped)}</span>
                <span className={`text-accent ${done ? "" : "invisible"}`}>.</span>
                {done && cursor}
              </span>
            </h1>

            <p
              className="mt-8 font-mono text-base text-muted md:text-lg animate-[fadeUp_800ms_120ms_both]"
              aria-label={`Building ${roles.join(", ")}`}
            >
              <span aria-hidden>
                <span className="text-accent">&gt;</span> building{" "}
                <span className="text-fg">{role}</span>
                <span className="sc-blink ml-0.5 inline-block h-[1.1em] w-[0.55ch] translate-y-[0.2em] bg-fg/70 motion-reduce:hidden" />
              </span>
            </p>

            <p className="mt-6 max-w-xl text-xl leading-relaxed text-muted text-pretty animate-[fadeUp_800ms_200ms_both]">
              <span className="text-fg">{profile.title}.</span> {profile.tagline}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3 animate-[fadeUp_800ms_280ms_both]">
              <a
                href="#projects"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-fg px-6 font-medium text-bg transition-transform duration-200 ease-out hover:-translate-y-0.5"
              >
                View selected work
                <FiArrowDownRight size={18} aria-hidden />
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-line bg-bg/60 px-6 font-medium backdrop-blur transition-colors duration-200 hover:border-fg"
              >
                Get in touch
              </a>
              <a
                href={CV_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[48px] items-center gap-1.5 px-3 font-medium text-muted transition-colors hover:text-fg"
              >
                Download CV
                <FiArrowUpRight size={16} aria-hidden />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 animate-[fadeUp_900ms_200ms_both]">
            <HeroScene />
          </div>
        </div>

        <dl className="mt-16 grid border-t border-line md:mt-20 md:grid-cols-3">
          {meta.map((m, i) => (
            <div
              key={m.label}
              className={`border-b border-line py-5 md:border-b-0 ${i > 0 ? "md:border-l md:pl-6" : ""}`}
            >
              <dt className="label">{m.label}</dt>
              <dd className="mt-2 text-fg">{m.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
