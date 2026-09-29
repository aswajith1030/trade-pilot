// TradePilot AI — Trust & Verification Component (Obsidian Dark Theme)

window.TrustLayerView = function({ activeJourney, productData }) {
  const { productName } = activeJourney;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-1">
            <i data-lucide="check-circle-2" className="w-4 h-4"></i>
            <span>Trust & Verification Engine</span>
          </div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <span>{productData.logoIcon}</span>
            <span>Trust & Verification Layer: {productName}</span>
          </h1>
          <p className="text-zinc-400 text-sm mt-1 max-w-3xl">
            TradePilot AI connects recommendations with supporting references and assumptions so users can verify important information.
          </p>
        </div>

        <div className="bg-emerald-950/60 border border-emerald-800 px-4 py-2 rounded-xl text-right">
          <div className="text-[10px] text-emerald-400 font-mono font-bold">TRANSPARENCY AUDIT</div>
          <div className="text-xs font-semibold text-emerald-200">Traceable Assumptions</div>
        </div>
      </div>

      {/* Trust Philosophy Banner */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-md">
        <h2 className="text-lg font-bold text-white mb-2">How TradePilot AI Ensures Information Integrity</h2>
        <p className="text-xs text-zinc-400 leading-relaxed max-w-4xl">
          Unlike generic chat models that guess trade rules, TradePilot AI links every AI recommendation back to statutory export promotion council guidelines (e.g. {productData.epc}), official tariff databases, and international regulatory frameworks.
        </p>
      </div>

      {/* Verification Cards */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-white">Active Recommendation Audit Trail for {productName}</h2>
        {productData.trustLayer.map((item, idx) => (
          <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-md space-y-4">
            {/* Recommendation Header */}
            <div>
              <div className="text-xs text-emerald-400 font-mono uppercase font-bold mb-1">AI Recommendation #{idx + 1}</div>
              <h3 className="text-base font-bold text-white">{item.recommendation}</h3>
            </div>

            {/* Source vs Assumption Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-obsidian-950 p-4 rounded-2xl border border-zinc-800">
                <div className="font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
                  <i data-lucide="database" className="w-4 h-4"></i>
                  <span>Supporting Source</span>
                </div>
                <p className="text-zinc-300">{item.source}</p>
              </div>

              <div className="bg-obsidian-950 p-4 rounded-2xl border border-zinc-800">
                <div className="font-bold text-amber-400 mb-1 flex items-center gap-1.5">
                  <i data-lucide="help-circle" className="w-4 h-4"></i>
                  <span>Underlying Assumption</span>
                </div>
                <p className="text-zinc-300">{item.assumption}</p>
              </div>
            </div>

            {/* Action Link */}
            <div className="flex items-center justify-end pt-2 border-t border-zinc-800">
              <a
                href={item.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-4 py-2 rounded-xl transition flex items-center gap-1.5 shadow-md"
              >
                <span>Verify Source</span>
                <i data-lucide="external-link" className="w-3.5 h-3.5 text-emerald-200"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
