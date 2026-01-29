
import React, { createContext, useContext, ReactNode } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Youtube, MessageCircle, Phone, Mail, MapPin, ChevronRight, Settings } from 'lucide-react';
import { useCMS } from './store';
import { SiteData } from './types';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Curriculum from './pages/Curriculum';
import Board from './pages/Board';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

// Context
const CMSContext = createContext<ReturnType<typeof useCMS> | null>(null);

export const useSiteData = () => {
  const context = useContext(CMSContext);
  if (!context) throw new Error("useSiteData must be used within CMSProvider");
  return context;
};

const Header = () => {
  const { data } = useSiteData();
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: '홈', path: '/' },
    { name: 'PJ 소개', path: '/about' },
    { name: '커리큘럼', path: '/curriculum' },
    { name: '공지사항/팁', path: '/board' },
    { name: '상담/오시는길', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-black text-mspjBlue tracking-tighter">PJ</span>
            <div className="h-6 w-[2px] bg-gray-300"></div>
            <span className="text-lg font-bold text-gray-800 tracking-tight">박정어학원</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path ? 'text-mspjBlue' : 'text-gray-500 hover:text-mspjBlue'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/admin" className="p-2 text-gray-400 hover:text-mspjBlue transition-colors">
              <Settings size={20} />
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-gray-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 top-20 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-semibold text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/admin"
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-2 px-3 py-4 text-base font-semibold text-mspjBlue bg-blue-50 rounded-lg"
              >
                <Settings size={18} />
                <span>관리자 대시보드</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  const { data } = useSiteData();
  const { settings } = data;

  return (
    <footer className="bg-mspjDark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-black mb-6 tracking-tighter text-white">{settings.academyName}</h2>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              박정어학원은 글로벌 역량을 갖춘 미래 인재를 양성하기 위해 최고의 교육 환경과 시스템을 제공합니다.
            </p>
            <div className="flex space-x-4">
              <a href={settings.instaLink} className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href={settings.youtubeLink} className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Youtube size={20} />
              </a>
              <a href={settings.kakaoLink} className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center space-x-3">
                <Phone size={16} />
                <span>{settings.contactPhone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} />
                <span>{settings.contactEmail}</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>{settings.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Programs</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/curriculum" className="hover:text-white transition-colors">Active Listening</Link></li>
              <li><Link to="/curriculum" className="hover:text-white transition-colors">Persuasive Speaking</Link></li>
              <li><Link to="/curriculum" className="hover:text-white transition-colors">Academic Writing</Link></li>
              <li><Link to="/curriculum" className="hover:text-white transition-colors">Test Prep (TOEFL/IELTS)</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2024 {settings.academyName}. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  const cms = useCMS();

  return (
    <CMSContext.Provider value={cms}>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/board" element={<Board />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Layout>
      </HashRouter>
    </CMSContext.Provider>
  );
};

export default App;
