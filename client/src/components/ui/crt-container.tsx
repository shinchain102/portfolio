import { cn } from "@/lib/utils";

interface CRTContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function CRTContainer({ children, className }: CRTContainerProps) {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-lg",
      "before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0",
      "before:bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.025)_50%)]",
      "before:bg-[length:100%_4px]",
      "after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0",
      "after:bg-[radial-gradient(circle_800px_at_50%_50%,transparent,rgba(0,0,0,0.3))]",
      className
    )}>
      {children}
    </div>
  );
}
