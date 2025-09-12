import React from "react";
import ServicePage from "../template";
import ServiceAbout from "../about-template";
import Questions from "@/pages/team-page/sections/Questions";

const Page6: React.FC = () => {
  return (
    <>
    <ServicePage
      badge="Designing software experiences that delight users and drive results."
      title="User Experience Design (UX)"
      image="/Mask.png"
      name="View UX Designs"
    />
    <ServiceAbout
    paragraph1="Delivering seamless, intuitive, and enjoyable experiences is at the core of our process. Our dedicated UX research and engineering team ensures your software is designed with real users in mind."
      paragraph2="We combine research-driven insights, design thinking, and technical expertise to architect user experiences that feel natural, reduce friction, and maximize engagement creating products that people love to use."
      paragraph3="From ideation to launch, we continuously test, refine, and optimize interfaces. This ensures your product not only looks great but delivers measurable impact through usability, accessibility, and user satisfaction."
      highlights={[
        { id: 1, text: "Dedicated in-house UX research and engineering team" },
        { id: 2, text: "Research-driven insights and usability testing" },
        { id: 3, text: "Intuitive, accessible, and engaging product experiences" },
        { id: 4, text: "Continuous design iteration and optimization" },
        { id: 5, text: "Seamless integration of UX with software development" },
      ]}
    />
    <Questions />
    </>
  );
};

export default Page6;
