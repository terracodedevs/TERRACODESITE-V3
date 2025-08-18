import React from "react";
import ServicePage from "../template";
import ServiceAbout from "../about-template";

const Page3: React.FC = () => {
  return (
    <>
    
    <ServicePage
      badge="Transform your business operations"
      title="Business Software Systems"
      image="/images/page1.jpg"
    />

    <ServiceAbout
      paragraph="Terracode is dedicated to delivering innovative software solutions that drive business success."
      highlights={[
        { id: 1, text: "User-centric design" },
        { id: 2, text: "Agile development" },
        { id: 3, text: "Robust security" },
        { id: 4, text: "Seamless integration" },
        { id: 5, text: "Ongoing support" },
      ]}
    />
    </>
  );
};

export default Page3;
