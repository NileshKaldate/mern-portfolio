import SectionHeading from "./SectionHeading";
import { skills } from "../data/skills";
import { useReveal } from "../hooks/useReveal";

const SkillGroup = ({ title, items }: { title: string; items: string[] }) => (
  <div className="card">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">{items.length} Skills</span>
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="badge">
          {item}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const ref = useReveal();

  return (
    <section id="skills" className="section-padding py-20">
      <div ref={ref} className="reveal">
        <SectionHeading
          kicker="Skills"
          title="Full-stack expertise across the MERN ecosystem"
          description="A focused toolkit for building modern, scalable applications with best-in-class tooling."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <SkillGroup title="Frontend" items={skills.frontend} />
          <SkillGroup title="Backend" items={skills.backend} />
          <SkillGroup title="Databases" items={skills.databases} />
          <SkillGroup title="Tools & Technologies" items={skills.tools} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
