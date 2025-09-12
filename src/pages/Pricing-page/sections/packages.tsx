import React, { useState, useMemo } from "react";

interface PricingPlan {
  title: string;
  subtitle: string;
  price: string;
  per: string;
  features: string[];
  buttonText: string;
  category: "Monthly" | "Annually";
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Starter",
    subtitle: "Ideal for personal portfolios, landing pages, or small static websites.",
    price: "$9.99",
    per: " / per month",
    features: [
      "Employee directory",
      "Task management",
      "Calendar integration",
      "File storage",
      "Communication tools",
      "Reporting and analytics",
    ],
    buttonText: "Get Started",
    category: "Monthly",
  },
  {
    title: "Professional",
    subtitle: "Great for blogs, company websites, or content-driven platforms with an admin panel.",
    price: "$14.99",
    per: "/ per month",
    features: [
      "Advanced employee directory",
      "Project management",
      "Resource scheduling",
      "Version control",
      "Team collaboration",
      "Advanced analytics",
    ],
    buttonText: "Get Started",
    category: "Monthly",
  },
  {
    title: "Business",
    subtitle: "Perfect for online stores, payment gateways, advanced business features, and integrations.",
    price: "$23.99",
    per: "/ per month",
    features: [
      "Customizable employee directory",
      "Client project management",
      "Client meeting schedule",
      "Compliance tracking",
      "Client communication",
      "Create custom reports tailored",
    ],
    buttonText: "Get Started",
    category: "Monthly",
  },
];

const PricingSection: React.FC = () => {
  const [selectedCategory, _setSelectedCategory] = useState<"Monthly" | "Annually">("Monthly");

  const filteredPlans = useMemo(() => {
    return pricingPlans.filter((plan) => plan.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="container mx-auto bg-black flex flex-col items-center justify-center px-6 py-12 font-lufga mt-6 md:mt-20">
      {/* Toggle Button */}
      {/* <div className="flex space-x-2 mb-10 bg-neutral-900 rounded-full p-1">
        {(["Monthly", "Annually"] as const).map((cycle) => (
          <button
            key={cycle}
            onClick={() => setSelectedCategory(cycle)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              selectedCategory === cycle
                ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white"
                : "text-white"
            }`}
          >
            {cycle}
          </button>
        ))}
      </div> */}

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-7xl">
        {filteredPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-neutral-900 to-black text-white rounded-2xl shadow-lg p-8 flex flex-col justify-between"
          >
            {/* Circle Icon */}
            <div className="w-6 h-6 border-2 border-gray-400 rounded-full mb-4"></div>

            {/* Header */}
            <h3 className="text-xl font-semibold">{plan.title}</h3>
            <p className="text-sm text-gray-400 mb-4">{plan.subtitle}</p>
            <h2 className="text-4xl font-bold">
              {plan.price} <span className="text-lg">{plan.per}</span>
            </h2>

            <hr className="my-6 border-gray-700" />

            {/* Features */}
            <h4 className="mb-3 font-semibold">What you will get</h4>
            <ul className="space-y-2 text-gray-300 text-sm mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="mt-auto py-3 rounded-xl border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white transition-all font-medium">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
