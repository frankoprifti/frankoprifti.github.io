import { experience, education, certifications } from "../data/profile";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      index="04"
      label="Experience"
      title={
        <>
          9 companies over 8+ years.{" "}
          <span className="text-muted">
            React and React Native at every stage, from MVP to 1M+ users.
          </span>
        </>
      }
    >
      <ol className="border-t border-line">
        {experience.map((e) => (
          <Reveal
            as="li"
            key={`${e.company}-${e.period}`}
            className="grid gap-2 border-b border-line py-8 md:grid-cols-[180px_1fr] md:gap-8"
          >
            <div className="font-mono text-sm text-subtle">{e.period}</div>
            <div>
              <h3 className="text-xl font-semibold tracking-[-0.01em]">
                {e.role} <span className="text-muted font-normal">at</span>{" "}
                {e.company}
              </h3>
              <p className="mt-1 text-sm text-subtle">{e.location}</p>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                {e.description}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>

      <div className="mt-20 grid gap-12 sm:grid-cols-2">
        <Reveal>
          <h3 className="label">Education</h3>
          <ul className="mt-5 border-t border-line">
            {education.map((e) => (
              <li key={e.degree} className="border-b border-line py-5">
                <div className="font-medium">{e.degree}</div>
                <div className="mt-1 text-sm text-muted">
                  {e.school} · <span className="font-mono">{e.period}</span>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={80}>
          <h3 className="label">Certifications</h3>
          <ul className="mt-5 border-t border-line">
            {certifications.map((c) => (
              <li key={c.name} className="border-b border-line py-5">
                <div className="font-medium">{c.name}</div>
                <div className="mt-1 text-sm text-muted">{c.issuer}</div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
