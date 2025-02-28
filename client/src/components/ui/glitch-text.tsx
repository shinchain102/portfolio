import { useEffect, useRef } from "react";
import { glitchEffect } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className }: GlitchTextProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const animation = glitchEffect(textRef.current);
      return () => animation.kill();
    }
  }, [text]);

  return (
    <div 
      ref={textRef}
      className={cn("font-mono relative", className)}
      data-text={text}
    >
      {text}
    </div>
  );
}
