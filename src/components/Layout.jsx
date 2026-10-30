import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, AudioWaveform } from "lucide-react";

const navClass = ({ isActive }) =>
  `text-sm transition ${isActive ? "text-teal-300" : "text-slate-400 hover:text-white"}`;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#080b12]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-teal-300 text-slate-950">
            <AudioWaveform size={20} />
          </span>
          <span className="text-lg font-bold tracking-tight">ClipScope<span className="text-teal-300">.</span></span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="/#features" className="text-sm text-slate-400 transition hover:text-white">Features</a>
          <a href="/#workflow" className="text-sm text-slate-400 transition hover:text-white">How it works</a>
          <NavLink to="/privacy" className={navClass}>Privacy</NavLink>
          <NavLink to="/terms" className={navClass}>Terms</NavLink>
        </nav>
        <a href="mailto:CONTACT_EMAIL" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-teal-300/60 hover:bg-teal-300/10">
          Contact <ArrowUpRight size={15} />
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070910]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 md:flex-row md:items-end md:justify-between lg:px-8">
        <div>
          <Link to="/" className="text-lg font-bold">ClipScope<span className="text-teal-300">.</span></Link>
          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
            An independent video research workspace. Not affiliated with or endorsed by TikTok.
          </p>
          <p className="mt-4 text-xs text-slate-600">© {new Date().getFullYear()} ClipScope. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
          <Link className="hover:text-white" to="/privacy">Privacy Policy</Link>
          <Link className="hover:text-white" to="/terms">Terms of Service</Link>
          <a className="hover:text-white" href="mailto:CONTACT_EMAIL">Contact</a>
        </div>
      </div>
    </footer>
  );
}
