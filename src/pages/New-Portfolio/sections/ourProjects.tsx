import { useMemo, useState } from "react"
import ProjectModal from "./popup";


interface Project {
    title: string;
    description: string;
    id: string;
    category: string;
    link?: string;
    img: string;
    videoUrl?: string;
    detailedDescription?: string;
    technologies?: string[];
}

const projects: Project[] = [
    {
        title: "Web Design & Development",
        description: "A modern website for House Of Vision (Pvt) Ltd.",
        id: "1",
        category: "Website",
        link: "https://www.houseofvision.lk/",
        img: "/portfolio/HOV Mockup.png",
        videoUrl: "https://www.youtube.com/embed/L8QG0XBO_Rg?si=qlr6-jMGHiU6u0Hg&rel=0&modestbranding=1&controls=1&playsinline=1&iv_load_policy=3", // Add your video path here
        detailedDescription: "We created a sleek, user-friendly website for House Of Vision, a leading optical retailer. The site features an intuitive design that highlights their extensive range of eyewear products, making it easy for customers to browse and shop online. With a focus on aesthetics and functionality, the website enhances the brand's online presence and provides a seamless shopping experience.",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
        title: "Business Website Solution",
        description: "A modern website for Inpro Industries (Pvt) Ltd.",
        id: "2",
        category: "Website",
        link: "https://www.inproindustries.lk/",
        img: "/portfolio/inpro Mockup.png",
        videoUrl: "https://www.youtube.com/embed/mKQWDR7YILw?si=vYg-T57IKcIJBw1n&rel=0&modestbranding=1&controls=1&playsinline=1&iv_load_policy=3",
        detailedDescription: "For a printing company, we designed a website that showcases their wide range of printing services and solutions. The site highlights their capabilities, provides detailed service information, and ensures potential customers can reach out easily for inquiries and orders.",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
        title: "Business Website Solution",
        description: "A modern website for pure hope (Pvt) Ltd.",
        id: "8",
        category: "Website",
        link: "",
        img: "/portfolio/pure.png",
        videoUrl: "https://www.youtube.com/embed/ILXFMVXBnAU?si=3fsGhOhR10yhfYFf&rel=0&modestbranding=1&controls=1&playsinline=1&iv_load_policy=3",
        detailedDescription: "We developed a modern website for a cleaning service company(pure hope), designed to showcase their full range of services while making it simple for customers to learn more and schedule appointments online. The platform includes an easy booking system, service descriptions, and a clean layout that highlights professionalism and trust.",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
        title: "Web Design & Development",
        description: "Platform for booking single tickets for entire journeys in Transport Services.",
        id: "3",
        category: "Website",
        img: "/portfolio/transit.png",
        videoUrl: "/portfolio/videos/transit-demo.mp4",
        detailedDescription: "An innovative transport booking platform that allows users to book single tickets for entire journeys across multiple transport services. The platform integrates various transport providers and offers a seamless booking experience.",
        technologies: ["React", "Node.js", "MongoDB", "Express.js", "Payment Gateway API"],
    },
    {
        title: "Content Management System",
        description: "CMS for a Cleaning Service Provider",
        id: "4",
        category: "System",
        img: "/portfolio/CMS.png",
        videoUrl: "https://www.youtube.com/embed/oMF84t_iLmg?si=ANHdGSPiLwXbcVc5&rel=0&modestbranding=1&controls=1&playsinline=1&iv_load_policy=3",
        detailedDescription: "We developed a flexible content management system tailored for website management. The platform allows administrators to manage content, upload and update content, and maintain full control over their website in an organized and efficient manner.",
        technologies: ["Next js","ShadCn"],
    },
    {
        title: "Data Management System",
        description: "Intelligent DMS for city-wide data with advanced storage, analytics, and user management.",
        id: "5",
        category: "System",
        img: "/portfolio/polls.png",
        videoUrl: "https://www.youtube.com/embed/RPXH4NsfqZA?si=LGgyLASfTRwuE1JT&rel=0&modestbranding=1&controls=1&playsinline=1&iv_load_policy=3",
        detailedDescription: "An intelligent data management system designed for city-wide data collection, storage, and analysis. Features advanced analytics capabilities, user management, and comprehensive reporting tools for municipal data handling.",
        technologies: ["React", "Golang"],
    },
    {
        title: "Mobile App Design & Development",
        description: "Mobile application for searching for lawyers and attorneys.",
        id: "6",
        category: "Mobile",
        img: "/portfolio/mobileapp.png",
        videoUrl: "https://www.youtube.com/embed/vcVK5zwmnc4?si=kBAZYLG5YiAsk47c&rel=0&modestbranding=1&controls=1&playsinline=1&iv_load_policy=3",
        detailedDescription: "A comprehensive mobile application that connects clients with qualified lawyers and attorneys. The app features advanced search capabilities, lawyer profiles, appointment booking, and secure communication tools.",
        technologies: ["Flutter","Express"],
    },
    {
        title: "Inventory Management System",
        description: "Inventory management system for House Of Vision (Pvt) Ltd.",
        id: "7",
        category: "System",
        img: "/portfolio/hovims.png",
        videoUrl: "https://www.youtube.com/embed/msLsIlBS1SQ?si=bKtLClkXZ7mIbSGP&rel=0&modestbranding=1&controls=1&playsinline=1&iv_load_policy=3",
        detailedDescription: "We built a custom inventory management system for a retail business to help manage stock levels, products, and customer records. The system streamlines day-to-day operations by tracking items like spectacles and accessories, managing orders, and keeping customer information organized in one place.",
        technologies: ["Next js", "Shadcn", "MetaBase"],
       
    },
    {
        title: "IOT Development",
        description: "IoT solution for smart home automation.",
        id: "6",
        category: "Mobile",
        img: "/portfolio/mobileapp.png",
        videoUrl: "https://www.youtube.com/embed/vcVK5zwmnc4?si=kBAZYLG5YiAsk47c&rel=0&modestbranding=1&controls=1&playsinline=1&iv_load_policy=3",
        detailedDescription: "A comprehensive mobile application that connects clients with qualified lawyers and attorneys. The app features advanced search capabilities, lawyer profiles, appointment booking, and secure communication tools.",
        technologies: ["Flutter","Express"],
    },
]

