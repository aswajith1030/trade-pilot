// TradePilot AI — Regulations View Component (Obsidian Dark Theme)

window.RegulationsView = function({ activeJourney, productData }) {
  const { productName, destination } = activeJourney;
  const { regulations } = productData;
  const destFlag = window.COUNTRY_FLAGS[destination] || window.COUNTRY_FLAGS["Germany"];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-1">
            <i data-lucide="shield-alert" className="w-4 h-4"></i>
            <span>Destination Country Compliance</span>
          </div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <img src={destFlag.flagUrl} alt={destination} className="w-7 h-5 object-cover rounded shadow-xs" />
            <span>Destination Regulations: {destination} ({productName})</span>
          </h1>
          <p className="text-zinc-400 text-sm mt-1">
            Statutory import requirements, pesticide residue thresholds, and sanitary standards.
          </p>
        </div>

        <div className="bg-obsidian-950 border border-zinc-800 px-4 py-2 rounded-xl text-right">
          <div className="text-[10px] text-zinc-500 font-mono">REGULATORY AUTHORITY</div>
          <div className="text-xs font-bold text-amber-400">{regulations.authority}</div>
        </div>
      </div>

      {/* Prominent Warning Banner */}
      <div className="bg-amber-950/40 border border-amber-800/80 rounded-3xl p-5 shadow-md flex items-start space-x-4">
        <div className="w-10 h-10 rounded-2xl bg-amber-900/40 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-800">
          <i data-lucide="alert-triangle" className="w-6 h-6"></i>
        </div>
        <div>
          <h2 className="text-base font-bold text-amber-300">Mandatory Regulatory Warning</h2>
          <p className="text-xs text-amber-200/90 leading-relaxed mt-1">
            “Regulatory requirements may change. Verify current requirements with the relevant official authority ({regulations.authority}) before making business decisions.”
          </p>
        </div>
      </div>

      {/* Regulatory Considerations Cards Grid */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-md space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <i data-lucide="check-square" className="w-5 h-5 text-emerald-400"></i>
          <span>Key Regulatory & Quality Considerations</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {regulations.keyConsiderations.map((item, idx) => (
            <div key={idx} className="bg-obsidian-950 border border-zinc-800 rounded-2xl p-4 flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                {idx + 1}
              </div>
              <div className="text-sm text-zinc-200 leading-relaxed font-medium">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Notes & Inspection Protocols */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-md space-y-3">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <i data-lucide="clipboard-list" className="w-5 h-5 text-emerald-400"></i>
          <span>Inspection & Testing Protocols</span>
        </h2>
        <p className="text-sm text-zinc-300 leading-relaxed bg-obsidian-950 p-4 rounded-2xl border border-zinc-800 font-medium">
          {regulations.complianceNotes}
        </p>
      </div>
    </div>
  );
};
