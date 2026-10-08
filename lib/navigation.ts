export const navItems = [
  { href: "/#studio", label: "Studio" },
  { href: "/#products", label: "Products" },
  { href: "/faq", label: "FAQ" },
  { href: "/#company", label: "Company" },
  { href: "/#contact", label: "Contact" },
] as const;

export const footerLinks = [
  ...navItems,
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;
