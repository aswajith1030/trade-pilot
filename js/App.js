// TradePilot AI — Main Application Orchestrator (With Authentication & Login Page)

function App() {
  // Authentication State
  const [user, setUser] = React.useState({
    username: "exporter",
    role: "Verified Exporter / MSME",
    company: "Global Trade Pilot Enterprises",
    iecCode: "0319582910"
  });

  const [view, setView] = React.useState("landing"); // 'login' | 'landing' | 'dashboard'
  const [activeTab, setActiveTab] = React.useState("dashboard");
  const [activeJourney, setActiveJourney] = React.useState({
    productId: "turmeric",
    productName: "Turmeric",
    origin: "India",
    destination: "Germany",
    tradeType: "Export"
  });
  const [isChangeModalOpen, setIsChangeModalOpen] = React.useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = React.useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = React.useState(false);

  // Initialize Lucide icons on DOM updates
  React.useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setView("dashboard");
    setActiveTab("dashboard");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setUser(null);
    setView("login");
  };

  // Handle starting journey from natural language prompt string
  const handleStartJourney = (promptText) => {
    const parsed = window.parseTradePrompt(promptText);
    setActiveJourney(parsed);
    setView("dashboard");
    setActiveTab("dashboard");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle direct product preset click
  const handleSelectDemoPreset = (productId) => {
    const prodObj = window.TRADE_PRODUCTS[productId] || window.TRADE_PRODUCTS["turmeric"];
    setActiveJourney({
      productId: prodObj.id,
      productName: prodObj.name,
      origin: prodObj.defaultOrigin || "India",
      destination: prodObj.defaultDestination || "Germany",
      tradeType: "Export"
    });
    setView("dashboard");
    setActiveTab("dashboard");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const productData = window.TRADE_PRODUCTS[activeJourney.productId] || window.TRADE_PRODUCTS["turmeric"];

  if (view === "login") {
    return (
      <window.LoginPage
        onLoginSuccess={handleLoginSuccess}
      />
    );
  }

  if (view === "landing") {
    return (
      <window.LandingPage
        onStartJourney={handleStartJourney}
        onSelectDemoPreset={handleSelectDemoPreset}
        onGoToLogin={() => setView("login")}
        user={user}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-zinc-900 font-sans flex flex-col lg:flex-row">
      {/* Sidebar for Desktop */}
      <div className="hidden lg:block">
        <window.Sidebar
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onSelectDemoPreset={handleSelectDemoPreset}
          currentProductKey={activeJourney.productId}
          user={user}
          onLogout={handleLogout}
        />
      </div>

      {/* Mobile Drawer Sidebar */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div 
            className="fixed inset-0 bg-zinc-950/80 backdrop-blur-sm"
            onClick={() => setIsMobileSidebarOpen(false)}
          ></div>
          <div className="relative z-10 w-64 bg-zinc-950 h-full">
            <window.Sidebar
              activeTab={activeTab}
              setActiveTab={(tab) => {
                setActiveTab(tab);
                setIsMobileSidebarOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectDemoPreset={(pId) => {
                handleSelectDemoPreset(pId);
                setIsMobileSidebarOpen(false);
              }}
              currentProductKey={activeJourney.productId}
              user={user}
              onLogout={handleLogout}
            />
          </div>
        </div>
      )}

      {/* Main Content Workspace Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Header */}
        <window.Header
          activeJourney={activeJourney}
          onChangeTradeClick={() => setIsChangeModalOpen(true)}
          onSelectDemoPreset={handleSelectDemoPreset}
          onToggleMobileSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          onLogout={handleLogout}
        />

        {/* Main Section Content */}
        <main className="flex-1 p-4 sm:p-6 max-w-7xl mx-auto w-full space-y-6">
          {/* Top Return to Landing Button & Session Info */}
          <div className="flex items-center justify-between text-xs text-zinc-500">
            <button
              onClick={() => setView("landing")}
              className="hover:text-zinc-950 flex items-center gap-1 transition font-medium"
            >
              <i data-lucide="arrow-left" className="w-3.5 h-3.5 text-emerald-600"></i>
              <span>Return to Landing Page</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setView("login")}
                className="text-zinc-500 hover:text-emerald-700 font-mono text-[11px]"
              >
                Switch Account ({user ? user.username : 'Guest'})
              </button>
              <span className="font-mono text-[11px] text-zinc-400">
                Module: <span className="text-emerald-700 uppercase font-semibold">{activeTab}</span>
              </span>
            </div>
          </div>

          {/* Dynamic Tab Views */}
          {activeTab === "dashboard" && (
            <window.DashboardOverview
              activeJourney={activeJourney}
              productData={productData}
              onNavigate={setActiveTab}
              onOpenReportModal={() => setIsReportModalOpen(true)}
            />
          )}

          {activeTab === "journey" && (
            <window.TradeJourneyView
              activeJourney={activeJourney}
              productData={productData}
              onNavigate={setActiveTab}
            />
          )}

          {activeTab === "assistant" && (
            <window.AiAssistantView
              activeJourney={activeJourney}
              productData={productData}
            />
          )}

          {activeTab === "intelligence" && (
            <window.MarketIntelligenceView
              activeJourney={activeJourney}
              productData={productData}
            />
          )}

          {activeTab === "documents" && (
            <window.DocumentsView
              activeJourney={activeJourney}
              productData={productData}
            />
          )}

          {activeTab === "regulations" && (
            <window.RegulationsView
              activeJourney={activeJourney}
              productData={productData}
            />
          )}

          {activeTab === "shipping" && (
            <window.ShippingView
              activeJourney={activeJourney}
              productData={productData}
            />
          )}

          {activeTab === "sources" && (
            <window.OfficialSourcesView />
          )}

          {activeTab === "trust" && (
            <window.TrustLayerView
              activeJourney={activeJourney}
              productData={productData}
            />
          )}

          {activeTab === "nextsteps" && (
            <window.NextStepsView
              activeJourney={activeJourney}
              productData={productData}
              onChangeTradeClick={() => setIsChangeModalOpen(true)}
              onOpenReportModal={() => setIsReportModalOpen(true)}
            />
          )}
        </main>
      </div>

      {/* Change Trade Modal */}
      <window.TradeChangeModal
        isOpen={isChangeModalOpen}
        onClose={() => setIsChangeModalOpen(false)}
        onApplyTrade={handleStartJourney}
      />

      {/* Trade Report Download Modal */}
      <window.TradeReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        activeJourney={activeJourney}
        productData={productData}
      />
    </div>
  );
}

// Mount React Root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