const OurProjects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    // Get unique categories and their counts
    const categoryStats = useMemo(() => {
        const stats = projects.reduce((acc, project) => {
            acc[project.category] = (acc[project.category] || 0) + 1
            return acc
        }, {} as Record<string, number>)
        
        return {
            All: projects.length,
            ...stats
        }
    }, [])

    // Filter positions based on selected category and search term
    const filteredPositions = useMemo(() => {
        return projects.filter(project => {
            const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
            return matchesCategory
        })
    }, [selectedCategory])

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedProject(null)
    }

    return (
        <>
            <div className="text-white font-lufga my-20 container mx-auto">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col mt-8 items-start md:items-center gap-6">
                        <h1 className="text-4xl md:text-6xl font-extralight mb-4 text-[#FDA10A] ml-4 sm:ml-0">Our Projects</h1>
                        <p className="md:text-2xl text-neutral-400 md:text-center ml-4 sm:ml-0">Stay ahead with expert takes on AI, engineering, design, and startup strategy.</p>
                    </div>
                    <div>
                        {/* Filter Buttons */}
                        <div className="mt-20 flex flex-wrap gap-2 items-center justify-center">
                            {Object.entries(categoryStats).map(([category, count]) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`rounded-full p-2 md:p-4 flex justify-center items-center flex-row gap-2 transition-colors ${
                                        selectedCategory === category
                                            ? 'bg-white text-black font-bold lg:text-xl'
                                            : 'bg-neutral-500 text-white hover:bg-neutral-400 lg:text-xl'
                                    }`}
                                >
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category === selectedCategory ? '#F56D04' : 'transparent' }}></div>
                                    <span>{category === 'All' ? 'All' : category}</span>
                                    <span>({count})</span>
                                </button>
                            ))}
                        </div>
                        {/* Display filtered positions */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 px-4 gap-4">
                            {filteredPositions.map((project, index) => (
                                <div
                                    key={`${project.id}-${index}`}
                                    className="p-6 rounded-3xl sm:rounded-lg transition-transform duration-300 relative group overflow-hidden "
                                >
                                    {/* Project Image with Hover Overlay */}
                                    <div className="relative overflow-hidden rounded-lg mb-4">
                                        <img 
                                            src={project.img} 
                                            alt={project.title} 
                                            className="w-full object-cover rounded-lg" 
                                            onClick={() => handleProjectClick(project)}
                                        />
                                        
                                        {/* Hover Overlay - now only on the image */}
                                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex-col justify-center items-center hidden md:flex ">
                                            <button 
                                                onClick={() => handleProjectClick(project)}
                                                className=" text-white px-6 py-3 rounded-full hover:shadow-lg transition-all transform hover:scale-105 border-2 border-amber-500 font-bold"
                                            >
                                                Preview
                                            </button>
                                        </div>
                                         {/* mobile version preview button */}
                                        <div className="absolute inset-0 bg-black/30 rounded-3xl flex flex-col justify-center items-center md:hidden">
                                            <button 
                                                onClick={() => handleProjectClick(project)}
                                                className=" text-white px-6 py-3 rounded-full bg-orange-400 transition-all transform  border-2 border-white font-bold"
                                            >
                                                Preview
                                            </button>
                                        </div>
                                    </div>
                                    
                                    {/* Project Title and Description - outside of overlay */}
                                    <h3 className="text-xl lg:text-2xl font-semibold text-[#F56D04] mb-2">{project.title}</h3>
                                    <p className="text-white mb-3 text-2xl lg:text-3xl">{project.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    )
}

export default OurProjects