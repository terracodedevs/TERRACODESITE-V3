import TerraButton from '@/components/button'
import { useState, useMemo } from 'react'

const positions = [
    {
        title: "Software Engineer",
        description: "Join our team to build innovative software solutions that make a difference.",
        location: "Remote",
        type: "Full-time",
        department: "Engineering",
        id: "1",
        category: "Engineering"
    },
    {
        title: "Product Manager",
        description: "Lead product development and strategy to deliver exceptional user experiences.",
        location: "Remote",
        type: "Full-time",
        department: "Product",
        id: "2",
        category: "Product"
    },
    {
        title: "UX Designer",
        description: "Design user-centered experiences that delight and engage.",
        location: "Remote",
        type: "Full-time",
        department: "Design",
        id: "3",
        category: "Design"
    },
    {
        title: "Data Scientist",
        description: "Analyze data to drive insights and inform business decisions.",
        location: "Remote",
        type: "Full-time",
        department: "Data",
        id: "4",
        category: "Data"
    },
    {
        title: "DevOps Engineer",
        description: "Automate and optimize our infrastructure for scalability and reliability.",
        location: "Remote",
        type: "Full-time",
        department: "Engineering",
        id: "5",
        category: "Engineering"
    },
    {
        title: "Marketing Specialist",
        description: "Develop and execute marketing strategies to grow our brand.",
        location: "Remote",
        type: "Full-time",
        department: "Marketing",
        id: "6",
        category: "Marketing"
    },
    {
        title: "Sales Executive",
        description: "Drive sales growth by building relationships with clients.",
        location: "Remote",
        type: "Full-time",
        department: "Sales",
        id: "7",
        category: "Sales"
    },
    {
        title: "Customer Support Representative",
        description: "Provide exceptional support to our customers and resolve their issues.",
        location: "Remote",
        type: "Full-time",
        department: "Support",
        id: "8",
        category: "Support"
    },
    {
        title: "Content Writer",
        description: "Create engaging content that informs and inspires our audience.",
        location: "Remote",
        type: "Full-time",
        department: "Content",
        id: "9",
        category: "Content"
    },
    {
      title:"QA Engineer", 
      description:"Ensure the quality of our software through rigorous testing.", 
      location:"Remote", 
      type:"Full-time", 
      department:"Quality Assurance", 
      id:"10", 
      category:"Quality Assurance"
    },
    {
        title: "Software Engineer",
        description: "Join our team to build innovative software solutions that make a difference.",
        location: "Remote",
        type: "Full-time",
        department: "Engineering",
        id: "1",
        category: "Engineering"
    },
    {
        title: "Product Manager",
        description: "Lead product development and strategy to deliver exceptional user experiences.",
        location: "Remote",
        type: "Full-time",
        department: "Product",
        id: "2",
        category: "Product"
    },
    {
        title: "Software Engineer",
        description: "Join our team to build innovative software solutions that make a difference.",
        location: "Remote",
        type: "Full-time",
        department: "Engineering",
        id: "1",
        category: "Engineering"
    },
    {
        title: "Product Manager",
        description: "Lead product development and strategy to deliver exceptional user experiences.",
        location: "Remote",
        type: "Full-time",
        department: "Product",
        id: "2",
        category: "Product"
    }
]

export default function Positions() {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [searchTerm, setSearchTerm] = useState('')

    // Get unique categories and their counts
    const categoryStats = useMemo(() => {
        const stats = positions.reduce((acc, position) => {
            acc[position.category] = (acc[position.category] || 0) + 1
            return acc
        }, {} as Record<string, number>)
        
        return {
            All: positions.length,
            ...stats
        }
    }, [])

    // Filter positions based on selected category and search term
    const filteredPositions = useMemo(() => {
        return positions.filter(position => {
            const matchesCategory = selectedCategory === 'All' || position.category === selectedCategory
            const matchesSearch = position.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                position.description.toLowerCase().includes(searchTerm.toLowerCase())
            return matchesCategory && matchesSearch
        })
    }, [selectedCategory, searchTerm])

    return (
        <div className="flex flex-col gap-5 font-lufga mt-10 xl:mt-20">
            <div className="flex flex-col items-center justify-center text-center mb-10">
                <h2 className="text-6xl font-extralight mb-4 text-[#FDA10A]">All Open Positions</h2>
            </div>      
            
            <div className="flex flex-col">
                <input 
                    type="text" 
                    placeholder="Search positions..." 
                    className="w-full p-3 rounded-lg bg-neutral-800 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#FDA10A]"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                
                {/* Filter Buttons */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {Object.entries(categoryStats).map(([category, count]) => (
                        <button 
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`rounded-full px-4 py-2 flex flex-row gap-2 transition-colors ${
                                selectedCategory === category 
                                    ? 'bg-[#FDA10A] text-black' 
                                    : 'bg-neutral-500 text-white hover:bg-neutral-400'
                            }`}
                        >
                            <span>{category === 'All' ? 'All Openings' : category}</span>
                            <span>({count})</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Display filtered positions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
                {filteredPositions.map((position, index) => (
                    <div key={`${position.id}-${index}`} className="bg-neutral-800 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                        <p className="text-neutral-300 mb-3">{position.description}</p>
                        <div className="flex gap-4 text-sm w-fit px-4 py-2 rounded-3xl bg-neutral-600 text-white">
                            <div className='flex flex-row gap-2 items-center'>
                                <span>{position.location}</span>
                                <span>|</span>
                                <span>{position.type}</span>
                                <span>|</span>
                                <span>{position.department}</span>
                            </div>
                            <div >
                                <TerraButton label="Overview" padding='pl-2 pr-1 py-1 rounded-4xl text-sm gap-2' img = 'w-3' imgpadding='p-2'/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
