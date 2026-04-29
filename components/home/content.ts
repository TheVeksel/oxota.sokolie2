import type { LucideIcon } from "lucide-react";
import { Home, MapPin, Mountain, ShieldCheck, TentTree, TreePine } from "lucide-react";

export type FeatureCard = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export type PriceRow = {
  animal: string;
  unit: string;
  memberAdult: string;
  memberYouth: string;
  memberChild: string;
  guestAdult: string;
  guestYouth: string;
  guestChild: string;
};

export type PriceCategory = {
  slug: string;
  title: string;
  description: string;
  note: string;
  rows: PriceRow[];
};

export const homeNavigationItems = [
  { href: "/#about", label: "Об угодьях" },
  { href: "/#hunt-types", label: "Виды охоты" },
  { href: "/#accommodation", label: "Проживание" },
  { href: "/price-list", label: "Прайс-лист" },
  { href: "/contacts", label: "Контакты" },
];

export const huntTypesShowcase = [
  {
    title: "Кабан",
  },
  {
    title: "Лось",
  },
  {
    title: "Бобр, заяц, лисица, енотовидная собака",
  },
  {
    title: "Водоплавающая дичь",
  },
  {
    title: "Вальдшнеп",
  },
  {
    title: "Вяхерь",
  },
  {
    title: "Серая ворона",
  },
  {
    title: "Волк",
  },
];

export const heroStats = [
  { value: "160 км²", label: "частные охотничьи угодья" },
  { value: "24/7", label: "сопровождение гостей" },
  { value: "Premium", label: "уровень проживания" },
];

export const featureCards: FeatureCard[] = [
  {
    icon: TreePine,
    title: "Большая территория",
    text: "Частные лесные угодья, тишина и простор для настоящего отдыха на природе.",
  },
  {
    icon: MapPin,
    title: "Удобное расположение",
    text: "Приватная локация с хорошим подъездом и продуманной логистикой для гостей.",
  },
  {
    icon: Home,
    title: "Проживание",
    text: "Тёплые дома, спокойный интерьер и комфорт после насыщенного дня на природе.",
  },
  {
    icon: ShieldCheck,
    title: "Полный сервис",
    text: "Егеря, сопровождение, питание и организация визита под одной заботливой системой.",
  },
];

export const aboutStats = [
  ["160 км²", "Частная территория"],
  ["24/7", "Поддержка гостей"],
  ["Premium", "Уровень проживания"],
  ["Guided", "Программы с егерем"],
];
export const huntingTypes = [
  "Загонная охота",
  "Охота с подхода",
  "Охота на птицу",
  "Охота с егерем",
];

export const pricing = [
  {
    name: "Дневная охота",
    price: "25 000 ₽",
    note: "с человека",
    features: [
      "Профессиональный егерь",
      "Доступ к территории",
      "Лёгкие угощения",
    ],
  },
  {
    name: "Уикенд-отдых",
    price: "60 000 ₽",
    note: "за 2 ночи",
    features: [
      "Проживание в доме",
      "Завтрак и ужин",
      "Доступ к охоте",
      "Каминная зона",
    ],
    featured: true,
  },
  {
    name: "Индивидуальная группа",
    price: "По запросу",
    note: "персональное предложение",
    features: [
      "Закрытое бронирование",
      "Гибкая программа",
      "Трансфер и питание",
      "Организация частного события",
    ],
  },
];

export const galleryItems = [
  {
    type: "image",
    label: "Территория угодий",
    image: "/photo_2026-04-15_05-19-15.jpg",
  },
  {
    type: "image",
    label: "Дом в лесу",
    image: "/photo_2026-04-15_05-18-48.jpg",
  },
  {
    type: "image",
    label: "Спальня",
    image: "/photo_2026-04-15_05-19-20.jpg",
  },
  {
    type: "image",
    label: "Гостиная и свет",
    image: "/photo_2026-04-15_05-19-28.jpg",
  },
  {
    type: "image",
    label: "Общая зона",
    image: "/photo_2026-04-15_05-19-36.jpg",
  },
  {
    type: "image",
    label: "Терраса",
    image: "/photo_2026-04-15_05-19-38.jpg",
  },
] as const;

