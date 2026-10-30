export default function LegalLayout({ eyebrow, title, updated, children }) {
  return (
    <main className="mx-auto max-w-4xl px-5 py-16 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-[.2em] text-teal-300">{eyebrow}</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: {updated}</p>
      <div className="mt-10 space-y-8 text-sm leading-7 text-slate-300 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_p]:text-slate-400 [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_a]:text-teal-300 [&_strong]:text-slate-200">
        {children}
      </div>
    </main>
  );
}
