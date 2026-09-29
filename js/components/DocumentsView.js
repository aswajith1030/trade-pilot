// TradePilot AI — Required Documents Component (Obsidian Dark Theme)

window.DocumentsView = function({ activeJourney, productData }) {
  const { productName, destination } = activeJourney;
  const [expandedDoc, setExpandedDoc] = React.useState(null);
  const [verifyModalDoc, setVerifyModalDoc] = React.useState(null);

  const toggleExpand = (id) => {
    setExpandedDoc(expandedDoc === id ? null : id);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-1">
            <i data-lucide="file-text" className="w-4 h-4"></i>
            <span>Export Regulatory Documentation</span>
          </div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <span>{productData.logoIcon}</span>
            <span>Required Trade Documents: {productName}</span>
          </h1>
          <p className="text-zinc-400 text-sm mt-1">
            Mandatory customs, quality certification, and transport documents for exporting {productName} to {destination}.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-obsidian-950 px-3.5 py-2 rounded-xl border border-zinc-800 text-xs">
          <i data-lucide="file-check-2" className="w-4 h-4 text-emerald-400"></i>
          <span className="text-white font-semibold">{productData.documents.length} Specified Documents</span>
        </div>
      </div>

      {/* Document List */}
      <div className="space-y-4">
        {productData.documents.map((doc) => {
          const isExpanded = expandedDoc === doc.id;
          return (
            <div
              key={doc.id}
              className="bg-zinc-900 border border-zinc-800 hover:border-zinc-750 rounded-3xl p-6 shadow-md transition"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono bg-emerald-950 text-emerald-300 px-2.5 py-0.5 rounded-md border border-emerald-800 font-semibold">
                      {doc.category}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono">Ref: {doc.officialReference}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">{doc.name}</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">{doc.purpose}</p>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <button
                    onClick={() => toggleExpand(doc.id)}
                    className="bg-obsidian-950 hover:bg-zinc-800 text-zinc-200 text-xs font-semibold px-3 py-2 rounded-xl border border-zinc-800 transition flex items-center gap-1.5 shadow-sm"
                  >
                    <i data-lucide="help-circle" className="w-3.5 h-3.5 text-emerald-400"></i>
                    <span>Why is this needed?</span>
                    <i data-lucide={isExpanded ? "chevron-up" : "chevron-down"} className="w-3.5 h-3.5"></i>
                  </button>

                  <button
                    onClick={() => setVerifyModalDoc(doc)}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-3 py-2 rounded-xl shadow-md transition flex items-center gap-1.5"
                  >
                    <i data-lucide="shield-check" className="w-3.5 h-3.5 text-emerald-200"></i>
                    <span>Verify Official Requirement</span>
                  </button>

                  <a
                    href={doc.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white text-xs font-semibold px-3 py-2 rounded-xl border border-zinc-800 transition flex items-center gap-1"
                  >
                    <span>View Source</span>
                    <i data-lucide="external-link" className="w-3.5 h-3.5"></i>
                  </a>
                </div>
              </div>

              {/* When Required Info */}
              <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center text-xs text-zinc-400">
                <i data-lucide="clock" className="w-3.5 h-3.5 text-amber-400 mr-2 shrink-0"></i>
                <span><strong className="text-white">When required:</strong> {doc.whenRequired}</span>
              </div>

              {/* Expandable "Why is this needed?" Accordion Drawer */}
              {isExpanded && (
                <div className="mt-4 p-4 bg-obsidian-950 border border-zinc-800 rounded-2xl text-xs text-zinc-200 space-y-2 animate-fadeIn">
                  <div className="font-bold text-emerald-400 flex items-center gap-1.5 text-sm">
                    <i data-lucide="info" className="w-4 h-4"></i>
                    <span>Regulatory & Commercial Rationale</span>
                  </div>
                  <p className="leading-relaxed">{doc.whyNeeded}</p>
                  <div className="text-zinc-400 pt-1 border-t border-zinc-800 flex items-center gap-2">
                    <span className="font-mono text-[11px]">Issuing Authority:</span>
                    <span className="text-white font-semibold">{doc.officialReference}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Verification Action Modal */}
      {verifyModalDoc && (
        <div className="fixed inset-0 bg-obsidian-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl animate-fadeIn">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold">
                <i data-lucide="shield-check" className="w-5 h-5"></i>
                <span>Official Verification Guidance</span>
              </div>
              <button
                onClick={() => setVerifyModalDoc(null)}
                className="text-zinc-400 hover:text-white p-1"
              >
                <i data-lucide="x" className="w-5 h-5"></i>
              </button>
            </div>

            <div>
              <h3 className="text-base font-bold text-white">{verifyModalDoc.name}</h3>
              <p className="text-xs text-zinc-400 mt-0.5">{verifyModalDoc.officialReference}</p>
            </div>

            <div className="bg-obsidian-950 p-4 rounded-2xl border border-zinc-800 text-xs text-zinc-300 space-y-2">
              <p className="font-semibold text-white">Verification Steps for Exporters:</p>
              <ol className="list-decimal pl-4 space-y-1 text-zinc-300">
                <li>Check your ICEGATE digital signature & IEC registration status.</li>
                <li>Ensure product HS Code matches statutory customs notifications.</li>
                <li>Submit pre-shipment quality sample test to authorized labs.</li>
                <li>Verify issuing authority clearance code prior to container loading.</li>
              </ol>
            </div>

            <div className="bg-amber-950/40 border border-amber-800/80 p-3 rounded-2xl text-[11px] text-amber-200">
              <strong>Legal Note:</strong> TradePilot AI provides reference guidance. Verify current document formats with the issuing government authority.
            </div>

            <div className="flex items-center justify-end space-x-3 pt-2">
              <a
                href={verifyModalDoc.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-md"
              >
                <span>Go to Official Portal</span>
                <i data-lucide="external-link" className="w-3.5 h-3.5"></i>
              </a>
              <button
                onClick={() => setVerifyModalDoc(null)}
                className="bg-zinc-800 text-zinc-300 text-xs font-semibold px-4 py-2 rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
