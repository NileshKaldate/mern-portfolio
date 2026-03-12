import { useReveal } from "../hooks/useReveal";

const Hero = () => {
  const ref = useReveal();

  return (
    <section className="section-padding pb-20 pt-16 lg:pt-24" id="top">
      <div ref={ref} className="reveal">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-400">
              MERN Stack Developer
            </p>
            <h1 className="mt-5 text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
              Nilesh Kaldate
              <span className="block text-slate-300">Building scalable web products that feel effortless.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              I&apos;m a MERN Stack Developer with 4 years of experience delivering high-performance applications, from
              polished UIs to secure, scalable backends. I partner with teams to ship fast, reliable, and delightful
              experiences.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a className="primary-btn" href="/resume.pdf" download>
                Download Resume
              </a>
              <a className="secondary-btn" href="#contact">
                Contact Me
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="badge">4+ Years Experience</span>
              <span className="badge">Full-Stack Delivery</span>
              <span className="badge">Product Minded</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-10 top-6 h-40 w-40 rounded-full bg-brand-500/20 blur-3xl" />
            <div className="glass rounded-3xl p-8 shadow-glow">
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-400">Current Focus</p>
                  <p className="mt-2 text-xl font-semibold text-white">Scalable MERN platforms</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>UI/UX Build</span>
                    <span className="font-mono text-brand-400">92%</span>
                  </div>
                  <div className="h-2 rounded-full bg-ink-800">
                    <div className="h-2 w-[92%] rounded-full bg-brand-400" />
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>API & Data</span>
                    <span className="font-mono text-accent-400">88%</span>
                  </div>
                  <div className="h-2 rounded-full bg-ink-800">
                    <div className="h-2 w-[88%] rounded-full bg-accent-400" />
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-800/80 bg-ink-950/80 p-5">
                  <p className="text-sm text-slate-300">
                    Available for impactful full-time roles and product-driven teams.
                  </p>
                  <a
                    className="mt-4 inline-flex items-center text-sm font-semibold text-brand-400 transition hover:text-brand-300"
                    href="#contact"
                  >
                    Let&apos;s build together
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