export const news = [
  {
    date: "12 апр 2026",
    title: "Открытие сезона: добавлены новые маршруты",
    text: "Появились новые маршруты и расширенные программы для частных и корпоративных групп.",
  },
  {
    date: "08 апр 2026",
    title: "Обновлены домики с премиальным интерьером",
    text: "Добавили новое освещение, тёплые материалы и ещё более уютную атмосферу для отдыха.",
  },
  {
    date: "02 апр 2026",
    title: "Анонсирован фото-уикенд в лесу",
    text: "Спокойный формат отдыха для тех, кто любит природу, тишину и красивые утренние кадры.",
  },
];

export const serviceCards = [
  {
    id: "hunting",
    icon: Mountain,
    title: "Охота под контролем, с сопровождением и на высоком уровне.",
    text: "Индивидуальные программы с опытным егерем, доступом к выбранным маршрутам и премиальным форматом отдыха.",
    badge: "Охота",
    background:
      "linear-gradient(to top, rgba(5,7,5,0.88), rgba(5,7,5,0.18)), url('/photo_2026-04-15_05-19-15.jpg')",
  },
  {
    id: "accommodation",
    icon: TentTree,
    title: "Уютные дома и спокойствие загородной жизни.",
    text: "Комфортные интерьеры, природные материалы, мягкий свет и отдых, который ощущается действительно приватным.",
    badge: "Проживание",
    note: "Спокойный ритм / полный отдых / вид на природу",
    background:
      "linear-gradient(to top, rgba(5,7,5,0.9), rgba(5,7,5,0.22)), url('/photo_2026-04-15_05-19-36.jpg')",
  },
] as const;

