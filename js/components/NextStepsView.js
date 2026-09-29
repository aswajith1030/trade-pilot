// TradePilot AI — Next Steps Component (Obsidian Dark Theme)

window.NextStepsView = function({ activeJourney, productData, onChangeTradeClick, onOpenReportModal }) {
  const { productName, destination } = activeJourney;

  const defaultTasks = [
    { id: 1, title: `Review product-specific requirements for ${productName} (HS ${productData.hsCode})`, done: true },
    { id: 2, title: `Verify required documentation package with ${productData.epc}`, done: true },
    { id: 3, title: `Check Indian customs ICEGATE clearance requirements at ${productData.shipping.originPorts[0]}`, done: false },
    { id: 4, title: `Review destination regulations for ${destination} (${productData.regulations.authority})`, done: false },
    { id: 5, title: `Compare ocean shipping options and container specifications`, done: false },
    { id: 6, title: `Explore potential target markets and opportunity scores`, done: false },
    { id: 7, title: `Verify important trade information using official government sources`, done: false }
  ];

  const [tasks, setTasks] = React.useState(defaultTasks);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const completedCount = tasks.filter(t => t.done).length;

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-1">
            <i data-lucide="check-square" className="w-4 h-4"></i>
            <span>Actionable Execution Checklist</span>
          </div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <span>{productData.logoIcon}</span>
            <span>Your Next Steps: {productName} Export</span>
          </h1>
          <p className="text-zinc-400 text-sm mt-1">
            Complete actionable export readiness steps before dispatching your consignment to {destination}.
          </p>
        </div>

        <div className="bg-obsidian-950 border border-zinc-800 px-4 py-2 rounded-xl text-right">
          <div className="text-[10px] text-zinc-500 font-mono">PROGRESS</div>
          <div className="text-sm font-bold text-emerald-400">{completedCount} of {tasks.length} Completed</div>
        </div>
      </div>

      {/* Interactive Checklist Card */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-md space-y-4">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <h2 className="text-base font-bold text-white">Export Readiness Checklist</h2>
          <span className="text-xs text-zinc-400">Click to toggle item completion</span>
        </div>

        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className={`p-4 rounded-2xl border cursor-pointer transition flex items-center justify-between gap-4 ${
                task.done
                  ? "bg-emerald-950/40 border-emerald-800/80 text-emerald-200 font-medium"
                  : "bg-obsidian-950 border-zinc-800 text-zinc-200 hover:border-zinc-700"
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center border text-xs font-bold ${
                  task.done ? "bg-emerald-600 border-emerald-500 text-white" : "bg-zinc-850 border-zinc-750 text-zinc-400"
                }`}>
                  {task.done ? "✓" : task.id}
                </div>
                <span className={`text-sm ${task.done ? "line-through opacity-80" : "font-medium"}`}>{task.title}</span>
              </div>

              <span className={`text-xs px-2.5 py-1 rounded-lg font-semibold shrink-0 ${
                task.done ? "bg-emerald-950 text-emerald-300 border border-emerald-800" : "bg-zinc-800 text-zinc-400"
              }`}>
                {task.done ? "Ready" : "Pending"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="bg-black border border-zinc-800 rounded-3xl p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h3 className="text-lg font-bold text-white">Ready for another product or destination?</h3>
          <p className="text-xs text-zinc-400 mt-0.5">Explore multi-product trade journeys dynamically across 8 commodities.</p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenReportModal}
            className="bg-zinc-900 hover:bg-zinc-850 text-white text-xs font-semibold px-4 py-2.5 rounded-xl border border-zinc-800 transition flex items-center gap-1.5 shadow-sm"
          >
            <i data-lucide="download" className="w-4 h-4 text-emerald-400"></i>
            <span>Download Report</span>
          </button>

          <button
            onClick={onChangeTradeClick}
            className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition shadow-md flex items-center gap-2"
          >
            <span>Start New Trade Journey</span>
            <i data-lucide="arrow-right" className="w-4 h-4"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
