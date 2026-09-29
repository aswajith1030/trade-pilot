// TradePilot AI — Market Intelligence Analytics Component (With Country Flags & Emerald Theme)

window.MarketIntelligenceView = function({ activeJourney, productData }) {
  const { productName, destination } = activeJourney;
  const targetMarket = productData.keyMarkets.find(m => m.country.toLowerCase() === destination.toLowerCase()) || productData.keyMarkets[0];
  const [selectedCountry, setSelectedCountry] = React.useState(targetMarket.country);

  const activeMarketData = productData.keyMarkets.find(m => m.country.toLowerCase() === selectedCountry.toLowerCase()) || targetMarket;
  const activeFlag = window.COUNTRY_FLAGS[activeMarketData.country] || window.COUNTRY_FLAGS["Germany"];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-emerald-600 font-semibold uppercase tracking-wider mb-1">
            <i data-lucide="bar-chart-3" className="w-4 h-4"></i>
            <span>AI Analytics & Trade Feasibility</span>
          </div>
          <h1 className="text-2xl font-bold text-zinc-950 flex items-center gap-2">
            <span>{productData.logoIcon}</span>
            <span>AI Market Intelligence: {productName}</span>
          </h1>
          <p className="text-zinc-600 text-sm mt-1">
            Explore potential international target markets, pricing realization, and logistics feasibility for {productName}.
          </p>
        </div>

        <div className="bg-slate-100 border border-slate-200 px-4 py-2 rounded-xl text-right flex items-center gap-3">
          <img src={activeFlag.flagUrl} alt={activeMarketData.country} className="w-7 h-5 object-cover rounded shadow-xs" />
          <div>
            <div className="text-[10px] text-zinc-500 font-mono">SELECTED TARGET</div>
            <div className="text-sm font-bold text-emerald-700">{activeMarketData.country}</div>
          </div>
        </div>
      </div>

      {/* Large Opportunity Score Card Banner */}
      <div className="bg-zinc-950 text-white border border-zinc-850 rounded-3xl p-6 shadow-md grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Big Score Gauge */}
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center">
          <div className="text-xs text-zinc-400 uppercase font-semibold tracking-wider mb-2 flex items-center justify-center gap-2">
            <img src={activeFlag.flagUrl} alt={activeMarketData.country} className="w-5 h-3.5 object-cover rounded" />
            <span>Opportunity Score ({activeMarketData.country})</span>
          </div>
          <div className="text-5xl font-extrabold text-emerald-400 mb-1">
            {activeMarketData.opportunityScore} <span className="text-2xl text-zinc-500 font-normal">/ 100</span>
          </div>
          <div className="inline-block bg-emerald-950 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-800 mt-2">
            High Growth Potential
          </div>
          <div className="text-[10px] text-zinc-500 font-mono mt-3">
            Estimated — Prototype Data
          </div>
        </div>

        {/* Quick Highlights Grid */}
        <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
            <div className="text-xs text-zinc-400 mb-1">Import Demand</div>
            <div className="text-base font-bold text-white">{activeMarketData.demand}</div>
          </div>

          <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
            <div className="text-xs text-zinc-400 mb-1">Indicative Price</div>
            <div className="text-base font-bold text-emerald-400">{activeMarketData.indicativePrice}</div>
          </div>

          <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
            <div className="text-xs text-zinc-400 mb-1">Import Duty</div>
            <div className="text-base font-bold text-amber-400">{activeMarketData.duty}</div>
          </div>

          <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
            <div className="text-xs text-zinc-400 mb-1">Logistics Feasibility</div>
            <div className="text-base font-bold text-white">{activeMarketData.logistics}</div>
          </div>

          <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
            <div className="text-xs text-zinc-400 mb-1">Market Competition</div>
            <div className="text-base font-bold text-amber-400">{activeMarketData.competition}</div>
          </div>

          <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
            <div className="text-xs text-zinc-400 mb-1">Trade Agreement</div>
            <div className="text-base font-bold text-white">GSP / FTA Status</div>
          </div>
        </div>
      </div>

      {/* Target Market Comparison Matrix Table */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
        <h2 className="text-lg font-bold text-zinc-950 mb-1">International Market Comparison Matrix</h2>
        <p className="text-xs text-zinc-600 mb-4">Click any country row to view deep dive analysis</p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-xs font-semibold text-zinc-600 uppercase tracking-wider bg-slate-100">
                <th className="p-3.5">Country</th>
                <th className="p-3.5 text-center">Opportunity Score</th>
                <th className="p-3.5">Demand Level</th>
                <th className="p-3.5">Logistics</th>
                <th className="p-3.5">Competition</th>
                <th className="p-3.5">Indicative Price</th>
                <th className="p-3.5">Duty Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
              {productData.keyMarkets.map((m, idx) => {
                const isSelected = selectedCountry.toLowerCase() === m.country.toLowerCase();
                const countryFlag = window.COUNTRY_FLAGS[m.country] || window.COUNTRY_FLAGS["Germany"];

                return (
                  <tr
                    key={idx}
                    onClick={() => setSelectedCountry(m.country)}
                    className={`cursor-pointer transition ${
                      isSelected ? "bg-emerald-50 text-zinc-950 font-semibold" : "hover:bg-slate-50 text-zinc-700"
                    }`}
                  >
                    <td className="p-3.5 flex items-center space-x-2.5">
                      <img src={countryFlag.flagUrl} alt={m.country} className="w-6 h-4 object-cover rounded shadow-xs" />
                      <span className="font-bold text-zinc-950">{m.country}</span>
                    </td>
                    <td className="p-3.5 text-center font-extrabold text-emerald-700">
                      {m.opportunityScore} / 100
                    </td>
                    <td className="p-3.5">
                      <span className="bg-slate-100 text-zinc-800 px-2.5 py-1 rounded-lg text-xs border border-slate-200 font-medium">{m.demand}</span>
                    </td>
                    <td className="p-3.5">{m.logistics}</td>
                    <td className="p-3.5 text-amber-700">{m.competition}</td>
                    <td className="p-3.5 font-mono text-emerald-700 font-semibold">{m.indicativePrice}</td>
                    <td className="p-3.5 font-mono text-zinc-700">{m.duty}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Deep Dive Section: Why this market? */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 border-b border-slate-200 pb-3">
          <img src={activeFlag.flagUrl} alt={activeMarketData.country} className="w-8 h-6 object-cover rounded shadow-xs" />
          <div>
            <h2 className="text-lg font-bold text-zinc-950">Why {activeMarketData.country}?</h2>
            <p className="text-xs text-zinc-600">Comprehensive AI trade rationale for {productName} in {activeMarketData.country}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div className="font-bold text-emerald-700 mb-1 flex items-center gap-1.5">
              <i data-lucide="trending-up" className="w-4 h-4"></i>
              <span>Demand Factor</span>
            </div>
            <p className="text-zinc-700">{activeMarketData.whyMarket.demandFactor}</p>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div className="font-bold text-emerald-700 mb-1 flex items-center gap-1.5">
              <i data-lucide="dollar-sign" className="w-4 h-4"></i>
              <span>Price Realization</span>
            </div>
            <p className="text-zinc-700">{activeMarketData.whyMarket.priceRealization}</p>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div className="font-bold text-amber-700 mb-1 flex items-center gap-1.5">
              <i data-lucide="truck" className="w-4 h-4"></i>
              <span>Logistics Factor</span>
            </div>
            <p className="text-zinc-700">{activeMarketData.whyMarket.logisticsFactor}</p>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div className="font-bold text-zinc-900 mb-1 flex items-center gap-1.5">
              <i data-lucide="file-check" className="w-4 h-4 text-emerald-600"></i>
              <span>Duties & Taxes</span>
            </div>
            <p className="text-zinc-700">{activeMarketData.whyMarket.dutyFactor}</p>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div className="font-bold text-rose-700 mb-1 flex items-center gap-1.5">
              <i data-lucide="shield-alert" className="w-4 h-4"></i>
              <span>Regulatory Complexity</span>
            </div>
            <p className="text-zinc-700">{activeMarketData.whyMarket.regulatoryComplexity}</p>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div className="font-bold text-teal-700 mb-1 flex items-center gap-1.5">
              <i data-lucide="users" className="w-4 h-4"></i>
              <span>Market Accessibility</span>
            </div>
            <p className="text-zinc-700">{activeMarketData.whyMarket.accessibility}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
