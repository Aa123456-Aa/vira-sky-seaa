import {
  ClipboardList,
  Ship,
  Truck,
  Plane,
  Route,
  Boxes,
  DoorOpen,
  TrainFront,
  type LucideIcon,
} from "lucide-react";
import { IMAGES } from "../config";
import type { Lang } from "../i18n";

export interface ServiceFeature {
  title: string;
  text: string;
}

export interface ServiceItem {
  slug: string;
  icon: LucideIcon;
  image: string;
  alt: string;
  title: string;
  tagline: string;
  short: string;
  description: string[];
  features: ServiceFeature[];
  benefits: string[];
  ports?: string[];
}

const en: ServiceItem[] = [
  {
    slug: "consulting-services",
    icon: ClipboardList,
    image: IMAGES.services.consulting,
    alt: "Logistics consulting team planning transportation solutions",
    title: "Consulting Services",
    tagline: "Strategic logistics consulting for smarter supply chains.",
    short:
      "Expert guidance on logistics planning, transportation strategy and shipment solutions.",
    description: [
      "Vira Sky Sea Co's consulting services help businesses plan and optimize their international transportation. Our team analyzes your cargo profile, routes and budget to recommend the most efficient and cost-effective shipping solution.",
      "From transportation planning to documentation and shipment solutions, we support you at every decision point — so your supply chain runs smoothly and your cargo moves with confidence.",
    ],
    features: [
      {
        title: "Logistics Consulting",
        text: "Professional advice on structuring your logistics and supply chain operations.",
      },
      {
        title: "Transportation Planning",
        text: "Route, mode and carrier selection based on your cargo profile and budget.",
      },
      {
        title: "Shipment Solutions",
        text: "Practical, end-to-end solutions for single shipments or regular volumes.",
      },
      {
        title: "Cost Analysis",
        text: "Transparent evaluation of freight costs across modes and routes.",
      },
      {
        title: "Documentation & Compliance",
        text: "Guidance on shipping documents, incoterms and customs requirements.",
      },
      {
        title: "Mode Optimization",
        text: "The right balance of speed, cost and reliability for every cargo.",
      },
    ],
    benefits: [
      "Save time and cost with the right transport strategy",
      "Clear guidance on incoterms and documentation",
      "Reduce risk with professional planning",
      "Dedicated expert support from inquiry to delivery",
      "Transparent, competitive quotations",
    ],
  },
  {
    slug: "ocean-freight",
    icon: Ship,
    image: IMAGES.services.ocean,
    alt: "Container ship being unloaded at an international port",
    title: "Ocean Freight",
    tagline: "Complete ocean freight forwarding through global and Iranian ports.",
    short:
      "FCL, LCL, reefer, flat rack and DG cargo — arranged with major shipping lines via Iran's key ports.",
    description: [
      "We provide ocean freight forwarding for dry and specialized cargo worldwide. From full container loads (FCL) to consolidated shipments (LCL), our team books space, manages documentation and coordinates every step with shipping lines and port agents.",
      "We handle a wide range of container types — dry, general purpose, reefer, flat rack, open top and platform — as well as dangerous goods (DG / IMO), bulk shipments and project cargo through Iran's main commercial and strategic ports.",
    ],
    features: [
      { title: "Dry Containers", text: "Standard 20ft and 40ft units for general cargo." },
      { title: "General Purpose Containers", text: "Versatile GP units for a broad range of goods." },
      { title: "Reefer Containers", text: "Temperature-controlled units for perishable cargo." },
      { title: "Flat Rack", text: "Open-sided units for oversized and heavy cargo." },
      { title: "Open Top", text: "Top-loading containers for tall or bulky items." },
      { title: "Platform Containers", text: "Flat platforms for extreme dimensions and weights." },
      { title: "Dangerous Goods (DG / IMO)", text: "Certified handling of hazardous cargo per IMO rules." },
      { title: "Bulk Shipments", text: "Breakbulk and bulk cargo solutions beyond containers." },
      { title: "FCL — Full Container Load", text: "Dedicated containers for single shippers." },
      { title: "LCL — Less than Container Load", text: "Cost-efficient shared-container consolidation." },
    ],
    benefits: [
      "Competitive ocean freight rates with major shipping lines",
      "Flexible sailing schedules and transshipment options",
      "Professional DG / IMO cargo handling",
      "Door-to-door integration with road and rail",
      "Clear documentation and customs coordination",
      "Coverage of Iran's main commercial and strategic ports",
    ],
    ports: [
      "Shahid Rajaee Port",
      "Imam Khomeini Port",
      "Bushehr Port",
      "Chabahar Port",
      "Anzali Port",
      "Amirabad Port",
    ],
  },
  {
    slug: "road-freight",
    icon: Truck,
    image: IMAGES.services.road,
    alt: "Freight truck traveling on a scenic international highway",
    title: "Road Freight",
    tagline: "International and domestic road transportation across borders.",
    short:
      "FTL, LTL, reefer trucks, transit and customs bonded transportation — including ADR and out-of-gauge cargo.",
    description: [
      "Our road freight services cover international trucking and domestic transportation with a modern, reliable fleet. Whether you need a full truckload (FTL), less than truckload (LTL) or temperature-controlled reefer trucks, we plan every journey carefully.",
      "We also specialize in transit services, customs bonded transportation and dangerous goods under ADR regulations — as well as in-gauge and out-of-gauge cargo requiring special equipment and permits.",
    ],
    features: [
      { title: "International Trucking", text: "Cross-border road transport to regional markets." },
      { title: "Domestic Trucking", text: "Reliable overland movement within Iran." },
      { title: "FTL — Full Truck Load", text: "Dedicated trucks for single consignments." },
      { title: "LTL — Less than Truck Load", text: "Shared capacity for smaller shipments." },
      { title: "Reefer Trucks", text: "Temperature-controlled road transport." },
      { title: "Transit Services", text: "Coordinated movement through transit corridors." },
      { title: "Customs Bonded Transportation", text: "Bonded movement under customs supervision." },
      { title: "Dangerous Goods & ADR", text: "ADR-compliant handling of hazardous cargo." },
      { title: "In-Gauge Cargo", text: "Standard-dimension cargo handled with efficiency." },
      { title: "Out-of-Gauge Cargo", text: "Oversized cargo with special equipment and escorts." },
    ],
    benefits: [
      "Flexible schedules for time-critical shipments",
      "Door-to-door capability across borders",
      "Cost-effective for regional trade",
      "Expertise in transit and bonded procedures",
      "Secure, professional cargo handling",
    ],
  },
  {
    slug: "air-freight",
    icon: Plane,
    image: IMAGES.services.air,
    alt: "Cargo aircraft on the runway at an international airport",
    title: "Air Freight",
    tagline: "Fast, secure air cargo for time-critical shipments.",
    short:
      "Direct, indirect, courier, consolidation and charter air freight to global destinations.",
    description: [
      "When speed matters, our air freight services move your cargo quickly and securely. We offer direct and indirect air freight, courier services, consolidation and full charter solutions — matched to your deadline and budget.",
      "Our team coordinates bookings, documentation and tracking with trusted airlines, ensuring time-critical shipments reach their destination on schedule.",
    ],
    features: [
      { title: "Direct Air Freight", text: "Direct flights for the fastest possible transit." },
      { title: "Indirect Air Freight", text: "Cost-effective routing via hub connections." },
      { title: "Courier Services", text: "Express door-to-door solutions for urgent parcels." },
      { title: "Consolidation Services", text: "Shared airfreight capacity at better rates." },
      { title: "Charter Services", text: "Dedicated aircraft for special or urgent cargo." },
    ],
    benefits: [
      "Industry-leading transit times",
      "Real-time shipment tracking",
      "Flexible options for every budget",
      "Careful handling of sensitive cargo",
      "Worldwide destination coverage",
    ],
  },
  {
    slug: "transit-services",
    icon: Route,
    image: IMAGES.services.transit,
    alt: "Busy container port handling international transit cargo",
    title: "Transit Services",
    tagline: "Seamless international transit through Iran's trade corridors.",
    short:
      "International transit solutions, cargo movement coordination and logistics support.",
    description: [
      "Iran's strategic location connects regional and international markets. Our transit services coordinate the smooth movement of cargo through these corridors — from entry at the border or port to exit at the final destination.",
      "We manage documentation, customs transit procedures and logistics support, ensuring your cargo moves without delay across the entire route.",
    ],
    features: [
      {
        title: "International Transit Solutions",
        text: "Coordinated transit movement across borders and corridors.",
      },
      {
        title: "Cargo Movement Coordination",
        text: "End-to-end coordination of every leg of the journey.",
      },
      {
        title: "Logistics Support",
        text: "Operational support, updates and problem-solving on route.",
      },
      {
        title: "Customs Transit Documentation",
        text: "Accurate transit and customs paperwork, managed for you.",
      },
      {
        title: "Route Planning",
        text: "Optimized corridors based on cargo and destination.",
      },
      {
        title: "Multi-Modal Integration",
        text: "Smooth handover between road, rail and sea legs.",
      },
    ],
    benefits: [
      "Smooth border and customs procedures",
      "Reduced transit times through optimized routes",
      "Single point of coordination for multi-leg journeys",
      "Professional handling of transit documentation",
      "Reliable logistics support throughout",
    ],
  },
  {
    slug: "project-logistic",
    icon: Boxes,
    image: IMAGES.services.project,
    alt: "Heavy machinery and cranes at an industrial port",
    title: "Project Logistics",
    tagline: "End-to-end coordination for complex project cargo.",
    short:
      "Tailored logistics planning and execution for large-scale and complex shipments.",
    description: [
      "Project logistics demands precision, experience and careful planning. Our team coordinates complex, large-scale shipments — from planning and route surveys to execution and delivery.",
      "We bring together the right equipment, documentation and partners for each project, providing a single point of contact from start to finish.",
    ],
    features: [
      {
        title: "Route & Feasibility Planning",
        text: "Technical surveys and route studies before shipment.",
      },
      {
        title: "Heavy-Lift & Oversized Cargo",
        text: "Specialized handling of heavy and out-of-gauge items.",
      },
      {
        title: "Multi-Modal Coordination",
        text: "Seamless sea, air, road and rail integration.",
      },
      {
        title: "Customs & Permits Support",
        text: "Assistance with import, export and transit permits.",
      },
      {
        title: "On-Site Supervision",
        text: "Experienced supervision during loading and discharge.",
      },
      {
        title: "Risk Management",
        text: "Proactive planning to protect schedule and cargo.",
      },
    ],
    benefits: [
      "One dedicated team for your entire project",
      "Engineered solutions for complex cargo",
      "Safe handling of heavy and oversized items",
      "Minimized downtime and delays",
      "Clear communication at every stage",
    ],
  },
  {
    slug: "door-to-door",
    icon: DoorOpen,
    image: IMAGES.services.doorToDoor,
    alt: "Warehouse team preparing cargo for door-to-door delivery",
    title: "Door to Door",
    tagline: "One partner for the entire journey of your cargo.",
    short:
      "Pickup, transportation coordination, customs support and final delivery — all in one service.",
    description: [
      "Door-to-door logistics puts your entire shipment under one roof. We handle pickup at origin, coordinate transportation across all modes, manage customs support and deliver your cargo to the final destination.",
      "With a single point of contact and continuous updates, you always know where your cargo is — and who to call.",
    ],
    features: [
      { title: "Pickup from Origin", text: "Collection of cargo directly from your location." },
      { title: "Transportation Coordination", text: "Seamless multi-modal transport planning." },
      { title: "Customs Support", text: "Documentation and clearance assistance." },
      { title: "Final Delivery", text: "Timely delivery to the consignee's door." },
      { title: "Tracking & Updates", text: "Continuous status updates on your shipment." },
      { title: "Documentation Management", text: "All shipping documents handled for you." },
    ],
    benefits: [
      "One contract, one contact, one responsibility",
      "Significant time savings",
      "Transparent, all-inclusive pricing",
      "Reduced risk of miscommunication",
      "Complete peace of mind",
    ],
  },
  {
    slug: "rail-freight",
    icon: TrainFront,
    image: IMAGES.services.rail,
    alt: "Freight train carrying containers on railway tracks",
    title: "Rail Freight",
    tagline: "Efficient container and bulk rail transportation.",
    short:
      "Container rail, bulk rail and domestic transit solutions for cost-effective inland movement.",
    description: [
      "Rail freight offers a reliable, cost-effective option for volume cargo. We arrange container rail transportation, bulk rail shipments and domestic transit solutions — connecting ports and inland destinations efficiently.",
      "Our team manages schedules, documentation and intermodal handovers, ensuring your cargo moves smoothly between rail, road and sea.",
    ],
    features: [
      { title: "Container Rail Transportation", text: "Block trains and single wagon solutions for containers." },
      { title: "Bulk Rail Transportation", text: "Efficient movement of bulk commodities by rail." },
      { title: "Domestic Transit Solutions", text: "Inland rail connections across the country." },
      { title: "Intermodal Coordination", text: "Smooth handover between rail, road and sea." },
      { title: "Customs Bonded Rail", text: "Bonded movement under customs supervision." },
      { title: "Schedule Management", text: "Reliable planning around rail timetables." },
    ],
    benefits: [
      "Cost-effective for large volumes",
      "Reliable scheduled departures",
      "Lower environmental impact",
      "Strong inland connectivity",
      "Reduced road congestion and risk",
    ],
  },
];

