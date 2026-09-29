// TradePilot AI — Shipping & Ports Component (Obsidian Dark Theme)

window.ShippingView = function({ activeJourney, productData }) {
  const { productName, origin, destination } = activeJourney;
  const { shipping } = productData;
  const originFlag = window.COUNTRY_FLAGS[origin] || window.COUNTRY_FLAGS["India"];
  const destFlag = window.COUNTRY_FLAGS[destination] || window.COUNTRY_FLAGS["Germany"];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-1">
            <i data-lucide="ship" className="w-4 h-4"></i>
            <span>Logistics & Maritime Routes</span>
          </div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <span>Shipping & Ports:</span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <img src={originFlag.flagUrl} alt={origin} className="w-5 h-3.5 object-cover rounded shadow-xs" />
              <span>{origin}</span>
            </span>
            <span className="text-emerald-400">→</span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <img src={destFlag.flagUrl} alt={destination} className="w-5 h-3.5 object-cover rounded shadow-xs" />
              <span>{destination}</span>
            </span>
          </h1>
          <p className="text-zinc-400 text-sm mt-1">
            Maritime shipping corridors, origin/destination ports, container specifications, and transit times for {productName}.
          </p>
        </div>

        <div className="bg-amber-950/40 border border-amber-800/80 px-3.5 py-2 rounded-xl text-right">
          <div className="text-[10px] text-amber-400 font-mono font-bold">DATA DISCLAIMER</div>
          <div className="text-xs font-semibold text-amber-200">Demo / Indicative Data</div>
        </div>
      </div>

      {/* Origin vs Destination Ports Split Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Origin Ports */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-md">
          <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-zinc-800">
            <div className="w-9 h-9 rounded-xl bg-obsidian-950 border border-zinc-800 text-emerald-400 flex items-center justify-center font-bold">
              <i data-lucide="anchor" className="w-5 h-5"></i>
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <img src={originFlag.flagUrl} alt={origin} className="w-5 h-3.5 object-cover rounded shadow-xs" />
                <span>Suggested Origin Ports ({origin})</span>
              </h2>
              <p className="text-xs text-zinc-400">Primary container hubs for {productName} loading</p>
            </div>
          </div>

          <div className="space-y-2.5">
            {shipping.originPorts.map((port, idx) => (
              <div key={idx} className="bg-obsidian-950 p-3.5 rounded-xl border border-zinc-800 flex items-center justify-between">
                <span className="text-sm font-semibold text-white">{port}</span>
                <span className="text-xs bg-zinc-900 text-emerald-400 px-2.5 py-1 rounded-md font-mono border border-zinc-800">Port #{idx + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Destination Ports */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-md">
          <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-zinc-800">
            <div className="w-9 h-9 rounded-xl bg-obsidian-950 border border-zinc-800 text-emerald-400 flex items-center justify-center font-bold">
              <i data-lucide="navigation" className="w-5 h-5"></i>
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <img src={destFlag.flagUrl} alt={destination} className="w-5 h-3.5 object-cover rounded shadow-xs" />
                <span>Destination Ports ({destination})</span>
              </h2>
              <p className="text-xs text-zinc-400">Primary discharge ports for customs clearance</p>
            </div>
          </div>

          <div className="space-y-2.5">
            {shipping.destinationPorts.map((port, idx) => (
              <div key={idx} className="bg-obsidian-950 p-3.5 rounded-xl border border-zinc-800 flex items-center justify-between">
                <span className="text-sm font-semibold text-white">{port}</span>
                <span className="text-xs bg-emerald-950 text-emerald-300 px-2.5 py-1 rounded-md font-mono border border-emerald-800">Port #{idx + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Logistics & Container Parameters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-md">
          <div className="text-xs text-zinc-400 font-semibold uppercase mb-1">Transit Time</div>
          <div className="text-2xl font-extrabold text-emerald-400">{shipping.transitTime}</div>
          <div className="text-[11px] text-zinc-500 font-mono mt-1">Direct ocean container service</div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-md">
          <div className="text-xs text-zinc-400 font-semibold uppercase mb-1">Container Specification</div>
          <div className="text-sm font-bold text-white leading-snug">{shipping.containerOptions}</div>
          <div className="text-[11px] text-zinc-500 font-mono mt-1">Standard cargo payload</div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-md">
          <div className="text-xs text-zinc-400 font-semibold uppercase mb-1">Shipping Complexity</div>
          <div className="text-2xl font-extrabold text-amber-400">{shipping.logisticsComplexity}</div>
          <div className="text-[11px] text-zinc-500 font-mono mt-1">Freight rating index</div>
        </div>
      </div>

      {/* Shipping Considerations & Packing Advice */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-md space-y-3">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <i data-lucide="package-check" className="w-5 h-5 text-amber-400"></i>
          <span>Container Packing & Moisture Mitigation Guidance</span>
        </h2>
        <p className="text-sm text-zinc-300 leading-relaxed bg-obsidian-950 p-4 rounded-2xl border border-zinc-800 font-medium">
          {shipping.shippingTips}
        </p>
      </div>
    </div>
  );
};
