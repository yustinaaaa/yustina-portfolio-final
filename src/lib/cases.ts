import p05 from "@/assets/IMG_7725.webp.media.json";
import rb1 from "@/assets/richburn1.png.media.json";
import pg1 from "@/assets/penhaligons_gum1.jpg.media.json";
import pt1 from "@/assets/puig_tsum1.jpg.media.json";
import pt2 from "@/assets/puig_tsum2.jpg.media.json";
import pt3 from "@/assets/puig_tsum3.jpg.media.json";
import pt4 from "@/assets/puig_tsum4.jpg.media.json";
import pg2 from "@/assets/penhaligons_gum2.jpg.media.json";
import pg3 from "@/assets/penhaligons_gum3.jpg.media.json";
import pg4 from "@/assets/penhaligons_gum4.jpg.media.json";
import rb2 from "@/assets/richburn2.png.media.json";
import rb3 from "@/assets/richburn3.png.media.json";
import pm1 from "@/assets/IMG_7710.jpeg.media.json";
import pm2 from "@/assets/IMG_7711.jpeg.media.json";
import pm3 from "@/assets/IMG_7712.jpeg.media.json";
import pm4 from "@/assets/IMG_7713.jpeg.media.json";
import fm1 from "@/assets/IMG_7552.jpeg.media.json";
import fm2 from "@/assets/IMG_7553.jpeg.media.json";
import fm3 from "@/assets/IMG_7554.jpeg.media.json";
import fm4 from "@/assets/IMG_7555.jpeg.media.json";
import fm5 from "@/assets/IMG_7556.jpeg.media.json";
import mg1 from "@/assets/IMG_7604.jpeg.media.json";
import mg2 from "@/assets/IMG_7608.jpeg.media.json";
import mg3 from "@/assets/IMG_7603.jpeg.media.json";
import bl1 from "@/assets/IMG_7557.jpeg.media.json";
import bl2 from "@/assets/IMG_7558.jpeg.media.json";
import bl3 from "@/assets/IMG_7559.jpeg.media.json";
import bl4 from "@/assets/IMG_7560.jpeg.media.json";
import bt1 from "@/assets/IMG_7733.jpeg.media.json";
import bt2 from "@/assets/IMG_7739.jpeg.media.json";
import bt3 from "@/assets/IMG_7734.jpeg.media.json";
import bt4 from "@/assets/IMG_7735.jpeg.media.json";
import lc1 from "@/assets/IMG_7726.jpeg.media.json";
import lc2 from "@/assets/IMG_7729.jpeg.media.json";
import lc3 from "@/assets/IMG_7727.jpeg.media.json";
import lc4 from "@/assets/IMG_7730.jpeg.media.json";
import lc5 from "@/assets/IMG_7728.jpeg.media.json";

type T = { ru: string; en: string };
export type Case = {
  client: string;
  tag: T;
  big: T;
  sub: T;
  task: T;
  solution: T;
  role: T;
  result?: T;
  nda?: boolean;
  img?: string;
  imgs?: string[];
};

