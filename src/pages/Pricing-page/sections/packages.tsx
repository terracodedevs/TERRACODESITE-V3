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
      "Ongoing monthly maintenance and support",
      "Free add-ons included in your plan",
      "Customized solutions built for your needs",
      "No upfront investment –start with monthly payment",
      "Agreement cancellable only after 2 years",
      "Regular design updates to keep your site professional",
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
      "Ongoing monthly maintenance and support",
      "Free add-ons included in your plan",
      "Customized solutions built for your needs",
      "No upfront investment –start with monthly payment",
      "Agreement cancellable only after 2 years",
      "Regular design updates to keep your site professional",
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
      "Ongoing monthly maintenance and support",
      "Free add-ons included in your plan",
      "Customized solutions built for your needs",
      "No upfront investment –start with monthly payment",
      "Agreement cancellable only after 2 years",
      "Regular design updates to keep your site professional",
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
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-7xl">
        {filteredPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-neutral-900 to-black text-white rounded-2xl shadow-lg p-8 flex flex-col justify-between"
          >
            {/* Circle Icon */}
            <div className="flex items-center justify-center w-6 h-6 border-2 border-gray-400 rounded-full mb-4">
              <div className="w-4 h-3 bg-gray-400 rounded-full m-1"></div>
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
              hover:text-white transition-all font-extrabold duration-700 cursor-pointer">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
