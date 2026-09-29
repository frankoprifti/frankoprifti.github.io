import { profile, stats } from "../data/profile";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="about"
      index="01"
      label="About"
      title={
        <>
          Eight years building mobile and web products{" "}
          <span className="text-muted">that hold up in production.</span>
        </>
      }
    >
      <div className="grid gap-10 md:grid-cols-9">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted md:col-span-6">
          <p className="text-fg">{profile.bio}</p>
          <p>
            I've spent my career with startups, agencies, and independent
            clients. I lead teams, own architecture, and I am usually the
            person clients call. I care about clean architecture, thoughtful UX, and
            shipping things that actually work.
          </p>
        </Reveal>
      </div>

      <dl className="mt-16 grid grid-cols-2 border-t border-line md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 80}
            className={`py-8 pr-4 ${i % 2 === 1 ? "pl-4 md:pl-0" : ""} ${
              i > 1 ? "border-t border-line md:border-t-0" : ""
            }`}
          >
            <dt className="label">{s.label}</dt>
            <dd className="mt-3 text-5xl font-semibold tracking-[-0.04em] md:text-6xl">
              {s.value}
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
