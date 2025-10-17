import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({});
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { name: "Beranda", href: "/" },
    {
      name: "Tentang Kami",
      dropdown: [
        { name: "Tentang UMKM Hebat", href: "/tentang-kami" },
        { name: "Tim UMKM Hebat", href: "/tim-kami" },
      ],
    },
    {
      name: "Program",
      dropdown: [
        { name: "Kelas UMKM", href: "https://kelas.umkmhebat.id/" },
        { name: "Pasar UMKM", href: "/pasar-umkm" },
        { name: "Magang & Relawan", href: "/magang-relawan" },
      ],
    },
    {
      name: "Event",
      dropdown: [
        { name: "Webinar", href: "https://webinar.umkmhebat.id/" },
        { name: "Training UMKM", href: "/training-umkm" },
        { name: "Inkubasi", href: "/inkubasi" },
        { name: "UMKM Days", href: "/umkm-days" },
      ],
    },
    { name: "Blog", href: "/blog" },
    {
      name: "Karir",
      href: "/karir",
      dropdown: [
        { name: "Lowongan Kerja Prohire", href: "/karir/prohire" },
        { name: "Lowongan Kerja Magang", href: "/karir/magang" },
        { name: "Lowongan Relawan", href: "/karir/relawan" },
      ],
    },
    { name: "Kontak", href: "/kontak" },
  ];

  useEffect(() => {
    const controlHeader = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setMobileDropdownOpen({});
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const toggleMobileDropdown = (linkName) => {
    setMobileDropdownOpen((prev) => ({
      ...prev,
      [linkName]: !prev[linkName],
    }));
  };

  const NavLink = ({ item, className, onClick }) => {
    const isExternal = item.href.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={item.href}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          {item.name}
        </a>
      );
    }

    return (
      <Link to={item.href} className={className} onClick={onClick}>
        {item.name}
      </Link>
    );
  };

  return (
    <>
      <header
        className={`bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-transform duration-300 ease-in-out ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              UMKM HEBAT
            </Link>

            <nav className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name} className="relative group">
                    <Link
                      to={link.href}
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium p-2"
                    >
                      {link.name}
                      <ChevronDown
                        size={16}
                        className="ml-1 transition-transform duration-300 group-hover:rotate-180"
                      />
                    </Link>
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 w-60 bg-white rounded-md shadow-lg 
                                   opacity-0 transform group-hover:opacity-100 
                                   transition-all duration-300 pointer-events-none group-hover:pointer-events-auto"
                    >
                      <div className="py-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium p-2"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </nav>

            <div className="hidden lg:block relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Cari kelas..."
                className="border border-gray-300 rounded-full py-2 pl-10 pr-4 w-56 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            <button
              className="lg:hidden z-50 relative"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl z-50 transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out overflow-y-auto`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className="text-xl font-bold text-blue-600">Menu</div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col p-4">
          <div className="relative mb-4">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Cari kelas..."
              className="border border-gray-300 rounded-full py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="border-b border-gray-100">
                <button
                  onClick={() => toggleMobileDropdown(link.name)}
                  className="w-full flex justify-between items-center py-4 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                >
                  {link.name}
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      mobileDropdownOpen[link.name] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileDropdownOpen[link.name] && (
                  <div className="pb-4 space-y-2 pl-4">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block py-2 text-sm text-gray-600 hover:text-blue-600 hover:pl-2 transition-all duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="block py-4 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            )
          )}
        </nav>
      </div>
    </>
  );
}
