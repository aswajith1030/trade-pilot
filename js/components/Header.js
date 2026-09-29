// TradePilot AI — Top Header Component (Obsidian Dark Theme with Flags)

window.Header = function({ activeJourney, onChangeTradeClick, onSelectDemoPreset, onToggleMobileSidebar, onLogout }) {
  const { productName, origin, destination, tradeType, productId } = activeJourney;
  const productObj = window.TRADE_PRODUCTS[productId] || window.TRADE_PRODUCTS["turmeric"];
  
  const originFlag = window.COUNTRY_FLAGS[origin] || window.COUNTRY_FLAGS["India"];
  const destFlag = window.COUNTRY_FLAGS[destination] || window.COUNTRY_FLAGS["Germany"];

  const demoPills = [
    { key: "turmeric", label: "Turmeric → Germany" },
    { key: "coffee", label: "Coffee → Italy" },
    { key: "rice", label: "Rice → UAE" },
    { key: "tea", label: "Tea → UK" },
    { key: "pharma", label: "Pharma → USA" },
    { key: "spices", label: "Spices → UAE" },
    { key: "cotton", label: "Cotton → Bangladesh" },
    { key: "handicrafts", label: "Handicrafts → USA" }
  ];

  return (
    <header className="bg-black text-white border-b border-zinc-850 p-4 sticky top-0 z-20 shadow-md">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        
        {/* Left Section: Active Journey Banner with Flags & Merged Logo */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button 
              onClick={onToggleMobileSidebar}
              className="lg:hidden p-2 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white"
              title="Toggle Menu"
            >
              <i data-lucide="menu" className="w-5 h-5"></i>
            </button>

            <div className="flex items-center space-x-3">
              <img 
                src="assets/logo.png" 
                alt="TradePilot AI Logo" 
                className="h-10 w-auto object-contain logo-merged lg:hidden"
                onError={(e) => { e.target.style.display = 'none'; }}
              />

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">Active Journey</span>
                  <span className="bg-emerald-950 text-emerald-400 text-[10px] font-mono px-2 py-0.5 rounded border border-emerald-800">Verified Context</span>
                </div>
                
                <h2 className="text-lg sm:text-xl font-extrabold text-white flex items-center gap-2 mt-0.5">
                  <span className="flex items-center gap-1.5">
                    <span className="text-xl">{productObj.logoIcon}</span>
                    <span>{tradeType === 'Export' ? 'Exporting' : 'Importing'} {productName}</span>
                  </span>

                  <span className="text-zinc-500 font-light">•</span>

                  <span className="flex items-center gap-1.5 text-zinc-300 text-base font-semibold">
                    <img src={originFlag.flagUrl} alt={origin} className="w-5 h-3.5 object-cover rounded shadow-xs" />
                    <span>{origin}</span>
                  </span>

                  <i data-lucide="arrow-right" className="w-4 h-4 text-emerald-400 shrink-0"></i>

                  <span className="flex items-center gap-1.5 text-emerald-400 text-base font-bold">
                    <img src={destFlag.flagUrl} alt={destination} className="w-5 h-3.5 object-cover rounded shadow-xs" />
                    <span>{destination}</span>
                  </span>
                </h2>
              </div>
            </div>
          </div>

          <button
            onClick={onChangeTradeClick}
            className="lg:hidden bg-emerald-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm"
          >
            <i data-lucide="refresh-cw" className="w-3.5 h-3.5"></i>
            <span>Change</span>
          </button>
        </div>

        {/* Center/Right Section: 4 Metric Cards */}
        <div className="flex items-center flex-wrap gap-2 sm:gap-3">
          <div className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-xl text-left min-w-[90px] flex items-center gap-2">
            <span className="text-lg">{productObj.logoIcon}</span>
            <div>
              <div className="text-[9px] uppercase font-semibold text-zinc-400">Product</div>
              <div className="text-xs font-bold text-white truncate max-w-[90px]">{productName}</div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-xl text-left min-w-[80px] flex items-center gap-2">
            <img src={originFlag.flagUrl} alt={origin} className="w-5 h-3.5 object-cover rounded shrink-0" />
            <div>
              <div className="text-[9px] uppercase font-semibold text-zinc-400">Origin</div>
              <div className="text-xs font-bold text-white truncate">{origin}</div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-xl text-left min-w-[90px] flex items-center gap-2">
            <img src={destFlag.flagUrl} alt={destination} className="w-5 h-3.5 object-cover rounded shrink-0" />
            <div>
              <div className="text-[9px] uppercase font-semibold text-zinc-400">Destination</div>
              <div className="text-xs font-bold text-emerald-400 truncate">{destination}</div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-xl text-left min-w-[80px]">
            <div className="text-[9px] uppercase font-semibold text-zinc-400">Trade Type</div>
            <div className="text-xs font-bold text-amber-400">{tradeType}</div>
          </div>

          <button
            onClick={onChangeTradeClick}
            className="hidden lg:flex bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-3.5 py-2 rounded-xl transition items-center gap-1.5 shadow-md shadow-emerald-900/30"
          >
            <i data-lucide="refresh-cw" className="w-3.5 h-3.5"></i>
            <span>Change Trade</span>
          </button>
        </div>
      </div>

      {/* Demo Switcher Quick Bar */}
      <div className="mt-3 pt-2.5 border-t border-zinc-850 flex items-center gap-2 overflow-x-auto custom-scrollbar pb-1">
        <span className="text-[11px] font-semibold text-zinc-400 whitespace-nowrap flex items-center gap-1">
          <i data-lucide="zap" className="w-3.5 h-3.5 text-amber-400"></i>
          Demo Presets:
        </span>
        {demoPills.map((pill) => (
          <button
            key={pill.key}
            onClick={() => onSelectDemoPreset(pill.key)}
            className={`text-xs px-2.5 py-1 rounded-lg transition whitespace-nowrap border ${
              productId === pill.key
                ? "bg-emerald-600 text-white border-emerald-500 font-semibold shadow-sm"
                : "bg-zinc-900 text-zinc-300 hover:bg-zinc-850 hover:text-white border-zinc-800"
            }`}
          >
            {pill.label}
          </button>
        ))}
      </div>
    </header>
  );
};
