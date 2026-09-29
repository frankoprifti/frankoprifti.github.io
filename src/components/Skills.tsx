import { skillGroups } from "../data/profile";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      label="Skills"
      title={
        <>
          The tools I reach for when a product has to ship,{" "}
          <span className="text-muted">and keep working after it does.</span>
        </>
      }
    >
      <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal key={g.name} delay={i * 80} className="border-t border-line pt-5">
            <h3 className="label">{g.name}</h3>
            <ul className="mt-5 space-y-2.5">
              {g.items.map((item) => (
                <li key={item} className="text-lg text-fg md:text-xl">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
