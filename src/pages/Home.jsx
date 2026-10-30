import { ArrowRight, Search, ChartNoAxesCombined, Users, ShieldCheck, Sparkles, Play, Hash, BarChart3, ScanSearch } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: Search, title: "Discover public videos", text: "Explore video content using supported search and discovery capabilities as they become available." },
  { icon: ChartNoAxesCombined, title: "Understand performance", text: "Review available public video metrics and organize findings in one research workspace." },
  { icon: Users, title: "Explore creator profiles", text: "Build a clearer picture of public creator content and publishing activity where permitted." },
];

function SectionLabel({ children }) {
  return <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[.18em] text-teal-200"><span className="h-1.5 w-1.5 rounded-full bg-teal-300" />{children}</div>;
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-teal-400/[0.08] blur-[130px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 pt-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-32 lg:pt-28">
          <div>
            <SectionLabel>Video intelligence workspace</SectionLabel>
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              See the signal<br />behind the <span className="bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text text-transparent">scroll.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
              ClipScope is being built to help researchers, marketers, and creators explore public short-form video content and understand the trends shaping it.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-300 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-teal-200">
                Explore the concept <ArrowRight size={17} />
              </a>
              <a href="mailto:CONTACT_EMAIL" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:bg-white/5">
                Get in touch
              </a>
            </div>
            <p className="mt-5 text-xs leading-5 text-slate-600">Early-stage project. Features depend on API availability, platform permissions, and applicable terms.</p>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-teal-300/15 via-cyan-400/5 to-violet-500/10 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-[#101622] p-4 shadow-glow sm:p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div><p className="text-sm font-semibold">Research overview</p><p className="mt-1 text-xs text-slate-500">Illustrative interface preview</p></div>
                <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-200">Preview</span>
              </div>
              <div className="mt-5 flex gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-teal-300/10 text-teal-200"><ScanSearch size={21}/></div>
                <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500">Example search</p>
                  <p className="mt-1 text-sm text-slate-200">#artificialintelligence</p>
                </div>
                <button aria-label="Search preview" className="grid h-11 w-11 place-items-center rounded-xl bg-teal-300 text-slate-950"><Search size={18}/></button>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[["Videos","—"],["Creators","—"],["Engagement","—"]].map(([label,value]) => <div key={label} className="rounded-xl border border-white/10 bg-white/[0.025] p-3"><p className="text-[10px] text-slate-500">{label}</p><p className="mt-2 text-xl font-semibold">{value}</p><p className="mt-1 text-[10px] text-slate-600">Not connected</p></div>)}
              </div>
              <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.025] p-4">
                <div className="flex items-center justify-between"><p className="text-xs font-semibold text-slate-300">Content discovery</p><Hash size={15} className="text-teal-300"/></div>
                <div className="mt-4 space-y-3">
                  {[["Topic research","Search public content"],["Creator insights","Review public profiles"],["Performance signals","Analyze available metrics"]].map(([a,b],i)=><div key={a} className="flex items-center gap-3"><div className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 text-teal-200">{[<Play size={14}/>,<Users size={14}/>,<BarChart3 size={14}/>][i]}</div><div><p className="text-xs font-medium">{a}</p><p className="mt-0.5 text-[10px] text-slate-500">{b}</p></div><div className="ml-auto h-1.5 w-12 rounded-full bg-white/10"><div className="h-1.5 w-1/2 rounded-full bg-teal-300/60"/></div></div>)}
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[10px] text-slate-600"><Sparkles size={13} className="text-teal-300"/> Preview only — no live TikTok data is displayed.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-2xl"><SectionLabel>What we're building</SectionLabel><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">A calmer way to understand short-form video.</h2><p className="mt-5 leading-7 text-slate-400">The goal is to turn scattered public content signals into a more useful research workflow — with respect for platform rules and creator privacy.</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {features.map(({icon:Icon,title,text})=><article key={title} className="rounded-2xl border border-white/10 bg-[#0d121c] p-7 transition hover:-translate-y-1 hover:border-teal-300/30"><div className="grid h-11 w-11 place-items-center rounded-xl bg-teal-300/10 text-teal-200"><Icon size={21}/></div><h3 className="mt-6 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="workflow" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8">
        <div><SectionLabel>Designed with care</SectionLabel><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Useful insights.<br/><span className="text-teal-300">Responsible access.</span></h2><p className="mt-5 max-w-lg leading-7 text-slate-400">ClipScope is an independent project. Any future TikTok integration will use only approved access methods, requested permissions, and data uses allowed by the relevant platform terms.</p></div>
        <div className="space-y-4">
          {[["Authorized integrations","We intend to use official APIs and permissions where available."],["Respect for creators","We do not claim ownership of creator content or platform data."],["Clear data practices","Our Privacy Policy explains what information may be processed as the product develops."]].map(([title,body])=><div key={title} className="flex gap-4 rounded-xl border border-white/10 p-5"><ShieldCheck className="mt-1 shrink-0 text-teal-300" size={20}/><div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-400">{body}</p></div></div>)}
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto max-w-7xl rounded-3xl border border-teal-300/20 bg-gradient-to-br from-teal-300/10 to-cyan-400/[0.03] px-7 py-12 text-center sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-[.2em] text-teal-200">ClipScope</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">Research smarter. Respect the source.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400">Have a question about the project or its data practices? We'd be glad to hear from you.</p>
          <a href="mailto:CONTACT_EMAIL" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-teal-100">Contact the team <ArrowRight size={16}/></a>
        </div>
      </section>
    </main>
  );
}
