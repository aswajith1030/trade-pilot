// TradePilot AI — Enterprise Login Component (Seamless Obsidian Theme)

window.LoginPage = function({ onLoginSuccess }) {
  const [username, setUsername] = React.useState("exporter");
  const [password, setPassword] = React.useState("tradepilot2026");
  const [rememberMe, setRememberMe] = React.useState(true);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!username.trim() || !password.trim()) {
      setErrorMsg("Please enter both username and password.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess({
        username: username.trim(),
        role: "Verified Exporter / MSME",
        company: "Global Trade Pilot Enterprises",
        iecCode: "0319582910"
      });
    }, 600);
  };

  const handleDemoQuickFill = () => {
    setUsername("exporter");
    setPassword("tradepilot2026");
    setErrorMsg("");
  };

  return (
    <div className="min-h-screen bg-obsidian-950 text-zinc-100 flex flex-col justify-center items-center p-4 font-sans relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-900/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-md bg-obsidian-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl relative z-10 animate-fadeIn">
        {/* Seamless Merged Logo Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-3 bg-black py-3 rounded-2xl border border-zinc-850">
            <img 
              src="assets/logo.png" 
              alt="TradePilot AI Logo" 
              className="h-24 sm:h-28 object-contain logo-merged"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
              }}
            />
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">TradePilot <span className="text-emerald-400">AI</span></h1>
          <p className="text-xs text-zinc-400 mt-1">Your Intelligent Import & Export Assistant</p>
          <div className="inline-block mt-3 bg-obsidian-800 text-emerald-400 text-[11px] font-mono px-3.5 py-1 rounded-full border border-zinc-700">
            Enterprise Portal Access
          </div>
        </div>

        {/* Error Alert */}
        {errorMsg && (
          <div className="mb-4 bg-rose-950/80 border border-rose-800 text-rose-200 text-xs p-3 rounded-xl flex items-center gap-2">
            <i data-lucide="alert-circle" className="w-4 h-4 text-rose-400 shrink-0"></i>
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
              Username / IEC Code
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                <i data-lucide="user" className="w-4 h-4"></i>
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full bg-obsidian-950 border border-zinc-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 placeholder-zinc-600 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                <i data-lucide="lock" className="w-4 h-4"></i>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-obsidian-950 border border-zinc-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 placeholder-zinc-600 transition"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-zinc-400 pt-1">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded border-zinc-800 bg-obsidian-950 text-emerald-600 focus:ring-emerald-500"
              />
              <span>Remember session</span>
            </label>
            <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-emerald-400 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl transition shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2 text-sm mt-2"
          >
            {isLoading ? (
              <>
                <i data-lucide="loader-2" className="w-4 h-4 animate-spin"></i>
                <span>Authenticating...</span>
              </>
            ) : (
              <>
                <span>Sign In to TradePilot AI</span>
                <i data-lucide="arrow-right" className="w-4 h-4 text-emerald-200"></i>
              </>
            )}
          </button>
        </form>

        {/* Demo Credentials Quick Button */}
        <div className="mt-6 pt-4 border-t border-zinc-800/80 text-center">
          <div className="text-[11px] text-zinc-500 mb-2">Hackathon Presenter Fast Login</div>
          <button
            type="button"
            onClick={handleDemoQuickFill}
            className="w-full bg-obsidian-800 hover:bg-zinc-800 text-emerald-400 hover:text-emerald-300 text-xs font-semibold py-2 px-3 rounded-xl border border-zinc-700 transition flex items-center justify-center gap-1.5"
          >
            <i data-lucide="zap" className="w-3.5 h-3.5 text-amber-400"></i>
            <span>Fill Demo Credentials (exporter / tradepilot2026)</span>
          </button>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-zinc-600">
        TradePilot AI Enterprise SaaS Platform • Secure SSL Encrypted Session
      </div>
    </div>
  );
};
