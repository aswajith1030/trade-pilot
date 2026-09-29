// TradePilot AI — Dashboard Overview Component (Obsidian Dark Theme)

window.DashboardOverview = function({ activeJourney, productData, onNavigate, onOpenReportModal }) {
  const { productName, origin, destination } = activeJourney;
  const targetMarket = productData.keyMarkets.find(m => m.country.toLowerCase() === destination.toLowerCase()) || productData.keyMarkets[0];
  const destFlag = window.COUNTRY_FLAGS[destination] || window.COUNTRY_FLAGS["Germany"];

  return (
    <div className="space-y-6">
      {/* Top Banner / Executive Summary */}
      <div className="bg-black text-white border border-zinc-850 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs font-semibold mb-3">
              <i data-lucide="sparkles" className="w-3.5 h-3.5 text-emerald-400"></i>
              <span>AI Trade Intelligence Active</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2 flex-wrap">
              <span className="text-3xl">{productData.logoIcon}</span>
              <span>{productName} Export Roadmap to</span>
              <span className="flex items-center gap-2 text-emerald-400">
                <img src={destFlag.flagUrl} alt={destination} className="w-7 h-5 object-cover rounded shadow-xs" />
                <span>{destination}</span>
              </span>
            </h1>
            
            <p className="text-zinc-400 text-sm mt-2 max-w-2xl">
              HS Code <span className="font-mono text-emerald-400 font-semibold">{productData.hsCode}</span> • Export Promotion Council: <span className="text-white font-medium">{productData.epc}</span>
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate("assistant")}
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition shadow-lg shadow-emerald-900/30 flex items-center gap-2"
            >
              <i data-lucide="bot" className="w-4 h-4"></i>
              <span>Ask AI Assistant</span>
            </button>

            <button
              onClick={onOpenReportModal}
              className="bg-zinc-900 hover:bg-zinc-850 text-zinc-200 border border-zinc-800 text-sm font-semibold px-4 py-2.5 rounded-xl transition flex items-center gap-2"
            >
              <i data-lucide="download" className="w-4 h-4 text-emerald-400"></i>
              <span>Export Brief</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Commodity Specs */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-md">
          <div className="flex items-center justify-between text-zinc-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Commodity Grade</span>
            <span className="text-xl">{productData.logoIcon}</span>
          </div>
          <div className="text-xl font-bold text-white truncate">{productData.qualityGrades[0]}</div>
          <p className="text-xs text-zinc-400 mt-1 line-clamp-1">{productData.packaging}</p>
        </div>

        {/* Metric 2: Target Market */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-md">
          <div className="flex items-center justify-between text-zinc-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Target Destination</span>
            <img src={destFlag.flagUrl} alt={destination} className="w-6 h-4 object-cover rounded shadow-xs" />
          </div>
          <div className="text-xl font-bold text-white flex items-center gap-2">
            <span>{targetMarket.country}</span>
            <span className="text-xs bg-zinc-950 text-zinc-400 font-mono px-2 py-0.5 rounded border border-zinc-800">{targetMarket.code}</span>
          </div>
          <p className="text-xs text-zinc-400 mt-1">CIF Realization: <span className="text-emerald-400 font-semibold">{targetMarket.indicativePrice}</span></p>
        </div>

        {/* Metric 3: Opportunity Score */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-md">
          <div className="flex items-center justify-between text-zinc-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Opportunity Score</span>
            <i data-lucide="trending-up" className="w-4 h-4 text-emerald-400"></i>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-emerald-400">{targetMarket.opportunityScore}</span>
            <span className="text-zinc-500 text-xs font-semibold">/ 100</span>
          </div>
          <div className="w-full bg-zinc-950 h-2 rounded-full mt-2 overflow-hidden border border-zinc-800">
            <div 
              className="bg-emerald-500 h-full rounded-full"
              style={{ width: `${targetMarket.opportunityScore}%` }}
            ></div>
          </div>
        </div>

        {/* Metric 4: Documents Required */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-md">
          <div className="flex items-center justify-between text-zinc-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Required Documents</span>
            <i data-lucide="file-check" className="w-4 h-4 text-amber-400"></i>
          </div>
          <div className="text-xl font-bold text-white flex items-center gap-2">
            <span>{productData.documents.length} Mandatory Docs</span>
          </div>
          <p className="text-xs text-zinc-400 mt-1">Includes EPC e-NOC & Customs clearance</p>
        </div>
      </div>

      {/* 7-Step Trade Stepper Preview */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-md">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <i data-lucide="git-commit" className="w-5 h-5 text-emerald-400"></i>
              <span>7-Step Export Execution Journey</span>
            </h2>
            <p className="text-zinc-400 text-xs mt-0.5">Click any step to inspect technical requirements</p>
          </div>
          
          <button
            onClick={() => onNavigate("journey")}
            className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
          >
            <span>View Full Journey</span>
            <i data-lucide="arrow-right" className="w-4 h-4"></i>
          </button>
        </div>

        {/* Stepper horizontal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
          {productData.journeySteps.map((step, idx) => (
            <div
              key={idx}
              onClick={() => onNavigate("journey")}
              className="bg-obsidian-950 hover:bg-zinc-850 border border-zinc-800 hover:border-emerald-500/50 rounded-xl p-3 cursor-pointer transition group shadow-xs"
            >
              <div className="flex items-center justify-between text-zinc-400 mb-2">
                <span className="text-[11px] font-mono font-bold text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">{step.code}</span>
                <i data-lucide="check-circle" className="w-3.5 h-3.5 text-emerald-400"></i>
              </div>
              <h3 className="text-xs font-bold text-white group-hover:text-emerald-400 transition line-clamp-1">{step.title}</h3>
              <p className="text-[11px] text-zinc-400 mt-1 line-clamp-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Two Column Layout: Top Target Markets & Regulatory Brief */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Top Target Markets */}
        <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-white">Target Market Opportunity Matrix</h3>
              <p className="text-xs text-zinc-400">Comparing demand, price realization, and logistics complexity for {productName}</p>
            </div>
            <button
              onClick={() => onNavigate("intelligence")}
              className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              Full Analytics →
            </button>
          </div>

          <div className="space-y-3">
            {productData.keyMarkets.map((m, idx) => {
              const countryFlag = window.COUNTRY_FLAGS[m.country] || window.COUNTRY_FLAGS["Germany"];
              return (
                <div key={idx} className="bg-obsidian-950 border border-zinc-800 rounded-2xl p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <img src={countryFlag.flagUrl} alt={m.country} className="w-8 h-6 object-cover rounded shadow-xs shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <span>{m.country}</span>
                        {idx === 0 && <span className="text-[10px] bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded border border-emerald-800 font-semibold">Recommended</span>}
                      </h4>
                      <p className="text-xs text-zinc-400 line-clamp-1">{m.summary}</p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-sm font-extrabold text-emerald-400">{m.opportunityScore} / 100</div>
                    <div className="text-[11px] text-zinc-400">Demand: <span className="text-white font-semibold">{m.demand}</span></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Col: Quick Regulatory Overview & Disclaimer */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <i data-lucide="shield-alert" className="w-5 h-5 text-amber-400"></i>
              <h3 className="text-base font-bold text-white">Regulatory Snapshot</h3>
            </div>

            <div className="bg-obsidian-950 border border-zinc-800 rounded-xl p-3.5 mb-4">
              <div className="text-xs text-zinc-500 mb-0.5">Target Authority:</div>
              <div className="text-xs font-bold text-white">{productData.regulations.authority}</div>
            </div>

            <ul className="space-y-2 mb-4">
              {productData.regulations.keyConsiderations.slice(0, 3).map((item, idx) => (
                <li key={idx} className="text-xs text-zinc-300 flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Prototype Disclaimer Box */}
          <div className="bg-amber-950/40 border border-amber-800/80 rounded-2xl p-3.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 mb-1">
              <i data-lucide="alert-triangle" className="w-3.5 h-3.5 text-amber-400"></i>
              <span>Disclaimer — Prototype Data</span>
            </div>
            <p className="text-[11px] text-amber-200/80 leading-tight">
              Values and scores are indicative demo estimates. Verify trade requirements with official sources before business decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
