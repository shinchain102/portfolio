import { useEffect, useState } from "react";
import { gsap } from "gsap";
import styles from "./loading-screen.module.css";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Loading screen mounted");

    // Create initial entrance animation
    gsap.from("." + styles.loadingScreen, {
      duration: 0.3,
      opacity: 0,
      scale: 1.1,
    });

    // After 1.5s, trigger the exit transition
    const timer = setTimeout(() => {
      console.log("Starting exit animation");

      // Create a more dramatic exit animation
      const tl = gsap.timeline({
        onComplete: () => {
          console.log("Exit animation complete");
          setIsLoading(false);
        }
      });

      tl.to("." + styles.loadingScreen, {
        duration: 0.5,
        opacity: 0,
        scale: 1.2,
        filter: "brightness(2) blur(10px)",
        ease: "power2.inOut"
      });

    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className={styles.loadingScreen}>
      <div className={styles.noise} />
      <div className={styles.scanlines} />
      <div className={styles.text}>INITIALIZING SYSTEM</div>
    </div>
  );
}