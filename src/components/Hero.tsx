import { FiMapPin, FiMail, FiArrowRight, FiDownload } from "react-icons/fi";
import { profile } from "../data/profile";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-bd-default"
    >
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(800px circle at 20% 0%, rgba(56,139,253,0.18), transparent 40%), radial-gradient(600px circle at 90% 30%, rgba(63,185,80,0.12), transparent 40%)",
        }}
      />

      <div className="relative max-w-[1180px] mx-auto px-4 md:px-6 py-16 md:py-24 grid md:grid-cols-[1fr_auto] gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-bd-default bg-canvas-overlay text-xs text-fg-muted mb-6">
            <span className="w-2 h-2 rounded-full bg-success-fg animate-pulse" />
            Currently @ {profile.currentCompanies}
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold text-fg-default leading-tight tracking-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-accent-fg to-success-fg bg-clip-text text-transparent">
              Franko Prifti
            </span>
          </h1>
          <p className="mt-3 text-lg md:text-xl text-fg-muted">
            {profile.title}
          </p>

          <p className="mt-6 max-w-xl text-fg-default leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-fg-muted">
            <span className="inline-flex items-center gap-2">
              <FiMapPin size={14} />
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <FiMail size={14} />
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-accent-fg"
              >
                {profile.email}
              </a>
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-success-emphasis hover:bg-success-fg text-white font-medium no-underline transition-colors"
            >
              View my work
              <FiArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-bd-default hover:border-accent-fg text-fg-default font-medium no-underline transition-colors"
            >
              Get in touch
            </a>
            <a
              href="https://drive.google.com/file/d/17aZCC_griu9cv_3zTpsf5pz8cdMVUC1M/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-fg-muted hover:text-fg-default no-underline transition-colors"
            >
              <FiDownload size={16} />
              Download CV
            </a>
          </div>
        </div>

        <div className="relative justify-self-center md:justify-self-end">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-fg to-success-fg blur-3xl opacity-25" />
          <img
            src={profile.avatar}
            alt={profile.name}
            className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border-2 border-bd-default object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
