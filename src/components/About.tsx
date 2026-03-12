import SectionHeading from "./SectionHeading";
import { useReveal } from "../hooks/useReveal";

const About = () => {
  const ref = useReveal();

  return (
    <section id="about" className="section-padding py-20">
      <div ref={ref} className="reveal">
        <SectionHeading
          kicker="About"
          title="Crafting scalable MERN experiences"
          description={
            "I specialize in building scalable web applications with the MERN stack. Over the last 4 years, I have led projects from discovery to production, shaping clean architectures and performant systems."
          }
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Product Strategy",
              text: "Translate business goals into technical roadmaps, ensuring every feature delivers measurable impact.",
            },
            {
              title: "Scalable Architecture",
              text: "Design modular services, resilient APIs, and optimized data flows that scale with traffic and teams.",
            },
            {
              title: "Collaborative Delivery",
              text: "Partner with design and product teams to ship pixel-perfect interfaces and reliable backends.",
            },
          ].map((item) => (
            <div key={item.title} className="card">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
