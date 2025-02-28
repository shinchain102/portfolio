import gsap from "gsap";

export const typewriterEffect = (element: HTMLElement, text: string) => {
  const tl = gsap.timeline();
  let currentText = "";

  tl.to({}, {
    duration: text.length * 0.1,
    onUpdate: () => {
      const progress = Math.floor(tl.progress() * text.length);
      if (progress > currentText.length) {
        currentText = text.slice(0, progress);
        element.textContent = currentText + "█";
      }
    },
    onComplete: () => {
      element.textContent = text;
    }
  });

  return tl;
};

export const glitchEffect = (element: HTMLElement) => {
  const originalText = element.textContent || "";
  let glitchTimeout: number;

  const createGlitch = () => {
    // Apply random transforms and color shifts
    const transforms = [
      `translateX(${gsap.utils.random(-5, 5)}px)`,
      `skewX(${gsap.utils.random(-10, 10)}deg)`,
      `scaleY(${gsap.utils.random(0.9, 1.1)})`,
    ];

    // Create RGB split effect
    const rgbShift = `
      rgb(${gsap.utils.random(0, 255)}, 
          ${gsap.utils.random(0, 255)}, 
          ${gsap.utils.random(0, 255)})
    `;

    // Apply visual distortions
    element.style.transform = transforms.join(' ');
    element.style.filter = `
      blur(${gsap.utils.random(0, 2)}px)
      brightness(${gsap.utils.random(0.8, 1.2)})
      contrast(${gsap.utils.random(0.8, 1.2)})
    `;

    // Apply color and shadow effects
    element.style.color = rgbShift;
    element.style.textShadow = `
      ${gsap.utils.random(-3, 3)}px 0 rgba(255,0,0,0.5),
      ${gsap.utils.random(-3, 3)}px 0 rgba(0,255,0,0.5),
      ${gsap.utils.random(-3, 3)}px 0 rgba(0,0,255,0.5)
    `;

    // Random position shift
    element.style.position = 'relative';
    element.style.left = `${gsap.utils.random(-2, 2)}px`;
    element.style.top = `${gsap.utils.random(-2, 2)}px`;

    glitchTimeout = window.setTimeout(createGlitch, gsap.utils.random(50, 200));
  };

  const tl = gsap.timeline({
    repeat: -1,
    repeatDelay: gsap.utils.random(2, 5)
  });

  tl.to({}, {
    duration: 0.2,
    onStart: () => {
      createGlitch();
    },
    onComplete: () => {
      clearTimeout(glitchTimeout);
      // Reset to original state
      element.style.transform = '';
      element.style.filter = '';
      element.style.color = '';
      element.style.textShadow = '';
      element.style.position = '';
      element.style.left = '';
      element.style.top = '';
      element.textContent = originalText;
    }
  });

  return tl;
};