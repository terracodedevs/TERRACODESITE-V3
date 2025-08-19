import React from "react";
import ServicePage from "../template";
import ServiceAbout from "../about-template";
import Questions from "@/pages/team-page/sections/Questions";

const Page3: React.FC = () => {
  return (
    <>
    
    <ServicePage
      badge="Empower your systems with speed, flexibility, and automation"
      title="Cloud Solutions"
      image="/Mask 1.png"
    />

    <ServiceAbout
      paragraph1="Whether you want to move to the cloud, automate manual processes, or modernize existing systems, our cloud services cover it all. We help you reduce operational costs, boost performance, and increase reliability by leveraging the best cloud platforms (AWS, GCP, Azure)."
      paragraph2="Our team also helps businesses optimize their architecture for better resource usage, scalability, and future growth."
      paragraph3=""
      highlights={[
        { id: 1, text: "Cloud migrations & modernizations" },
        { id: 2, text: "CI/CD pipelines and DevOps workflows" },
        { id: 3, text: "Cloud storage, compute, and serverless setups" },
        { id: 4, text: "System monitoring and auto-recovery" },
        { id: 5, text: "Budget-aware infrastructure design" },
      ]}
    />
    <Questions />
    </>
  );
};

export default Page3;
