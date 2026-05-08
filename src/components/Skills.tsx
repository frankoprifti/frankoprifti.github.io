import { skills } from "../data/profile";
import { SectionHeading } from "./About";

export function Skills() {
  return (
    <section id="skills" className="py-20 border-b border-bd-muted">
      <div className="max-w-[1180px] mx-auto px-4 md:px-6">
        <SectionHeading
          kicker="02"
          title="Skills"
          subtitle="The tools I reach for most often when building products."
        />

        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-5 mt-10">
          {skills.map((s) => (
            <li key={s.name}>
              <div className="flex items-center justify-between mb-2 text-sm">
                <span className="text-fg-default font-medium">{s.name}</span>
                <span className="text-fg-muted font-mono">{s.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-canvas-overlay border border-bd-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent-fg to-success-fg transition-all duration-700"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
