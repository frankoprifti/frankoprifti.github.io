import { useState } from "react";
import { FiArrowUpRight, FiSmartphone, FiMonitor } from "react-icons/fi";
import { projects, type ProjectCategory, type Project } from "../data/profile";
import { SectionHeading } from "./About";

const filters: ("All" | ProjectCategory)[] = ["All", "Web", "Mobile"];

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 border-b border-bd-muted">
      <div className="max-w-[1180px] mx-auto px-4 md:px-6">
        <SectionHeading
          kicker="04"
          title="Selected projects"
          subtitle="A snapshot of products I've shipped — full list on my GitHub and portfolio."
        />

        <div className="mt-8 flex flex-wrap items-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
                filter === f
                  ? "bg-accent-emphasis border-accent-emphasis text-white"
                  : "border-bd-default text-fg-muted hover:text-fg-default hover:border-fg-muted"
              }`}
            >
              {f}
              <span className="ml-2 text-xs opacity-70">
                {f === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === f).length}
              </span>
            </button>
          ))}
        </div>

        <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  const Wrapper = p.url ? "a" : "div";
  const wrapperProps = p.url
    ? { href: p.url, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <li className="group relative flex flex-col border border-bd-default rounded-lg bg-canvas-overlay overflow-hidden hover:border-accent-fg hover:-translate-y-0.5 transition-all duration-200">
      <Wrapper
        {...wrapperProps}
        className="flex flex-col h-full no-underline text-inherit"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-canvas-default">
          {p.image ? (
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <PlaceholderArt title={p.title} category={p.category} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-canvas-overlay via-canvas-overlay/10 to-transparent pointer-events-none" />
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-canvas-default/80 backdrop-blur border border-bd-default text-fg-default">
            {p.category === "Mobile" ? (
              <FiSmartphone size={11} />
            ) : (
              <FiMonitor size={11} />
            )}
            {p.category}
          </span>
        </div>

        <div className="flex-1 flex flex-col p-5">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-semibold text-fg-default group-hover:text-accent-fg transition-colors">
              {p.title}
            </h3>
            {p.url && (
              <FiArrowUpRight
                size={16}
                className="text-fg-muted group-hover:text-accent-fg shrink-0 mt-1"
              />
            )}
          </div>
          <p className="text-sm text-fg-muted leading-relaxed mb-4 flex-1">
            {p.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span
                key={t}
                className="text-[11px] px-2 py-0.5 rounded-full border border-bd-default text-fg-muted bg-canvas-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Wrapper>
    </li>
  );
}

function PlaceholderArt({
  title,
  category,
}: {
  title: string;
  category: ProjectCategory;
}) {
  const initials = title
    .replace(/[^A-Za-z0-9 ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const gradient =
    category === "Mobile"
      ? "from-[#1f6feb] via-[#0e4429] to-[#39d353]"
      : "from-[#1f6feb] via-[#3b1e5e] to-[#bf4b8a]";

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${gradient}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.4) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 0%, transparent 40%)",
        }}
      />
      <span className="relative font-mono font-bold text-white/90 text-5xl tracking-tight drop-shadow">
        {initials}
      </span>
    </div>
  );
}
