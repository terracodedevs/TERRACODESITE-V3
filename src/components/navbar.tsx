import { Link } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navbar = {
  links: [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/service' }, // parent dropdown
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
    { name: 'Career', path: '/career' },
    { name: 'Pricing', path: '/pricing' },
  ],
  serviceLinks: [
    { name: 'AI', path: '/ai-solutions' },
    { name: 'Business', path: '/business-softwares' },
    { name: 'Cloud', path: '/cloud-solutions' },
    { name: 'Mobile', path: '/mobile-apps' },
    { name: 'Web', path: '/website-solutions' },
  ],
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => setIsMenuOpen((o) => !o)
  const toggleDropdown = () => setIsDropdownOpen((o) => !o)

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const linkBase =
    `rounded-[32px] h-12 flex items-center justify-center py-3 px-4 transition-colors text-[#8e8e8e] font-light hover:bg-black hover:text-amber-600`
  const linkActive = `[&.active]:text-amber-600  [&.active]:bg-black`

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <div className="w-full relative flex items-center justify-between px-4 sm:px-8 lg:px-[60px] text-xl font-lufga container mx-auto">
        <Link to="/">
          <img className="w-20 h-12 sm:w-[102px] sm:h-[65px]" alt="Logo" src="hero/Frame 9.png" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex bg-[#141414] rounded-[40px] py-2 px-6 gap-6 items-center">
          {navbar.links.map((link) =>
            link.name === "Services" ? (
              <div key={link.name} ref={dropdownRef} className="relative">
                <button
                  onClick={toggleDropdown}
                  className={`${linkBase} ${linkActive} gap-2`}
                >
                  {link.name}
                  <ChevronDown size={18} className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="absolute z-10 left-0 top-full mt-2 bg-[#1f1f1f] shadow-lg rounded-lg overflow-hidden w-48"
                    >
                      {navbar.serviceLinks.map((s) => (
                        <Link
                          key={s.path}
                          to={s.path}
                          className="block px-4 py-2 text-gray-300 hover:bg-black hover:text-amber-500 border-b border-gray-700 last:border-none"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {s.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.path + link.name}
                to={link.path}
                className={`${linkBase} ${linkActive}`}
                activeOptions={{ exact: true }}
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <Link to="/contact">
          <div className="hidden xl:flex w-48 rounded-[32px] bg-gradient-to-r from-[#f56d04] to-[#fb9709] h-16 items-center justify-center text-white cursor-pointer hover:shadow-lg transition-shadow">
            <div className="tracking-[0.04px] leading-6 font-semibold">Get a Quote</div>
          </div>
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="xl:hidden p-2 rounded-full bg-[#141414] text-white hover:bg-black transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden fixed inset-0 z-50 transition-opacity duration-500 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={toggleMenu} />

        <div
          className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#141414] shadow-xl transform transition-transform duration-500 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <img className="w-20 h-12" alt="Logo" src="/hero/Frame 9.png" />
            <button onClick={toggleMenu} className="p-2 rounded-lg text-white hover:bg-black">
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col p-6 space-y-4">
            {navbar.links.map((link) =>
              link.name === "Services" ? (
                <div key={link.name} className="flex flex-col">
                  <button
                    onClick={toggleDropdown}
                    className="rounded-[16px] px-4 py-2 text-gray-300 text-left flex items-center justify-between hover:text-amber-500"
                  >
                    {link.name}
                    <ChevronDown size={18} className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col pl-6 border-l border-gray-700 mt-2 space-y-2"
                      >
                        {navbar.serviceLinks.map((s) => (
                          <Link
                            key={s.path}
                            to={s.path}
                            onClick={() => {
                              setIsDropdownOpen(false)
                              setIsMenuOpen(false)
                            }}
                            className="px-2 py-2 text-gray-300 hover:text-amber-500 border-b border-gray-700 last:border-none"
                          >
                            {s.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={toggleMenu}
                  className="rounded-[16px] px-4 py-2 text-gray-300 hover:text-amber-500"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </>
  )
}
