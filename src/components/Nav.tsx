import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { profile } from "../data/profile";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "stats", label: "GitHub" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);
  const [showAvatar, setShowAvatar] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowAvatar(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-canvas-default/80 border-b border-bd-default">
      <div className="max-w-[1180px] mx-auto px-4 md:px-6 py-3 flex items-center gap-4">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-fg-default no-underline font-semibold"
        >
          <img
            src={profile.avatar}
            alt={profile.name}
            aria-hidden={!showAvatar}
            className={`w-8 h-8 rounded-full border border-bd-default object-cover transition-all duration-300 ${
              showAvatar
                ? "opacity-100 scale-100 w-8"
                : "opacity-0 scale-75 w-0 border-0 -ml-2.5"
            }`}
          />
          <span className="hidden sm:inline">Franko Prifti</span>
        </a>

        <nav className="ml-auto hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`px-3 py-1.5 rounded-md text-sm transition-colors no-underline ${
                active === l.id
                  ? "text-fg-default bg-canvas-overlay"
                  : "text-fg-muted hover:text-fg-default"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={profile.social.github}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 ml-2 px-3 py-1.5 rounded-md text-sm text-fg-default border border-bd-default hover:border-accent-fg hover:text-accent-fg no-underline transition-colors"
        >
          <FaGithub size={16} />
          GitHub
        </a>

        <button
          className="md:hidden ml-auto text-fg-default"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              d={open ? "M6 6l12 12M18 6L6 18" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-bd-default bg-canvas-overlay">
          <ul className="px-4 py-2">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-fg-default no-underline"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
