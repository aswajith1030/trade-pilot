// TradePilot AI — Change Trade Journey & Report Modals (Obsidian Dark Theme)

window.TradeChangeModal = function({ isOpen, onClose, onApplyTrade }) {
  if (!isOpen) return null;

  const [promptText, setPromptText] = React.useState("");
  const [selectedProduct, setSelectedProduct] = React.useState("turmeric");
  const [selectedDestination, setSelectedDestination] = React.useState("Germany");

  const productOptions = [
    { key: "turmeric", name: "Turmeric" },
    { key: "coffee", name: "Coffee" },
    { key: "tea", name: "Tea" },
    { key: "rice", name: "Rice" },
    { key: "spices", name: "Spices" },
    { key: "cotton", name: "Cotton" },
    { key: "handicrafts", name: "Handicrafts" },
    { key: "pharma", name: "Pharmaceuticals" }
  ];

  const destinationOptions = [
    "Germany", "Italy", "UAE", "UK", "USA", "Saudi Arabia", "Bangladesh", "Vietnam", "Turkey", "China", "France"
  ];

  const handlePromptSubmit = (e) => {
    e.preventDefault();
    if (promptText.trim()) {
      onApplyTrade(promptText);
    } else {
      const pObj = window.TRADE_PRODUCTS[selectedProduct];
      onApplyTrade(`I want to export ${pObj.name} from India to ${selectedDestination}`);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-obsidian-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-xl w-full p-6 space-y-6 shadow-2xl animate-fadeIn">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <div className="flex items-center space-x-2 text-white font-bold text-lg">
            <i data-lucide="refresh-cw" className="w-5 h-5 text-emerald-400"></i>
            <span>Change Trade Journey</span>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-white p-1">
            <i data-lucide="x" className="w-5 h-5"></i>
          </button>
        </div>

        {/* Natural Language Prompt Input */}
        <div>
          <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
            Option 1: Type Natural Language Trade Requirement
          </label>
          <input
            type="text"
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            placeholder="e.g. 'I want to export coffee from India to Italy.'"
            className="w-full bg-obsidian-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 placeholder-zinc-500 font-medium"
          />
        </div>

        <div className="flex items-center gap-3 text-xs text-zinc-500 my-2">
          <div className="flex-1 h-px bg-zinc-800"></div>
          <span>OR SELECT PARAMETERS DIRECTLY</span>
          <div className="flex-1 h-px bg-zinc-800"></div>
        </div>

        {/* Parameter Selector */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Select Commodity</label>
            <select
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
              className="w-full bg-obsidian-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 font-medium"
            >
              {productOptions.map((p) => (
                <option key={p.key} value={p.key}>{p.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Target Destination</label>
            <select
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              className="w-full bg-obsidian-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 font-medium"
            >
              {destinationOptions.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-end space-x-3 pt-2 border-t border-zinc-800">
          <button
            type="button"
            onClick={onClose}
            className="bg-obsidian-950 hover:bg-zinc-800 text-zinc-300 text-xs font-semibold px-4 py-2.5 rounded-xl transition"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handlePromptSubmit}
            className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition shadow-md flex items-center gap-1.5"
          >
            <span>Update Journey</span>
            <i data-lucide="arrow-right" className="w-4 h-4 text-emerald-200"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

window.TradeReportModal = function({ isOpen, onClose, activeJourney, productData }) {
  if (!isOpen) return null;

  const { productName, origin, destination, tradeType } = activeJourney;
  const originFlag = window.COUNTRY_FLAGS[origin] || window.COUNTRY_FLAGS["India"];
  const destFlag = window.COUNTRY_FLAGS[destination] || window.COUNTRY_FLAGS["Germany"];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 bg-obsidian-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 shadow-2xl animate-fadeIn my-8">
        
        {/* Top Header with Prominent BACK Button */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="bg-obsidian-950 hover:bg-zinc-800 text-zinc-200 text-xs font-semibold px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 border border-zinc-800 shadow-sm"
              title="Return to Dashboard"
            >
              <i data-lucide="arrow-left" className="w-4 h-4 text-emerald-400"></i>
              <span>← Back to Dashboard</span>
            </button>

            <img 
              src="assets/logo.png" 
              alt="TradePilot AI" 
              className="h-10 w-auto object-contain logo-merged hidden sm:block" 
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-md shadow-emerald-900/30"
            >
              <i data-lucide="printer" className="w-4 h-4"></i>
              <span>Print / Download PDF</span>
            </button>

            <button 
              onClick={onClose} 
              className="text-zinc-400 hover:text-white p-2 rounded-xl bg-obsidian-950 border border-zinc-800"
            >
              <i data-lucide="x" className="w-5 h-5"></i>
            </button>
          </div>
        </div>

        {/* Report Content Document Body */}
        <div className="bg-obsidian-950 p-6 sm:p-8 rounded-2xl border border-zinc-800 text-zinc-200 text-xs sm:text-sm space-y-6">
          {/* Document Header Logo & Title */}
          <div className="border-b border-zinc-800 pb-4 flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <img 
                  src="assets/logo.png" 
                  alt="TradePilot AI" 
                  className="h-9 w-auto object-contain logo-merged" 
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <span className="text-xs text-emerald-300 font-bold uppercase font-mono bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-800">Executive Trade Brief</span>
              </div>
              
              <h3 className="text-2xl font-extrabold text-white flex items-center gap-2 mt-1">
                <span>{productData.logoIcon}</span>
                <span>{productName}</span>
              </h3>
              
              <p className="text-xs text-zinc-400 mt-0.5">
                HS Code: <span className="font-mono text-emerald-400 font-bold">{productData.hsCode}</span> | EPC: {productData.epc}
              </p>
            </div>

            <div className="text-right">
              <div className="text-xs text-zinc-500 font-medium">Trade Corridor</div>
              <div className="text-base font-extrabold text-white flex items-center justify-end gap-1.5 mt-0.5">
                <img src={originFlag.flagUrl} alt={origin} className="w-5 h-3.5 object-cover rounded" />
                <span>{origin}</span>
                <span className="text-emerald-400 font-bold">→</span>
                <img src={destFlag.flagUrl} alt={destination} className="w-5 h-3.5 object-cover rounded" />
                <span className="text-emerald-400 font-bold">{destination}</span>
              </div>
              <div className="text-[11px] text-zinc-500 font-mono mt-0.5">Trade Type: {tradeType}</div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-3 bg-zinc-900 p-4 rounded-xl border border-zinc-800 text-center shadow-xs">
            <div>
              <div className="text-[10px] text-zinc-400 uppercase font-mono">Target Market</div>
              <div className="text-sm font-bold text-white flex items-center justify-center gap-1.5 mt-0.5">
                <img src={destFlag.flagUrl} alt={destination} className="w-4 h-3 object-cover rounded" />
                <span>{destination}</span>
              </div>
            </div>
            <div>
              <div className="text-[10px] text-zinc-400 uppercase font-mono">Opportunity Score</div>
              <div className="text-sm font-extrabold text-emerald-400 mt-0.5">{productData.marketScore} / 100</div>
            </div>
            <div>
              <div className="text-[10px] text-zinc-400 uppercase font-mono">Transit Time</div>
              <div className="text-sm font-bold text-zinc-200 mt-0.5">{productData.shipping.transitTime}</div>
            </div>
          </div>

          {/* Required Documents */}
          <div>
            <h4 className="font-bold text-white mb-2 text-xs uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <i data-lucide="file-text" className="w-4 h-4 text-emerald-400"></i>
              <span>1. Required Documentation Package</span>
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-xs text-zinc-300">
              {productData.documents.map((d, i) => (
                <li key={i}>
                  <strong className="text-white">{d.name}</strong> — {d.purpose}
                </li>
              ))}
            </ul>
          </div>

          {/* Regulatory Highlights */}
          <div>
            <h4 className="font-bold text-white mb-2 text-xs uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <i data-lucide="shield-alert" className="w-4 h-4 text-amber-400"></i>
              <span>2. Destination Regulatory Considerations</span>
            </h4>
            <p className="text-xs text-zinc-400 mb-1">Authority: <strong className="text-white">{productData.regulations.authority}</strong></p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-zinc-300">
              {productData.regulations.keyConsiderations.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>

          {/* Shipping & Logistics */}
          <div>
            <h4 className="font-bold text-white mb-2 text-xs uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
              <i data-lucide="ship" className="w-4 h-4 text-teal-400"></i>
              <span>3. Port Logistics & Shipping</span>
            </h4>
            <p className="text-xs text-zinc-300 leading-relaxed">
              • Origin Ports: {productData.shipping.originPorts.join(", ")}<br />
              • Destination Ports: {productData.shipping.destinationPorts.join(", ")}<br />
              • Container Spec: {productData.shipping.containerOptions}
            </p>
          </div>

          {/* Legal Disclaimer */}
          <div className="pt-4 border-t border-zinc-800 text-[10px] text-zinc-500 leading-tight">
            <strong>Disclaimer:</strong> This briefing report is an automated output of TradePilot AI hackathon prototype. All data is for demonstration and baseline reference purposes. Verify requirements with official government portals (DGFT, ICEGATE, EFSA/FDA) before committing commercial capital.
          </div>
        </div>

        {/* Modal Bottom Actions with BACK Button */}
        <div className="flex items-center justify-between border-t border-zinc-800 pt-4">
          <button
            onClick={onClose}
            className="bg-obsidian-950 hover:bg-zinc-800 text-zinc-200 text-xs font-semibold px-4 py-2.5 rounded-xl transition flex items-center gap-1.5 border border-zinc-800"
          >
            <i data-lucide="arrow-left" className="w-4 h-4 text-emerald-400"></i>
            <span>← Back to Dashboard</span>
          </button>

          <button
            onClick={handlePrint}
            className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition shadow-md flex items-center gap-2"
          >
            <i data-lucide="printer" className="w-4 h-4"></i>
            <span>Print Report</span>
          </button>
        </div>
      </div>
    </div>
  );
};
