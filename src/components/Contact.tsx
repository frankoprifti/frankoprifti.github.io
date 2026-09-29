import { FiArrowUpRight, FiMapPin } from "react-icons/fi";
import { Scene } from "./scenes/Phone";
import { profile } from "../data/profile";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const phoneDigits = profile.phone.replace(/\D/g, "");

const channels = [
  { label: "WhatsApp", value: profile.phone, href: `https://wa.me/${phoneDigits}` },
  { label: "Phone", value: profile.phone, href: `tel:+${phoneDigits}` },
  { label: "LinkedIn", value: "in/frankoprifti", href: profile.social.linkedin },
  { label: "GitHub", value: `@${profile.username}`, href: profile.social.github },
  { label: "Instagram", value: `@${profile.username}`, href: profile.social.instagram },
  { label: "Facebook", value: profile.username, href: profile.social.facebook },
];

export function Contact() {
  return (
    <Section
      id="contact"
      index="07"
      label="Contact"
      title={
        <>
          Have a product in mind?{" "}
          <span className="text-muted">
            Email or WhatsApp is fastest. I usually reply within a day.
          </span>
        </>
      }
    >
      <Reveal>
        <a
          href={`mailto:${profile.email}`}
          className="group inline-flex flex-wrap items-center gap-x-4 break-all text-[clamp(1.75rem,5.5vw,4.25rem)] font-semibold leading-tight tracking-[-0.04em]"
        >
          <span className="link-underline">{profile.email}</span>
          <FiArrowUpRight
            aria-hidden
            className="shrink-0 text-accent transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </a>
      </Reveal>

      <ul className="mt-16 border-t border-line">
        {channels.map((c) => {
          const external = c.href.startsWith("http");
          return (
            <li key={c.label} className="border-b border-line">
              <a
                href={c.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="group grid min-h-[64px] grid-cols-[110px_1fr_auto] items-center gap-4 py-4 transition-colors sm:grid-cols-[180px_1fr_auto]"
              >
                <span className="label">{c.label}</span>
                <span className="truncate text-lg">{c.value}</span>
                <FiArrowUpRight
                  aria-hidden
                  size={18}
                  className="text-subtle transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </a>
            </li>
          );
        })}
      </ul>

      <Reveal className="mt-12 flex items-center gap-6 rounded-3xl border border-line bg-surface/60 p-4 pr-6">
        <Scene
          label={`Map pin on ${profile.location}`}
          className="hero-grid relative flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-bg [mask-image:none]"
        >
          <span className="sc-radar absolute h-24 w-24 rounded-full border-2 border-accent" />
          <span className="sc-radar-late absolute h-24 w-24 rounded-full border-2 border-accent" />
          <span className="sc-pin-shadow absolute top-[62%] h-1.5 w-5 rounded-full bg-fg/60 blur-[1px]" />
          <span className="sc-pin relative -mt-5 text-accent">
            <FiMapPin size={30} strokeWidth={2.5} />
          </span>
        </Scene>
        <div>
          <div className="label">Based in</div>
          <div className="mt-1.5 text-xl font-semibold tracking-[-0.02em]">{profile.location}</div>
          <div className="mt-1 font-mono text-sm text-muted">{profile.timezone}</div>
        </div>
      </Reveal>
    </Section>
  );
}
