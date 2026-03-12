const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-ink-950/80 backdrop-blur-xl text-left">
      <nav className="section-padding flex h-16 items-center justify-between">
        <div className="flex items-center gap-3 text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/20 text-sm font-semibold text-brand-400">
            NK
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold">Nilesh Kaldate</p>
            <p className="text-xs text-slate-400">MERN Stack Developer</p>
          </div>
        </div>
        <div className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden rounded-full border border-slate-700/60 px-4 py-2 text-xs font-semibold text-slate-100 transition hover:border-brand-500/60 hover:text-white md:inline-flex"
        >
          Let&apos;s Talk
        </a>
      </nav>
      <div className="section-padding flex items-center gap-4 overflow-x-auto pb-4 text-xs text-slate-400 md:hidden no-scrollbar">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="whitespace-nowrap transition hover:text-white">
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
