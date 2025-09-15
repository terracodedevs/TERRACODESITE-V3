interface Section {
  title?: string;
  content?: string;
  subsections?: SubSection[];
}
interface SubSection {
    subtopic?: string;
    subDescription?: string;
    subDescription1?: string;
    subDescription2?: string;
    subDescription3?: string;
}

export interface SidebarItem {
  id: number;
  title: string;
  date?: string;
  description: string;
  sections: Section[];
}

export const articlesData: SidebarItem[] = [
  {
    id: 0, 
    title: "Expanded Cookie Policy",
    date: "2 August 2025",
    description: "This Cookie Policy explains how Terracode (“we,” “our,” or “us”) uses cookies and similar technologies on our websites, SaaS products, and applications (“Services”). It also outlines your rights and choices regarding these technologies.",
    sections: [
      {
        title: "1. What Are Cookies?",
        content: "Cookies are small text files placed on your device (computer, smartphone, tablet) when you visit our Services. They enable functionality such as login sessions, secure transactions, analytics, and personalization. Cookies may be set by Terracode (“first-party cookies”) or by third parties we integrate with (“third-party cookies”).",
        subsections: [
            {
                subtopic: "We also use related technologies such as:",
                subDescription: "Web beacons/pixels: small images embedded in pages or emails to track engagement."
            },
            {
                subtopic: "",
                subDescription: "Local storage: browser-based storage for larger data than cookies."
            },
            {
                subtopic: "",
                subDescription: "Session storage: temporary storage that clears when the browser closes."
            }
        ]
      },
      {
        title: "2. Types of Cookies We Use",
        content: "",
        subsections: [
            {
                subtopic: "(a) Strictly Necessary Cookies",
                subDescription: "Enable essential site functions such as account login, secure payment processing, fraud detection, and load balancing.",
                subDescription1: "Without these, Services may not function properly",
                subDescription2: "Examples: Authentication tokens, secure session cookies.",
            },
            {
                subtopic: "(b) Performance & Analytics Cookies",
                subDescription: "Collect information on how users interact with our Services (e.g., pages visited, time spent, error logs).",
                subDescription1: "Used to improve product stability, features, and user experience.",
                subDescription2: "Examples: Google Analytics, error tracking tools.",
            },
            {
                subtopic: "(c) Functional Cookies",
                subDescription: "Store preferences such as language, theme, location, and remembered logins.",
                subDescription1: "Provide a more customized experience.",
                subDescription2: "Examples: Preference cookies, UI/UX customization",
            },
            {
                subtopic: "(d) Advertising & Targeting Cookies",
                subDescription: "Deliver relevant advertisements, measure campaign performance, and track ad interactions.",
                subDescription1: "May be placed by Terracode or trusted third-party partners.",
                subDescription2: "Examples: Google Ads, LinkedIn Insights Tag, social media pixels.",
            },
            {
                subtopic: "(e) Third-Party Cookies",
                subDescription: "Set by third-party providers we integrate with, such as:Payment gateways (Stripe, PayPal, etc.)",
                subDescription1: "Analytics & cloud providers (Google Cloud, AWS, Datadog)",
                subDescription2: "Marketing automation tools",
                subDescription3: "These third parties may process data according to their own policies.",
            }
        ]
      },
      {
        title: "3. Cookie Retention",
        content: "Midway through our journey, we expanded our service offerings to include AI integrations and custom AI solution development, especially for clients who had already built products with us. We took pride in upgrading their infrastructure with the latest technologies, helping them unlock new business capabilities and achieve even greater impact.",
        subsections: [
            {
                subtopic: "",
                subDescription: "Session Cookies: expire when you close your browser.",
                subDescription1: "Persistent Cookies: remain for a defined duration (1 day to 24 months, depending on purpose).",
                subDescription2: "Retention periods are listed in our internal cookie register and updated regularly.",
            }
        ]
      },
      {
        title: "4. Legal Basis & Compliance",
        content: "",
        subsections: [
            {
                subtopic: "",
                subDescription: "For EU/EEA users: cookies are managed under GDPR and ePrivacy Directive.",
                subDescription1: "For California users: data sharing via cookies may fall under CCPA.",
                subDescription2: "Where required by law, explicit consent will be collected before setting non-essential cookies.",
            }
        ]
      },
      {
        title: "5. Managing & Controlling Cookies",
        content: "",
       subsections: [
            {
                subtopic: "You have the right to control cookies via:",
                subDescription: "Browser settings: Block or delete cookies via Chrome, Firefox, Safari, or Edge.",
                subDescription1: "Cookie consent banner: Accept, reject, or customize preferences when first visiting our Services.",
                subDescription2: "Third-party opt-outs: Manage advertising cookies via www.youronlinechoices.com or Google Ads Settings.",
                subDescription3: "Please note: Disabling cookies may impact functionality (e.g., logins, payments, personalization).",
            }
        ]
    },
      {
        title: "6. User Rights",
        content: " ",
        subsections: [
            {
                subtopic: "Depending on your jurisdiction, you may have rights to:",
                subDescription: "Access and review data collected via cookies.",
                subDescription1: "Request deletion of cookie-related data.",
                subDescription2: "Withdraw cookie consent at any time.",
                subDescription3: "Opt out of targeted advertising."
            }
        ]
      },
      {
        title: "7. Updates to This Policy",
        content: "We may update this Cookie Policy from time to time. Significant changes will be communicated via our website or consent banner"
      }
    ]
  },
  {
    id: 1,
    title: "Designing for Humans in an AI World",
    date: "2 November 2024",
    description:
      "As automation rises, human-centered design matters more than ever. Here's how we balance AI logic with user empathy....",
    sections: [
      {
        content: "Human-centered design has never been more crucial than it is today. As artificial intelligence and automation become increasingly integral to our software solutions, we face a fundamental challenge: maintaining the human touch."
      },
      {
        content: "At Terracode, we approach this by embedding empathy into every aspect of our AI implementations. We prioritize intuitive interfaces, clear communication, and meaningful interactions that complement AI's computational power with human understanding."
      },
      {
        content: "Our research shows that users respond most positively to AI systems that recognize and adapt to human needs rather than requiring humans to adapt to rigid technological constraints. This approach has led to higher user satisfaction and adoption rates across our client projects."
      }
    ]
  },
  {
    id: 2,
    title: "The Future of Accessibility in Design",
    date: "2 September 2024",
    description:
      "As we innovate, it's crucial to ensure that our designs are inclusive and accessible to all users, regardless of ability.....",
    sections: [
      {
        content: "Accessibility is no longer an afterthought but a fundamental principle of modern software design. At Terracode, we believe technology should empower everyone, regardless of their physical or cognitive abilities."
      },
      {
        content: "We've implemented comprehensive accessibility testing across all our projects, ensuring that our solutions meet WCAG guidelines and provide meaningful experiences for users with diverse needs."
      },
      {
        content: "Our recent work with adaptive interfaces has shown promising results in creating truly universal designs that adjust to individual user requirements without sacrificing aesthetics or functionality."
      }
    ]
  },
  {
    id: 3,
    title: "Sustainable Design Practices",
    date: "2 April 2024",
    description:
      "Exploring eco-friendly materials and methods in design to create a more sustainable future for industry and planet.....",
    sections: [
      {
        content: "Software development has an environmental impact that often goes unrecognized. From data center energy consumption to the carbon footprint of our digital products, we need to consider sustainability at every step."
      },
      {
        content: "At Terracode, we've implemented a series of green coding practices that optimize performance while reducing resource usage. Our cloud solutions are designed for efficiency, minimizing unnecessary processing and storage."
      },
      {
        content: "We also consider the lifecycle of our products, designing for longevity and adaptability rather than planned obsolescence. This approach not only benefits the environment but also provides better long-term value for our clients."
      }
    ]
  },
  {
    id: 4,
    title: "Embracing Diversity in Design",
    date: "2 February 2024",
    description:
      "Diversity of thought and background in design teams fosters creativity and innovation, leading to better user experiences....",
    sections: [
      {
        content: "Diverse teams create more innovative solutions. This isn't just a values statement—it's backed by our experience and research. When people from different backgrounds collaborate, they bring unique perspectives that challenge assumptions and lead to breakthroughs."
      },
      {
        content: "At Terracode, we've built a multicultural team that represents various backgrounds, experiences, and ways of thinking. This diversity has directly contributed to our ability to create software that resonates with a global audience."
      },
      {
        content: "Our inclusive design workshops have become a cornerstone of our development process, ensuring that multiple perspectives inform every feature we build and every interface we design."
      }
    ]
  }
];