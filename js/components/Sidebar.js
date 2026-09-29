// TradePilot AI — Sidebar Component (Seamless Obsidian Dark Theme)

window.Sidebar = function({ activeTab, setActiveTab, onSelectDemoPreset, currentProductKey, user, onLogout }) {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "layout-dashboard" },
    { id: "journey", label: "Trade Journey", icon: "git-commit" },
    { id: "assistant", label: "AI Trade Assistant", icon: "bot" },
    { id: "intelligence", label: "Market Intelligence", icon: "bar-chart-3" },
    { id: "documents", label: "Documents", icon: "file-text" },
    { id: "regulations", label: "Regulations", icon: "shield-alert" },
    { id: "shipping", label: "Shipping & Ports", icon: "ship" },
    { id: "sources", label: "Official Sources", icon: "external-link" },
    { id: "trust", label: "Trust & Verification", icon: "check-circle-2" },
    { id: "nextsteps", label: "Next Steps", icon: "check-square" }
  ];

  const presets = [
    { key: "turmeric", label: "Turmeric → Germany" },
    { key: "coffee", label: "Coffee → Italy" },
    { key: "rice", label: "Rice → UAE" },
    { key: "tea", label: "Tea → UK" }
  ];

  return (
    <aside className="w-64 bg-obsidian-950 text-zinc-100 border-r border-zinc-850 flex flex-col justify-between h-screen sticky top-0 z-30 shrink-0 select-none shadow-2xl">
      <div>
        {/* Sidebar Brand Header with Merged Logo Image */}
        <div className="p-4 border-b border-zinc-850 bg-black flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="assets/logo.png" 
              alt="TradePilot AI Logo" 
              className="h-10 w-auto object-contain logo-merged"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div>
              <h1 className="text-base font-extrabold text-white tracking-tight leading-none">
                TradePilot <span className="text-emerald-400">AI</span>
              </h1>
              <span className="text-[10px] text-zinc-400 font-mono">Enterprise SaaS v1.0</span>
            </div>
          </div>
        </div>

        {/* User Session Badge */}
        {user && (
          <div className="px-3 py-2 bg-zinc-900 border-b border-zinc-850 flex items-center justify-between">
            <div className="flex items-center space-x-2 truncate">
              <div className="w-6 h-6 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center text-xs font-bold shrink-0">
                {user.username.charAt(0).toUpperCase()}
              </div>
              <div className="truncate">
                <div className="text-xs font-semibold text-zinc-200 truncate">{user.username}</div>
                <div className="text-[9px] text-zinc-400 font-mono truncate">{user.role}</div>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="text-zinc-400 hover:text-rose-400 p-1 transition"
              title="Sign Out"
            >
              <i data-lucide="log-out" className="w-3.5 h-3.5"></i>
            </button>
          </div>
        )}

        {/* Navigation Section */}
        <div className="p-3">
          <div className="px-3 py-1 text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">
            Navigation Menu
          </div>
          <nav className="space-y-1 mt-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition ${
                    isActive
                      ? "bg-emerald-600 text-white font-semibold shadow-md shadow-emerald-900/30"
                      : "text-zinc-300 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  <i data-lucide={item.icon} className={`w-4 h-4 ${isActive ? "text-white" : "text-zinc-400"}`}></i>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Sidebar Footer: Prototype Mode & Quick Switcher */}
      <div className="p-3 border-t border-zinc-850 bg-black space-y-3">
        {/* Prototype Status */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-2.5 text-center">
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-amber-400 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            PROTOTYPE MODE
          </div>
          <p className="text-[10px] text-zinc-400">Indicative Demo Data Engine</p>
        </div>

        {/* Quick Demo Switcher */}
        <div>
          <div className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-1.5 px-1">
            ⚡ Quick Demo Switcher
          </div>
          <div className="grid grid-cols-1 gap-1">
            {presets.map((p) => (
              <button
                key={p.key}
                onClick={() => onSelectDemoPreset(p.key)}
                className={`text-[11px] text-left px-2.5 py-1.5 rounded-lg transition border ${
                  currentProductKey === p.key
                    ? "bg-emerald-950 border-emerald-600 text-emerald-300 font-semibold"
                    : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-850 hover:text-white"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};
