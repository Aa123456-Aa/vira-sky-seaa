import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { WhatsAppIcon } from "./components/icons";
import { SITE } from "./config";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import NotFound from "./pages/NotFound";

function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ScrollToTop />
      <Header />
      {/* Spacer for the fixed header (hero sits underneath it on the home page) */}
      {!isHome && <div className="h-[72px] lg:h-[120px]" aria-hidden="true" />}
      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href={SITE.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="pulse-ring fixed bottom-6 end-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/25 transition-transform duration-300 hover:scale-110"
      >
        <WhatsAppIcon size={26} />
      </a>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <Layout />
      </HashRouter>
    </LanguageProvider>
  );
}
