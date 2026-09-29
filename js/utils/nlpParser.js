// TradePilot AI — Natural Language Query Parser

window.parseTradePrompt = function(inputString) {
  if (!inputString || typeof inputString !== 'string') {
    return {
      product: "turmeric",
      productName: "Turmeric",
      origin: "India",
      destination: "Germany",
      tradeType: "Export"
    };
  }

  const str = inputString.trim().toLowerCase();
  
  // 1. Identify Trade Type
  let tradeType = "Export";
  if (str.includes("import") || str.includes("bringing in") || str.includes("buy from")) {
    tradeType = "Import";
  }

  // 2. Identify Product
  let matchedProduct = "turmeric"; // default fallback
  const productsMap = {
    turmeric: ["turmeric", "haldi", "curcuma", "curcumin"],
    coffee: ["coffee", "arabica", "robusta", "espresso"],
    tea: ["tea", "chai", "darjeeling", "assam", "green tea", "black tea"],
    rice: ["rice", "basmati", "chawal", "pusa", "1121"],
    spices: ["spices", "spice", "masala", "cumin", "pepper", "cardamom", "chili", "coriander"],
    cotton: ["cotton", "kapas", "yarn", "shankar"],
    handicrafts: ["handicraft", "handicrafts", "artware", "brassware", "wood carving", "crafts", "decor"],
    pharma: ["pharma", "pharmaceutical", "pharmaceuticals", "medicines", "drugs", "generic", "formulation", "tablets"]
  };

  for (const [key, keywords] of Object.entries(productsMap)) {
    if (keywords.some(kw => str.includes(kw))) {
      matchedProduct = key;
      break;
    }
  }

  // 3. Identify Origin Country
  let origin = "India"; // default origin for Indian exporter context
  const originMatches = str.match(/(?:from|originating in|out of)\s+([a-z\s]+?)(?=\s+(?:to|for|in|into)|$)/i);
  if (originMatches && originMatches[1]) {
    origin = capitalizeWords(originMatches[1].trim());
  }

  // 4. Identify Destination Country
  let destination = "Germany"; // default destination
  const destMatches = str.match(/(?:to|into|destined for|bound for)\s+([a-z\s]+?)(?=\s+|$)/i);
  if (destMatches && destMatches[1]) {
    destination = capitalizeWords(destMatches[1].trim());
  } else {
    // If destination not found in regex, check against known country names
    const knownCountries = {
      germany: "Germany",
      italy: "Italy",
      uae: "UAE",
      "dubai": "UAE",
      uk: "UK",
      "united kingdom": "UK",
      usa: "USA",
      "united states": "USA",
      america: "USA",
      saudi: "Saudi Arabia",
      "saudi arabia": "Saudi Arabia",
      bangladesh: "Bangladesh",
      vietnam: "Vietnam",
      turkey: "Turkey",
      china: "China",
      france: "France",
      japan: "Japan"
    };

    for (const [kw, cName] of Object.entries(knownCountries)) {
      if (str.includes(kw)) {
        destination = cName;
        break;
      }
    }
  }

  // Map matched product to clean display name
  const prodObj = window.TRADE_PRODUCTS[matchedProduct] || window.TRADE_PRODUCTS["turmeric"];

  return {
    productId: prodObj.id,
    productName: prodObj.name,
    origin: origin || "India",
    destination: destination || prodObj.defaultDestination,
    tradeType: tradeType
  };
};

function capitalizeWords(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
