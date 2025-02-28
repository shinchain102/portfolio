import { Card, CardContent } from "@/components/ui/card";
import { CRTContainer } from "@/components/ui/crt-container";
import { SiGithub, SiLinkedin, SiInstagram, SiDiscord } from "react-icons/si";

export function Contact() {
  const socialLinks = [
    { icon: SiGithub, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: SiLinkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: SiInstagram, href: "https://instagram.com/yourusername", label: "Instagram" },
    { icon: SiDiscord, href: "https://discord.com/users/yourusername", label: "Discord" }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 neon-glow text-center glitch-effect" data-text="CONNECT">
          CONNECT
        </h2>

        <CRTContainer>
          <Card className="bg-background/80 backdrop-blur border-primary/50">
            <CardContent className="p-6">
              <div className="flex justify-center gap-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-4xl hover:text-primary transition-colors duration-300 hover:neon-glow"
                    aria-label={social.label}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </CRTContainer>
      </div>
    </section>
  );
}