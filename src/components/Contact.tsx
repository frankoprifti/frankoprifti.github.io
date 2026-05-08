import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiArrowUpRight,
} from "react-icons/fi";
import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaGithub,
} from "react-icons/fa6";
import type { IconType } from "react-icons";
import { profile } from "../data/profile";
import { SectionHeading } from "./About";

const phoneDigits = profile.phone.replace(/\D/g, "");

const contactCards: {
  label: string;
  value: string;
  href: string;
  icon: IconType;
  accent: string;
}[] = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: FiMail,
    accent: "text-accent-fg",
  },
  {
    label: "WhatsApp",
    value: profile.phone,
    href: `https://wa.me/${phoneDigits}`,
    icon: FaWhatsapp,
    accent: "text-success-fg",
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${phoneDigits}`,
    icon: FiPhone,
    accent: "text-accent-fg",
  },
  {
    label: "Location",
    value: profile.location,
    href: `https://maps.google.com/?q=${encodeURIComponent(profile.location)}`,
    icon: FiMapPin,
    accent: "text-attention-fg",
  },
];

const socials: { label: string; href: string; icon: IconType }[] = [
  { label: "GitHub", href: profile.social.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.social.linkedin, icon: FaLinkedin },
  { label: "Instagram", href: profile.social.instagram, icon: FaInstagram },
  { label: "Facebook", href: profile.social.facebook, icon: FaFacebook },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 border-b border-bd-muted">
      <div className="max-w-[1180px] mx-auto px-4 md:px-6">
        <SectionHeading
          kicker="06"
          title="Let's work together"
          subtitle="The fastest way to reach me is email or WhatsApp — I usually reply within a day."
        />

        <ul className="mt-10 grid sm:grid-cols-2 gap-4">
          {contactCards.map(({ label, value, href, icon: Icon, accent }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center gap-4 border border-bd-default rounded-lg p-5 bg-canvas-overlay hover:border-accent-fg hover:-translate-y-0.5 transition-all duration-200 no-underline"
              >
                <span
                  className={`w-12 h-12 shrink-0 rounded-md border border-bd-default bg-canvas-default flex items-center justify-center ${accent}`}
                >
                  <Icon size={22} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-xs uppercase tracking-wider text-fg-muted">
                    {label}
                  </div>
                  <div className="text-fg-default font-medium truncate">
                    {value}
                  </div>
                </div>
                <FiArrowUpRight
                  size={18}
                  className="text-fg-muted group-hover:text-accent-fg shrink-0"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <h3 className="text-sm font-semibold text-fg-muted uppercase tracking-wider mb-4">
            Find me online
          </h3>
          <ul className="flex flex-wrap gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-md border border-bd-default bg-canvas-overlay hover:border-accent-fg hover:text-accent-fg text-fg-default no-underline transition-colors"
                >
                  <Icon
                    size={18}
                    className="text-fg-muted group-hover:text-accent-fg transition-colors"
                  />
                  <span className="text-sm font-medium">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 p-6 border border-bd-default rounded-lg bg-gradient-to-br from-canvas-overlay to-canvas-default flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <div className="flex-1">
            <div className="text-fg-default font-semibold mb-1">
              Prefer email? Send me a note.
            </div>
            <p className="text-sm text-fg-muted">
              Tell me a bit about your project and I'll get back to you with
              next steps.
            </p>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-success-emphasis hover:bg-success-fg text-white font-medium no-underline transition-colors whitespace-nowrap"
          >
            <FiMail size={16} />
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}
