import { Facebook, Instagram, Linkedin } from "lucide-react";
import TerraButton from "./button";
import { useNavigate ,Link } from "@tanstack/react-router";


export default function Footer() {
    const navigate = useNavigate();

    const handleClick = () => {
  navigate({ to: '/contact' }) // e.g., '/about', '/dashboard', etc.
}
  return (
    <div>
    {/* Dextop View     */}
    <div className="hidden md:grid md:grid-cols-4 font-lufga container mx-auto">
        <div className="flex flex-col px-4 gap-4 items-start justify-start">
            <img className="w-[102px] h-[65px] object-cover" alt="" src="hero/Frame 9.png" />
             <a className=" [text-decoration:underline]  font-semibold text-wrap " href="mailto:contact@terracodedev.com" target="_blank">contact@terracodedev.com</a>
             <TerraButton onClick={handleClick}/>
        </div>
        <div className="flex flex-col px-4 gap-4 items-start justify-start">
            <h1 className="font-bold">Company</h1>
            <div className="flex flex-col gap-2">
                <Link to="/contact" className="hover:text-amber-500">Contact Us</Link>
                <Link to="/career" className="hover:text-amber-500">Careers</Link>
                <Link to="/digitalportfolio" className="hover:text-amber-500">Portfolio</Link>
                <Link to="/about" className="hover:text-amber-500">Team</Link>
                <Link to="/articles" className="hover:text-amber-500">Article Page</Link>
                <Link to="/pricing" className="hover:text-amber-500">Pricing Packages</Link>
            </div>
        </div>
        <div className="flex flex-col px-4 gap-4 items-start justify-start">
            <h1 className="font-bold">Services</h1>
            <div className="flex flex-col gap-2">
                <Link to="/" className="hover:text-amber-500">UI/UX Design</Link>
                <Link to="/website-solutions" className="hover:text-amber-500">Web Application</Link>
                <Link to="/mobile-apps" className="hover:text-amber-500">Mobile Application</Link>
                <Link to="/ai-solutions" className="hover:text-amber-500">Artificial Intelligence</Link>
                <Link to="/business-softwares" className="hover:text-amber-500">Business Software</Link>
                <Link to="/cloud-solutions" className="hover:text-amber-500">Cloude Services</Link>
            </div>
        </div>
        <div className="flex flex-col px-4  items-start justify-between">
            <div className="flex flex-col gap-4">
                <div className="self-stretch flex flex-row items-center justify-start gap-4">
                    <img className="w-9 relative h-9 overflow-hidden shrink-0" alt="" src="sl.png" />
                    <div className=" relative font-semibold ">`Terracode Private Limited, </div>
                </div>
                <div className=" relative text-base leading-6 inline-block">
                    <a href="https://maps.app.goo.gl/QKy9ety7Cet7NC4JA" target="_blank">
                        <p className="m-0">3rd Floor, No. 274, High Level Road,</p>
                        <p className="m-0">Maharagama, Sri Lanka</p>
                    </a>
                </div>
                <div className="self-stretch relative tracking-[0.04px] leading-6 font-semibold" >
                    <a href="tel:+9477 582 4406">(+94) 77 582 4406</a>
                </div>
            </div>
            <div className=" h-8 flex flex-row items-center justify-start gap-6">
                <a href="https://www.facebook.com/terracodedev" target="_blank" rel="noopener noreferrer" className="hover:bg-blue-500 rounded-md p-2"><Facebook/></a>
                {/* <a href="https://twitter.com/terracodedev" target="_blank" rel="noopener noreferrer"><Twitter/></a> */}
                 <a href="https://instagram.com/terracode.team" target="_blank" rel="noopener noreferrer " className="hover:bg-pink-400 rounded-md p-2"><Instagram/></a>
                <a href="https://www.linkedin.com/company/terracodedev" target="_blank" rel="noopener noreferrer" className="hover:bg-blue-500 rounded-md p-2"><Linkedin/></a>
               
            </div>
        </div>
        
    </div>
    <div className="hidden md:flex flex-col items-center justify-center gap-4 py-4 bg-neutral-800 mx-4 mt-4">
            <p className="m-0"> © {new Date().getFullYear()} Terracode Private Limited. All rights reserved.</p>
    </div>

    {/* Mobile View */}
    <div className="flex flex-col md:hidden  gap-4 items-center justify-center font-lufga mt-6">
        <div className="flex flex-col items-center justify-center gap-4">
            <img className="w-[130px] object-cover" alt="" src="hero/Frame 9.png" />
            <a className="relative [text-decoration:underline] tracking-[0.04px] leading-6 font-semibold  text-[inherit]" href="mailto:contact@terracodedev.com" target="_blank">contact@terracodedev.com</a>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col px-4 gap-4 items-start justify-start">
            <h1 className="font-bold">Company</h1>
            <div className="flex flex-col gap-2">
               <Link to="/contact">Contact Us</Link>
                <Link to="/career">Careers</Link>
                <Link to="/digitalportfolio">Portfolio</Link>
                <Link to="/about">Team</Link>
                <Link to="/articles">Article Page</Link>
                <Link to="/pricing">Pricing Packages</Link>
            </div>
            </div>
            <div className="flex flex-col px-4 gap-4 items-start justify-start">
                <h1 className="font-bold">Services</h1>
                <div className="flex flex-col gap-2">
                   <Link to="/">UI/UX Design</Link>
                <Link to="/website-solutions">Web Application</Link>
                <Link to="/mobile-apps">Mobile Application</Link>
                <Link to="/ai-solutions">Artificial Intelligence</Link>
                <Link to="/business-softwares">Business Software</Link>
                <Link to="/cloud-solutions">Cloude Services</Link>
                </div>
            </div>  
        </div>
        <div>
            <TerraButton onClick={handleClick}/>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
           <div className="flex flex-col items-center justify-center gap-4">
                <div className="self-stretch flex flex-row items-center justify-start gap-4">
                    <img className="w-9 relative h-9 overflow-hidden shrink-0" alt="" src="sl.png" />
                    <div className=" relative font-semibold ">`Terracode Private Limited, </div>
                </div>
                <div className=" relative text-base leading-6 inline-block text-center">
                    <a href="https://maps.app.goo.gl/QKy9ety7Cet7NC4JA" target="_blank">
                        <p className="m-0">274 3/1 (3rd floor), Highlevel Rd,</p>
                        <p className="m-0">Maharagama, Sri Lanka</p>
                    </a>
                </div>
                <div className=" font-semibold" >
                    <a href="tel:+9477 582 4406">(+94) 77 582 4406</a>
                </div>
            </div>
            <div className=" h-8 flex flex-row items-center justify-center gap-6">
                <a href="https://www.facebook.com/terracodedev" target="_blank" rel="noopener noreferrer"><Facebook/></a>
                {/* <a href="https://twitter.com/terracodedev" target="_blank" rel="noopener noreferrer"><Twitter/></a> */}
                <a href="https://www.linkedin.com/company/terracodedev" target="_blank" rel="noopener noreferrer"><Linkedin/></a>
                <a href="https://instagram.com/terracode.team" target="_blank" rel="noopener noreferrer"><Instagram/></a>
            </div> 
        </div>
        <div className=" flex  items-center justify-center gap-4 px-4 py-4 bg-neutral-800 mx-4 mt-4">
            <p className="text-center"> © {new Date().getFullYear()} Terracode Private Limited. All rights reserved.</p>
        </div>
    </div>
    </div>
  )
}
