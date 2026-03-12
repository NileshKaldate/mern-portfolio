import SectionHeading from "./SectionHeading";
import { useReveal } from "../hooks/useReveal";

const Resume = () => {
  const ref = useReveal();

  return (
    <section id="resume" className="section-padding py-20">
      <div ref={ref} className="reveal">
        <SectionHeading
          kicker="Resume"
          title="A track record of scalable, high-impact delivery"
          description="Download my resume to review experience, achievements, and technical depth across MERN projects."
        />
        <div className="card flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">Resume</p>
            <p className="mt-2 text-sm text-slate-300">
              Updated for 2026 with recent full-stack wins and leadership
              highlights.
            </p>
          </div>
          <a
            className="primary-btn"
            href="https://dc-sync.s3.eu-north-1.amazonaws.com/NileshKaldateCV.pdf"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
