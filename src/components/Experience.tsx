import { FiAward } from "react-icons/fi";
import { experience, education, certifications } from "../data/profile";
import { SectionHeading } from "./About";

export function Experience() {
  return (
    <section id="experience" className="py-20 border-b border-bd-muted">
      <div className="max-w-[1180px] mx-auto px-4 md:px-6">
        <SectionHeading
          kicker="03"
          title="Experience & education"
          subtitle="9 companies, 7+ years — building React and React Native at every stage."
        />

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 mt-10">
          <div>
            <h3 className="text-sm font-semibold text-fg-muted uppercase tracking-wider mb-5">
              Experience
            </h3>
            <ol className="relative border-l border-bd-default pl-6 space-y-7">
              {experience.map((e) => (
                <li key={`${e.company}-${e.period}`} className="relative">
                  <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-success-fg ring-4 ring-canvas-default" />
                  <div className="text-xs font-mono text-accent-fg">
                    {e.period}
                  </div>
                  <div className="mt-1 text-base font-semibold text-fg-default">
                    {e.role}
                  </div>
                  <div className="text-sm text-fg-muted">
                    {e.company} · {e.location}
                  </div>
                  <p className="mt-2 text-sm text-fg-default leading-relaxed">
                    {e.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-sm font-semibold text-fg-muted uppercase tracking-wider mb-5">
                Education
              </h3>
              <ol className="relative border-l border-bd-default pl-6 space-y-6">
                {education.map((e) => (
                  <li key={e.degree} className="relative">
                    <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-attention-fg ring-4 ring-canvas-default" />
                    <div className="text-xs font-mono text-attention-fg">
                      {e.period}
                    </div>
                    <div className="mt-1 text-base font-semibold text-fg-default">
                      {e.degree}
                    </div>
                    <p className="mt-1 text-sm text-fg-muted">{e.school}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-fg-muted uppercase tracking-wider mb-5">
                Certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li
                    key={c.name}
                    className="flex items-start gap-3 border border-bd-default rounded-lg p-4 bg-canvas-overlay"
                  >
                    <FiAward
                      size={20}
                      className="text-accent-fg shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="text-sm font-semibold text-fg-default">
                        {c.name}
                      </div>
                      <div className="text-xs text-fg-muted mt-0.5">
                        {c.issuer}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
