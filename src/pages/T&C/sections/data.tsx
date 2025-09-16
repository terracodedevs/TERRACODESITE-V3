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
title: "Expanded Data Processing Agreement (DPA)",
date: "2 November 2024",
description: "This Data Processing Agreement (“DPA”) forms part of the Master Agreement or Terms & Conditions between Terracode (“Processor”) and the customer (“Controller”) regarding the processing of personal data in connection with Terracode’s Services.",
sections: [
{ title: "1. Definitions", subsections: [
{ subDescription: "Controller: The entity that determines the purposes and means of processing personal data." },
{ subDescription: "Processor: Terracode, which processes personal data on behalf of the Controller." },
{ subDescription: "Personal Data: Any information relating to an identified or identifiable individual." },
{ subDescription: "Data Subject: An individual whose personal data is processed." },
{ subDescription: "Sub-processor: A third party engaged by Terracode to process personal data." },
{ subDescription: "Applicable Laws: Includes GDPR, CCPA, and all other relevant data protection legislation." }
]},
{ title: "2. Roles and Responsibilities", subsections: [
{ subDescription: "The Controller ensures personal data is collected lawfully and shared with Terracode under a valid legal basis." },
{ subDescription: "Terracode acts solely on documented instructions from the Controller." },
{ subDescription: "Terracode will not use personal data for its own purposes without explicit consent." }
]},
{ title: "3. Categories of Data Processed",
   subsections: [
{ subDescription: "Identification Data: Name, email, phone number, company details." },
{ subDescription: "Account Data: Authentication credentials, user profile information." },
{ subDescription: "Payment Data: Processed by third-party payment gateways; Terracode does not store card details." },
{ subDescription: "Usage Data: Logs, IP addresses, device details, SaaS interactions." }
]},
{ title: "4. Purpose of Processing",
    content: "Terracode processes personal data to:",
  subsections: [
{ subDescription: "Provide SaaS services and custom software solutions." },
{ subDescription: "Manage accounts, subscriptions, and billing." },
{ subDescription: "Provide technical support and troubleshooting." },
{ subDescription: "Improve platform stability, features, and security." },
{ subDescription: "Ensure compliance with legal obligations." }
]},
{ title: "5. Sub-processing", subsections: [
{ subDescription: "Terracode may engage trusted sub-processors, including:Cloud providers (AWS, Azure, GCP)." },
{ subDescription: "Payment gateways (Stripe, PayPal, local processors)." },
{ subDescription: "Analytics & monitoring providers (Google Analytics, Datadog)." },
{ subDescription: "Terracode ensures sub-processors are bound by contracts providing the same level of protection as this DPA." },
{ subDescription: "The Controller will be notified of significant changes in sub-processors." }
]},
{ title: "6. International Data Transfers", subsections: [
{ subDescription: "For EU customers: Transfers outside the EEA rely on:" },
{ subDescription: "Adequacy decisions, or" },
{ subDescription: "Standard Contractual Clauses (SCCs)." },
{ subDescription: "For U.S. customers: Transfers comply with CCPA and other applicable laws." },
{ subDescription: "For global customers: Data may be stored or processed in multiple jurisdictions with appropriate safeguards." }
]},
{ title: "7. Data Security",
  content: "Terracode implements technical and organizational measures, including:",
   subsections: [
{ subDescription: "Data encryption in transit (TLS/SSL) and at rest." },
{ subDescription: "Access controls with least privilege principle." },
{ subDescription: "Multi-factor authentication for sensitive systems." },
{ subDescription: "Logging, monitoring, and intrusion detection." },
{ subDescription: "Regular penetration testing and vulnerability assessments." },
{ subDescription: "Secure software development lifecycle (SDLC)." }
]},
{ title: "8. Data Subject Rights",
  content: "Terracode assists the Controller in fulfilling user rights, including:",
   subsections: [
{ subDescription: "Right of access, correction, and deletion." },
{ subDescription: "Right to restrict or object to processing." },
{ subDescription: "Right to portability." },
{ subDescription: "Right to withdraw consent at any time." },
{ subDescription: "Requests should be directed to the Controller, who will liaise with Terracode as needed." }
]},
{ title: "9. Breach Notification", subsections: [
{ subDescription: "Terracode will notify the Controller of any personal data breach within 72 hours of becoming aware." },
{ subDescription: "Notification will include nature, scope, affected records, and mitigation steps" },
]},
{ title: "10. Data Retention & Deletion", subsections: [
{ subDescription: "Personal data is retained only as long as necessary to provide Services or comply with laws." },
{ subDescription: "Upon contract termination, data will be securely deleted or returned at the Controller’s request.." },
]},
{ title: "11. Audits & Compliance", subsections: [
{ subDescription: "The Controller may request audits or security reports." },
{ subDescription: "Terracode will provide relevant certifications (e.g., ISO 27001, SOC 2, if applicable)" },
{ subDescription: "On-site audits may be conducted with reasonable notice and subject to confidentiality." }
]},
{ title: "12. Liability & Indemnity", subsections: [
{ subDescription: "Each party is liable for damages caused by its own non-compliance with data protection obligations." },
{ subDescription: "The Controller indemnifies Terracode against unlawful instructions." },
]},
{ title: "13. Governing Law", subsections: [
{ subDescription: "This DPA is governed by the laws of [Insert Jurisdiction], unless otherwise agreed in writing" },
]},
]
},
 {
id: 2,
title: "Expanded Disclaimer Policy",
date: "2 December 2024",
description: "This Disclaimer Policy (“Disclaimer”) applies to all websites, SaaS products, software services, mobile applications, and related offerings provided by Terracode (“we,” “our,” or “us”). By accessing or using our Services, you acknowledge and agree to the terms set forth below..",
sections: [
{ title: "1. General Disclaimer",
  content: "All Services are provided on an “AS IS” and “AS AVAILABLE” basis. While Terracode strives for reliability, accuracy, and uptime, we make no representations or warranties of any kind, express or implied, including but not limited to:",
   subsections: [
     { subDescription: "Accuracy, completeness, or reliability of information and content." },
     { subDescription: "Fitness for a particular purpose, merchantability, or non-infringement." },
     { subDescription: "Continuous, error-free, or virus-free availability of Services." },
      { subDescription: "Your use of our Services is at your sole risk." }
   ]
},
{ title: "2. No Professional Advice", subsections: [ { subDescription: "The information, content, and features provided through our Services do not constitute legal, financial, business, medical, or professional advice. You should seek independent professional consultation before relying on any information obtained from Terracode." } ]},
{ title: "3. Third-Party Services & Integrations", subsections: [
   { subDescription: "Our Services may contain links to or integrate with third-party providers (e.g., payment gateways, analytics platforms, cloud providers, marketing tools)." },
   { subDescription: "Terracode has no control over, and assumes no responsibility for, the accuracy, security, or availability of these third-party services." },
   { subDescription: "Use of third-party products or services is at your own risk and governed by their respective policies." }
]},
{ title: "4. Limitation of Liability",
  content: "To the fullest extent permitted by law, Terracode, its affiliates, employees, and partners shall not be liable for any damages, including but not limited to:",
  subsections: [
     { subDescription: "Indirect, incidental, consequential, or punitive damages." },
     { subDescription: "Loss of profits, business interruption, or reputational harm." },
     { subDescription: "Data loss, corruption, or unauthorized access to your information." },
     { subDescription: "Service outages or delays due to factors beyond our reasonable control." },
      { subDescription: "In all cases, Terracode’s maximum liability shall not exceed the total amount paid by you for the Services in the preceding twelve (12) months." }
    ]},
{ title: "5. Security & Availability",
  content: "While Terracode implements industry-standard security measures, no method of electronic storage, transmission, or processing is 100% secure.",
  subsections: [ 
    { subDescription: "We do not guarantee protection against all cyber threats, unauthorized access, or data breaches." },
    { subDescription: "We do not warrant uninterrupted access to Services, which may be subject to downtime, system updates, or unforeseen technical failures." }
  ]
},
{ title: "6. Force Majeure", subsections: [ { subDescription: "Terracode is not responsible for delays, interruptions, or failures caused by circumstances beyond our reasonable control, including but not limited to: natural disasters, government restrictions, cyberattacks, labor disputes, internet failures, or acts of third parties." } ]},
{ title: "7. Changes to Services & Disclaimer", subsections: [
   { subDescription: "Terracode reserves the right to modify, suspend, or discontinue any Service at any time without notice." },
   { subDescription: "We may amend this Disclaimer periodically, with changes effective upon posting an updated version to our website." }
  ]},
{ title: "8. Jurisdiction", subsections: [ { subDescription: "This Disclaimer is governed by the laws of [Insert Jurisdiction]. Any disputes shall be subject to the exclusive jurisdiction of courts in [Insert Jurisdiction]" } ]}
]
},
{
id: 3,
title: "Expanded End-User License Agreement (EULA)",
date: "2 December 2024",
description: "This End-User License Agreement (“Agreement”) is a legally binding contract between you (“User,” “You,” or “Licensee”) and Terracode (“Licensor,” “We,” “Our”). It governs your use of Terracode’s SaaS products, downloadable software, and related services (collectively, the “Software”).",
sections: [
{ title: "1. License Grant", subsections: [
   { subDescription: "Terracode grants you a limited, non-exclusive, non-transferable, revocable license to use the Software for your internal business purposes only." },
   { subDescription: "This license is provided strictly in accordance with this Agreement and does not transfer ownership." },
    { subDescription: "All rights not expressly granted are reserved by Terracode." }
  ]},
{ title: "2. Restrictions",
  content: "You shall not, directly or indirectly:",
  subsections: [ 
    { subDescription: "Copy, modify, translate, or create derivative works of the Software." },
    { subDescription: "Reverse engineer, decompile, or disassemble the Software." },
    { subDescription: "Rent, lease, sublicense, sell, or transfer the Software to third parties." },
    { subDescription: "Use the Software for competitive analysis or to build a similar product." },
    { subDescription: "Circumvent security mechanisms or license restrictions." },
{ subDescription: "Remove or alter proprietary notices, trademarks, or disclaimers.Any unauthorized use automatically terminates this Agreement." },

   ]},
{ title: "3. Ownership & Intellectual Proper",subsections: [
   { subDescription: "The Software is licensed, not sold." },
   { subDescription: "Terracode retains exclusive ownership of all intellectual property rights, including source code, databases, UI/UX designs, documentation, and updates." },
   { subDescription: "Unauthorized use constitutes infringement of intellectual property and may result in civil or criminal penalties." }
 ]},
{ title: "4. Updates & Upgrades", subsections: [
   { subDescription: "Terracode may provide updates, bug fixes, enhancements, or new versions of the Software." },
   { subDescription: "Updates are covered by this Agreement unless accompanied by new licensing terms." },
   { subDescription: "Terracode reserves the right to discontinue any feature or release at its discretion." }
]},
{ title: "5. Termination", subsections: [
   { subDescription: "Terracode may suspend or terminate this license immediately if you breach any provision of this Agreement." },
   { subDescription: "Upon termination, you must immediately cease use of the Software and destroy all copies in your possession." },
   { subDescription: "No refunds will be issued in cases of termination due to breach." }
]},
{ title: "6. Disclaimer of Warranties", subsections: [
   { subDescription: "The Software is provided “AS IS” without warranties of any kind." },
   { subDescription: "Terracode disclaims all implied warranties, including merchantability, fitness for a particular purpose, and non-infringement." },
   { subDescription: "Terracode does not guarantee uninterrupted, error-free operation or compatibility with all systems." }
]},
{ title: "7. Limitation of Liability", subsections: [
   { subDescription: "To the maximum extent permitted by law, Terracode shall not be liable for:" },
   { subDescription: "Indirect, incidental, or consequential damages." },
   { subDescription: "Data loss, corruption, or security breaches." },
    { subDescription: "Loss of profits, business interruption, or reputational harm." },
    { subDescription: "In any event, Terracode’s total liability shall not exceed the fees paid by you for the Software in the preceding twelve (12) months." }
]},
{ title: "8. Indemnification",
  content: "You agree to indemnify, defend, and hold harmless Terracode, its affiliates, and employees from any claims, damages, or expenses arising from:"
  ,subsections: [
   { subDescription: "Misuse of the Software." },
   { subDescription: "Breach of this Agreement." },
   { subDescription: "Violation of applicable laws or third-party rights." }
]},
{ title: "9. Export Control & Compliance", subsections: [
   { subDescription: "You may not use or export the Software in violation of applicable export control laws and trade regulations" },
   { subDescription: "The Software may not be distributed to restricted jurisdictions, governments, or sanctioned parties." },
]},
{ title: "10. Governing Law & Dispute Resolution", subsections: [
   { subDescription: "This Agreement is governed by the laws of [Insert Jurisdiction]." },
   { subDescription: "Any disputes shall be resolved exclusively through binding arbitration or the courts of [Insert Jurisdiction]." },
]},
{ title: "11. Entire Agreement", subsections: [
   { subDescription: "This Agreement constitutes the entire agreement between you and Terracode regarding the Software and supersedes all prior understandings, whether written or oral." },
]},
]},
 {
id: 4,
title: "Expanded Privacy Policy",
date: "2 December 2024",
description: "Terracode (“we,” “our,” or “us”) values your privacy and is committed to protecting personal information. This Privacy Policy explains how we collect, use, share, and safeguard information when you use our software services, SaaS products, websites, and applications (“Services”).By using our Services, you consent to the practices described in this policy.",
sections: [
{ title: "1. Information We Collect",subsections: [
   { subDescription: "Personal Information: Name, email address, phone number, company details, and billing details." },
   { subDescription: "Payment Information: Processed securely by third-party payment gateways; we do not store credit card details." },
   { subDescription: "Usage Data: Interactions with our Services, IP address, browser type, device identifiers, operating system, log files, and error reports." },
   { subDescription: "Cookies & Tracking Technologies: Information collected via cookies, beacons, pixels, and SDKs (see Cookie Policy)." },
   { subDescription: "Support & Communications: Data you provide when contacting customer support or engaging in surveys." }
]},
{ title: "2. Legal Basis for Processing (GDPR Compliance)",
  content: "If you are in the EU/EEA, we process your data under the following legal bases:",
  subsections: [
   { subDescription: "Contractual necessity (to deliver Services you subscribe to)." },
   { subDescription: "Legal obligations (to comply with financial or tax regulations)." },
   { subDescription: "Legitimate interests (to improve security, usability, and performance)." },
    { subDescription: "Consent (for marketing communications, analytics, or non-essential cookies)." }
]},
{ title: "3. How We Use Your Information",
  content: "We process data to:",
   subsections: [
   { subDescription: "Provide, operate, and improve Services." },
   { subDescription: "Process transactions, manage subscriptions, and deliver invoices." },
   { subDescription: "Personalize user experience and product recommendations." },
    { subDescription: "Ensure security, fraud detection, and system integrity." },
    { subDescription: "Communicate important updates, support messages, and promotional offers (where consented)." },
    { subDescription: "Comply with applicable laws and regulatory requirements.." },
]},
{ title: "4. Data Sharing & Third Parties",
  content: "We may share your information with:",
  subsections: [
   { subDescription: "Payment Processors: For secure billing transactions." },
   { subDescription: "Cloud Hosting Providers: For data storage and scalability." },
   { subDescription: "Analytics Providers: For performance monitoring and improvements." },
    { subDescription: "Legal Authorities: Where required to comply with applicable law." },
]},
{ title: "5. International Data Transfers", subsections: [
   { subDescription: "For EU/EEA customers, data transfers outside the region are governed by Standard Contractual Clauses (SCCs) or adequacy decisions." },
   { subDescription: "For California customers, we comply with CCPA and do not “sell” personal data." },
   { subDescription: "For other regions, data may be transferred globally with appropriate safeguards." }
]},
{ title: "6. Data Retention",subsections: [
   { subDescription: "We retain personal information only as long as necessary for service delivery, compliance, or dispute resolution." },
   { subDescription: "Once no longer required, data is securely deleted or anonymized." },
]},
{ title: "7. Data Security",
  content: "We implement industry-standard measures, including:",
  subsections: [
   { subDescription: "Encryption at rest and in transit (TLS/SSL)." },
   { subDescription: "Role-based access controls and multi-factor authentication." },
   { subDescription: "Regular vulnerability assessments and penetration testing." },
    { subDescription: "No method of transmission or storage is 100% secure, and we cannot guarantee absolute protection." }
]},
{ title: "8. User Rights",
  content: "Depending on your jurisdiction (GDPR, CCPA, etc.), you may have the right to:",
  subsections: [
   { subDescription: "Access, correct, or delete personal data." },
   { subDescription: "Restrict or object to processing." },
   { subDescription: "Request data portability." },
    { subDescription: "Opt-out of marketing communications." },
   { subDescription: "Withdraw consent at any time." },
   { subDescription: "To exercise these rights, contact us at privacy@terracode.com." }
]},
{ title: "9. Children’s Privacy", subsections: [
   { subDescription: "Our Services are not intended for individuals under 16 years of age. We do not knowingly collect data from minors. If discovered, such data will be promptly deleted." },
]},
{ title: "10. Updates to This Policy", subsections: [
   { subDescription: "We may update this Privacy Policy periodically. Material changes will be communicated via our website or directly to users where legally required." },
]},
]},
{
id: 5,
title: "Expanded Refund Policy",
date: "2 December 2024",
description: "At Terracode, we want every customer to have confidence in our software services and SaaS products. This Refund Policy sets out the circumstances in which refunds may be issued.",
sections: [
{ title: "1. SaaS Subscriptions",   subsections: [
   { subDescription: "Access, correct, or delete personal data." },
   { subDescription: "Restrict or object to processing." },
   { subDescription: "Request data portability." },
    { subDescription: "Opt-out of marketing communications." },
   { subDescription: "Withdraw consent at any time." },
   { subDescription: "To exercise these rights, contact us at privacy@terracode.com." }
]},
{ title: "2. Custom Services",  subsections: [
   { subDescription: "Access, correct, or delete personal data." },
   { subDescription: "Restrict or object to processing." },
   { subDescription: "Request data portability." },
    { subDescription: "Opt-out of marketing communications." },
   { subDescription: "Withdraw consent at any time." },
   { subDescription: "To exercise these rights, contact us at privacy@terracode.com." }
]},
{ title: "3. Exceptions",   subsections: [
   { subDescription: "Access, correct, or delete personal data." },
   { subDescription: "Restrict or object to processing." },
   { subDescription: "Request data portability." },
    { subDescription: "Opt-out of marketing communications." },
   { subDescription: "Withdraw consent at any time." },
   { subDescription: "To exercise these rights, contact us at privacy@terracode.com." }
]},
{ title: "4. Requesting Refunds",   subsections: [
   { subDescription: "Access, correct, or delete personal data." },
   { subDescription: "Restrict or object to processing." },
   { subDescription: "Request data portability." },
    { subDescription: "Opt-out of marketing communications." },
   { subDescription: "Withdraw consent at any time." },
   { subDescription: "To exercise these rights, contact us at privacy@terracode.com." }
]},
{ title: "5. Non-Refundable Items",   subsections: [
   { subDescription: "Access, correct, or delete personal data." },
   { subDescription: "Restrict or object to processing." },
   { subDescription: "Request data portability." },
    { subDescription: "Opt-out of marketing communications." },
   { subDescription: "Withdraw consent at any time." },
   { subDescription: "To exercise these rights, contact us at privacy@terracode.com." }
]},
{ title: "6. Dispute Resolution",   subsections: [
   { subDescription: "Access, correct, or delete personal data." },
   { subDescription: "Restrict or object to processing." },
   { subDescription: "Request data portability." },
    { subDescription: "Opt-out of marketing communications." },
   { subDescription: "Withdraw consent at any time." },
   { subDescription: "To exercise these rights, contact us at privacy@terracode.com." }
]},
{ title: "7. Consumer Law Rights",  subsections: [
   { subDescription: "Access, correct, or delete personal data." },
   { subDescription: "Restrict or object to processing." },
   { subDescription: "Request data portability." },
    { subDescription: "Opt-out of marketing communications." },
   { subDescription: "Withdraw consent at any time." },
   { subDescription: "To exercise these rights, contact us at privacy@terracode.com." }
]},
]
},
{
id: 6,
title: "Expanded Service Level Agreement (SLA)",
date: "2 December 2024",
description: "This SLA sets out service availability, support, and remedies.",
sections: [
{ title: "1. Availability", subsections: [ { subDescription: "99.9% uptime target; maintenance exclusions." } ]},
{ title: "2. Support", subsections: [ { subDescription: "Standard hours Mon–Fri; 24/7 for enterprise." } ]},
{ title: "3. Escalation", subsections: [ { subDescription: "Support Engineer → Senior Engineer → Manager → CTO." } ]},
{ title: "4. Responsibilities", subsections: [ { subDescription: "Clients must maintain connectivity and accurate info." } ]},
{ title: "5. Exclusions", subsections: [ { subDescription: "Beta features, 3rd-party outages, misuse." } ]},
{ title: "6. Monitoring", subsections: [ { subDescription: "Uptime monitored; reports available." } ]},
{ title: "7. Governing Law", subsections: [ { subDescription: "SLA governed by [Insert Jurisdiction]." } ]}
]
},
{
id: 7,
title: "Expanded Terms & Conditions",
date: "2 December 2024",
description: "These Terms govern use of Terracode’s software, SaaS, and services.",
sections: [
{ title: "1. Definitions", subsections: [ { subDescription: "Services, User, Deliverables, Subscription." } ]},
{ title: "2. Scope", subsections: [ { subDescription: "Covers custom software, SaaS, consulting." } ]},
{ title: "3. User Responsibilities", subsections: [ { subDescription: "Lawful use, no misuse, maintain credentials." } ]},
{ title: "4. Accounts", subsections: [ { subDescription: "Must provide accurate info; responsible for activity." } ]},
{ title: "5. Payments", subsections: [ { subDescription: "Subscriptions recurring; services milestone-based." } ]},
{ title: "6. IP", subsections: [ { subDescription: "Terracode retains IP; client has limited license." } ]},
{ title: "7. Confidentiality", subsections: [ { subDescription: "Mutual confidentiality of disclosed info." } ]},
{ title: "8. Availability", subsections: [ { subDescription: "99.9% uptime target; exclusions apply." } ]},
{ title: "9. Warranties", subsections: [ { subDescription: "Services provided AS IS." } ]},
{ title: "10. Liability", subsections: [ { subDescription: "Liability capped at fees paid in last 12 months." } ]},
{ title: "11. Termination", subsections: [ { subDescription: "Termination for breach, non-payment, misuse." } ]},
{ title: "12. Force Majeure", subsections: [ { subDescription: "Not liable for uncontrollable events." } ]},
{ title: "13. Amendments", subsections: [ { subDescription: "Terms may be updated; continued use is consent." } ]},
{ title: "14. Governing Law", subsections: [ { subDescription: "Disputes resolved under [Insert Jurisdiction]." } ]},
{ title: "15. Entire Agreement", subsections: [ { subDescription: "Supersedes all prior agreements." } ]}
]
}
];