import { useLayoutEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { projects, type ProjectCategory, type Project } from "../data/profile";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

type Filter = "All" | ProjectCategory;
const filters: Filter[] = ["All", "Web", "Mobile"];
const PAGE = 8;

const flagship = projects.find((p) => p.tier === "flagship");
const major = projects.filter((p) => p.tier === "major");
const minor = projects.filter((p) => !p.tier);

const flagshipFacts = [
  { label: "Customers", value: "1M+", note: "across iOS and Android" },
  { label: "App Store", value: "4.9★", note: "275K ratings" },
  { label: "Google Play", value: "4.8★", note: "rating" },
];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [expanded, setExpanded] = useState(false);

  const rest = minor.filter((p) => filter === "All" || p.category === filter);
  const visible = expanded ? rest : rest.slice(0, PAGE);

  return (
    <Section
      id="projects"
      index="05"
      label="Selected work"
      title={
        <>
          {projects.length} products shipped.{" "}
          <span className="text-muted">
            Fintech, health, AI, and everything between.
          </span>
        </>
      }
    >
      {flagship && <Flagship project={flagship} />}

      <ul className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2">
        {major.map((p, i) => (
          <ProjectCard key={p.title} project={p} delay={(i % 2) * 80} />
        ))}
      </ul>

      <div className="mt-20 flex flex-wrap items-end justify-between gap-4 border-t border-line pt-8">
        <h3 className="text-xl font-semibold tracking-[-0.02em]">
          More projects{" "}
          <span className="font-normal text-muted">
            Client sites, side projects and earlier apps.
          </span>
        </h3>
        <FilterPills
          value={filter}
          onChange={(f) => {
            setFilter(f);
            setExpanded(false);
          }}
        />
      </div>

      <ul className="mt-4 grid gap-x-8 md:grid-cols-2">
        {visible.map((p) => (
          <ProjectRow key={p.title} project={p} />
        ))}
      </ul>

      {rest.length > PAGE && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
            className="inline-flex min-h-[48px] items-center rounded-full border border-line px-6 font-medium transition-colors hover:border-fg"
          >
            {expanded ? "Show fewer" : `Show all ${rest.length}`}
          </button>
        </div>
      )}
    </Section>
  );
}

