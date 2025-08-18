import React from "react";
import ServicePage from "../template";
import ServiceAbout from "../about-template";
import Questions from "@/pages/team-page/sections/Questions";

const Page3: React.FC = () => {
  return (
    <>
    
    <ServicePage
      badge="Transform your business operations"
      title="Business Software Systems"
      image="/Mask 1.png"
    />

    <ServiceAbout
      paragraph1="Terracode specializes in building  powerful and scalable software systems such as ERP (Enterprise Resource Planning), CRM (Customer Relationship Management), IMS (Inventory Management Systems), and other business-critical platforms."
      paragraph2="We don’t just stop at functionality - our systems are enhanced with modern AI capabilities that automate processes, provide intelligent insights, and help you make data-driven decisions."
      paragraph3="Terracode specializes in building  powerful and scalable software systems such as ERP (Enterprise Resource Planning), CRM (Customer Relationship Management), IMS (Inventory Management Systems),"
      highlights={[
        { id: 1, text: "User-centric design" },
        { id: 2, text: "Agile development" },
        { id: 3, text: "Robust security" },
        { id: 4, text: "Seamless integration" },
        { id: 5, text: "Ongoing support" },
      ]}
    />
    <Questions />
    </>
  );
};

export default Page3;
