import SectionHeading from "./SectionHeading";
import { projects } from "../data/projects";
import { useReveal } from "../hooks/useReveal";

const Projects = () => {
  const ref = useReveal();

  return (
    <section id="projects" className="section-padding py-20">
      <div ref={ref} className="reveal">
        <SectionHeading
          kicker="Projects"
          title="Selected work that blends product thinking with engineering"
          description="A showcase of recent MERN builds, from SaaS dashboards to real-time platforms."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name} className="card flex h-full flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                <p className="mt-3 text-sm text-slate-300">{project.description}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="badge">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-400 transition hover:text-brand-300"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-200 transition hover:text-white"
                >
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