/** Segmented filter whose highlight pill slides to the selected option. */
function FilterPills({ value, onChange }: { value: Filter; onChange: (f: Filter) => void }) {
  const groupRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef(new Map<Filter, HTMLButtonElement>());
  const [pill, setPill] = useState<{ x: number; w: number } | null>(null);
  const [animate, setAnimate] = useState(false);

  useLayoutEffect(() => {
    const measure = () => {
      const btn = buttonRefs.current.get(value);
      if (btn) setPill({ x: btn.offsetLeft, w: btn.offsetWidth });
    };
    measure();
    // Button widths change when the web font swaps in or the layout reflows.
    const observer = new ResizeObserver(measure);
    if (groupRef.current) observer.observe(groupRef.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={groupRef}
      role="group"
      aria-label="Filter projects"
      className="relative inline-flex rounded-full border border-line p-1"
    >
      {pill && (
        <span
          aria-hidden
          className={`absolute bottom-1 left-0 top-1 rounded-full bg-fg ${
            animate ? "transition-[transform,width] duration-300 ease-out" : ""
          }`}
          style={{ width: pill.w, transform: `translateX(${pill.x}px)` }}
        />
      )}
      {filters.map((f) => {
        const count = f === "All" ? minor.length : minor.filter((p) => p.category === f).length;
        const active = value === f;
        return (
          <button
            key={f}
            ref={(el) => {
              if (el) buttonRefs.current.set(f, el);
              else buttonRefs.current.delete(f);
            }}
            type="button"
            aria-pressed={active}
            onClick={() => {
              setAnimate(true);
              onChange(f);
            }}
            className={`relative z-10 inline-flex h-9 items-center gap-2 rounded-full px-4 text-sm transition-colors duration-300 ${
              active ? "text-bg" : "text-muted hover:text-fg"
            } ${pill ? "" : active ? "bg-fg" : ""}`}
          >
            {f}
            <span className="font-mono text-xs opacity-60">{count}</span>
          </button>
        );
      })}
    </div>
  );
}

function Flagship({ project: p }: { project: Project }) {
  return (
    <Reveal>
      <article className="group grid overflow-hidden rounded-3xl border border-line bg-surface md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="relative flex items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#192649,#0E3D8D)] px-8 pt-10 md:py-12">
          {p.image && (
            <img
              src={p.image}
              alt={`${p.title} app screen`}
              loading="lazy"
              decoding="async"
              width={326}
              height={592}
              className="w-[240px] rounded-2xl shadow-[0_24px_48px_-16px_rgb(0_0_0/0.5)] transition-transform duration-700 ease-out group-hover:-translate-y-1.5 md:w-[280px]"
            />
          )}
        </div>

        <div className="flex flex-col p-6 sm:p-8 md:p-12">
          <div className="label">
            {p.category} · {p.tags.join(" · ")}
          </div>
          <h3 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
            {p.title}
          </h3>
          <p className="mt-2 text-lg text-muted">
            by Lendable · my role: Senior Software Engineer
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{p.description}</p>

          <dl className="mt-auto grid grid-cols-3 gap-4 border-t border-line pt-6 sm:gap-8 md:mt-10">
            {flagshipFacts.map((f) => (
              <div key={f.label}>
                <dt className="label">{f.label}</dt>
                <dd className="mt-2 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                  {f.value}
                </dd>
                <dd className="mt-1 text-sm text-subtle">{f.note}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            {p.appStoreUrl && <StoreLink href={p.appStoreUrl}>App Store</StoreLink>}
            {p.url && <StoreLink href={p.url}>Google Play</StoreLink>}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function StoreLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group/store inline-flex min-h-[48px] items-center gap-2 rounded-full border border-line px-5 font-medium transition-colors duration-200 hover:border-fg"
    >
      {children}
      <FiArrowUpRight
        aria-hidden
        size={16}
        className="text-accent transition-transform duration-300 ease-out group-hover/store:-translate-y-0.5 group-hover/store:translate-x-0.5"
      />
    </a>
  );
}

function ProjectCard({ project: p, delay }: { project: Project; delay: number }) {
  const Wrapper = p.url ? "a" : "div";
  const wrapperProps = p.url ? { href: p.url, target: "_blank", rel: "noreferrer" } : {};

  return (
    <Reveal as="li" delay={delay}>
      <Wrapper {...wrapperProps} className="group block">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-surface">
          {p.image && (
            <img
              src={p.image}
              alt={`${p.title} screenshot`}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          )}
        </div>
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <div className="label">
              {p.category} · {p.tags.slice(0, 2).join(" · ")}
            </div>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
              <span className="link-underline">{p.title}</span>
            </h3>
          </div>
          {p.url && (
            <FiArrowUpRight
              aria-hidden
              size={24}
              className="mt-6 shrink-0 text-subtle transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            />
          )}
        </div>
        <p className="mt-2 text-lg leading-relaxed text-muted">{p.description}</p>
      </Wrapper>
    </Reveal>
  );
}

function ProjectRow({ project: p }: { project: Project }) {
  return (
    <li className="border-b border-line">
      <a
        href={p.url}
        target="_blank"
        rel="noreferrer"
        className="group grid min-h-[72px] grid-cols-[56px_1fr_auto] items-center gap-4 py-3"
      >
        <span className="relative block aspect-[4/3] w-14 overflow-hidden rounded-md border border-line bg-surface">
          {p.image && (
            <img
              src={p.image}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
        </span>
        <span className="min-w-0">
          <span className="block truncate font-medium group-hover:text-fg">
            <span className="link-underline">{p.title}</span>
          </span>
          <span className="block truncate text-sm text-subtle">
            {p.category} · {p.tags.slice(0, 2).join(" · ")}
          </span>
        </span>
        <FiArrowUpRight
          aria-hidden
          size={16}
          className="text-subtle transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        />
      </a>
    </li>
  );
}
