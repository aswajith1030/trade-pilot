// TradePilot AI — Official Sources Directory Component (Obsidian Dark Theme)

window.OfficialSourcesView = function() {
  const sources = window.OFFICIAL_SOURCES_LIST || [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-1">
            <i data-lucide="external-link" className="w-4 h-4"></i>
            <span>Government & International Portals</span>
          </div>
          <h1 className="text-2xl font-bold text-white">
            Official Trade Sources Directory
          </h1>
          <p className="text-zinc-400 text-sm mt-1">
            TradePilot AI is an AI guidance layer connecting exporters with official government systems and regulatory platforms.
          </p>
        </div>

        <div className="bg-obsidian-950 border border-zinc-800 px-4 py-2 rounded-xl text-right">
          <div className="text-[10px] text-zinc-500 font-mono">PORTAL DIRECTORY</div>
          <div className="text-xs font-bold text-emerald-400">{sources.length} Verified Sources</div>
        </div>
      </div>

      {/* Guidance Layer Notice */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 shadow-md flex items-start space-x-4">
        <div className="w-9 h-9 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-md">
          <i data-lucide="info" className="w-5 h-5"></i>
        </div>
        <div>
          <h2 className="text-sm font-bold text-white">AI Guidance Layer Architecture</h2>
          <p className="text-xs text-zinc-300 leading-relaxed mt-0.5">
            TradePilot AI aggregates complex requirements into actionable steps. However, official legal transactions, customs declarations, and permit filings must always be executed directly on official government platforms (ICEGATE, DGFT, APEDA, etc.).
          </p>
        </div>
      </div>

      {/* Sources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sources.map((src, idx) => (
          <div key={idx} className="bg-zinc-900 border border-zinc-800 hover:border-zinc-750 rounded-3xl p-5 shadow-md flex flex-col justify-between space-y-4 transition">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800">
                  {src.category}
                </span>
                <span className="text-[10px] bg-obsidian-950 text-zinc-400 px-2 py-0.5 rounded border border-zinc-800 font-mono">
                  {src.badge}
                </span>
              </div>
              <h3 className="text-base font-bold text-white">{src.name}</h3>
              <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">{src.description}</p>
            </div>

            <div className="pt-3 border-t border-zinc-800 flex items-center justify-end">
              <a
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-obsidian-950 hover:bg-zinc-850 text-zinc-300 hover:text-white text-xs font-semibold px-3.5 py-2 rounded-xl border border-zinc-800 transition flex items-center gap-1.5 shadow-xs"
              >
                <span>View Source</span>
                <i data-lucide="external-link" className="w-3.5 h-3.5"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
