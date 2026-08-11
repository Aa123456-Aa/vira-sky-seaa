import { IMAGES } from "../config";
import type { Lang } from "../i18n";

export interface BlogPost {
  slug: string;
  image: string;
  alt: string;
  category: string;
  date: string;
  readTime: number;
  title: string;
  excerpt: string;
  content: string[];
  keyPoints: string[];
}

const en: BlogPost[] = [
  {
    slug: "complete-guide-to-ocean-freight",
    image: IMAGES.blog.ocean,
    alt: "Aerial view of colorful shipping containers at an international port",
    category: "Ocean Freight",
    date: "Jan 15, 2025",
    readTime: 6,
    title: "The Complete Guide to Ocean Freight Shipping",
    excerpt:
      "From FCL to LCL, container types to port selection — everything you need to know before shipping by sea.",
    content: [
      "Ocean freight is the backbone of international trade, moving the vast majority of global cargo. Understanding how it works helps you make better decisions about cost, transit time and reliability.",
      "The two main options are Full Container Load (FCL), where one shipper uses an entire container, and Less than Container Load (LCL), where cargo shares container space with other shipments. FCL is often faster and more cost-effective for large volumes, while LCL suits smaller shipments.",
      "Choosing the right container type — dry, reefer, open top or flat rack — and the right port can significantly affect your shipping experience. Working with an experienced freight forwarder ensures your cargo is matched with the best solution.",
    ],
    keyPoints: [
      "FCL suits large volumes; LCL works well for smaller consignments",
      "Reefer containers are essential for temperature-controlled cargo",
      "Port selection affects transit time and total cost",
      "A reliable forwarder coordinates space, documents and customs",
    ],
  },
  {
    slug: "air-freight-vs-sea-freight",
    image: IMAGES.blog.airVsSea,
    alt: "Airplane at the airport gate during nighttime loading operations",
    category: "Air Freight",
    date: "Jan 8, 2025",
    readTime: 5,
    title: "Air Freight vs Sea Freight: How to Choose the Right Mode",
    excerpt:
      "Speed, cost, cargo type and destination — the key factors that decide whether your shipment should fly or sail.",
    content: [
      "Every shipment has a profile: value, weight, dimensions, deadline and destination. These factors together determine whether air or sea freight is the right choice.",
      "Air freight offers the fastest transit times and is ideal for high-value, time-critical or perishable cargo. Sea freight, on the other hand, provides the most economical solution for large volumes where speed is less critical.",
      "Many businesses combine both modes — using sea freight for regular stock and air freight for urgent replenishment. A professional logistics partner helps you find the right balance for your supply chain.",
    ],
    keyPoints: [
      "Air freight wins on speed; sea freight wins on cost per unit",
      "High-value and perishable goods often justify air transport",
      "Hybrid strategies combine sea freight with emergency air shipments",
      "Transit time, seasonality and destination shape the final decision",
    ],
  },
  {
    slug: "customs-clearance-guide",
    image: IMAGES.blog.customs,
    alt: "Port cranes at sunset representing international customs operations",
    category: "Customs",
    date: "Dec 28, 2024",
    readTime: 7,
    title: "Customs Clearance Explained: A Step-by-Step Guide",
    excerpt:
      "Documentation, duties and declarations — a practical overview of what customs clearance really involves.",
    content: [
      "Customs clearance is the process of moving goods through a country's customs authority. It determines whether your cargo can legally enter or leave a country — and how quickly.",
      "The process typically involves the commercial invoice, packing list, bill of lading or airway bill, and certificates where required. Accurate documentation is the single most important factor in avoiding delays.",
      "An experienced forwarder prepares and verifies documents, classifies your goods correctly and coordinates with customs brokers. This keeps your shipment moving and helps you avoid unexpected costs.",
    ],
    keyPoints: [
      "Accurate documents prevent most clearance delays",
      "Correct tariff classification avoids surprise duties",
      "Customs brokers expedite border procedures",
      "Clear communication with your forwarder is essential",
    ],
  },
  {
    slug: "role-of-iranian-ports-in-global-trade",
    image: IMAGES.blog.ports,
    alt: "Busy shipping port with containers and cranes",
    category: "Ocean Freight",
    date: "Dec 15, 2024",
    readTime: 6,
    title: "The Role of Iranian Ports in Global Trade",
    excerpt:
      "From Shahid Rajaee to Chabahar — how Iran's strategic ports connect international shipping routes.",
    content: [
      "Iran's coastline spans both the Persian Gulf and the Caspian Sea, giving the country access to some of the world's busiest trade corridors.",
      "Shahid Rajaee Port, near the Strait of Hormuz, is the country's main container gateway. Imam Khomeini Port serves bulk and general cargo, while Bushehr, Chabahar, Anzali and Amirabad each serve distinct regional and strategic roles.",
      "For international shippers, choosing the right Iranian port affects transit time, handling and inland connectivity. Local expertise makes this choice significantly easier.",
    ],
    keyPoints: [
      "Shahid Rajaee is Iran's main container port",
      "Imam Khomeini handles significant bulk and general cargo",
      "Chabahar offers access to strategic international corridors",
      "Caspian ports like Anzali and Amirabad serve northern trade",
    ],
  },
  {
    slug: "container-types-explained",
    image: IMAGES.blog.containers,
    alt: "Colorful cargo containers stacked near the ocean",
    category: "Logistics",
    date: "Dec 2, 2024",
    readTime: 5,
    title: "Container Types Explained: Choosing the Right One",
    excerpt:
      "Dry, reefer, open top, flat rack or platform — a practical guide to selecting the right container for your cargo.",
    content: [
      "The right container protects your cargo, simplifies handling and controls cost. Standard dry containers (20ft and 40ft) handle the majority of general cargo.",
      "Reefer containers maintain precise temperatures for perishable goods, while open top and flat rack units accommodate oversized or heavy items that cannot fit through standard doors.",
      "For extreme dimensions, platform containers offer a flat loading surface. Your forwarder can recommend the most practical and economical option based on your cargo's characteristics.",
    ],
    keyPoints: [
      "Dry containers cover most general cargo needs",
      "Reefer units are required for temperature-sensitive goods",
      "Open top and flat rack suit oversized cargo",
      "Platform containers handle extreme dimensions",
    ],
  },
  {
    slug: "road-freight-essentials",
    image: IMAGES.blog.road,
    alt: "Freight truck driving through a dramatic landscape",
    category: "Road Freight",
    date: "Nov 20, 2024",
    readTime: 5,
    title: "Road Freight Essentials: FTL, LTL and Beyond",
    excerpt:
      "Full truckload, less than truckload, reefer and cross-border transit — what road freight really offers.",
    content: [
      "Road freight offers flexibility that other modes cannot match — door-to-door capability, frequent departures and the ability to serve remote destinations.",
      "Full Truckload (FTL) dedicates an entire vehicle to one shipment, ideal for large or time-sensitive cargo. Less than Truckload (LTL) shares capacity across multiple shipments, lowering cost for smaller consignments.",
      "Reefer trucks extend cold-chain logistics by road, while customs bonded transportation keeps transit cargo moving under official supervision.",
    ],
    keyPoints: [
      "FTL gives exclusive use of the vehicle",
      "LTL reduces cost for smaller shipments",
      "Reefer trucks support cold-chain transport",
      "Bonded transportation simplifies cross-border transit",
    ],
  },
];

