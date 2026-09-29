// TradePilot AI — Trade Journey View Component (Obsidian Dark Theme)

window.TradeJourneyView = function({ activeJourney, productData, onNavigate }) {
  const { productName, origin, destination } = activeJourney;
  const [expandedStep, setExpandedStep] = React.useState(0);
  
  const originFlag = window.COUNTRY_FLAGS[origin] || window.COUNTRY_FLAGS["India"];
  const destFlag = window.COUNTRY_FLAGS[destination] || window.COUNTRY_FLAGS["Germany"];

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-1">
            <i data-lucide="git-commit" className="w-4 h-4"></i>
            <span>Interactive Execution Roadmap</span>
          </div>
          
          <h1 className="text-2xl font-extrabold text-white flex items-center gap-2 flex-wrap">
            <span>{productData.logoIcon}</span>
            <span>Trade Journey: {productName} |</span>
            <span className="flex items-center gap-1.5 text-zinc-300 font-semibold text-xl">
              <img src={originFlag.flagUrl} alt={origin} className="w-5 h-3.5 object-cover rounded shadow-xs" />
              <span>{origin}</span>
            </span>
            <span className="text-emerald-400 font-bold">→</span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold text-xl">
              <img src={destFlag.flagUrl} alt={destination} className="w-5 h-3.5 object-cover rounded shadow-xs" />
              <span>{destination}</span>
            </span>
          </h1>
          
          <p className="text-zinc-400 text-sm mt-1">
            Follow the 7-step guided export workflow from technical product specs to port logistics and destination compliance.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs bg-emerald-950 text-emerald-300 border border-emerald-800 px-3 py-1.5 rounded-xl font-semibold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            7 Steps Active
          </span>
        </div>
      </div>

      {/* Stepper Progress Bar */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-md">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-6">
          {productData.journeySteps.map((step, idx) => {
            const isSelected = expandedStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setExpandedStep(idx)}
                className={`p-3 rounded-xl border text-left transition ${
                  isSelected
                    ? "bg-emerald-600 border-emerald-500 text-white shadow-md shadow-emerald-900/30"
                    : "bg-obsidian-950 hover:bg-zinc-850 border-zinc-800 text-zinc-300"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    isSelected ? "bg-emerald-800 text-white" : "bg-zinc-800 text-emerald-400"
                  }`}>
                    {step.code}
                  </span>
                  <i data-lucide="check-circle" className={`w-3.5 h-3.5 ${isSelected ? "text-white" : "text-emerald-400"}`}></i>
                </div>
                <div className="text-xs font-bold truncate">{step.title}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detailed View */}
        {expandedStep !== null && (
          <div className="bg-obsidian-950 border border-zinc-800 rounded-2xl p-6 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
              <div>
                <span className="text-xs font-mono font-bold text-white bg-emerald-700 px-2.5 py-1 rounded-lg">
                  STEP {productData.journeySteps[expandedStep].code}
                </span>
                <h2 className="text-xl font-bold text-white mt-2">
                  {productData.journeySteps[expandedStep].title}
                </h2>
                <p className="text-zinc-400 text-sm mt-0.5">
                  {productData.journeySteps[expandedStep].description}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {expandedStep > 0 && (
                  <button
                    onClick={() => setExpandedStep(expandedStep - 1)}
                    className="bg-zinc-900 hover:bg-zinc-850 text-zinc-300 text-xs font-semibold px-3 py-2 rounded-xl border border-zinc-800"
                  >
                    ← Previous
                  </button>
                )}
                {expandedStep < productData.journeySteps.length - 1 && (
                  <button
                    onClick={() => setExpandedStep(expandedStep + 1)}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-md flex items-center gap-1"
                  >
                    <span>Next Step</span>
                    <i data-lucide="arrow-right" className="w-3.5 h-3.5 text-emerald-200"></i>
                  </button>
                )}
              </div>
            </div>

            {/* Checklist of Details */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Step Action Items & Guidelines</h3>
              {productData.journeySteps[expandedStep].details.map((detail, dIdx) => (
                <div key={dIdx} className="bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 flex items-start space-x-3 shadow-xs">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {dIdx + 1}
                  </div>
                  <div className="text-sm text-zinc-200 leading-relaxed font-medium">
                    {detail}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Context Action Footer */}
            <div className="mt-6 pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="text-zinc-400 flex items-center gap-1.5">
                <i data-lucide="shield-check" className="w-4 h-4 text-emerald-400"></i>
                <span>Official standards alignment verified via {productData.epc}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onNavigate("assistant")}
                  className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
                >
                  <i data-lucide="bot" className="w-3.5 h-3.5"></i>
                  <span>Ask AI Assistant About Step {productData.journeySteps[expandedStep].code}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
