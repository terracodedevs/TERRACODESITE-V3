import React from "react";
import ServicePage from "../template";
import ServiceAbout from "../about-template";
import Questions from "@/pages/team-page/sections/Questions";

const Page5: React.FC = () => {
  return (
    <>
    <ServicePage
      badge="Web experiences that reflect your business and drive results"
      title="Website Solutions"
      image="/Mask group.png"
    />
    <ServiceAbout
      paragraph1="We craft stunning, fast-loading, and responsive websites tailored specifically for your brand. Each site is built with a flexible content management system (CMS) that empowers you to control your content easily."
      paragraph2="Our business websites are not just aesthetically pleasing—they’re optimized for SEO, performance, and scalability. Whether you’re launching a startup or rebranding an enterprise, we deliver a digital presence that grows with you."
      paragraph3=""
      highlights={[
        { id: 1, text: "Custom ERP, CRM, IMS, and operational systems" },
        { id: 2, text: "AI-driven insights & automation" },
        { id: 3, text: "Integration with third-party tools" },
        { id: 4, text: "Secure, cloud-ready architecture" },
        { id: 5, text: "Post-launch support and scaling" },
      ]}
    />
    <Questions />
    </>
  );
};

export default Page5;
