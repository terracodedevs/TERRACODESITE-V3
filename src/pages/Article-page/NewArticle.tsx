import { Calendar, Clock, Heart, Send } from "lucide-react";


interface Section {
  title?: string;
  content: string;
}

interface SidebarItem {
  title: string;
  date?: string;
  time?: string;
  image?: string;
  author_image?: string;
  author_name?: string;
  position?: string;
  description: string;
  comments: number;
  views: string;
}

const sections: Section[] = [
  {
    content:
      "On April 18, 2024, we began our journey as a passionate tech startup with just 7 members. Day and night, we poured our efforts into developing a SaaS product tailored for medical professionals our very first milestone. Simultaneously, we delivered outstanding software development services for over 15 businesses within just one year of operations."
  },
  {
    content:
      "As time progressed, so did our expertise and vision. We gradually evolved to build high-performance, next-generation ERP and CRM-like business tools developed entirely using powerful languages such as Go (Golang) and Rust, alongside our own custom-built performance and security tools. These internal tools were crafted to ensure unmatched efficiency, speed, security, and scalability for our clients. While much of the industry remained reliant on traditional development infrastructures, we embraced innovation head-on. Integrating these advanced technologies into our development teams posed significant challenges, but our relentless commitment and adaptability made it possible."
  },
  {
    content:
      "Midway through our journey, we expanded our service offerings to include AI integrations and custom AI solution development, especially for clients who had already built products with us. We took pride in upgrading their infrastructure with the latest technologies, helping them unlock new business capabilities and achieve even greater impact."
  },
  {
    content:
      "On November 2024, we officially registered our company as a private limited company. Today, Terracode operates from our own office premises in Colombo, Sri Lanka, housing several incredible teams of developers, engineers, and innovators. Each team specializes in critical, in-demand technologies, working together to build robust software products that exceed our customers’ expectations and provide true value for their investments."
  },
  {
    content:
      "Today, we’re also actively working on a suite of new software as a service products spanning diverse domains and industries prominently Logistics and retail industries. These upcoming solutions are being built with the same high standards of quality and performance that define us, and will soon be available to our beloved users at affordable, accessible pricing ensuring that excellence in software is never out of reach."
  },
  {
    content:
      "What sets us apart is not just our technology but our people. Every individual in our Terracode family has played an equal part in shaping who we are today. There is no “more” or “less” credit here only collective dedication, shared values, and a united vision. That unity has empowered us to stand strong as a trusted name in software development, known for quality, performance, and client-first solutions."
  },
  {
    content:
      "As the CEO of Terracode, I write this with heartfelt pride and gratitude. I am immensely thankful for the exceptional team that drives this company forward and for the amazing clients who trust us with their digital transformation. We remain committed to innovation and service excellence and we’re only just getting started.Here’s to what we’ve built, and to the future we’re building next."
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
    <div className="bg-black text-white font-lufga my-10 mb-20">
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

          {/* Author Info */}
      <div className="flex items-center space-x-4 mb-8">
        <img
          src="employee/IMG_1158.PNG"
          alt="Author"
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">Nomin Sendinu</h3>
          <p className="text-sm text-gray-400">CEO & Co-founder, Terracode Private Limited</p>
          {/* <p className="text-sm text-gray-400">01 Jan 2024</p> */}
        </div>
      </div>

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
