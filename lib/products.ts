export const products = [
  {
    id: "echopulse",
    name: "EchoPulse",
    category: "Music Technology",
    status: "In Development",
    tagline: "Build the artist. Launch the world.",
    description:
      "An AI-powered artist ecosystem connecting music creation, artist identity, release strategy, community, and PulseWorld.",
    href: "https://echopulsetm.com",
    logo: "/brand/echopulse-logo.png",
    theme: "echo",
  },
] as const;

export type Product = (typeof products)[number];
