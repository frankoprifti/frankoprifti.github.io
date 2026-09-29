import { FiArrowUp } from "react-icons/fi";
import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col gap-4 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a
          href="#top"
          className="group inline-flex min-h-[44px] items-center gap-2 hover:text-fg"
        >
          Back to top
          <FiArrowUp aria-hidden className="transition-transform group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  );
}
