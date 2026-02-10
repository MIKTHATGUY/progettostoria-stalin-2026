import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FileText, Film, HelpCircle, Home, Clock, Map, 
  ChevronDown, Crown, Factory, Skull, Palette, Swords, 
  BookOpen, Menu, X
} from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChaptersOpen, setIsChaptersOpen] = useState(false);
  
  const mainNavItems = [
    { path: "/pravda", label: "PRAVDA", icon: FileText },
    { path: "/cinema", label: "CINEMA", icon: Film },
    { path: "/mappa", label: "GULAG", icon: Map },
    { path: "/quiz", label: "TEST", icon: HelpCircle },
  ];

  const chapters = [
    { path: "/cronologia", label: "Cronologia", icon: Clock },
    { path: "/genesi", label: "I. Genesi", icon: Crown },
    { path: "/economia", label: "II. Economia", icon: Factory },
    { path: "/terrore", label: "III. Terrore", icon: Skull },
    { path: "/cultura", label: "IV. Cultura", icon: Palette },
    { path: "/guerra", label: "V. Guerra", icon: Swords },
    { path: "/tardostalinismo", label: "VI. Fine", icon: Skull },
    { path: "/conclusione", label: "Conclusione", icon: BookOpen },
  ];

  // Hide navigation on homepage
  if (location.pathname === "/") return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 border-b border-[#333333] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-heading text-xl tracking-wider text-[#D22B2B] hover:text-[#E5E5E5] transition-colors"
            data-testid="nav-logo"
          >
            ARCHIVIO 1937
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Chapters Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsChaptersOpen(!isChaptersOpen)}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-heading uppercase tracking-wider transition-all duration-300 border-b-2 ${
                  chapters.some(c => c.path === location.pathname)
                    ? "text-[#D22B2B] border-[#D22B2B]" 
                    : "text-[#A0A0A0] border-transparent hover:text-[#E5E5E5]"
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>CAPITOLI</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isChaptersOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isChaptersOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-56 bg-[#121212] border border-[#333333] shadow-xl z-50"
                  onMouseLeave={() => setIsChaptersOpen(false)}
                >
                  {chapters.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsChaptersOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 text-sm font-body transition-colors ${
                          isActive 
                            ? "bg-[#D22B2B]/10 text-[#D22B2B]" 
                            : "text-[#A0A0A0] hover:bg-[#1E1E1E] hover:text-[#E5E5E5]"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Main Nav Items */}
            {mainNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  data-testid={`nav-${item.label.toLowerCase()}`}
                  className={`flex items-center gap-2 px-3 py-2 text-sm font-heading uppercase tracking-wider transition-all duration-300 border-b-2 ${
                    isActive 
                      ? "text-[#D22B2B] border-[#D22B2B]" 
                      : "text-[#A0A0A0] border-transparent hover:text-[#E5E5E5] hover:border-[#333333]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 text-[#E5E5E5]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0a] border-t border-[#333333] max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-2">
            <p className="font-heading text-[#D22B2B] text-xs tracking-wider py-2">CAPITOLI</p>
            {chapters.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-2 py-3 text-sm font-body ${
                    isActive ? "text-[#D22B2B]" : "text-[#A0A0A0]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
          <div className="px-4 py-2 border-t border-[#333333]">
            <p className="font-heading text-[#D22B2B] text-xs tracking-wider py-2">SEZIONI</p>
            {mainNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-2 py-3 text-sm font-body ${
                    isActive ? "text-[#D22B2B]" : "text-[#A0A0A0]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
