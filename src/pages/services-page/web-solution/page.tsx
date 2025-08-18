import React from "react";
import ServicePage from "../template";
import ServiceAbout from "../about-template";

const Page5: React.FC = () => {
  return (
    <>
    <ServicePage
      badge="Transform your business operations"
      title="Business Software Systems"
      image="/images/page1.jpg"
    />
    <ServiceAbout
      paragraph="Terracode specializes in building powerful and scalable software systems such as ERP, CRM, IMS, and more. Our AI-powered systems help you automate processes and make data-driven decisions."
      highlights={[
        { id: 1, text: "Custom ERP, CRM, IMS, and operational systems" },
        { id: 2, text: "AI-driven insights & automation" },
        { id: 3, text: "Integration with third-party tools" },
        { id: 4, text: "Secure, cloud-ready architecture" },
        { id: 5, text: "Post-launch support and scaling" },
      ]}
    />
    </>
  );
};

export default Page5;
