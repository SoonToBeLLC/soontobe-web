export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  id: string;
  title: string;
  items: FaqItem[];
};

export const homepageFaqs: FaqItem[] = [
  {
    question: "What is SoonToBe?",
    answer:
      "SoonToBe is an independent creative product studio that develops and launches original digital products across creativity, technology, and culture.",
  },
  {
    question: "What is EchoPulse?",
    answer:
      "EchoPulse is SoonToBe’s flagship music technology product—an AI-powered ecosystem built around artist creation, identity, release strategy, community, and PulseWorld.",
  },
  {
    question: "Is EchoPulse available now?",
    answer:
      "EchoPulse is currently in development. Availability and launch information will be shared as the product moves toward release.",
  },
  {
    question: "Does SoonToBe build products for clients?",
    answer:
      "SoonToBe is primarily focused on creating and developing its own products. Partnership and business inquiries can be submitted through our Contact page.",
  },
];

export const faqCategories: FaqCategory[] = [
  {
    id: "about",
    title: "About SoonToBe",
    items: [
      {
        question: "What is SoonToBe, LLC?",
        answer:
          "SoonToBe, LLC is an independent creative product studio. It develops and launches original digital products across creativity, technology, and culture.",
      },
      {
        question: "What does SoonToBe build?",
        answer:
          "SoonToBe builds original digital products. EchoPulse, its flagship music technology product, is currently in development.",
      },
      {
        question: "Is SoonToBe a software agency?",
        answer:
          "No. SoonToBe is a product studio focused on its own products, not a freelance agency or client-services firm.",
      },
      {
        question: "Who owns products created by SoonToBe?",
        answer:
          "Products created by the studio, including EchoPulse, are owned by SoonToBe, LLC.",
      },
    ],
  },
  {
    id: "echopulse",
    title: "EchoPulse",
    items: [
      {
        question: "What is EchoPulse?",
        answer: homepageFaqs[1].answer,
      },
      {
        question: "Who is EchoPulse for?",
        answer:
          "EchoPulse is being designed for artists and the people around their work, spanning creation, identity, release strategy, community, and PulseWorld.",
      },
      {
        question: "Is EchoPulse available yet?",
        answer: homepageFaqs[2].answer,
      },
      {
        question: "Will EchoPulse have its own website and policies?",
        answer:
          "EchoPulse is planned to have its own product experience. Product-specific terms, privacy policies, and support details will be published as development progresses.",
      },
    ],
  },
  {
    id: "business",
    title: "Business & Partnerships",
    items: [
      {
        question: "How can I contact SoonToBe?",
        answer:
          "Email hello@soontobellc.com or use the Contact section on this website.",
      },
      {
        question: "Does SoonToBe accept partnerships?",
        answer:
          "SoonToBe considers partnership and business inquiries individually. Send details to hello@soontobellc.com.",
      },
      {
        question: "How can developer platforms verify SoonToBe and EchoPulse?",
        answer:
          "SoonToBe, LLC is the company developing EchoPulse. For verification questions, contact hello@soontobellc.com.",
      },
      {
        question: "Where can I send product or business inquiries?",
        answer:
          "Send product, partnership, and business inquiries to hello@soontobellc.com.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy & Support",
    items: [
      {
        question: "Does the SoonToBe website collect personal information?",
        answer:
          "This website is informational. Information you choose to send, such as an email inquiry, is used to respond to that request.",
      },
      {
        question: "Does SoonToBe sell user information?",
        answer: "SoonToBe does not sell personal information.",
      },
      {
        question: "Will individual products have separate privacy policies?",
        answer:
          "Yes. Individual products, including EchoPulse, may publish their own privacy policies as they become available.",
      },
      {
        question: "Where can I get support?",
        answer:
          "For studio or product questions, email hello@soontobellc.com. Dedicated product support will be provided as products become available.",
      },
    ],
  },
];
