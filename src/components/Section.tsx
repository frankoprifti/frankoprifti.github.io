import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  index,
  label,
  title,
  children,
}: {
  id: string;
  index: string;
  label: string;
  title?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-label`} className="border-t border-line">
      <div className="container-x grid gap-8 py-20 md:grid-cols-12 md:gap-10 md:py-32">
        <div className="md:col-span-3">
          <div className="md:sticky md:top-28 flex items-baseline gap-3">
            <span className="label text-accent">{index}</span>
            <h2 id={`${id}-label`} className="label text-fg">
              {label}
            </h2>
          </div>
        </div>
        <div className="min-w-0 md:col-span-9">
          {title && (
            <Reveal>
              <p className="text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-fg text-balance md:text-5xl">
                {title}
              </p>
            </Reveal>
          )}
          <div className={title ? "mt-12 md:mt-16" : ""}>{children}</div>
        </div>
      </div>
    </section>
  );
}
