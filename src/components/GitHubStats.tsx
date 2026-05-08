import { GitHubCalendar } from "react-github-calendar";
import { FaGithub } from "react-icons/fa";
import { profile } from "../data/profile";
import { SectionHeading } from "./About";

const username = profile.username;

const calendarTheme = {
  light: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

export function GitHubStats() {
  return (
    <section id="stats" className="py-20 border-b border-bd-muted">
      <div className="max-w-[1180px] mx-auto px-4 md:px-6">
        <SectionHeading kicker="05" title="GitHub activity" />

        <div className="mt-10 grid md:grid-cols-[65fr_35fr] gap-5">
          <div className="border border-bd-default rounded-lg bg-canvas-overlay p-6 overflow-x-auto flex items-center justify-center min-h-[260px]">
            <GitHubCalendar
              username={username}
              theme={calendarTheme}
              colorScheme="dark"
              fontSize={11}
              blockSize={9}
              blockMargin={3}
              showColorLegend
              showTotalCount={false}
            />
          </div>
          <div className="border border-bd-default rounded-lg bg-canvas-overlay p-6 flex items-center justify-center min-h-[260px]">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com?user=${username}&theme=github-dark&hide_border=true&exclude_days=Sun%2CSat`}
              alt="GitHub streak"
              loading="lazy"
              className="max-w-full"
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-bd-default hover:border-accent-fg text-fg-default no-underline transition-colors"
          >
            <FaGithub size={16} />
            View full profile on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
