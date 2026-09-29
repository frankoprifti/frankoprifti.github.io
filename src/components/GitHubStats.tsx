import { GitHubCalendar } from "react-github-calendar";
import { FiArrowUpRight } from "react-icons/fi";
import { profile } from "../data/profile";
import { useTheme } from "../hooks/useTheme";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const calendarTheme = {
  light: ["#EBEBED", "#BFD3FB", "#7FA6F5", "#3F78EE", "#2563EB"],
  dark: ["#1C1C1F", "#1E3A6E", "#2B56A8", "#4A7FE0", "#6EA8FE"],
};

export function GitHubStats() {
  const { theme } = useTheme();

  return (
    <Section id="stats" index="06" label="GitHub">
      <Reveal className="overflow-x-auto rounded-xl border border-line bg-surface p-6 md:p-8">
        <GitHubCalendar
          username={profile.username}
          theme={calendarTheme}
          colorScheme={theme}
          fontSize={12}
          blockSize={11}
          blockMargin={3}
        />
      </Reveal>
      <a
        href={profile.social.github}
        target="_blank"
        rel="noreferrer"
        className="group mt-8 inline-flex min-h-[44px] items-center gap-1.5 font-medium"
      >
        <span className="link-underline">@{profile.username} on GitHub</span>
        <FiArrowUpRight aria-hidden size={16} className="text-subtle group-hover:text-accent" />
      </a>
    </Section>
  );
}
