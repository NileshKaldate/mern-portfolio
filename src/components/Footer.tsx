const Footer = () => {
  return (
    <footer className="section-padding border-t border-slate-800/80 py-10 text-left">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-semibold text-white">Nilesh Kaldate</p>
          <p className="text-xs text-slate-400">MERN Stack Developer</p>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-300">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:text-white">
            Twitter
          </a>
        </div>
        <p className="text-xs text-slate-500">© 2026 Aria Patel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
