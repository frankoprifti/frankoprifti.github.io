import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="py-10 text-sm text-fg-muted">
      <div className="max-w-[1180px] mx-auto px-4 md:px-6 flex justify-center">
        <div className="font-mono text-xs">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent-fg"
          >
            @{profile.username}
          </a>
        </div>
      </div>
    </footer>
  );
}