const fa: ServiceItem[] = [
  {
    slug: "consulting-services",
    icon: ClipboardList,
    image: IMAGES.services.consulting,
    alt: "تیم مشاوره لجستیک در حال برنامه‌ریزی راهکارهای حمل‌ونقل",
    title: "خدمات مشاوره‌ای",
    tagline: "مشاوره لجستیک استراتژیک برای زنجیره تأمین هوشمندتر.",
    short: "راهنمایی تخصصی در برنامه‌ریزی حمل‌ونقل، استراتژی حمل و راهکارهای محموله.",
    description: [
      "خدمات مشاوره‌ای ویرا آسمان دریا به کسب‌وکارها در برنامه‌ریزی و بهینه‌سازی حمل‌ونقل بین‌المللی کمک می‌کند. تیم ما مشخصات محموله، مسیرها و بودجه شما را تحلیل کرده و کارآمدترین و مقرون‌به‌صرفه‌ترین راهکار حمل را پیشنهاد می‌دهد.",
      "از برنامه‌ریزی حمل‌ونقل تا مدارک و راهکارهای محموله، در هر مرحله از تصمیم‌گیری همراه شما هستیم — تا زنجیره تأمین شما روان و محموله شما با اطمینان جابه‌جا شود.",
    ],
    features: [
      { title: "مشاوره لجستیک", text: "توصیه‌های حرفه‌ای برای ساختاردهی عملیات لجستیک و زنجیره تأمین." },
      { title: "برنامه‌ریزی حمل‌ونقل", text: "انتخاب مسیر، شیوه حمل و ناوگان بر اساس محموله و بودجه." },
      { title: "راهکارهای محموله", text: "راهکارهای عملی سرتاسری برای حمل‌های تکی یا حجم‌های منظم." },
      { title: "تحلیل هزینه", text: "ارزیابی شفاف هزینه‌های حمل در شیوه‌ها و مسیرهای مختلف." },
      { title: "مدارک و انطباق", text: "راهنمایی درباره اسناد حمل، اینکوترمز و الزامات گمرکی." },
      { title: "بهینه‌سازی شیوه حمل", text: "تعادل مناسب سرعت، هزینه و قابلیت اطمینان برای هر محموله." },
    ],
    benefits: [
      "صرفه‌جویی در زمان و هزینه با استراتژی حمل صحیح",
      "راهنمایی شفاف درباره اینکوترمز و مدارک",
      "کاهش ریسک با برنامه‌ریزی حرفه‌ای",
      "پشتیبانی تخصصی از استعلام تا تحویل",
      "استعلام قیمت شفاف و رقابتی",
    ],
  },
  {
    slug: "ocean-freight",
    icon: Ship,
    image: IMAGES.services.ocean,
    alt: "کشتی کانتینری در حال تخلیه در بندر بین‌المللی",
    title: "حمل‌ونقل دریایی",
    tagline: "حمل دریایی کامل از طریق بنادر جهانی و ایرانی.",
    short:
      "FCL، LCL، یخچالی، فلت‌رک و کالای خطرناک — با هماهنگی خطوط کشتیرانی معتبر از طریق بنادر کلیدی ایران.",
    description: [
      "ما حمل دریایی را برای محموله‌های خشک و تخصصی در سراسر جهان ارائه می‌دهیم. از بار کامل کانتینری (FCL) تا محموله‌های ترکیبی (LCL)، تیم ما فضا را رزرو کرده، مدارک را مدیریت و هر مرحله را با خطوط کشتیرانی و نمایندگان بندری هماهنگ می‌کند.",
      "ما طیف گسترده‌ای از کانتینرها — خشک، عمومی، یخچالی، فلت‌رک، اوپن‌تاپ و پلتفرم — و همچنین کالای خطرناک (DG / IMO)، محموله‌های فله و بارهای پروژه‌ای را از طریق بنادر اصلی تجاری و استراتژیک ایران مدیریت می‌کنیم.",
    ],
    features: [
      { title: "کانتینر خشک", text: "واحدهای استاندارد ۲۰ و ۴۰ فوت برای محموله عمومی." },
      { title: "کانتینر GP", text: "واحدهای چندمنظوره برای طیف وسیعی از کالاها." },
      { title: "کانتینر یخچالی", text: "واحدهای کنترل دما برای محموله‌های فاسدشدنی." },
      { title: "فلت‌رک", text: "واحدهای بدون دیوار برای بارهای بزرگ و سنگین." },
      { title: "اوپن‌تاپ", text: "کانتینرهای بارگیری از بالا برای اقلام بلند و حجیم." },
      { title: "کانتینر پلتفرم", text: "سکوهای تخت برای ابعاد و وزن‌های استثنایی." },
      { title: "کالای خطرناک (DG / IMO)", text: "حمل تأییدشده کالای خطرناک طبق قوانین IMO." },
      { title: "محموله فله", text: "راهکارهای بریک‌بالک و فله فراتر از کانتینر." },
      { title: "FCL — بار کامل", text: "کانتینر اختصاصی برای یک فرستنده." },
      { title: "LCL — بار ترکیبی", text: "ترکیب مقرون‌به‌صرفه در کانتینر مشترک." },
    ],
    benefits: [
      "نرخ‌های رقابتی حمل دریایی با خطوط کشتیرانی معتبر",
      "برنامه حرکت منعطف و گزینه‌های ترانشیپ",
      "حمل حرفه‌ای کالای خطرناک (DG / IMO)",
      "یکپارچگی درب‌به‌درب با حمل جاده‌ای و ریلی",
      "مدارک شفاف و هماهنگی گمرکی",
      "پوشش بنادر اصلی تجاری و استراتژیک ایران",
    ],
    ports: [
      "بندر شهید رجایی",
      "بندر امام خمینی",
      "بندر بوشهر",
      "بندر چابهار",
      "بندر انزلی",
      "بندر امیرآباد",
    ],
  },
  {
    slug: "road-freight",
    icon: Truck,
    image: IMAGES.services.road,
    alt: "کامیون باری در جاده بین‌المللی",
    title: "حمل‌ونقل جاده‌ای",
    tagline: "حمل‌ونقل جاده‌ای بین‌المللی و داخلی در سراسر مرزها.",
    short:
      "FTL، LTL، کامیون یخچالی، ترانزیت و حمل ترانزیتی گمرکی — شامل کالای خطرناک ADR و بارهای خارج از گِیج.",
    description: [
      "خدمات حمل جاده‌ای ما شامل حمل بین‌المللی و داخلی با ناوگان مدرن و قابل اعتماد است. چه به بار کامل کامیون (FTL) نیاز داشته باشید، چه بار کمتر از کامیون (LTL) یا کامیون‌های یخچالی کنترل‌دما، هر مسیر را با دقت برنامه‌ریزی می‌کنیم.",
      "ما همچنین در خدمات ترانزیت، حمل ترانزیتی تحت نظارت گمرک و کالای خطرناک طبق مقررات ADR تخصص داریم — و همچنین بارهای داخل گِیج و خارج از گِیج که به تجهیزات و مجوزهای ویژه نیاز دارند.",
    ],
    features: [
      { title: "حمل بین‌المللی", text: "حمل جاده‌ای فرامرزی به بازارهای منطقه‌ای." },
      { title: "حمل داخلی", text: "جابه‌جایی زمینی مطمئن در سراسر ایران." },
      { title: "FTL — بار کامل", text: "کامیون اختصاصی برای یک محموله." },
      { title: "LTL — بار ترکیبی", text: "ظرفیت مشترک برای محموله‌های کوچک‌تر." },
      { title: "کامیون یخچالی", text: "حمل جاده‌ای با کنترل دما." },
      { title: "خدمات ترانزیت", text: "حرکت هماهنگ در کریدورهای ترانزیتی." },
      { title: "حمل ترانزیتی گمرکی", text: "حرکت تحت نظارت گمرک با سند ترانزیت." },
      { title: "کالای خطرناک و ADR", text: "حمل کالای خطرناک مطابق مقررات ADR." },
      { title: "بار داخل گِیج", text: "محموله‌های استاندارد با کارایی بالا." },
      { title: "بار خارج از گِیج", text: "بارهای بزرگ با تجهیزات و اسکورت ویژه." },
    ],
    benefits: [
      "برنامه‌های منعطف برای محموله‌های حساس به زمان",
      "قابلیت درب‌به‌درب در سراسر مرزها",
      "مقرون‌به‌صرفه برای تجارت منطقه‌ای",
      "تخصص در رویه‌های ترانزیت و ترخیص",
      "حمل ایمن و حرفه‌ای محموله‌ها",
    ],
  },
  {
    slug: "air-freight",
    icon: Plane,
    image: IMAGES.services.air,
    alt: "هواپیمای باری در باند فرودگاه بین‌المللی",
    title: "حمل‌ونقل هوایی",
    tagline: "بار هوایی سریع و امن برای محموله‌های حساس به زمان.",
    short: "حمل هوایی مستقیم، غیرمستقیم، کوریر، ترکیبی و چارتر به مقاصد جهانی.",
    description: [
      "وقتی سرعت اهمیت دارد، خدمات حمل هوایی ما محموله شما را سریع و امن جابه‌جا می‌کند. ما حمل مستقیم و غیرمستقیم، خدمات کوریر، ترکیب بار و راهکارهای چارتر کامل را متناسب با مهلت و بودجه شما ارائه می‌دهیم.",
      "تیم ما رزرو، مدارک و پیگیری را با ایرلاین‌های معتبر هماهنگ می‌کند تا محموله‌های حساس به زمان در موعد مقرر به مقصد برسند.",
    ],
    features: [
      { title: "حمل هوایی مستقیم", text: "پروازهای مستقیم برای سریع‌ترین زمان ترانزیت." },
      { title: "حمل هوایی غیرمستقیم", text: "مسیریابی مقرون‌به‌صرفه از طریق هاب‌ها." },
      { title: "خدمات کوریر", text: "راهکارهای اکسپرس درب‌به‌درب برای مرسولات فوری." },
      { title: "خدمات ترکیب بار", text: "ظرفیت مشترک هوایی با نرخ بهتر." },
      { title: "خدمات چارتر", text: "هواپیمای اختصاصی برای بارهای ویژه یا فوری." },
    ],
    benefits: [
      "کوتاه‌ترین زمان‌های ترانزیت",
      "پیگیری لحظه‌ای محموله",
      "گزینه‌های منعطف برای هر بودجه",
      "حمل دقیق محموله‌های حساس",
      "پوشش مقاصد سراسر جهان",
    ],
  },
  {
    slug: "transit-services",
    icon: Route,
    image: IMAGES.services.transit,
    alt: "بندر کانتینری پرتردد در حال جابه‌جایی بار ترانزیتی",
    title: "خدمات ترانزیت",
    tagline: "ترانزیت بین‌المللی روان در کریدورهای تجاری ایران.",
    short: "راهکارهای ترانزیت بین‌المللی، هماهنگی جابه‌جایی بار و پشتیبانی لجستیک.",
    description: [
      "موقعیت استراتژیک ایران بازارهای منطقه‌ای و بین‌المللی را به هم متصل می‌کند. خدمات ترانزیت ما حرکت روان محموله را در این کریدورها هماهنگ می‌کند — از ورود در مرز یا بندر تا خروج در مقصد نهایی.",
      "ما مدارک، رویه‌های ترانزیت گمرکی و پشتیبانی لجستیک را مدیریت می‌کنیم تا محموله شما بدون تأخیر در کل مسیر حرکت کند.",
    ],
    features: [
      { title: "راهکارهای ترانزیت بین‌المللی", text: "حرکت ترانزیتی هماهنگ در مرزها و کریدورها." },
      { title: "هماهنگی جابه‌جایی بار", text: "هماهنگی سرتاسری هر مرحله از مسیر." },
      { title: "پشتیبانی لجستیک", text: "پشتیبانی عملیاتی، اطلاع‌رسانی و حل مسئله در مسیر." },
      { title: "مدارک ترانزیت گمرکی", text: "تنظیم دقیق اسناد ترانزیت و گمرک برای شما." },
      { title: "برنامه‌ریزی مسیر", text: "کریدورهای بهینه بر اساس محموله و مقصد." },
      { title: "یکپارچگی چندوجهی", text: "تحویل روان بین مراحل جاده، ریل و دریا." },
    ],
    benefits: [
      "رویه‌های روان مرزی و گمرکی",
      "کاهش زمان ترانزیت با مسیرهای بهینه",
      "نقطه هماهنگی واحد برای مسیرهای چندمرحله‌ای",
      "مدیریت حرفه‌ای اسناد ترانزیت",
      "پشتیبانی لجستیک مطمئن در تمام مسیر",
    ],
  },
  {
    slug: "project-logistic",
    icon: Boxes,
    image: IMAGES.services.project,
    alt: "ماشین‌آلات سنگین و جرثقیل در بندر صنعتی",
    title: "لجستیک پروژه",
    tagline: "هماهنگی سرتاسری برای محموله‌های پیچیده پروژه‌ای.",
    short: "برنامه‌ریزی و اجرای لجستیک سفارشی برای محموله‌های بزرگ و پیچیده.",
    description: [
      "لجستیک پروژه به دقت، تجربه و برنامه‌ریزی دقیق نیاز دارد. تیم ما محموله‌های پیچیده و بزرگ را هماهنگ می‌کند — از برنامه‌ریزی و بازرسی مسیر تا اجرا و تحویل.",
      "ما تجهیزات، مدارک و شرکای مناسب را برای هر پروژه گرد هم می‌آوریم و از ابتدا تا انتها یک نقطه تماس واحد فراهم می‌کنیم.",
    ],
    features: [
      { title: "برنامه‌ریزی مسیر و امکان‌سنجی", text: "بازرسی فنی و مطالعات مسیر پیش از حمل." },
      { title: "بار سنگین و خارج از گِیج", text: "حمل تخصصی اقلام سنگین و بزرگ." },
      { title: "هماهنگی چندوجهی", text: "یکپارچگی روان دریا، هوا، جاده و ریل." },
      { title: "پشتیبانی گمرکی و مجوز", text: "همکاری در اخذ مجوزهای واردات، صادرات و ترانزیت." },
      { title: "نظارت در محل", text: "نظارت مجرب هنگام بارگیری و تخلیه." },
      { title: "مدیریت ریسک", text: "برنامه‌ریزی پیش‌دستانه برای حفظ زمان و محموله." },
    ],
    benefits: [
      "یک تیم اختصاصی برای کل پروژه شما",
      "راهکارهای مهندسی‌شده برای محموله پیچیده",
      "حمل ایمن اقلام سنگین و بزرگ",
      "کاهش توقف و تأخیر",
      "ارتباط شفاف در هر مرحله",
    ],
  },
  {
    slug: "door-to-door",
    icon: DoorOpen,
    image: IMAGES.services.doorToDoor,
    alt: "تیم انبار در حال آماده‌سازی بار برای تحویل درب‌به‌درب",
    title: "درب‌به‌درب",
    tagline: "یک شریک برای کل مسیر محموله شما.",
    short: "تحویل‌گیری، هماهنگی حمل‌ونقل، پشتیبانی گمرکی و تحویل نهایی — همه در یک خدمت.",
    description: [
      "لجستیک درب‌به‌درب کل محموله شما را زیر یک سقف قرار می‌دهد. ما تحویل‌گیری در مبدأ، هماهنگی حمل‌ونقل در همه شیوه‌ها، پشتیبانی گمرکی و تحویل به مقصد نهایی را مدیریت می‌کنیم.",
      "با یک نقطه تماس واحد و اطلاع‌رسانی مستمر، همیشه می‌دانید بار شما کجاست — و با چه کسی تماس بگیرید.",
    ],
    features: [
      { title: "تحویل‌گیری از مبدأ", text: "دریافت بار مستقیم از محل شما." },
      { title: "هماهنگی حمل‌ونقل", text: "برنامه‌ریزی حمل چندوجهی بدون درز." },
      { title: "پشتیبانی گمرکی", text: "کمک در مدارک و ترخیص." },
      { title: "تحویل نهایی", text: "تحویل به‌موقع درب گیرنده." },
      { title: "پیگیری و اطلاع‌رسانی", text: "بروزرسانی مستمر وضعیت محموله." },
      { title: "مدیریت مدارک", text: "تمامی اسناد حمل برای شما مدیریت می‌شود." },
    ],
    benefits: [
      "یک قرارداد، یک تماس، یک مسئولیت",
      "صرفه‌جویی قابل توجه در زمان",
      "قیمت‌گذاری شفاف و همه‌جانبه",
      "کاهش ریسک سوءتفاهم",
      "آرامش خاطر کامل",
    ],
  },
  {
    slug: "rail-freight",
    icon: TrainFront,
    image: IMAGES.services.rail,
    alt: "قطار باری حامل کانتینر روی ریل",
    title: "حمل‌ونقل ریلی",
    tagline: "حمل ریلی کارآمد کانتینر و فله.",
    short: "حمل ریلی کانتینر، فله و راهکارهای ترانزیت داخلی برای جابه‌جایی مقرون‌به‌صرفه.",
    description: [
      "حمل ریلی گزینه‌ای مطمئن و مقرون‌به‌صرفه برای محموله‌های حجمی است. ما حمل ریلی کانتینری، محموله‌های فله و راهکارهای ترانزیت داخلی را سازماندهی می‌کنیم — و بنادر و مقاصد داخلی را به‌طور کارآمد به هم متصل می‌کنیم.",
      "تیم ما برنامه‌ها، مدارک و تحویل‌های بین‌وجهی را مدیریت می‌کند تا بار شما بین ریل، جاده و دریا به‌راحتی حرکت کند.",
    ],
    features: [
      { title: "حمل ریلی کانتینر", text: "قطارهای بلوکی و واگن تکی برای کانتینر." },
      { title: "حمل ریلی فله", text: "جابه‌جایی کارآمد کالاهای فله با ریل." },
      { title: "راهکارهای ترانزیت داخلی", text: "اتصال ریلی داخلی در سراسر کشور." },
      { title: "هماهنگی بین‌وجهی", text: "تحویل روان بین ریل، جاده و دریا." },
      { title: "ریل ترانزیتی گمرکی", text: "حرکت تحت نظارت گمرک با سند ترانزیت." },
      { title: "مدیریت برنامه", text: "برنامه‌ریزی مطمئن حول زمان‌بندی ریل." },
    ],
    benefits: [
      "مقرون‌به‌صرفه برای حجم‌های بالا",
      "حرکت‌های برنامه‌ریزی‌شده و منظم",
      "اثر زیست‌محیطی کمتر",
      "اتصال قوی به مناطق داخلی",
      "کاهش ترافیک جاده‌ای و ریسک",
    ],
  },
];

export const servicesData: Record<Lang, ServiceItem[]> = { en, fa };