export const cases: Case[] = [
  {
    client: "Балтика BREW",
    imgs: [bt1.url, bt2.url, bt3.url, bt4.url],
    tag: { ru: "Реализовано / FMCG / Event", en: "Delivered / FMCG / Event" },
    big: { ru: "10 000+", en: "10,000+" },
    sub: { ru: "посетителей бренд-зоны", en: "brand zone visitors" },
    task: {
      ru: "Превратить действующее пространство «Балтика Парк» в самостоятельное городское событие и познакомить гостей с ассортиментом через игровой опыт.",
      en: "Turn the existing Baltika Park space into a city event in its own right and introduce guests to the range through play.",
    },
    solution: {
      ru: "Индустриальная эстетика бренда стала основой тематического пространства с механическими арт-объектами, театрализованными персонажами и игровым маршрутом Brew Pass.",
      en: "The brand's industrial aesthetic became the basis of a themed space with mechanical art objects, theatrical characters and a gamified Brew Pass route.",
    },
    role: {
      ru: "Авторство событийной концепции, разработка игровой архитектуры, сценариев взаимодействия с продуктом, визуальной стилистики и развлекательного наполнения.",
      en: "Authored the event concept, the game architecture, product-interaction scripts, visual styling and the entertainment programme.",
    },
  },
  {
    client: "Le Collective",
    imgs: [lc1.url, lc2.url, lc3.url, lc4.url, lc5.url],
    tag: { ru: "Реализовано / Beauty / Community", en: "Delivered / Beauty / Community" },
    big: { ru: "100+", en: "100+" },
    sub: { ru: "представителей beauty-индустрии", en: "beauty industry professionals" },
    task: {
      ru: "Организовать закрытый показ документального фильма для профессионального сообщества топ-стилистов Le Collective на площадке «Стрелка».",
      en: "Organise a private documentary screening for the Le Collective community of top stylists at Strelka.",
    },
    solution: {
      ru: "Событие на стыке кинопремьеры и профессионального нетворкинга: показ фильма, дискуссия со стилистами, тематический кейтеринг и мультимедийное оформление пространства.",
      en: "An event between a film premiere and professional networking: a screening, a panel with stylists, themed catering and multimedia design of the space.",
    },
    role: {
      ru: "Полная креативная разработка мероприятия, его драматургии, визуальной концепции и форматов взаимодействия с профессиональной аудиторией.",
      en: "Full creative development of the event, its dramaturgy, visual concept and formats for a professional audience.",
    },
  },
  {
    client: "Fame to Flame × Добрый × Burn",
    imgs: [fm4.url, fm1.url, fm2.url, fm3.url, fm5.url],
    tag: { ru: "В процессе реализации / FMCG", en: "In progress / FMCG" },
    big: { ru: "3 бренда / 4 города", en: "3 brands / 4 cities" },
    sub: { ru: "федеральный танцевальный чемпионат", en: "a national dance championship" },
    task: {
      ru: "Интегрировать три FMCG-бренда в федеральный танцевальный чемпионат с онлайн-отбором на Rutube и офлайн-соревнованиями.",
      en: "Integrate three FMCG brands into a national dance championship with online auditions on Rutube and offline competitions.",
    },
    solution: {
      ru: "Единая креативная платформа, распределяющая роли брендов на разных этапах пути танцора: от командной поддержки и эмоциональной подготовки до сценического самовыражения.",
      en: "One creative platform distributing brand roles across stages of the dancer's journey: from team support and emotional preparation to stage self-expression.",
    },
    role: {
      ru: "Разработка зонтичной креативной платформы, онлайн- и офлайн-механик, транзакционных сценариев, концепций бренд-зон и авторского мерча.",
      en: "Umbrella creative platform, online and offline mechanics, transactional scripts, brand zone concepts and original merch.",
    },
  },
  {
    client: "RICH × Burn × Лента",
    imgs: [rb1.url, rb2.url, rb3.url],
    tag: { ru: "Реализовано / FMCG / Shopper Marketing", en: "Delivered / FMCG / Shopper Marketing" },
    big: { ru: "Collect & Get", en: "Collect & Get" },
    sub: { ru: "от покупки до VIP-тура", en: "from purchase to a VIP tour" },
    task: {
      ru: "Стимулировать повторные покупки напитков RICH и Burn в федеральной сети «Лента», используя музыкальный фестиваль «Белая» как эмоциональный драйвер промокампании.",
      en: "Stimulate repeat purchases of RICH and Burn drinks in the federal Lenta chain, using the Belaya music festival as the campaign's emotional driver.",
    },
    solution: {
      ru: "Федеральная программа Collect & Get с многоуровневой системой вознаграждений: бонусы программы лояльности, генерация персональных AI-аватаров, еженедельные розыгрыши и VIP-поездка на фестиваль.",
      en: "A federal Collect & Get programme with a multi-tier reward system: loyalty bonuses, personal AI avatars, weekly giveaways and a VIP trip to the festival.",
    },
    role: {
      ru: "Разработка креативных направлений промокампании, накопительных покупательских механик, призовой архитектуры и коммуникационных материалов.",
      en: "Creative directions of the promo, cumulative shopper mechanics, prize architecture and communication materials.",
    },
  },
  {
    client: "Добрый — федеральное промо",
    img: p05.url,
    tag: { ru: "Реализовано / FMCG / NCP", en: "Delivered / FMCG / NCP" },
    big: { ru: "National Consumer Promotion", en: "National Consumer Promotion" },
    sub: { ru: "масштабируемые креативные платформы", en: "scalable creative platforms" },
    task: {
      ru: "Разработать промокампании для продвижения продукции «Добрый» в федеральных торговых сетях с учётом особенностей их аудиторий и покупательских сценариев.",
      en: "Develop promo campaigns for Добрый products in federal retail chains, accounting for each chain's audience and purchase scenarios.",
    },
    solution: {
      ru: "Креативные платформы, объединяющие коммуникационную идею, мотивацию к покупке, игровые сценарии и систему вознаграждений с возможностью адаптации под разные торговые сети.",
      en: "Creative platforms combining a communication idea, purchase motivation, game scenarios and a reward system that can be adapted to different retail chains.",
    },
    role: {
      ru: "Разработка креативных платформ, приобретённых клиентом для дальнейшей адаптации, игровых сценариев и призовых механик.",
      en: "Creative platforms acquired by the client for further roll-out, game scenarios and prize mechanics.",
    },
  },
  {
    client: "RICH × Burn — БЕЛАЯ",
    imgs: [bl1.url, bl2.url, bl3.url, bl4.url],
    tag: { ru: "Реализовано / FMCG / BTL", en: "Delivered / FMCG / BTL" },
    big: { ru: "Снежная королева", en: "The Snow Queen" },
    sub: { ru: "иммерсивный фестивальный опыт", en: "an immersive festival experience" },
    task: {
      ru: "Интегрировать два бренда с различным позиционированием в единый художественный мир фестиваля электронной музыки.",
      en: "Integrate two brands with different positioning into a single artistic world of an electronic music festival.",
    },
    solution: {
      ru: "Интерпретация фестивальной мифологии через мультимедийное бренд-пространство, театрализованные перформансы, имиджевые интерактивы и авторскую коктейльную карту.",
      en: "Interpreting festival mythology through a multimedia brand space, theatrical performances, image interactives and an original cocktail menu.",
    },
    role: {
      ru: "Разработка концепций бренд-присутствия, интерактивных и транзакционных механик, визуального наполнения пространства и тендерной презентации.",
      en: "Brand presence concepts, interactive and transactional mechanics, visual content of the space and the tender presentation.",
    },
  },
  {
    client: "Parmalat Comfort",
    imgs: [pm1.url, pm4.url, pm2.url, pm3.url],
    tag: { ru: "Реализовано / FMCG / B2B", en: "Delivered / FMCG / B2B" },
    big: { ru: "3 мероприятия", en: "3 events" },
    sub: { ru: "для представителей федерального ритейла", en: "for federal retail representatives" },
    task: {
      ru: "Поддержать расширение представленности безлактозной линейки Parmalat Comfort через работу с представителями торговых сетей, принимающими ассортиментные решения.",
      en: "Support the expansion of the Parmalat Comfort lactose-free range by working with retail representatives who make assortment decisions.",
    },
    solution: {
      ru: "Масштабируемый B2B-формат для «Азбуки вкуса» и «Ашана», объединяющий экспертную презентацию продукта, дегустации и гастрономические интерактивы.",
      en: "A scalable B2B format for Azbuka Vkusa and Auchan, combining an expert product presentation, tastings and gastronomic interactives.",
    },
    role: {
      ru: "Авторство событийной концепции, разработка формата коммуникации с B2B-аудиторией, гастрономических интерактивов и визуального наполнения.",
      en: "Authored the event concept, the B2B communication format, gastronomic interactives and visual content.",
    },
  },
  {
    client: "Магнит × RICH × Burn",
    imgs: [mg3.url, mg1.url, mg2.url],
    tag: { ru: "Реализовано / FMCG / Retail", en: "Delivered / FMCG / Retail" },
    big: { ru: "Доставка ритма", en: "Delivery of Rhythm" },
    sub: { ru: "фестивальная интеграция на MUZ.BIT", en: "a festival integration at MUZ.BIT" },
    task: {
      ru: "Интегрировать сервис «Магнит Доставка» в музыкальный фестиваль MUZ.BIT и стимулировать регистрации в приложении.",
      en: "Integrate Magnit Delivery into the MUZ.BIT music festival and drive app registrations.",
    },
    solution: {
      ru: "Бренд-пространство в форме гигантской коробки доставки с неоновым интерьером, цифровые розыгрыши, промокоды, фестивальный мерч и интеграция в VIP-бар.",
      en: "A brand space shaped like a giant delivery box with a neon interior, digital giveaways, promo codes, festival merch and a VIP bar integration.",
    },
    role: {
      ru: "Авторство креативной концепции и дизайна фотозоны, разработка пользовательского сценария, призовых механик, мерча, нейминга и коммуникационных текстов.",
      en: "Authored the creative concept and photo-zone design, the user script, prize mechanics, merch, naming and communication copy.",
    },
  },
  {
    client: "Добрый — Event Pool",
    nda: true,
    tag: { ru: "В работе / FMCG / NDA", en: "In progress / FMCG / NDA" },
    big: { ru: "Event Portfolio", en: "Event Portfolio" },
    sub: { ru: "портфель событийных концепций", en: "a portfolio of event concepts" },
    task: {
      ru: "Сформировать пул самостоятельных креативных платформ для присутствия бренда на массовых мероприятиях с различным контекстом и аудиторией.",
      en: "Build a pool of standalone creative platforms for the brand's presence at mass events with different contexts and audiences.",
    },
    solution: {
      ru: "Вариативные событийные форматы с индивидуальной коммуникационной идеей, пространственным решением и сценариями вовлечения потребителей.",
      en: "Varied event formats with their own communication idea, spatial design and consumer engagement scenarios.",
    },
    role: {
      ru: "Разработка альтернативных креативных платформ, проектирование пользовательских сценариев, интерактивных механик и тендерных презентаций.",
      en: "Alternative creative platforms, user journey design, interactive mechanics and tender presentations.",
    },
  },
  {
    client: "Добрый — зимняя кампания",
    nda: true,
    tag: { ru: "В работе / FMCG / NDA", en: "In progress / FMCG / NDA" },
    big: { ru: "Urban Activation", en: "Urban Activation" },
    sub: { ru: "бренд-персонажи в городской среде", en: "brand characters in the city" },
    task: {
      ru: "Интегрировать персонажей бренда в сезонный досуг Москвы, превратив их из элементов рекламной коммуникации в непосредственных участников городских событий.",
      en: "Bring the brand characters into Moscow's seasonal leisure, turning them from advertising elements into direct participants in city events.",
    },
    solution: {
      ru: "Система спортивных, развлекательных и театрализованных форматов, построенных на индивидуальных характерах персонажей и адаптированных под семейную аудиторию.",
      en: "A system of sport, entertainment and theatrical formats built on each character's personality and adapted for a family audience.",
    },
    role: {
      ru: "Интерпретация бренд-персонажей в событийном контексте, разработка концепций городских активаций, спортивных форматов и игровых механик.",
      en: "Interpreting brand characters in an event context, city activation concepts, sport formats and game mechanics.",
    },
  },
  {
    client: "Добрый Кола — музыкальные фестивали",
    nda: true,
    tag: { ru: "В работе / FMCG / NDA", en: "In progress / FMCG / NDA" },
    big: { ru: "Festival Experience", en: "Festival Experience" },
    sub: { ru: "бренд-зона как самостоятельный аттракцион", en: "a brand zone as an attraction of its own" },
    task: {
      ru: "Разработать формат присутствия бренда на музыкальных фестивалях в условиях высокой конкуренции за внимание молодой аудитории.",
      en: "Develop a festival presence format for the brand amid heavy competition for young audiences' attention.",
    },
    solution: {
      ru: "Альтернативные креативные платформы, объединяющие пространственный дизайн, физические аттракционы, создание пользовательского контента и покупательские механики в единый сценарий посещения.",
      en: "Alternative creative platforms combining spatial design, physical attractions, user-generated content and purchase mechanics into one visit scenario.",
    },
    role: {
      ru: "Разработка креативных платформ с нуля, нейминг, функциональное зонирование, проектирование customer journey, транзакционных механик и концептуального мерча.",
      en: "Creative platforms built from scratch, naming, functional zoning, customer journey design, transactional mechanics and conceptual merch.",
    },
  },
  {
    client: "RICH × Caffè Vergnano",
    nda: true,
    tag: { ru: "В работе / FMCG / HoReCa / NDA", en: "In progress / FMCG / HoReCa / NDA" },
    big: { ru: "Gastronomic Experience", en: "Gastronomic Experience" },
    sub: { ru: "два бренда в едином пространстве", en: "two brands in one space" },
    task: {
      ru: "Найти органичный формат совместного присутствия двух брендов на гастрономических фестивалях, объединив продуктовую коммуникацию с культурой современной HoReCa.",
      en: "Find an organic format for two brands to appear together at gastronomic festivals, pairing product communication with modern HoReCa culture.",
    },
    solution: {
      ru: "Креативные платформы на пересечении гастрономии, кофейной и барной культуры, объединяющие продуктовые интерактивы, персонализацию и эксклюзивные событийные форматы.",
      en: "Creative platforms at the intersection of gastronomy, coffee and bar culture, combining product interactives, personalisation and exclusive event formats.",
    },
    role: {
      ru: "Разработка креативных концепций, пространственных решений, сценариев продуктового взаимодействия, механик вовлечения, нейминга и коммуникационной стилистики.",
      en: "Creative concepts, spatial solutions, product interaction scripts, engagement mechanics, naming and communication styling.",
    },
  },
  {
    client: "PUIG — Prestige Brands Q1 2026",
    nda: true,
    tag: { ru: "Пульный тендер / Beauty / Retail", en: "Pool tender / Beauty / Retail" },
    big: { ru: "67 слайдов за 48 часов", en: "67 slides in 48 hours" },
    sub: { ru: "полный цикл креатива и дизайна", en: "full cycle of creative and design" },
    task: {
      ru: "Разработать сезонные retailtainment-кампании для портфеля парфюмерных брендов PUIG с адаптацией под ЦУМ, «Золотое яблоко» и «Рив Гош».",
      en: "Develop seasonal retailtainment campaigns for PUIG's perfume portfolio, adapted for TSUM, Zolotoe Yabloko and Rive Gauche.",
    },
    solution: {
      ru: "Перевод визуальных и нарративных кодов каждого бренда в физические объекты, сенсорные интерактивы, коллекционные блоттеры и персонализированные подарки.",
      en: "Translating each brand's visual and narrative codes into physical objects, sensory interactives, collectible blotters and personalised gifts.",
    },
    role: {
      ru: "Самостоятельная разработка креативных направлений, нейминга, механик, копирайтинга, визуализации и дизайна 67-страничной тендерной презентации.",
      en: "Solo development of creative directions, naming, mechanics, copywriting, visualisation and the design of the 67-page tender deck.",
    },
    result: { ru: "Победа по направлению Carolina Herrera.", en: "Won the Carolina Herrera brief." },
  },
  {
    client: "Carolina Herrera — Spring Campaign",
    tag: { ru: "Реализовано / Luxury / Retailtainment", en: "Delivered / Luxury / Retailtainment" },
    big: { ru: "Secret Garden", en: "Secret Garden" },
    sub: { ru: "сезонная активация в ЦУМе", en: "a seasonal activation at TSUM" },
    task: {
      ru: "Разработать сезонную кампанию Herrera Confidential к Международному женскому дню, сохранив эксклюзивный характер парфюмерной коллекции.",
      en: "Develop a seasonal Herrera Confidential campaign for International Women's Day while keeping the perfume collection's exclusive character.",
    },
    solution: {
      ru: "Переосмысление языка цветов через парфюмерию: ароматизированные письма с персональными посланиями, иллюстрациями ольфакторных нот и флористическое оформление корнера в эстетике Casa Herrera.",
      en: "Rethinking the language of flowers through perfume: scented letters with personal messages, illustrations of olfactory notes and a floristic corner design in the Casa Herrera aesthetic.",
    },
    role: {
      ru: "Разработка локальной интерпретации креативной платформы, механики Secret Garden Letters, авторских посланий, визуальных решений и подарочного наполнения.",
      en: "A local interpretation of the creative platform, the Secret Garden Letters mechanic, original messages, visual solutions and gifting content.",
    },
  },
  {
    client: "Penhaligon's × Articoli",
    imgs: [pg1.url, pg3.url, pg2.url, pg4.url],
    tag: { ru: "Реализовано / Luxury / Private Event", en: "Delivered / Luxury / Private Event" },
    big: { ru: "Victorian Tea Salon", en: "Victorian Tea Salon" },
    sub: { ru: "презентация Potions & Remedies", en: "the Potions & Remedies presentation" },
    task: {
      ru: "Представить коллекцию Potions & Remedies клиентам Articoli в ГУМе через нетрадиционный формат парфюмерной консультации.",
      en: "Introduce the Potions & Remedies collection to Articoli's clients at GUM through an unconventional fragrance consultation format.",
    },
    solution: {
      ru: "Викторианский чайный салон, в котором подбор аромата строится на эмоциональном состоянии гостя. Британские чайные традиции, парфюмерный сторителлинг и ольфакторное профилирование объединены в камерный ритуал.",
      en: "A Victorian tea salon where fragrance selection is built around the guest's emotional state: British tea traditions, perfume storytelling and olfactory profiling merged into an intimate ritual.",
    },
    role: {
      ru: "Авторство событийной концепции, разработка алгоритма знакомства с ароматами, сценария чайной церемонии и художественного наполнения мероприятия.",
      en: "Authored the event concept, the fragrance discovery algorithm, the tea ceremony script and the artistic programme.",
    },
  },
  {
    client: "PUIG — Beauty Days в ЦУМе",
    imgs: [pt1.url, pt3.url, pt2.url, pt4.url],
    tag: { ru: "Реализовано / Luxury / Retailtainment", en: "Delivered / Luxury / Retailtainment" },
    big: { ru: "3 парфюмерных дома", en: "3 perfume houses" },
    sub: { ru: "Carolina Herrera, Christian Louboutin, Penhaligon's", en: "Carolina Herrera, Christian Louboutin, Penhaligon's" },
    task: {
      ru: "Стимулировать продажи в премиальном ритейле через эксклюзивные клиентские активации, сохранив индивидуальную эстетику каждого парфюмерного дома.",
      en: "Drive sales in premium retail through exclusive client activations while keeping each perfume house's individual aesthetic.",
    },
    solution: {
      ru: "Самостоятельные сценарии взаимодействия с покупателями, основанные на искусстве, ручной кастомизации, флористике и персонализации подарков.",
      en: "Standalone customer interaction scenarios based on art, handmade customisation, floristry and personalised gifting.",
    },
    role: {
      ru: "Разработка креативных концепций для трёх брендов, клиентских интерактивов, визуальных решений и подарочного наполнения.",
      en: "Creative concepts for three brands, client interactives, visual solutions and gifting content.",
    },
  },
  {
    client: "Penhaligon's — Portraits 10th Anniversary",
    tag: { ru: "Реализовано / Luxury / Creative PR", en: "Delivered / Luxury / Creative PR" },
    big: { ru: "The Who's Who of London", en: "The Who's Who of London" },
    sub: { ru: "юбилейная имиджевая рассылка", en: "an anniversary image mailing" },
    task: {
      ru: "Разработать юбилейную PR-рассылку к десятилетию коллекции Portraits, сохранив литературный характер и эксцентричную британскую эстетику бренда.",
      en: "Develop an anniversary PR mailing for the tenth anniversary of the Portraits collection, keeping the brand's literary character and eccentric British aesthetic.",
    },
    solution: {
      ru: "Четырёхуровневая архитектура распаковки, построенная по принципу литературной интриги: скрытый флакон, запечатанный конверт, персональное письмо и коллекционная карточка персонажа с его историей и ольфакторным профилем.",
      en: "A four-level unboxing architecture built like a literary intrigue: a hidden flacon, a sealed envelope, a personal letter and a collectible character card with its story and olfactory profile.",
    },
    role: {
      ru: "Разработка архитектуры PR-рассылки, авторской серии литературных писем, драматургии распаковки и визуальной концепции.",
      en: "Mailing architecture, an original series of literary letters, the dramaturgy of unboxing and the visual concept.",
    },
  },
  {
    client: "Penhaligon's — Portraits Intense",
    tag: { ru: "Luxury / Private Event", en: "Luxury / Private Event" },
    big: { ru: "The Secret Tasting Society", en: "The Secret Tasting Society" },
    sub: { ru: "закрытая парфюмерно-гастрономическая презентация", en: "a closed perfume-and-gastronomy presentation" },
    task: {
      ru: "Разработать камерный VIP-формат знакомства клиентов Articoli с коллекцией Portraits Intense, раскрывающей тёмную сторону четырёх персонажей Penhaligon's.",
      en: "Develop an intimate VIP format introducing Articoli's clients to the Portraits Intense collection, which reveals the dark side of four Penhaligon's characters.",
    },
    solution: {
      ru: "Закрытое лондонское общество, внутри которого характер каждого героя последовательно раскрывается через литературное повествование, аромат и его гастрономическую интерпретацию.",
      en: "A closed London society where each character's personality is revealed in sequence through literary narrative, a fragrance and its gastronomic interpretation.",
    },
    role: {
      ru: "Разработка авторской событийной концепции, драматургии вечера, сенсорных сценариев, нейминга, копирайтинга и художественного наполнения.",
      en: "An original event concept, the dramaturgy of the evening, sensory scripts, naming, copywriting and artistic content.",
    },
  },
  {
    client: "Penhaligon's × ЛЭТУАЛЬ",
    tag: { ru: "Luxury / Retailtainment", en: "Luxury / Retailtainment" },
    big: { ru: "12 персонажей", en: "12 characters" },
    sub: { ru: "3 дня. 1 Лондон. Юбилейные клиентские дни Portraits", en: "3 days. 1 London. Anniversary Portraits client days" },
    task: {
      ru: "Адаптировать литературную вселенную Portraits к формату клиентских дней в ЛЭТУАЛЬ, объединив юбилейную коммуникацию с персонализированным покупательским опытом.",
      en: "Adapt the literary universe of Portraits to Letual client days, pairing the anniversary communication with a personalised shopping experience.",
    },
    solution: {
      ru: "Парфюмерные корнеры, стилизованные под лондонские кварталы, с индивидуальными флористическими палитрами персонажей и искусством paper-cutting: мастер вручную создаёт силуэт гостя, превращая его в нового героя коллекции.",
      en: "Perfume corners styled as London neighbourhoods, with each character's own floral palette and paper-cutting art: an artist hand-cuts the guest's silhouette, turning them into a new character of the collection.",
    },
    role: {
      ru: "Разработка локальной креативной концепции, интерпретация характеров персонажей через флористику и визуальные коды, разработка механик персонализации и авторский копирайтинг.",
      en: "A local creative concept, interpreting character personalities through floristry and visual codes, personalisation mechanics and original copywriting.",
    },
  },
];
