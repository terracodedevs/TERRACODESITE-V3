import { Link } from '@tanstack/react-router'


const navbar={
    links: [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/about' },
        { name: 'Contact', path: '/test' },
        { name: 'Career', path: '/test' },
        { name: 'Pricing', path: '/test' }
    ],
}

export default function Navbar () {
  return (
    <div className="w-full relative flex flex-row items-center justify-between py-0 px-[60px] box-border gap-0 text-left text-xl text-[#8e8e8e] font-lufga">
        <img className="w-[102px] h-[65px] object-cover" alt="" src="Frame 9.png" />
        <div className="[backdrop-filter:blur(11.7px)] rounded-[40px] bg-[#141414] flex flex-row items-center justify-center py-2 px-6 gap-6">
            {navbar.links.map(link => (
            <Link key={link.path} to={link.path}>
                <div className="rounded-[32px] bg-[#141414] hover:bg-black hover:text-amber-600 h-12 flex flex-row items-center justify-center py-3 px-4 box-border">
                    <div className="relative tracking-[0.04px] leading-6 font-light">{link.name}</div>
                </div>
            </Link>
            ))}
        </div>
        <div className="w-48 rounded-[32px] [background:linear-gradient(90deg,_#f56d04,_#fb9709)] h-16 flex flex-row items-center justify-center py-2 px-4 box-border text-white">
            <div className="relative tracking-[0.04px] leading-6 font-semibold">Get a Quote</div>
        </div>
    </div>
  )
}

        