export const priceCategories: PriceCategory[] = [
  {
    slug: "boar",
    title: "Кабан",
    description: "Основные тарифы на охоту на кабана с разделением по статусу гостя и возрасту.",
    note: "Возрастные категории: взрослые 18+, юниоры 14-17, дети до 13 лет.",
    rows: [
      {
        animal: "Кабан сеголеток",
        unit: "за трофей",
        memberAdult: "18 000 ₽",
        memberYouth: "14 000 ₽",
        memberChild: "9 000 ₽",
        guestAdult: "24 000 ₽",
        guestYouth: "19 000 ₽",
        guestChild: "12 000 ₽",
      },
      {
        animal: "Кабан до 100 кг",
        unit: "за трофей",
        memberAdult: "28 000 ₽",
        memberYouth: "22 000 ₽",
        memberChild: "14 000 ₽",
        guestAdult: "36 000 ₽",
        guestYouth: "28 000 ₽",
        guestChild: "18 000 ₽",
      },
      {
        animal: "Кабан 100+ кг",
        unit: "за трофей",
        memberAdult: "38 000 ₽",
        memberYouth: "31 000 ₽",
        memberChild: "20 000 ₽",
        guestAdult: "49 000 ₽",
        guestYouth: "40 000 ₽",
        guestChild: "25 000 ₽",
      },
    ],
  },
  {
    slug: "moose",
    title: "Лось",
    description: "Тарифы на лося с отдельными ставками для резидентов и гостей.",
    note: "Стоимость сопровождения егеря включена в базовый тариф.",
    rows: [
      {
        animal: "Лось до 1,5 лет",
        unit: "за трофей",
        memberAdult: "55 000 ₽",
        memberYouth: "46 000 ₽",
        memberChild: "31 000 ₽",
        guestAdult: "69 000 ₽",
        guestYouth: "58 000 ₽",
        guestChild: "38 000 ₽",
      },
      {
        animal: "Лось взрослый",
        unit: "за трофей",
        memberAdult: "82 000 ₽",
        memberYouth: "69 000 ₽",
        memberChild: "46 000 ₽",
        guestAdult: "99 000 ₽",
        guestYouth: "84 000 ₽",
        guestChild: "55 000 ₽",
      },
      {
        animal: "Лось трофейный",
        unit: "за трофей",
        memberAdult: "120 000 ₽",
        memberYouth: "102 000 ₽",
        memberChild: "68 000 ₽",
        guestAdult: "145 000 ₽",
        guestYouth: "124 000 ₽",
        guestChild: "82 000 ₽",
      },
    ],
  },
  {
    slug: "bird",
    title: "Птица",
    description: "Сезонные предложения по пернатой дичи для взрослых охотников и семейных выездов.",
    note: "В таблице указана стоимость за день охоты.",
    rows: [
      {
        animal: "Утка / гусь",
        unit: "за день",
        memberAdult: "9 000 ₽",
        memberYouth: "7 000 ₽",
        memberChild: "4 500 ₽",
        guestAdult: "12 000 ₽",
        guestYouth: "9 000 ₽",
        guestChild: "5 500 ₽",
      },
      {
        animal: "Тетерев / глухарь",
        unit: "за день",
        memberAdult: "14 000 ₽",
        memberYouth: "11 000 ₽",
        memberChild: "7 000 ₽",
        guestAdult: "18 000 ₽",
        guestYouth: "14 000 ₽",
        guestChild: "9 000 ₽",
      },
      {
        animal: "Фазан",
        unit: "за день",
        memberAdult: "12 000 ₽",
        memberYouth: "9 500 ₽",
        memberChild: "6 000 ₽",
        guestAdult: "15 500 ₽",
        guestYouth: "12 000 ₽",
        guestChild: "7 500 ₽",
      },
    ],
  },
  {
    slug: "fur",
    title: "Пушнина",
    description: "Небольшие форматы охоты для коротких выездов и обучения молодых охотников.",
    note: "Подходит для камерных выездов и ознакомительных программ.",
    rows: [
      {
        animal: "Лиса / енотовидная собака",
        unit: "за выезд",
        memberAdult: "8 500 ₽",
        memberYouth: "6 500 ₽",
        memberChild: "4 000 ₽",
        guestAdult: "11 000 ₽",
        guestYouth: "8 500 ₽",
        guestChild: "5 000 ₽",
      },
      {
        animal: "Куница / хорь",
        unit: "за выезд",
        memberAdult: "10 000 ₽",
        memberYouth: "7 800 ₽",
        memberChild: "4 800 ₽",
        guestAdult: "12 800 ₽",
        guestYouth: "9 800 ₽",
        guestChild: "6 200 ₽",
      },
      {
        animal: "Заяц",
        unit: "за выезд",
        memberAdult: "7 000 ₽",
        memberYouth: "5 500 ₽",
        memberChild: "3 500 ₽",
        guestAdult: "9 000 ₽",
        guestYouth: "7 000 ₽",
        guestChild: "4 500 ₽",
      },
    ],
  },
  {
    slug: "beaver",
    title: "Бобр",
    description: "Отдельные вечерние и ночные форматы охоты с мягким входом по стоимости.",
    note: "Указана стоимость за один организованный выход.",
    rows: [
      {
        animal: "Бобр стандартный",
        unit: "за выход",
        memberAdult: "13 000 ₽",
        memberYouth: "10 000 ₽",
        memberChild: "6 500 ₽",
        guestAdult: "17 000 ₽",
        guestYouth: "13 000 ₽",
        guestChild: "8 000 ₽",
      },
      {
        animal: "Бобр трофейный",
        unit: "за выход",
        memberAdult: "18 000 ₽",
        memberYouth: "14 000 ₽",
        memberChild: "9 000 ₽",
        guestAdult: "23 000 ₽",
        guestYouth: "18 000 ₽",
        guestChild: "11 000 ₽",
      },
    ],
  },
];
