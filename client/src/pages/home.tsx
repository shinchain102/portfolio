import { Hero } from "@/components/sections/hero";
import { Photography } from "@/components/sections/photography";
import { Marketing } from "@/components/sections/marketing";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="scanline" />
      <Hero />
      <Photography />
      <Marketing />
      <Contact />
    </main>
  );
}
