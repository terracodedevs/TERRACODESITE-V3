import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navbar = {
    links: [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/about' },
        { name: 'Contact', path: '/test' },
        { name: 'Career', path: '/test' },
        { name: 'Pricing', path: '/test' }
    ],
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <div className="w-full relative flex flex-row items-center justify-between  px-4 sm:px-8 lg:px-[60px] box-border text-left text-xl text-[#8e8e8e] font-lufga">
        
        {/* Logo */}
        <img className="w-20 h-12 sm:w-[102px] sm:h-[65px] object-cover" alt="" src="Frame 9.png" />
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex [backdrop-filter:blur(11.7px)] rounded-[40px] bg-[#141414] flex-row items-center justify-center py-2 px-6 gap-6">
            {navbar.links.map(link => (
                <Link key={link.path} to={link.path}>
                    <div className="rounded-[32px] bg-[#141414] hover:bg-black hover:text-amber-600 h-12 flex flex-row items-center justify-center py-3 px-4 box-border transition-colors">
                        <div className="relative tracking-[0.04px] leading-6 font-light">{link.name}</div>
                    </div>
                </Link>
            ))}
        </div>
        
        {/* Desktop CTA Button */}
        <div className="hidden lg:flex w-48 rounded-[32px] [background:linear-gradient(90deg,_#f56d04,_#fb9709)] h-16 flex-row items-center justify-center py-2 px-4 box-border text-white cursor-pointer hover:shadow-lg transition-shadow">
            <div className="relative tracking-[0.04px] leading-6 font-semibold">Get a Quote</div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-lg bg-[#141414] text-white hover:bg-black transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#141414] shadow-xl transform transition-transform duration-300 ease-in-out">
            
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <img className="w-20 h-12 object-cover" alt="" src="Frame 9.png" />
              <button 
                onClick={toggleMenu}
                className="p-2 rounded-lg text-white hover:bg-black transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex flex-col p-6 space-y-4">
              {navbar.links.map(link => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  onClick={toggleMenu}
                  className="block"
                >
                  <div className="rounded-[16px] bg-[#1a1a1a] hover:bg-black hover:text-amber-600 p-4 transition-colors">
                    <div className="relative tracking-[0.04px] leading-6 font-light text-[#8e8e8e]">{link.name}</div>
                  </div>
                </Link>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="mt-6 rounded-[16px] [background:linear-gradient(90deg,_#f56d04,_#fb9709)] p-4 text-center text-white cursor-pointer hover:shadow-lg transition-shadow">
                <div className="relative tracking-[0.04px] leading-6 font-semibold">Get a Quote</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}


