export type StatusLabel = "Done" | "In Progress" | "Waiting" | "Needs Data" | "Draft" | "Risk";

export const heroCards = [
  { label: "Маршрут", value: "Россия — Китай" },
  { label: "Локация", value: "Международный пассажирский терминал" },
  { label: "Формат", value: "Compact Terminal Format" },
  { label: "Сценарий", value: "Кофе до отправления и после возвращения" },
  { label: "Рынок", value: "Сформированная кофейная культура" },
  { label: "Следующий шаг", value: "Согласование формата и условий" },
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

export const locationPlaceholders = [
  {
    title: "Фрагмент плана, стр. 6",
    label: "Текстовый placeholder",
    caption: "Проектная документация: фрагмент 1-го этажа. Технические детали требуют подтверждения.",
  },
  {
    title: "Барная зона, стр. 7",
    label: "Текстовый placeholder",
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
    insight: "market proof: федеральный бренд уже воспринимается аудиторией как понятный кофейный ориентир",
  },
  {
    name: "Чёрный лес",
    role: "сильная локальная сеть",
    format: "кофе, завтраки, выпечка, уютные районные точки",
    price: "капучино 150–200 ₽, авторские напитки 230–260 ₽, средний чек около 500 ₽",
    insight: "market proof: локальная привычка к кофе и регулярным визитам уже сформирована",
  },
  {
    name: "Мэтч",
    role: "современный beverage spot",
    format: "матча, холодные напитки, сезонное меню, Telegram-лояльность",
    price: "капучино 190 ₽, латте 250 ₽, сезонные напитки около 390 ₽, средний чек около 550 ₽",
    insight: "market proof: есть спрос на визуальные напитки, сезонность и современную подачу",
  },
  {
    name: "Do.Bro Кофе",
    role: "coffee to go / digital convenience",
    format: "кофе с собой, онлайн-заказы, приложение, бонусы, дрипы и зерно",
    price: "капучино 270–310 ₽, латте 280–320 ₽, авторские напитки 390–435 ₽",
    insight: "market proof: аудитория готова к coffee to go, онлайн-заказам и цифровой лояльности",
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

export type DocumentStatus = "Pending" | "Shared on request" | "Placeholder only";

export const documents: { title: string; status: DocumentStatus; note: string }[] = [
  { title: "Pitch Deck PDF", status: "Shared on request", note: "Реальный PDF исключён из Codex PR и будет загружен вручную позже." },
  { title: "Pitch Deck PPTX", status: "Shared on request", note: "Редактируемый исходник презентации не хранится в публично-безопасном репозитории." },
  { title: "Проектная документация PDF", status: "Shared on request", note: "Закрытая документация арендодателя доступна только по запросу." },
  { title: "Фрагмент плана, стр. 6", status: "Placeholder only", note: "Показан текстовый placeholder до загрузки согласованного ассета." },
  { title: "Барная зона, стр. 7", status: "Placeholder only", note: "Показан текстовый placeholder до загрузки согласованного ассета." },
  { title: "Анализ конкурентов", status: "Pending", note: "Финальная проверка по открытым источникам ещё в работе." },
  { title: "Финансовый сценарий", status: "Pending", note: "Модель требует условий аренды, CAPEX и операционных допущений." },
  { title: "Вопросы для Surf Coffee", status: "Pending", note: "Список вопросов будет подготовлен перед следующим контактом с franchise-team." },
  { title: "Вопросы для арендодателя", status: "Pending", note: "Технический и арендный checklist будет подготовлен для проверки." },
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


export const heroBadges = [
  "Border Travel Coffee Spot",
  "Международный пассажирский терминал",
  "Россия — Китай",
  "Compact Terminal Format",
];

export const guestScenarios = [
  { title: "До отправления", text: "кофе с собой перед посадкой" },
  { title: "После прибытия", text: "первая покупка в России / первая пауза после дороги" },
  { title: "Ожидание", text: "напиток и быстрый перекус в терминале" },
  { title: "Сувенир маршрута", text: "зерно, дрипы, мерч, стакан с travel-легендой" },
];

export const landlordValue = [
  "Повышение качества пассажирского опыта",
  "Понятный федеральный бренд вместо случайной кофейной точки",
  "Дополнительная коммерческая активность в терминале",
  "Визуально сильный объект внутри пространства",
  "Формат, совместимый с быстрым пассажирским потоком",
];

export const surfValue = [
  "Первая ассоциация бренда с маршрутом Россия — Китай",
  "Нестандартная travel-локация",
  "PR-потенциал открытия",
  "Проверка компактного terminal format",
  "Выход к аудитории туристов, предпринимателей, семей и транзитных гостей",
];

export const investorValue = [
  "Компактный формат",
  "Понятный продукт",
  "Сильный брендовый якорь",
  "Потенциал пассажирского трафика",
  "Масштабируемая логика для travel-локаций",
];

export const readinessCards = [
  "Локация определена",
  "Барная зона предусмотрена проектом терминала",
  "Формат компактной точки подходит под пассажирский сценарий",
  "Анализ рынка собран",
  "Заявка Surf Coffee отправлена",
  "Следующий шаг: согласование формата и условий",
];
