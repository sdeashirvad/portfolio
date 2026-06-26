import {
  Github,
  Linkedin,
  Twitter,
  Newspaper,
  Code2,
} from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/sdeashirvad",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sdeashirvad/",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://x.com/sdeashirvad",
    label: "X / Twitter",
  },
  {
    icon: Newspaper,
    href: "https://sdeashirvad.medium.com/",
    label: "Medium",
  },
  {
    icon: Code2,
    href: "https://leetcode.com/u/ashirvadpandey1/",
    label: "LeetCode",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#writing", label: "Writing" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 border-t border-border"
      aria-label="Footer"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand / Identity */}
          <div className="text-center md:text-left">
            <a
              href="/"
              aria-label="Ashirvad Kumar Pandey Homepage"
              className="text-xl font-bold tracking-tight"
            >
              AKP<span className="text-primary">.</span>
            </a>

            <p className="text-sm text-muted-foreground mt-2">
                © {currentYear} SDEAshirvad Labs
            </p>
            <p className="text-xs text-muted-foreground/80 mt-2 max-w-sm">
              Building reliable software for developers, enterprise workflows, and AI-powered operations.
            </p>
            <p className="text-xs text-muted-foreground/80 mt-1 max-w-sm">
              Building independent products that evolve into a connected engineering platform.
            </p>
            <p className="text-xs text-muted-foreground/80 mt-1">
             Ashirvad Kumar Pandey (sdeashirvad)
             </p>
          </div>

          {/* Navigation */}
          <nav
            className="flex flex-wrap justify-center gap-6"
            aria-label="Footer Navigation"
          >
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div
            className="flex items-center gap-4"
            aria-label="Social Links"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};
