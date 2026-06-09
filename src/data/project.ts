export type StatusLabel = "Done" | "In Progress" | "Waiting" | "Needs Data" | "Draft" | "Risk";

export const heroCards = [
  { label: "Локация", value: "Международный терминал канатной дороги" },
  { label: "Формат", value: "Компактный Terminal Spot" },
  { label: "Статус", value: "Заявка на франшизу отправлена" },
  { label: "Барная зона", value: "Предусмотрена арендодателем, техдетали уточняются" },
  { label: "Рынок", value: "Кофейная культура подтверждена" },
  { label: "Следующий шаг", value: "Согласовать компактный формат с Surf Coffee" },
];

export const projectStatuses: { title: string; status: StatusLabel }[] = [
  { title: "Заявка на франшизу отправлена", status: "Done" },
  { title: "Ответ от Surf Coffee получен", status: "Done" },
  { title: "Pitch deck подготовлен", status: "Done" },
  { title: "Анализ локального кофейного рынка", status: "In Progress" },
  { title: "Проектная документация получена", status: "Done" },
  { title: "Технические требования", status: "Needs Data" },
  { title: "Условия аренды", status: "Waiting" },
  { title: "Финансовая модель", status: "Draft" },
  { title: "Согласование города с Surf Coffee", status: "Waiting" },
];

export const locationSignals = [
  "Пограничный маршрут Россия — Китай",
  "Пассажирский поток собран в одном пространстве",
  "Сценарий ожидания и перехода",
  "Барная зона включена в проект арендодателя",
  "Потенциал первого и последнего кофе маршрута",
];

export const locationMaterials = [
  {
    title: "Фрагмент плана, стр. 6",
    label: "Материал по запросу",
    caption: "Проектная документация: фрагмент 1-го этажа. Технические детали требуют подтверждения.",
  },
  {
    title: "Барная зона, стр. 7",
    label: "Материал по запросу",
    caption: "Проектная документация: барная зона. Технические детали требуют подтверждения.",
  },
];

export const surfFit = [
  ["Movement", "Международный маршрут"],
  ["Freedom", "Опыт пересечения границы"],
  ["Community spot", "Точка встречи пассажиров"],
  ["Music & visual culture", "Фотогеничная среда терминала"],
  ["Merch & cups", "Сувенир из поездки"],
  ["Specialty coffee", "Премиальная альтернатива стандартному кофе в терминале"],
];

export const competitors = [
  {
    name: "Stars Coffee",
    role: "федеральный ориентир",
    format: "кофейня в торговом центре, еда и напитки",
    price: "капучино 295–355 ₽, латте 300–360 ₽, средний чек около 650 ₽",
    insight: "подтверждает спрос на федеральный кофейный бренд и напитки 300–450 ₽",
  },
  {
    name: "Чёрный лес",
    role: "сильная локальная сеть",
    format: "кофе, завтраки, выпечка, уютные районные точки",
    price: "капучино 150–200 ₽, авторские напитки 230–260 ₽, средний чек около 500 ₽",
    insight: "подтверждает ежедневную кофейную привычку и локальную лояльность",
  },
  {
    name: "Мэтч",
    role: "современный локальный beverage-бренд",
    format: "матча, холодные напитки, сезонное меню, Telegram-лояльность",
    price: "капучино 190 ₽, латте 250 ₽, сезонные напитки около 390 ₽, средний чек около 550 ₽",
    insight: "подтверждает спрос на визуальные напитки и молодую аудиторию",
  },
  {
    name: "Do.Bro Кофе",
    role: "сеть express coffee",
    format: "кофе с собой, онлайн-заказы, приложение, бонусы, дрипы и зерно",
    price: "капучино 270–310 ₽, латте 280–320 ₽, авторские напитки 390–435 ₽",
    insight: "подтверждает спрос на удобный кофе и цифровую лояльность",
  },
];

export const priceMap = [
  { player: "Чёрный лес", cappuccino: "150–200", latte: "180–200", signature: "230–260", average: "~500", signatureLow: 230, signatureHigh: 260 },
  { player: "Мэтч", cappuccino: "190", latte: "250", signature: "330–390", average: "~550", signatureLow: 330, signatureHigh: 390 },
  { player: "Do.Bro", cappuccino: "270–310", latte: "280–320", signature: "390–435", average: "—", signatureLow: 390, signatureHigh: 435 },
  { player: "Stars Coffee", cappuccino: "295–355", latte: "300–360", signature: "395–470", average: "~650", signatureLow: 395, signatureHigh: 470 },
];

export const productIdeas = [
  "Двуязычное меню RU/EN/CN",
  "Быстрая визуальная навигация",
  "Локальная линейка: Amur Latte, Border Matcha, Heihe Cold Brew, Cableway Lemonade",
  "Мерч как сувенир: стикеры, стаканы, дрипы, пины",
  "Контент-потенциал для Xiaohongshu и WeChat",
];

export const risks = [
  { risk: "Скорость обслуживания", solution: "разделить поток на Grab & Go и Spot-сценарии" },
  { risk: "Постепенный рост трафика", solution: "рассчитать консервативный, базовый и оптимистичный сценарии" },
  { risk: "CAPEX", solution: "использовать компактный терминальный формат и барную зону от арендодателя" },
  { risk: "Инженерия", solution: "проверить воду, канализацию, электричество, склад, меню-борд, POS и размещение оборудования" },
  { risk: "Соответствие франшизе", solution: "запросить у Surf Coffee валидацию компактного терминального формата" },
];

export type DocumentStatus = "Pending" | "Shared on request" | "Available after alignment";

export const documents: { title: string; status: DocumentStatus; note: string }[] = [
  { title: "Pitch Deck PDF", status: "Shared on request", note: "по запросу" },
  { title: "Pitch Deck PPTX", status: "Shared on request", note: "по запросу" },
  { title: "Проектная документация", status: "Shared on request", note: "по запросу" },
  { title: "Фрагмент плана", status: "Available after alignment", note: "доступен после согласования" },
  { title: "Барная зона", status: "Available after alignment", note: "доступна после согласования" },
  { title: "Финансовая модель", status: "Pending", note: "в подготовке" },
];

export const roadmap = {
  Backlog: [
    "Собрать финальные данные по конкурентам",
    "Подготовить вопросы для franchise-team",
    "Подготовить investor-версию pitch deck",
    "Подготовить технический checklist для арендодателя",
  ],
  "In Progress": ["Сайт проекта", "Обновление анализа рынка", "Черновик финансовой модели"],
  Waiting: ["Согласование города с Surf Coffee", "Условия аренды", "Технические условия от арендодателя"],
  Done: ["Заявка на франшизу отправлена", "Ответ получен", "Pitch deck подготовлен", "Проектная документация изучена"],
};
