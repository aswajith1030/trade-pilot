// TradePilot AI — Specialized AI Assistant Component (Obsidian Dark Theme)

window.AiAssistantView = function({ activeJourney, productData }) {
  const { productName, origin, destination, tradeType } = activeJourney;

  const initialMessages = [
    {
      sender: "ai",
      timestamp: "Just now",
      text: `Understood. I identified your trade requirement:

Product: ${productName} (HS Code: ${productData.hsCode})
Origin: ${origin}
Destination: ${destination}
Trade Type: ${tradeType}

I can guide you through the major steps of this trade journey, regulatory mandates, customs clearance, and logistics for ${productName}. Let's start with your specific questions.`
    }
  ];

  const [messages, setMessages] = React.useState(initialMessages);
  const [inputValue, setInputValue] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const chatBottomRef = React.useRef(null);

  React.useEffect(() => {
    setMessages([
      {
        sender: "ai",
        timestamp: "Just now",
        text: `Understood. I identified your trade requirement:

Product: ${productName} (HS Code: ${productData.hsCode})
Origin: ${origin}
Destination: ${destination}
Trade Type: ${tradeType}

I can guide you through the major steps of this trade journey, regulatory mandates, customs clearance, and logistics for ${productName}. What would you like to know?`
      }
    ]);
  }, [productName, origin, destination, tradeType]);

  React.useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendQuestion = (questionText) => {
    if (!questionText.trim()) return;

    const userMsg = {
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: questionText
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const replyText = generateAiResponse(questionText, productName, origin, destination, productData);
      const aiMsg = {
        sender: "ai",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: replyText
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  const generateAiResponse = (q, prodName, orig, dest, pData) => {
    const query = q.toLowerCase();

    if (query.includes("document") || query.includes("doc")) {
      return `For exporting ${prodName} from ${orig} to ${dest}, the essential document package includes:

1. Commercial Invoice & Packing List (HS Code ${pData.hsCode})
2. Certificate of Origin (Issued by ${pData.epc} or Chamber of Commerce)
3. ${pData.documents[1]?.name || 'Phytosanitary Certificate'}
4. ${pData.documents[2]?.name || 'Quality Inspection Report'}
5. ICEGATE Shipping Bill filed under Duty Drawback / RoDTEP scheme

You can inspect full document specifications in the Documents tab.`;
    }

    if (query.includes("custom") || query.includes("clearance") || query.includes("icegate")) {
      return `Customs clearance for ${prodName} involves:

1. ICEGATE Shipping Bill filing under IEC Code.
2. Mandatory quality verification by ${pData.epc}.
3. Container stuffing & customs seal at Indian loading port (${pData.shipping.originPorts[0]}).
4. Issuance of Let Export Order (LEO) by Customs Officer.
5. Filing the Bill of Lading with shipping line.`;
    }

    if (query.includes("regulation") || query.includes("compliance") || query.includes("rule")) {
      return `Key regulatory considerations for ${dest} import of ${prodName}:

• Authority: ${pData.regulations.authority}
• Quality Mandates: ${pData.regulations.keyConsiderations.join('; ')}

Compliance Warning: Always verify current pesticide/chemical MRL limits with official sources before finalizing contracts.`;
    }

    if (query.includes("port") || query.includes("shipping") || query.includes("logistics")) {
      return `Shipping recommendations for ${prodName}:

• Recommended Origin Port: ${pData.shipping.originPorts[0]}
• Recommended Destination Port: ${pData.shipping.destinationPorts[0]}
• Estimated Transit Time: ${pData.shipping.transitTime}
• Container Specification: ${pData.shipping.containerOptions}
• Freight Complexity: ${pData.shipping.logisticsComplexity}`;
    }

    if (query.includes("next step") || query.includes("do next") || query.includes("start")) {
      return `Here are your immediate recommended next steps for ${prodName}:

1. Verify IEC registration and RCMC with ${pData.epc}.
2. Request pre-shipment lab sample testing for pesticide/quality parameters.
3. Finalize Proforma Invoice terms (LC at sight or 30% advance + 70% BL).
4. Book shipping container via ${pData.shipping.originPorts[0]}.
5. Prepare draft Commercial Invoice & Packing List.`;
    }

    if (query.includes("market") || query.includes("country") || query.includes("better")) {
      const topMkt = pData.keyMarkets[0];
      return `Based on TradePilot AI analytics, top target markets for ${prodName} are:

1. ${topMkt.country} (Opportunity Score: ${topMkt.opportunityScore}/100) — CIF Price: ${topMkt.indicativePrice}
2. ${pData.keyMarkets[1]?.country} (Opportunity Score: ${pData.keyMarkets[1]?.opportunityScore}/100)
3. ${pData.keyMarkets[2]?.country} (Opportunity Score: ${pData.keyMarkets[2]?.opportunityScore}/100)

${topMkt.country} ranks highest due to ${topMkt.whyMarket.demandFactor}`;
    }

    return `Regarding ${q} for ${prodName} (${orig} → ${dest}):

${pData.description}

Key Export Factors:
• HS Code: ${pData.hsCode}
• Regulatory Authority: ${pData.regulations.authority}
• Primary Port: ${pData.shipping.originPorts[0]}

Would you like detailed specifications on documents, destination MRL limits, or shipping timelines?`;
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* AI Assistant Header Card */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-md flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-11 h-11 rounded-2xl bg-emerald-600 flex items-center justify-center text-white font-bold shadow-md">
            <i data-lucide="bot" className="w-6 h-6"></i>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">TradePilot AI Assistant</h1>
            <p className="text-zinc-400 text-xs mt-0.5">Your intelligent international trade guide</p>
          </div>
        </div>

        <div className="hidden sm:flex items-center space-x-2 bg-obsidian-950 px-3.5 py-1.5 rounded-xl border border-zinc-800 text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="text-zinc-200 font-semibold">{productName} Context Loaded</span>
        </div>
      </div>

      {/* Chat Thread Panel */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl shadow-xl flex flex-col h-[520px]">
        {/* Chat Messages */}
        <div className="flex-1 p-6 overflow-y-auto custom-scrollbar space-y-4 bg-obsidian-950/60">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-2xl rounded-2xl p-4 text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-zinc-900 border border-zinc-800 text-zinc-200 shadow-sm'
                }`}
              >
                {msg.sender === 'ai' && (
                  <div className="flex items-center space-x-2 mb-2 pb-2 border-b border-zinc-800 text-xs font-semibold text-emerald-400">
                    <i data-lucide="compass" className="w-4 h-4"></i>
                    <span>TradePilot AI Guide</span>
                  </div>
                )}
                <div className="whitespace-pre-line">{msg.text}</div>
                <div className={`text-[10px] mt-2 ${msg.sender === 'user' ? 'text-emerald-100 text-right' : 'text-zinc-500'}`}>
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-2xl px-4 py-3 text-xs flex items-center gap-2 shadow-sm">
                <i data-lucide="loader-2" className="w-4 h-4 animate-spin text-emerald-400"></i>
                <span>TradePilot AI is analyzing trade data...</span>
              </div>
            </div>
          )}

          <div ref={chatBottomRef} />
        </div>

        {/* Suggested Question Chips */}
        <div className="px-6 py-3 border-t border-zinc-800 bg-obsidian-950 flex items-center gap-2 overflow-x-auto custom-scrollbar">
          <span className="text-[11px] font-semibold text-zinc-400 whitespace-nowrap">Suggested Questions:</span>
          {window.AI_SUGGESTED_QUESTIONS.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendQuestion(q)}
              className="text-xs bg-zinc-900 hover:bg-zinc-850 text-zinc-300 hover:text-white px-3 py-1.5 rounded-xl border border-zinc-800 transition whitespace-nowrap shadow-xs"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Box */}
        <div className="p-4 border-t border-zinc-800 bg-zinc-900 rounded-b-3xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendQuestion(inputValue);
            }}
            className="flex items-center space-x-3"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={`Ask TradePilot AI about ${productName} docs, customs, or regulations...`}
              className="flex-1 bg-obsidian-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 placeholder-zinc-500 font-medium"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-semibold px-5 py-3 rounded-xl transition shadow-md flex items-center gap-2 text-sm"
            >
              <span>Send</span>
              <i data-lucide="send" className="w-4 h-4 text-emerald-100"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
