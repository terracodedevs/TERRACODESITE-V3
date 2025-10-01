import React, { useState, useMemo } from "react";
import PartPopup from "./Part-popup";

interface PartnershipsPricingPlan {
  title: string;
  className: string;
  className2?: string;
  subtitle: string;
  price: string;
  per: string;
  features: string[];
  category: "Monthly" | "Annually";
}


const PartnershipspricingPlans: PartnershipsPricingPlan[] = [
  {
    title: "Silver Partnership",
    subtitle: "Ideal for startups and small businesses",
    price: "85000 LKR",
    per: " / per month",
    features: [
      "A dedicated virtual expert team to assist you.",
      "Proactive Software and Hardware monitoring.",
      "Regular design updates to keep your site professional.",
      
    ],
    category: "Monthly",
    className:"bg-gray-400",
  },
  {
    title: "Gold Partnership",
    subtitle: "Perfect for growing businesses",
    price: "125000 LKR",
    per: "/ per month",
    features: [
      "Everything in Silver Partnership plan.",
      "Performant terracode implemented infrastructure.",
      "Extra development allowances per month.",
    ],
    category: "Monthly",
    className:" bg-yellow-500 ",
    className2:"border-1 border-orange-400 scale-105 ",
  },
   {
    title: "Elite Partnership",
    subtitle: "Best for established businesses",
    price: "200000 LKR",
    per: "/ per month",
    features: [
      "On-site dev team on your your business premisses.",
    ],
    category: "Monthly",
    className:"bg-sky-500",
  },
];

const PartnershipsSection: React.FC = () => {
  const [selectedCategory, _setSelectedCategory] = useState<"Monthly" | "Annually">("Monthly");
  const [selectedProject, setSelectedProject] = useState<PartnershipsPricingPlan | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredPlans = useMemo(() => {
    return PartnershipspricingPlans.filter((plan) => plan.category === selectedCategory);
  }, [selectedCategory]);

    const handleProjectClick = (project: PartnershipsPricingPlan) => {
        setSelectedProject(project)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedProject(null)
    }

  return (
    <>
    <div className="container mx-auto bg-black flex flex-col items-center justify-center px-6 py-12 font-lufga mt-6 md:my-28 ">
      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3  gap-8 w-full max-w-5xl ">
        {filteredPlans.map((plan, index) => (
          <div
            key={index}
            className={`${plan.className2} bg-gradient-to-b from-neutral-800 to-neutral-950 text-white rounded-2xl shadow-lg p-8 flex flex-col justify-between`}
          >
            {/* Circle Icon */}
            <div className="flex items-center justify-center w-6 h-6 border-2 border-gray-400 rounded-full mb-4">
              <div className={`w-4 h-3 bg-gray-400 rounded-full m-1 ${plan.className}`}></div>
            </div>

            {/* Header */}
            <h3 className="text-xl font-semibold">{plan.title}</h3>
            <p className="text-sm text-gray-400 mb-4">{plan.subtitle}</p>
            <h2 className="text-xl font-semibold">
              {plan.price} <span className="text-xl font-semibold">{plan.per}</span>
            </h2>

            <hr className="my-6 border-gray-700" />

            {/* Features */}
            <h4 className="mb-3 font-semibold">What you will get</h4>
            <ul className="space-y-2 text-gray-300 text-sm mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start space-x-2 ">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-1"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="mt-auto py-3 rounded-3xl border-2 border-orange-500
             hover:border-white text-orange-400 hover:bg-gradient-to-r from-[#f56d04] to-[#fb9709]
              hover:text-white transition-all font-extrabold duration-700 cursor-pointer"
              
              onClick={() => handleProjectClick(plan)}
            >
              Inquire Now
            </button>
          </div>
        ))}
      </div>
    </div>

     {/* Project Modal */}
            <PartPopup
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                defaultPackage={selectedProject?.title}
            />

    </>
    
  );
};

export default PartnershipsSection;
