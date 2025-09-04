import { Calendar, Clock, Heart, Send } from "lucide-react";


interface Section {
  title: string;
  content: string;
}

interface SidebarItem {
  title: string;
  description: string;
  comments: number;
  views: string;
}

const sections: Section[] = [
  {
    title: "A New Era of Code Creation",
    content:
      "Artificial Intelligence, particularly generative AI and large language models (LLMs), is reshaping the software development lifecycle. Tasks once handled manually—like writing, debugging, testing, and documentation—are now increasingly automated, allowing developers to focus on high-level design and innovation."
  },
  {
    title: "Speed, Efficiency, and Innovation",
    content:
      "According to McKinsey, embedding AI across the full software product development lifecycle accelerates delivery, improves quality, strengthens customer feedback loops, and fosters innovation. Similarly, at Salesforce, AI-native practices adopted by 94% of its engineering teams have transformed onboarding, knowledge sharing, and mentoring processes."
  },
  {
    title: "AI as an Intelligent Assistant - not a Replacement",
    content:
      "AI tools, like GitHub Copilot, Tabnine, and others, have revolutionized coding. Rather than replacing developers, AI assists them—offering auto-completion, testing suggestions, code refactoring, and documentation generation. Developers now allocate more time to architecture, UX, and system thinking."
  },
  {
    title: "Copilots and Vibe Coding: Experiments in AI-led Development",
    content:
      "“Vibe coding,” coined by Andrej Karpathy in early 2025, refers to an approach where developers guide software creation through natural language prompts. The LLM generates and iteratively refines the code—developers shift from writing code to guiding, reviewing, and experimenting."
  }
];

const sidebarItems: SidebarItem[] = [
  {
    title: "Designing for Humans in an AI World",
    description:
      "As automation rises, human-centered design matters more than ever. Here’s how we balance AI logic with user empathy.",
    comments: 192,
    views: "4k"
  },
  {
    title: "The Future of Accessibility in Design",
    description:
      "As we innovate, it’s crucial to ensure that our designs are inclusive and accessible to all users, regardless of ability.",
    comments: 192,
    views: "4k"
  },
  {
    title: "Sustainable Design Practices",
    description:
      "Exploring eco-friendly materials and methods in design to create a more sustainable future for industry and planet.",
    comments: 192,
    views: "4k"
  },
  {
    title: "Embracing Diversity in Design",
    description:
      "Diversity of thought and background in design teams fosters creativity and innovation, leading to better user experiences.",
    comments: 192,
    views: "4k"
  }
];

export default function NArticle() {
  return (
    <div className="bg-black text-white font-lufga my-10">
      {/* Main Container */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-6 py-12">
        
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">
          <h1 className="text-3xl md:text-[45px] mb-4 text-[#FDA10A]">
            How AI is Redefining Software Development
          </h1>
          <div className="flex items-center text-[#A4A4A4] space-x-6 ">
            <span className="flex items-center gap-3 text-2xl">
              <Calendar size={22} /> 2 October 2025
            </span>
            <span className="flex items-center gap-3 text-2xl">
              <Clock size={22} /> 20 min ago
            </span>
          </div>

          <img
            src="article/Mask group.png"
            alt="AI Illustration"
            className="rounded-xl w-full"
          />

          {sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-3xl mb-4">{section.title}</h2>
              <p className="text-[#A4A4A4] text-2xl ">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Right content */}
        <div className="space-y-6 flex flex-col items-center">
          <h3 className="text-3xl text-center text-[#FDA10A]">
            More on AI in Software Development
          </h3>
          {sidebarItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-neutral-900 p-4 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h4 className="mb-2 text-2xl text-[#FDA10A]">{item.title}</h4>
              <p className="text-[#A4A4A4] text-xl mb-3">{item.description}</p>
              <div className="flex flex-row gap-4 items-center justify-between mt-4">
                  <div className="flex flex-row gap-4 items-center justify-center ">
                    <div className="backdrop-blur-sm bg-white/10 rounded-full px-3 py-1  flex items-center gap-4">
                       <Send className="w-4 h-4"/>{item.views}
                    </div>
                    <div className="backdrop-blur-sm bg-white/10 rounded-full px-3 py-1 flex items-center gap-4">
                       <Heart className="w-4 h-4"/> {item.comments}
                    </div>
                    </div>
                    {/* Read More Arrow */}
                    <div className=" hover:bg-white transition-colors rounded-full">
                      <img src="/Property 23.png" alt="Read More" />
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
