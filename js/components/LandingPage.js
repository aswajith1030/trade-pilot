// TradePilot AI — Landing Page Component (Seamless Obsidian Dark Theme)

window.LandingPage = function({ onStartJourney, onSelectDemoPreset, onGoToLogin, user }) {
  const [inputText, setInputText] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      onStartJourney(inputText);
    } else {
      onStartJourney("I want to export turmeric from India to Germany.");
    }
  };

  const samplePrompts = [
    "Export turmeric from India to Germany",
    "Export coffee from India to Italy",
    "Export rice from India to UAE",
    "Export tea from India to UK"
  ];

  const productList = [
    { id: "turmeric", name: "Turmeric", icon: "🌱", hs: "0910.30", desc: "Spices & High-Curcumin Extracts" },
    { id: "coffee", name: "Coffee", icon: "☕", hs: "0901.11", desc: "Robusta & Arabica Green Beans" },
    { id: "tea", name: "Tea", icon: "🍵", hs: "0902.40", desc: "Assam Orthodox & Darjeeling GI" },
    { id: "rice", name: "Rice", icon: "🌾", hs: "1006.30", desc: "1121 & Pusa Basmati Grain" },
    { id: "spices", name: "Spices", icon: "🌶️", hs: "0910.99", desc: "Cardamom, Pepper, Cumin & Blends" },
    { id: "cotton", name: "Cotton", icon: "🧶", hs: "5201.00", desc: "Shankar-6 Long Staple Bales" },
    { id: "handicrafts", name: "Handicrafts", icon: "🎨", hs: "9703.00", desc: "Artisanal Brass & Wooden Decor" },
    { id: "pharma", name: "Pharmaceuticals", icon: "💊", hs: "3004.90", desc: "Generic Formulations & APIs" }
  ];

  return (
    <div className="min-h-screen bg-obsidian-950 text-zinc-100 flex flex-col font-sans">
      {/* Black Navbar with Merged Logo */}
      <header className="border-b border-zinc-850 bg-black text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="assets/logo.png" 
              alt="TradePilot AI" 
              className="h-10 sm:h-12 object-contain logo-merged" 
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="hidden sm:block">
              <span className="text-lg font-bold tracking-tight text-white">TradePilot <span className="text-emerald-400">AI</span></span>
              <span className="ml-2 text-[10px] bg-zinc-900 text-zinc-300 px-2 py-0.5 rounded border border-zinc-800 font-mono">Enterprise SaaS</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            {user ? (
              <div className="flex items-center space-x-2 text-xs bg-zinc-900 px-3 py-1.5 rounded-xl border border-zinc-800">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-zinc-200 font-semibold">{user.username}</span>
              </div>
            ) : (
              <button 
                onClick={onGoToLogin}
                className="bg-zinc-900 hover:bg-zinc-850 text-zinc-200 px-3.5 py-1.5 rounded-xl text-xs font-semibold border border-zinc-800 transition"
              >
                Sign In
              </button>
            )}

            <button 
              onClick={() => onStartJourney("I want to export turmeric from India to Germany.")}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition shadow-md shadow-emerald-900/30 flex items-center gap-1.5"
            >
              <span>Launch Platform</span>
              <i data-lucide="arrow-right" className="w-4 h-4 text-emerald-200"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        {/* Main Logo Display Merged into Background */}
        <div className="flex justify-center mb-6">
          <div className="bg-black p-4 rounded-3xl border border-zinc-850 inline-block shadow-2xl">
            <img 
              src="assets/logo.png" 
              alt="TradePilot AI Logo" 
              className="h-32 sm:h-40 object-contain logo-merged"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs font-semibold mb-6">
          <i data-lucide="sparkles" className="w-4 h-4 text-emerald-400"></i>
          <span>Your Intelligent Import & Export Assistant</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
          From Trade Idea to Your Next Step — <br className="hidden sm:inline" />
          <span className="text-emerald-400">
            Guided Trade Intelligence in One Place
          </span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto mb-8 leading-relaxed font-normal">
          Get structured trade journeys, product requirements, customs procedures, market opportunity analytics, and official regulatory sources in one unified enterprise platform.
        </p>

        {/* Main Prompt Input Box */}
        <div className="max-w-3xl mx-auto mb-8">
          <form onSubmit={handleSubmit} className="relative bg-zinc-900 p-2 sm:p-2.5 rounded-2xl border border-zinc-800 shadow-2xl focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20 transition">
            <div className="flex items-center pl-3">
              <i data-lucide="search" className="w-6 h-6 text-zinc-400 mr-3 shrink-0"></i>
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="I want to export turmeric from India to Germany."
                className="w-full bg-transparent border-none text-white text-base sm:text-lg focus:outline-none placeholder-zinc-500 py-2 font-medium"
              />
              <button
                type="submit"
                className="ml-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-5 sm:px-6 py-3 rounded-xl transition shadow-lg shadow-emerald-900/30 flex items-center gap-2 shrink-0 text-sm sm:text-base"
              >
                <span>Start Trade Journey</span>
                <i data-lucide="arrow-right" className="w-5 h-5 text-emerald-200"></i>
              </button>
            </div>
          </form>

          {/* Sample Prompt Chips */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-zinc-400 font-medium mr-1">Try example:</span>
            {samplePrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setInputText(prompt);
                  onStartJourney(prompt);
                }}
                className="text-xs bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white px-3 py-1.5 rounded-lg border border-zinc-800 transition flex items-center gap-1.5 shadow-sm"
              >
                <i data-lucide="corner-down-right" className="w-3 h-3 text-emerald-400"></i>
                <span>{prompt}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Multi-Product Showcase Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-1">Supported Trade Commodity Categories</h2>
          <p className="text-zinc-400 text-sm">Select any product to instantly simulate a tailored international trade journey</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {productList.map((p) => (
            <div
              key={p.id}
              onClick={() => onSelectDemoPreset(p.id)}
              className="bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-emerald-500/50 rounded-2xl p-4 cursor-pointer transition group shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">{p.icon}</span>
                <span className="text-[10px] font-mono bg-zinc-950 text-zinc-400 px-2 py-0.5 rounded border border-zinc-800">HS {p.hs}</span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition flex items-center gap-1.5">
                <span>{p.name}</span>
              </h3>
              <p className="text-xs text-zinc-400 mt-1 line-clamp-1">{p.desc}</p>
              <div className="mt-3 flex items-center text-xs font-semibold text-emerald-400 group-hover:translate-x-1 transition">
                <span>Explore Journey →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Features Grid */}
      <section className="bg-zinc-900 border-t border-zinc-800 py-16 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-2">Why MSMEs & Exporters Choose TradePilot AI</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-sm">Consolidating fragmented government portals, tariff schedules, and port guidelines into one intelligent AI roadmap.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-obsidian-950 p-6 rounded-2xl border border-zinc-800">
              <div className="w-10 h-10 bg-zinc-900 text-white rounded-xl flex items-center justify-center mb-4 border border-zinc-800 shadow-sm">
                <i data-lucide="bot" className="w-5 h-5 text-emerald-400"></i>
              </div>
              <h3 className="text-base font-bold text-white mb-1">AI Trade Assistant</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">Contextual international trade guidance answered specifically for your commodity and target country pair.</p>
            </div>

            <div className="bg-obsidian-950 p-6 rounded-2xl border border-zinc-800">
              <div className="w-10 h-10 bg-zinc-900 text-white rounded-xl flex items-center justify-center mb-4 border border-zinc-800 shadow-sm">
                <i data-lucide="bar-chart-3" className="w-5 h-5 text-amber-400"></i>
              </div>
              <h3 className="text-base font-bold text-white mb-1">Market Intelligence</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">AI opportunity scores, logistics feasibility rating, pricing realizations, and target market comparisons.</p>
            </div>

            <div className="bg-obsidian-950 p-6 rounded-2xl border border-zinc-800">
              <div className="w-10 h-10 bg-zinc-900 text-white rounded-xl flex items-center justify-center mb-4 border border-zinc-800 shadow-sm">
                <i data-lucide="shield-check" className="w-5 h-5 text-emerald-400"></i>
              </div>
              <h3 className="text-base font-bold text-white mb-1">Trust & Official Sources</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">Direct trace-back verification links to DGFT, ICEGATE, APEDA, Spices Board, and international agencies.</p>
            </div>

            <div className="bg-obsidian-950 p-6 rounded-2xl border border-zinc-800">
              <div className="w-10 h-10 bg-zinc-900 text-white rounded-xl flex items-center justify-center mb-4 border border-zinc-800 shadow-sm">
                <i data-lucide="ship" className="w-5 h-5 text-teal-400"></i>
              </div>
              <h3 className="text-base font-bold text-white mb-1">Ports & Logistics</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">Origin and destination port recommendations, container packing specs, and transit timelines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black py-6 px-4 text-center text-xs text-zinc-500">
        <p>TradePilot AI — Hackathon Prototype Demonstration System. All data shown is indicative prototype information.</p>
      </footer>
    </div>
  );
};
