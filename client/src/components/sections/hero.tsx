import { useEffect, useRef } from "react";
import { typewriterEffect } from "@/lib/animations";
import { GlitchText } from "@/components/ui/glitch-text";
import { CRTContainer } from "@/components/ui/crt-container";

export function Hero() {
  const introRef = useRef<HTMLParagraphRef>(null);

  useEffect(() => {
    if (introRef.current) {
      const animation = typewriterEffect(
        introRef.current,
        "Hi, I'm Sunny Gupta (aka Shinchan). I craft digital experiences that leave a lasting impression."
      );
      return () => animation.kill();
    }
  }, []);

  return (
    <CRTContainer className="min-h-screen flex flex-col items-center justify-center p-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <GlitchText
          text="SUNNY GUPTA"
          className="text-6xl md:text-8xl font-bold mb-6 neon-glow"
        />
        <p
          ref={introRef}
          className="text-xl md:text-2xl text-muted-foreground mb-8"
        ></p>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </CRTContainer>
  );
}
