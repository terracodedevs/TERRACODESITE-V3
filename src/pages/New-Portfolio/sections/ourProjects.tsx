import { useMemo, useState } from "react"
import ProjectModal from "./popup";


interface Project {
    title: string;
    description: string;
    id: string;
    category: string;
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
        img: "/portfolio/HOV Mockup.png",
        videoUrl: "public/hero/Hero.mp4", // Add your video path here
        detailedDescription: "A comprehensive modern website solution for House Of Vision (Pvt) Ltd, featuring responsive design, user-friendly interface, and robust functionality. The website showcases the company's services and provides an excellent user experience across all devices.",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
        title: "Business Website Solution",
        description: "A modern website for Inpro Industries (Pvt) Ltd.",
        id: "2",
        category: "Website",
        img: "/portfolio/inpro Mockup.png",
        videoUrl: "/portfolio/videos/inpro-demo.mp4",
        detailedDescription: "Professional business website for Inpro Industries featuring product catalogs, company information, and customer engagement tools. Built with modern web technologies to ensure optimal performance and user experience.",
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
        videoUrl: "/portfolio/videos/cms-demo.mp4",
        detailedDescription: "A comprehensive content management system specifically designed for cleaning service providers. The system allows easy management of services, bookings, staff, and customer relationships.",
        technologies: ["Next js","ShadCn"],
    },
    {
        title: "Data Management System",
        description: "Intelligent DMS for city-wide data with advanced storage, analytics, and user management.",
        id: "5",
        category: "System",
        img: "/portfolio/polls.png",
        videoUrl: "/portfolio/videos/dms-demo.mp4",
        detailedDescription: "An intelligent data management system designed for city-wide data collection, storage, and analysis. Features advanced analytics capabilities, user management, and comprehensive reporting tools for municipal data handling.",
        technologies: ["React", "Golang"],
    },
    {
        title: "Mobile App Design & Development",
        description: "Mobile application for searching for lawyers and attorneys.",
        id: "6",
        category: "Mobile",
        img: "/portfolio/mobileapp.png",
        videoUrl: "/portfolio/videos/mobile-demo.mp4",
        detailedDescription: "A comprehensive mobile application that connects clients with qualified lawyers and attorneys. The app features advanced search capabilities, lawyer profiles, appointment booking, and secure communication tools.",
        technologies: ["Flutter","Express"],
    },
    {
        title: "Inventory Management System",
        description: "Inventory management system for House Of Vision (Pvt) Ltd.",
        id: "7",
        category: "System",
        img: "/portfolio/hovims.png",
        videoUrl: "/portfolio/videos/ims-demo.mp4",
        detailedDescription: "A robust inventory management system tailored for House Of Vision (Pvt) Ltd. The system provides comprehensive inventory tracking, stock management, supplier management, and detailed reporting capabilities.",
        technologies: ["Next js", "Shadcn", "MetaBase"],
       
    }
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 px-4">
                            {filteredPositions.map((project, index) => (
                                <div
                                    key={`${project.id}-${index}`}
                                    className="p-6 rounded-3xl sm:rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer relative overflow-hidden"
                                    onClick={() => handleProjectClick(project)}
                                >
                                    <img src={project.img} alt={project.title} className="w-full object-cover rounded-lg mb-4" />
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