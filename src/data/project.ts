export type StatusLabel = "Done" | "In Progress" | "Waiting" | "Needs Data" | "Draft" | "Risk";

export const heroCards = [
  { label: "Location", value: "International cableway terminal" },
  { label: "Format", value: "Compact Terminal Spot" },
  { label: "Status", value: "Franchise application submitted" },
  { label: "Bar zone", value: "Provided by landlord, technical details pending" },
  { label: "Market", value: "Coffee culture confirmed" },
  { label: "Next step", value: "Validate compact terminal format with Surf Coffee" },
];

export const projectStatuses: { title: string; status: StatusLabel }[] = [
  { title: "Franchise application submitted", status: "Done" },
  { title: "Response from Surf Coffee received", status: "Done" },
  { title: "Pitch deck prepared", status: "Done" },
  { title: "Local coffee market analysis", status: "In Progress" },
  { title: "Project documentation received", status: "Done" },
  { title: "Technical requirements", status: "Needs Data" },
  { title: "Rental terms", status: "Waiting" },
  { title: "Financial model", status: "Draft" },
  { title: "Surf Coffee city approval", status: "Waiting" },
];

export const locationSignals = [
  "Border route Russia — China",
  "Passenger flow concentrated in one space",
  "Waiting and transition scenario",
  "Bar zone included in landlord’s project",
  "Potential for first/last coffee of the route",
];


export const locationPlaceholders = [
  {
    title: "Page 6 floor fragment",
    label: "Text placeholder",
    caption: "Project documentation: fragment of 1st floor. Technical details require confirmation.",
  },
  {
    title: "Page 7 bar zone",
    label: "Text placeholder",
    caption: "Project documentation: bar zone. Technical details require confirmation.",
  },
];

export const surfFit = [
  ["Movement", "International route"],
  ["Freedom", "Border crossing experience"],
  ["Community spot", "Passenger meeting point"],
  ["Music & visual culture", "Photogenic terminal environment"],
  ["Merch & cups", "Travel souvenir"],
  ["Specialty coffee", "Premium alternative to standard terminal coffee"],
];

export const competitors = [
  {
    name: "Stars Coffee",
    role: "federal benchmark",
    format: "coffee shop in shopping mall, food and drinks",
    price: "cappuccino 295–355 ₽, latte 300–360 ₽, average check around 650 ₽",
    insight: "confirms demand for federal coffee brand and 300–450 ₽ drinks",
  },
  {
    name: "Чёрный лес",
    role: "strong local network",
    format: "coffee, breakfast, bakery, cozy neighborhood spots",
    price: "cappuccino 150–200 ₽, signature drinks 230–260 ₽, average check around 500 ₽",
    insight: "confirms daily coffee habit and local loyalty",
  },
  {
    name: "Мэтч",
    role: "modern local beverage brand",
    format: "matcha, iced drinks, seasonal menu, Telegram loyalty",
    price: "cappuccino 190 ₽, latte 250 ₽, seasonal drinks around 390 ₽, average check around 550 ₽",
    insight: "confirms demand for visual drinks and young audience",
  },
  {
    name: "Do.Bro Кофе",
    role: "express coffee network",
    format: "coffee to go, online ordering, app, bonuses, drips, beans",
    price: "cappuccino 270–310 ₽, latte 280–320 ₽, signature drinks 390–435 ₽",
    insight: "confirms convenience coffee and digital loyalty",
  },
];

export const priceMap = [
  { player: "Чёрный лес", cappuccino: "150–200", latte: "180–200", signature: "230–260", average: "~500", signatureLow: 230, signatureHigh: 260 },
  { player: "Мэтч", cappuccino: "190", latte: "250", signature: "330–390", average: "~550", signatureLow: 330, signatureHigh: 390 },
  { player: "Do.Bro", cappuccino: "270–310", latte: "280–320", signature: "390–435", average: "—", signatureLow: 390, signatureHigh: 435 },
  { player: "Stars Coffee", cappuccino: "295–355", latte: "300–360", signature: "395–470", average: "~650", signatureLow: 395, signatureHigh: 470 },
];

export const productIdeas = [
  "Bilingual menu RU/EN/CN",
  "Fast visual navigation",
  "Limited local line: Amur Latte, Border Matcha, Heihe Cold Brew, Cableway Lemonade",
  "Merch as souvenir: stickers, cups, drips, pins",
  "Social content potential for Xiaohongshu and WeChat",
];

export const risks = [
  { risk: "Service speed", solution: "Split flow into Grab & Go and Spot scenarios" },
  { risk: "Traffic ramp-up", solution: "calculate conservative/base/optimistic scenarios" },
  { risk: "CAPEX", solution: "compact terminal format and landlord-provided bar zone" },
  { risk: "Engineering", solution: "validate water, sewage, electricity, storage, menu board, POS and equipment placement" },
  { risk: "Franchise fit", solution: "request Surf Coffee compact terminal format validation" },
];

export type DocumentStatus = "Pending" | "Shared on request" | "Placeholder only";

export const documents: { title: string; status: DocumentStatus; note: string }[] = [
  { title: "Pitch Deck PDF", status: "Shared on request", note: "Real PDF is excluded from Codex PR and will be uploaded manually later." },
  { title: "Pitch Deck PPTX", status: "Shared on request", note: "Editable source deck is not stored in this public-safe repository." },
  { title: "Project documentation PDF", status: "Shared on request", note: "Restricted landlord documentation is available only by request." },
  { title: "Page 6 floor fragment", status: "Placeholder only", note: "Displayed as a text placeholder until the approved asset is uploaded." },
  { title: "Page 7 bar zone", status: "Placeholder only", note: "Displayed as a text placeholder until the approved asset is uploaded." },
  { title: "Competitor analysis", status: "Pending", note: "Final public-source validation is still in progress." },
  { title: "Financial scenario sheet", status: "Pending", note: "Scenario model requires rent, CAPEX and operating assumptions." },
  { title: "Questions for Surf Coffee", status: "Pending", note: "Question list will be prepared before franchise-team follow-up." },
  { title: "Questions for landlord", status: "Pending", note: "Technical and rental checklist will be prepared for landlord review." },
];

export const roadmap = {
  Backlog: [
    "Collect final competitor data",
    "Prepare questions for franchise team",
    "Prepare investor version of pitch",
    "Prepare landlord technical checklist",
  ],
  "In Progress": ["Project website", "Market analysis update", "Financial model draft"],
  Waiting: ["Surf Coffee city approval", "Rental terms", "Technical conditions from landlord"],
  Done: ["Franchise application submitted", "Response received", "Pitch deck prepared", "Project documentation reviewed"],
};