const fa: BlogPost[] = [
  {
    slug: "complete-guide-to-ocean-freight",
    image: IMAGES.blog.ocean,
    alt: "نمای هوایی از کانتینرهای رنگی در بندر بین‌المللی",
    category: "حمل دریایی",
    date: "۲۵ دی ۱۴۰۳",
    readTime: 6,
    title: "راهنمای کامل حمل‌ونقل دریایی",
    excerpt:
      "از FCL تا LCL، از انواع کانتینر تا انتخاب بندر — همه آنچه پیش از حمل دریایی باید بدانید.",
    content: [
      "حمل دریایی ستون فقرات تجارت بین‌المللی است و بخش بزرگی از محموله‌های جهانی را جابه‌جا می‌کند. درک نحوه عملکرد آن به شما کمک می‌کند تصمیم‌های بهتری درباره هزینه، زمان ترانزیت و قابلیت اطمینان بگیرید.",
      "دو گزینه اصلی عبارت‌اند از بار کامل کانتینری (FCL) که یک فرستنده از کل کانتینر استفاده می‌کند، و بار کمتر از کانتینر (LCL) که محموله با دیگر محموله‌ها فضای کانتینر را به اشتراک می‌گذارد. FCL اغلب برای حجم‌های زیاد سریع‌تر و مقرون‌به‌صرفه‌تر است، در حالی که LCL برای محموله‌های کوچک‌تر مناسب است.",
      "انتخاب نوع کانتینر مناسب — خشک، یخچالی، اوپن‌تاپ یا فلت‌رک — و بندر مناسب می‌تواند تجربه حمل شما را به‌طور چشمگیری تحت تأثیر قرار دهد. همکاری با یک فورواردر مجرب تضمین می‌کند محموله شما با بهترین راهکار هماهنگ شود.",
    ],
    keyPoints: [
      "FCL برای حجم‌های زیاد و LCL برای محموله‌های کوچک‌تر مناسب است",
      "کانتینر یخچالی برای محموله‌های کنترل‌دما ضروری است",
      "انتخاب بندر بر زمان ترانزیت و هزینه کل اثر می‌گذارد",
      "فورواردر مجرب فضا، مدارک و گمرک را هماهنگ می‌کند",
    ],
  },
  {
    slug: "air-freight-vs-sea-freight",
    image: IMAGES.blog.airVsSea,
    alt: "هواپیما در گیت فرودگاه هنگام عملیات بارگیری شبانه",
    category: "حمل هوایی",
    date: "۱۸ دی ۱۴۰۳",
    readTime: 5,
    title: "حمل هوایی یا دریایی؟ چگونه شیوه مناسب را انتخاب کنیم",
    excerpt:
      "سرعت، هزینه، نوع محموله و مقصد — عوامل کلیدی که تعیین می‌کنند بار شما پرواز کند یا با کشتی حرکت کند.",
    content: [
      "هر محموله ویژگی‌های خاص خود را دارد: ارزش، وزن، ابعاد، مهلت و مقصد. این عوامل با هم مشخص می‌کنند که حمل هوایی یا دریایی انتخاب درست است.",
      "حمل هوایی سریع‌ترین زمان ترانزیت را ارائه می‌دهد و برای محموله‌های باارزش، حساس به زمان یا فاسدشدنی ایده‌آل است. حمل دریایی در مقابل، اقتصادی‌ترین راهکار را برای حجم‌های زیاد فراهم می‌کند که سرعت در آن‌ها کمتر حیاتی است.",
      "بسیاری از کسب‌وکارها هر دو شیوه را ترکیب می‌کنند — حمل دریایی برای موجودی منظم و حمل هوایی برای تأمین فوری. یک شریک لجستیکی حرفه‌ای به شما کمک می‌کند تعادل درست را برای زنجیره تأمین خود بیابید.",
    ],
    keyPoints: [
      "حمل هوایی در سرعت و حمل دریایی در هزینه بر واحد برتری دارد",
      "کالاهای باارزش و فاسدشدنی اغلب حمل هوایی را توجیه می‌کنند",
      "استراتژی ترکیبی، حمل دریایی را با ارسال هوایی اضطراری ترکیب می‌کند",
      "زمان ترانزیت، فصل و مقصد تصمیم نهایی را شکل می‌دهند",
    ],
  },
  {
    slug: "customs-clearance-guide",
    image: IMAGES.blog.customs,
    alt: "جرثقیل‌های بندری هنگام غروب نماد عملیات گمرکی بین‌المللی",
    category: "گمرک",
    date: "۸ دی ۱۴۰۳",
    readTime: 7,
    title: "ترخیص گمرکی به زبان ساده: راهنمای گام‌به‌گام",
    excerpt:
      "مدارک، عوارض و اظهارنامه‌ها — مروری عملی بر آنچه ترخیص گمرکی واقعاً در بر دارد.",
    content: [
      "ترخیص گمرکی فرآیند عبور کالا از مقام گمرکی یک کشور است. این فرآیند تعیین می‌کند محموله شما به‌صورت قانونی وارد یا خارج می‌شود — و با چه سرعتی.",
      "این فرآیند معمولاً شامل فاکتور تجاری، لیست عدل‌بندی، بارنامه دریایی یا هوایی و در صورت نیاز گواهی‌هاست. صحت مدارک مهم‌ترین عامل در جلوگیری از تأخیر است.",
      "یک فورواردر مجرب مدارک را تهیه و بررسی می‌کند، کالا را به‌درستی طبقه‌بندی و با کارگزاران گمرکی هماهنگ می‌کند. این کار محموله شما را در حرکت نگه می‌دارد و از هزینه‌های غیرمنتظره جلوگیری می‌کند.",
    ],
    keyPoints: [
      "مدارک دقیق از بیشتر تأخیرهای ترخیص جلوگیری می‌کند",
      "طبقه‌بندی صحیح تعرفه از عوارض غیرمنتظره جلوگیری می‌کند",
      "کارگزاران گمرکی رویه‌های مرزی را تسریع می‌کنند",
      "ارتباط شفاف با فورواردر ضروری است",
    ],
  },
  {
    slug: "role-of-iranian-ports-in-global-trade",
    image: IMAGES.blog.ports,
    alt: "بندر کانتینری پرتردد با جرثقیل‌های بارگیری",
    category: "حمل دریایی",
    date: "۲۵ آذر ۱۴۰۳",
    readTime: 6,
    title: "نقش بنادر ایران در تجارت جهانی",
    excerpt:
      "از شهید رجایی تا چابهار — چگونه بنادر استراتژیک ایران مسیرهای تجاری بین‌المللی را به هم متصل می‌کنند.",
    content: [
      "خط ساحلی ایران هم خلیج فارس و هم دریای خزر را در بر می‌گیرد و به کشور دسترسی به برخی از شلوغ‌ترین کریدورهای تجاری جهان را می‌دهد.",
      "بندر شهید رجایی در نزدیکی تنگه هرمز، دروازه اصلی کانتینری کشور است. بندر امام خمینی به محموله‌های فله و عمومی خدمات می‌دهد و بوشهر، چابهار، انزلی و امیرآباد هر کدام نقش‌های منطقه‌ای و استراتژیک متمایزی دارند.",
      "برای حمل‌کنندگان بین‌المللی، انتخاب بندر مناسب ایران بر زمان ترانزیت، عملیات و اتصال داخلی اثر می‌گذارد. تخصص محلی این انتخاب را بسیار آسان‌تر می‌کند.",
    ],
    keyPoints: [
      "شهید رجایی بندر اصلی کانتینری ایران است",
      "امام خمینی حجم قابل‌توجهی فله و کالای عمومی را مدیریت می‌کند",
      "چابهار دسترسی به کریدورهای استراتژیک بین‌المللی فراهم می‌کند",
      "بنادر خزری مانند انزلی و امیرآباد به تجارت شمالی خدمت می‌کنند",
    ],
  },
  {
    slug: "container-types-explained",
    image: IMAGES.blog.containers,
    alt: "کانتینرهای باری رنگی در کنار دریا",
    category: "لجستیک",
    date: "۱۲ آذر ۱۴۰۳",
    readTime: 5,
    title: "انواع کانتینر؛ راهنمای انتخاب کانتینر مناسب",
    excerpt:
      "خشک، یخچالی، اوپن‌تاپ، فلت‌رک یا پلتفرم — راهنمایی عملی برای انتخاب کانتینر درست برای محموله شما.",
    content: [
      "کانتینر مناسب از محموله شما محافظت می‌کند، جابه‌جایی را ساده و هزینه را کنترل می‌کند. کانتینرهای خشک استاندارد (۲۰ و ۴۰ فوت) بیشتر محموله‌های عمومی را پوشش می‌دهند.",
      "کانتینرهای یخچالی دمای دقیق را برای کالاهای فاسدشدنی حفظ می‌کنند، در حالی که واحدهای اوپن‌تاپ و فلت‌رک برای اقلام بزرگ یا سنگینی که از درب استاندارد عبور نمی‌کنند مناسب‌اند.",
      "برای ابعاد استثنایی، کانتینرهای پلتفرم سطح بارگیری صاف ارائه می‌دهند. فورواردر شما می‌تواند بر اساس ویژگی‌های محموله، عملی‌ترین و اقتصادی‌ترین گزینه را پیشنهاد دهد.",
    ],
    keyPoints: [
      "کانتینر خشک بیشتر نیازهای محموله عمومی را پوشش می‌دهد",
      "واحد یخچالی برای کالاهای حساس به دما ضروری است",
      "اوپن‌تاپ و فلت‌رک برای بارهای بزرگ مناسب‌اند",
      "پلتفرم برای ابعاد استثنایی استفاده می‌شود",
    ],
  },
  {
    slug: "road-freight-essentials",
    image: IMAGES.blog.road,
    alt: "کامیون باری در حال حرکت در منظره‌ای چشمگیر",
    category: "حمل جاده‌ای",
    date: "۳۰ آبان ۱۴۰۳",
    readTime: 5,
    title: "اصول حمل جاده‌ای: FTL، LTL و فراتر از آن",
    excerpt:
      "بار کامل، بار ترکیبی، یخچالی و ترانزیت فرامرزی — آنچه حمل جاده‌ای واقعاً ارائه می‌دهد.",
    content: [
      "حمل جاده‌ای انعطافی را ارائه می‌دهد که شیوه‌های دیگر نمی‌توانند — قابلیت درب‌به‌درب، حرکت‌های مکرر و امکان خدمت به مقاصد دور.",
      "بار کامل کامیون (FTL) کل وسیله نقلیه را به یک محموله اختصاص می‌دهد و برای بارهای بزرگ یا حساس به زمان ایده‌آل است. بار کمتر از کامیون (LTL) ظرفیت را میان چند محموله به اشتراک می‌گذارد و برای محموله‌های کوچک‌تر هزینه را کاهش می‌دهد.",
      "کامیون‌های یخچالی زنجیره سرد را به جاده گسترش می‌دهند و حمل ترانزیتی تحت نظارت گمرک، بار ترانزیتی را در مسیر حرکت نگه می‌دارد.",
    ],
    keyPoints: [
      "FTL استفاده اختصاصی از وسیله نقلیه را فراهم می‌کند",
      "LTL هزینه محموله‌های کوچک‌تر را کاهش می‌دهد",
      "کامیون یخچالی از حمل زنجیره سرد پشتیبانی می‌کند",
      "حمل ترانزیتی، عبور فرامرزی را ساده می‌کند",
    ],
  },
];

export const blogData: Record<Lang, BlogPost[]> = { en, fa };
