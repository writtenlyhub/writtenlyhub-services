import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.png";

const navLinks = [
  { 
    name: "Founders", 
    path: "/founders",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
  },
  { 
    name: "HNIs", 
    path: "/hnis",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"/><path d="m18 6 2 2"/><path d="M20 12h4"/><path d="m18 18 2-2"/><path d="M12 22v-4"/><path d="m6 18-2 2"/><path d="M4 12H0"/><path d="m6 6-2-2"/><circle cx="12" cy="12" r="4"/></svg>
  },
  { 
    name: "Consultants and Coaches", 
    path: "/consultants-coaches",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  },
];

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    setIsScrolled(currentY > 10);
    setScrollDirection(currentY > lastScrollY ? "down" : "up");
    setLastScrollY(currentY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  const handleDropdownEnter = (index) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(index);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
    setDropdownTimeout(timeout);
  };

  const toggleMobileDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1,
          y: scrollDirection === "down" && isScrolled ? -100 : 0,
          backgroundColor: isScrolled ? "rgba(2, 33, 80, 0.95)" : "#022150"
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 text-white px-6 py-4 w-full border-b border-white/10 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Writtenly Logo" 
              className="h-12 " 
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8 text-sm font-medium relative">
              {navLinks.map((link, index) => (
                <li
                  className="group relative"
                  key={link.path}
                  onMouseEnter={() => handleDropdownEnter(index)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="flex items-center">
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => 
                        `hover:text-[#E76D18] transition duration-200 px-1 py-2 ${
                          isActive ? "text-[#E76D18]" : "text-white"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="bg-[#E76D18] text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-opacity-90 transition duration-200 whitespace-nowrap"
            >
              Talk to Us
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="focus:outline-none p-1"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-[76px] left-0 w-full px-4 z-40"
          >
            <div className="backdrop-blur-sm bg-[#022150]/95 rounded-b-xl shadow-2xl p-4 space-y-2 border-b border-x border-white/20">
              <ul className="flex flex-col text-sm font-medium divide-y divide-white/10">
                {navLinks.map((link, index) => (
                  <li key={link.path} className="py-2">
                    <div className="flex justify-between items-center">
                      <NavLink
                        to={link.path}
                        onClick={() => setIsMobileOpen(false)}
                        className={({ isActive }) => 
                          `flex items-center gap-2 px-2 py-1 hover:text-[#E76D18] rounded ${
                            isActive ? "text-[#E76D18]" : "text-white"
                          }`
                        }
                      >
                        <span className="text-[#E76D18]">
                          {link.icon}
                        </span>
                        {link.name}
                      </NavLink>
                    </div>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="block w-full text-center bg-[#E76D18] text-white py-2 rounded-full font-medium hover:bg-opacity-90 transition duration-200 mt-4"
              >
                Talk to Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;