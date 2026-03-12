import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SectionHeading from "./SectionHeading";
import { useReveal } from "../hooks/useReveal";

const Contact = () => {
  const ref = useReveal();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      console.log(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      formRef.current.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding py-20">
      <div ref={ref} className="reveal">
        <SectionHeading
          kicker="Contact"
          title="Let’s build something exceptional together"
          description="Share a quick note and I’ll respond within 24 hours."
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <form ref={formRef} onSubmit={sendEmail} className="card space-y-5">
            <div>
              <label
                className="text-sm font-medium text-slate-200"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="input mt-2"
                id="name"
                name="user_name"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label
                className="text-sm font-medium text-slate-200"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="input mt-2"
                id="email"
                name="user_email"
                type="email"
                placeholder="you@email.com"
                required
              />
            </div>
            <div>
              <label
                className="text-sm font-medium text-slate-200"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="input mt-2 min-h-[140px]"
                id="message"
                name="message"
                placeholder="Tell me about your project or role."
                required
              />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <button
                className="primary-btn"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" ? (
                <span className="text-sm text-brand-400">
                  Message sent successfully.
                </span>
              ) : null}
              {status === "error" ? (
                <span className="text-sm text-accent-400">
                  Something went wrong. Try again.
                </span>
              ) : null}
            </div>
          </form>
          <div className="card space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-brand-400">
                Contact Details
              </p>
              <p className="mt-4 text-xl font-semibold text-white">
                Let’s connect
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Open to full-time roles, consulting, and cross-functional teams
                building modern web products.
              </p>
            </div>
            <div className="space-y-3 text-sm text-slate-300">
              <p>
                <span className="text-slate-400">Email:</span>{" "}
               nilesh14890@email.com
              </p>
              <p>
                <span className="text-slate-400">Location:</span> Pune
                (Open to remote)
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800/70 bg-ink-950/80 p-5">
              <p className="text-sm text-slate-300">
                Prefer a quick call? Send a note and I’ll share availability.
              </p>
              <a
                className="mt-4 inline-flex text-sm font-semibold text-brand-400"
                href="mailto:aria.patel@email.com"
              >
                Schedule a chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
