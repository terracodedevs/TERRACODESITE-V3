import React from "react";
import ServicePage from "../template";
import ServiceAbout from "../about-template";
import Questions from "@/pages/team-page/sections/Questions";

const Page4: React.FC = () => {
  return (
    <>
    <ServicePage
      badge="End-to-end mobile app development - from concept to store launch"
      title="Mobile App Development"
      image="/Mask.png"
    />
    <ServiceAbout
    paragraph1="Have an idea for a mobile app? Terracode turns your vision into a high-performance mobile product. We build iOS and Android applications with smooth performance, modern UI/UX, and secure architecture."
      paragraph2="From the first brainstorming session to final deployment, we consult with you to ensure your app solves real problems and creates value. Whether it’s a business tool, startup MVP, or customer-facing product, we build apps that scale."
      paragraph3=""
      highlights={[
        { id: 1, text: "Native & cross-platform app development" },
        { id: 2, text: "Flutter, Swift, Kotlin expertise" },
        { id: 3, text: "In-depth consultation to refine your idea" },
        { id: 4, text: "App Store & Google Play launch support" },
        { id: 5, text: "Post-launch analytics and updates" },
      ]}
    />
    <Questions />
    </>
  );
};

export default Page4;
