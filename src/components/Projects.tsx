import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { projects, type ProjectCategory, type Project } from "../data/profile";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const filters: ("All" | ProjectCategory)[] = ["All", "Web", "Mobile"];
const PAGE = 9;

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [expanded, setExpanded] = useState(false);

  const featured = filter === "All" ? projects.filter((p) => p.featured) : [];
  const rest = projects.filter(
    (p) => (filter === "All" ? !p.featured : p.category === filter)
  );
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
      <div
        role="group"
        aria-label="Filter projects"
        className="inline-flex rounded-full border border-line p-1"
      >
        {filters.map((f) => {
          const count =
            f === "All" ? projects.length : projects.filter((p) => p.category === f).length;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => {
                setFilter(f);
                setExpanded(false);
              }}
              className={`inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm transition-colors duration-200 ${
                filter === f ? "bg-fg text-bg" : "text-muted hover:text-fg"
              }`}
            >
              {f}
              <span className="font-mono text-xs opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      {featured.length > 0 && (
        <ul className="mt-12 grid gap-10 md:grid-cols-2">
          {featured.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={i * 80} large />
          ))}
        </ul>
      )}

      <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <ProjectCard key={p.title} project={p} delay={(i % 3) * 80} />
        ))}
      </ul>

      {rest.length > PAGE && (
        <div className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="inline-flex min-h-[48px] items-center rounded-full border border-line px-6 font-medium transition-colors hover:border-fg"
          >
            {expanded ? "Show fewer" : `Show all ${rest.length}`}
          </button>
        </div>
      )}
    </Section>
  );
}

function ProjectCard({
  project: p,
  delay,
  large = false,
}: {
  project: Project;
  delay: number;
  large?: boolean;
}) {
  const Wrapper = p.url ? "a" : "div";
  const wrapperProps = p.url ? { href: p.url, target: "_blank", rel: "noreferrer" } : {};

  return (
    <Reveal as="li" delay={delay}>
      <Wrapper {...wrapperProps} className="group block">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-surface">
          {p.image && (
            <img
              src={p.image}
              alt=""
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
            <h3
              className={`mt-2 font-semibold tracking-[-0.02em] ${
                large ? "text-2xl md:text-3xl" : "text-lg"
              }`}
            >
              <span className="link-underline">{p.title}</span>
            </h3>
          </div>
          {p.url && (
            <FiArrowUpRight
              aria-hidden
              size={large ? 24 : 18}
              className="mt-6 shrink-0 text-subtle transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            />
          )}
        </div>
        <p className={`mt-2 leading-relaxed text-muted ${large ? "text-lg" : "text-sm"}`}>
          {p.description}
        </p>
      </Wrapper>
    </Reveal>
  );
}
