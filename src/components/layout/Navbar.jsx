import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu as MenuIcon, X, Search, ExternalLink } from "lucide-react";
import Container from "./Container";
import logo from "../../images/logo/logo.png";

const megamenuConfig = [
  { title: "Home", path: "/" },
  {
    title: "What We Do",
    columns: [
      {
        title: "Programmes",
        items: [
          { title: "Climate Resilience Programme", path: "/programs/climate-resilience" },
          { title: "Sustainable Energy Programme", path: "/programs/sustainable-energy" },
          { title: "Environmental Governance", path: "/programs/governance" },
          { title: "Social Ecological Resilience", path: "/programs/social-ecological" },
        ],
      },
      {
        title: "Regional Initiatives",
        items: [
          { title: "Regional Projects", path: "/initiatives/projects" },
          { title: "Capacity Building", path: "/initiatives/capacity" },
          { title: "Policy Engagement", path: "/initiatives/policy" },
        ],
      },
      {
        title: "Focus Areas",
        items: [
          { title: "Climate Change", path: "/focus/climate" },
          { title: "Biodiversity", path: "/focus/biodiversity" },
          { title: "Water & Land Management", path: "/focus/water-land" },
        ],
      },
    ],
  },
  {
    title: "Research & Publications",
    columns: [
      {
        title: "Research",
        items: [
          { title: "Research Papers", path: "/research/papers" },
          { title: "Policy Briefs", path: "/research/policy-briefs" },
          { title: "Reports", path: "/research/reports" },
        ],
      },
      {
        title: "Knowledge Resources",
        items: [
          { title: "OPAC Library", path: "https://opac.hoarec.org", external: true },
          { title: "HoA-ESR Map", path: "/resources/map" },
          { title: "Data & Insights", path: "/resources/data" },
        ],
      },
      {
        title: "Publications",
        items: [
          { title: "Annual Reports", path: "/resources/annual-reports" },
          { title: "Technical Documents", path: "/resources/technical" },
          { title: "Newsletters", path: "/resources/newsletters" },
        ],
      },
    ],
  },
  {
    title: "Stories & News",
    columns: [
      {
        title: "News",
        items: [
          { title: "Latest News", path: "/news" },
          { title: "Events", path: "/events" },
          { title: "Press Releases", path: "/news/press-releases" },
        ],
      },
      {
        title: "Stories",
        items: [
          { title: "Field Stories", path: "/stories/field" },
          { title: "Success Stories", path: "/stories/success" },
          { title: "Impact Highlights", path: "/stories/impact" },
        ],
      },
    ],
  },
  {
    title: "Who We Are",
    columns: [
      {
        title: "Organization",
        items: [
          { title: "About HoAREC", path: "/about" },
          { title: "Vision & Mission", path: "/about#vision" },
          { title: "Strategic Goals", path: "/about#goals" },
        ],
      },
      {
        title: "Leadership",
        items: [
          { title: "Board Members", path: "/about#board" },
          { title: "Management Team", path: "/about#management" },
          { title: "Network Members", path: "/about#network" },
        ],
      },
      {
        title: "Partnerships",
        items: [
          { title: "Partners", path: "/partners" },
          { title: "Collaborations", path: "/collaborations" },
          { title: "Contact Us", path: "/contact" },
        ],
      },
    ],
  },
  {
    title: "Take Action",
    columns: [
      {
        title: "Engage",
        items: [
          { title: "Work With Us", path: "/involved/vacancies" },
          { title: "Vacancies", path: "/involved/vacancies" },
          { title: "Bids", path: "/involved/bids" },
        ],
      },
      {
        title: "Connect",
        items: [
          { title: "Partner With Us", path: "/involved/partnership" },
          { title: "Visit HoAREC HQ", path: "/visit" },
          { title: "Request Collaboration", path: "/contact#collaboration" },
        ],
      },
    ],
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveMegaMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileSection = (title) => {
    setMobileExpanded(prev => ({ ...prev, [title]: !prev[title] }));
  };

  const handleMenuClick = (idx) => {
    if (!megamenuConfig[idx].columns) {
      setActiveMegaMenu(null);
      return;
    }
    setActiveMegaMenu(activeMegaMenu === idx ? null : idx);
  };

  const activeMenuData = activeMegaMenu !== null ? megamenuConfig[activeMegaMenu] : null;

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${scrolled
        ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-stone-100 py-1"
        : "bg-white/70 backdrop-blur-md py-2"
        }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">


        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group shrink-0 py-2 active:scale-95 transition-transform" onClick={() => setActiveMegaMenu(null)}>
          <div className="relative">
            <img
              src={logo}
              alt="HoAREC Logo"
              className="h-10 md:h-11 w-auto object-contain relative z-10"
            />
            <div className="absolute -inset-2 bg-nature-green-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-lg font-black text-nature-green-900 leading-none tracking-tight">HoAREC&N</span>
            <span className="text-[9px] uppercase font-bold text-stone-500 tracking-[0.1em] mt-0.5">Horn of Africa Environment Center</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 h-full">
          {megamenuConfig.map((menu, idx) => (
            <div key={idx} className="relative flex items-center h-full">
              {menu.columns ? (
                <button
                  onClick={() => handleMenuClick(idx)}
                  className={`px-4 py-5 text-[13px] font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 group/link ${activeMegaMenu === idx
                    ? "text-nature-green-700"
                    : "text-stone-600 hover:text-nature-green-600"
                    }`}
                >
                  {menu.title}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-500 ${activeMegaMenu === idx ? "rotate-180 text-nature-green-600" : "group-hover/link:translate-y-0.5"}`} />
                  {activeMegaMenu === idx && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-nature-green-600 rounded-full"></span>
                  )}
                </button>
              ) : (
                <Link
                  to={menu.path}
                  onClick={() => setActiveMegaMenu(null)}
                  className="px-4 py-5 text-[13px] font-bold uppercase tracking-wider text-stone-600 hover:text-nature-green-600 transition-all relative group/link"
                >
                  {menu.title}
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-nature-green-600 scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left rounded-full"></span>
                </Link>
              )}
            </div>
          ))}

          {/* Search Icon */}
          <button className="ml-4 p-2 text-stone-500 hover:text-nature-green-600 transition-colors" onClick={() => setActiveMegaMenu(null)}>
            <Search className="w-5 h-5" />
          </button>
        </nav>

        {/* Mobile Menu Actions */}
        <div className="flex items-center gap-4 lg:hidden">
          <button className="p-2 text-stone-500 hover:text-nature-green-600">
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setActiveMegaMenu(null);
            }}
            className="p-2 text-stone-600 hover:bg-stone-50 rounded-xl transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>


      {/* FLATTENED Mega Menu Panel - Direct child of header to ensure visibility */}
      {activeMenuData && activeMenuData.columns && (
        <div
          className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-t border-stone-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-40 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${activeMegaMenu !== null ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
        >
          <div className="w-full relative">

            <Container className="py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10">
                {activeMenuData.columns.map((col, cIdx) => (
                  <div key={cIdx} className="flex flex-col gap-4">
                    <h3 className="text-xs font-black uppercase text-stone-400 tracking-[0.2em] border-b border-stone-100 pb-2">
                      {col.title}
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {col.items.map((item, iIdx) => (
                        <li key={iIdx}>
                          {item.external ? (
                            <a
                              href={item.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-center justify-between text-[15px] font-semibold text-stone-600 hover:text-nature-blue-600 transition-colors"
                            >
                              {item.title}
                              <ExternalLink className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </a>
                          ) : (
                            <Link
                              to={item.path}
                              onClick={() => setActiveMegaMenu(null)}
                              className="text-[15px] font-semibold text-stone-600 hover:text-nature-green-600 transition-colors block border-l-2 border-transparent hover:border-nature-green-500 hover:pl-3 transition-all duration-300"
                            >
                              {item.title}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Container>
            {/* Decorative Bottom Bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-nature-green-600 via-nature-blue-600 to-nature-green-600"></div>
          </div>
        </div>
      )}

      {/* Backdrop for Desktop Mega Menu */}
      {activeMegaMenu !== null && (
        <div
          className="hidden lg:block fixed inset-0 bg-stone-900/10 backdrop-blur-[2px] z-30 transition-opacity duration-300"
          style={{ top: scrolled ? '58px' : '68px' }}
          onClick={() => setActiveMegaMenu(null)}
        />

      )}

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        style={{ top: scrolled ? '58px' : '68px' }}
        onClick={() => setIsMenuOpen(false)}
      />


      {/* Mobile Menu Panel */}
      <nav
        className={`lg:hidden fixed right-0 bottom-0 w-[85%] max-w-[400px] bg-white shadow-2xl transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ top: scrolled ? '58px' : '68px' }}
      >

        <div className="h-full overflow-y-auto pt-4 pb-24 px-6">
          <div className="flex flex-col divide-y divide-stone-100">
            {megamenuConfig.map((menu, idx) => (
              <div key={idx} className="py-2">
                {menu.columns ? (
                  <div className="flex flex-col">
                    <button
                      onClick={() => toggleMobileSection(menu.title)}
                      className="flex items-center justify-between py-4 w-full text-base font-bold uppercase tracking-wide text-stone-900"
                    >
                      {menu.title}
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileExpanded[menu.title] ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded[menu.title] ? "max-h-[1000px] pb-4" : "max-h-0"}`}>
                      {menu.columns.map((col, cIdx) => (
                        <div key={cIdx} className="mb-6 last:mb-0 ml-4 border-l border-stone-100 pl-4 mt-2">
                          <h4 className="text-xs font-black uppercase text-stone-400 tracking-widest mb-3">
                            {col.title}
                          </h4>
                          <div className="flex flex-col gap-4">
                            {col.items.map((item, iIdx) => (
                              <Link
                                key={iIdx}
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-[15px] font-semibold text-stone-600 hover:text-nature-green-600 active:text-nature-green-700"
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={menu.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-4 text-base font-bold uppercase tracking-wide text-stone-900"
                  >
                    {menu.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 bg-stone-50 border-t border-stone-100">
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-center w-full py-4 bg-nature-green-700 text-white font-bold rounded-lg shadow-lg active:scale-95 transition-all"
          >
            Contact HoAREC
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
