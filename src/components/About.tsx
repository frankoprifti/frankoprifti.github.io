import { profile, stats } from "../data/profile";

export function About() {
  return (
    <section id="about" className="py-20 border-b border-bd-muted">
      <div className="max-w-[1180px] mx-auto px-4 md:px-6">
        <SectionHeading kicker="01" title="About me" />

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 mt-10">
          <div className="space-y-4 text-fg-default leading-relaxed">
            <p>{profile.bio}</p>
            <p className="text-fg-muted">
              I hold a Master's degree in Business Informatics from the
              University of Tirana and have spent the last seven years working
              with startups, agencies, and independent clients across web and
              mobile. I care about clean architecture, thoughtful UX, and
              shipping things that actually work in production.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <li
                key={s.label}
                className="border border-bd-default rounded-lg p-5 bg-canvas-overlay hover:border-accent-fg transition-colors"
              >
                <div className="text-3xl font-semibold text-fg-default">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-fg-muted mt-2">
                  {s.label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
      <div>
        <div className="font-mono text-xs text-accent-fg mb-2">{kicker}.</div>
        <h2 className="text-3xl md:text-4xl font-semibold text-fg-default tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-fg-muted max-w-2xl">{subtitle}</p>
        )}
      </div>
    </header>
  );
}
