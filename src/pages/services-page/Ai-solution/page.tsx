import React from "react";
import ServicePage from "../template";
import ServiceAbout from "../about-template";
import Questions from "@/pages/team-page/sections/Questions";
import TechStacktemplate from "../techStack-template";

const Page1: React.FC = () => {
  return (
    <>
    <ServicePage
      badge="Bring intelligence to your software with custom AI."
      title="AI Solutions"
      image="/Mask 2.png"
    />
    <ServiceAbout
      paragraph1="Terracode develops intelligent AI models tailored to your business goals. From computer vision and NLP to predictive analytics, we help you turn your data into powerful business tools."
      paragraph2="We also offer model fine-tuning services, so you can get more accurate results from existing AI systems like ChatGPT, LLMs, or open-source models — all deployed securely for your organization."
      paragraph3=""


      highlights={[
        { id: 1, text: "Custom machine learning & deep learning models" },
        { id: 2, text: "AI-powered automation and smart assistants" },
        { id: 3, text: "Data classification, prediction, and analysis" },
        { id: 4, text: "Fine-tuning of existing open-source or commercial models" },
        { id: 5, text: "Deployment with APIs, dashboards, or app integration" },
      ]}
    />

    <Questions />
    <TechStacktemplate
      stacks ={[
  {
    name: "Item 1",
    image: "/logo/react.svg"
  },
  {
    name: "Item 2",
    image: "/logo/next.svg"
  },
  {
    name: "Item 3",
    image: "/logo/node.svg"
  },
  {
    name: "Item 3",
    image: "/logo/rust.png"
  },
  {
    name: "Item 3",
    image: "/logo/nest.png"
  },
  {
    name: "Item 3",
    image: "/logo/tailwind.svg"
  },
  {
    name: "Item 3",
    image: "/logo/aws.svg"
  },
  {
    name: "Item 3",
    image: "/logo/go.png"
  },
  {
    name: "Item 4",
    image: "/logo/flutter.svg"
  }
]}
    />
    </>
  );
};

export default Page1;

