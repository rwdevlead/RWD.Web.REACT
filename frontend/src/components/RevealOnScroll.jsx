import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children, effect = "fadeUp" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("visible");
        } else {
          ref.current.classList.remove("visible");
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
      // For the rootMargin in IntersectionObserver (which you’re currently using in RevealOnScroll), you must use pixels (px) or percentages (%) — not rem or em.
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Base Tailwind classes for different effects
  const baseClasses = {
    fadeUp: "opacity-0 translate-y-6 transition-all duration-700 ease-out",
    fadeDown: "opacity-0 -translate-y-6 transition-all duration-700 ease-out",
    fadeLeft: "opacity-0 -translate-x-6 transition-all duration-700 ease-out",
    fadeRight: "opacity-0 translate-x-6 transition-all duration-700 ease-out",
    scaleUp: "opacity-0 scale-95 transition-all duration-700 ease-out",
    rotateIn: "opacity-0 -rotate-6 transition-all duration-700 ease-out",
  };

  const visibleClasses = {
    fadeUp: "opacity-100 translate-y-0",
    fadeDown: "opacity-100 translate-y-0",
    fadeLeft: "opacity-100 translate-x-0",
    fadeRight: "opacity-100 translate-x-0",
    scaleUp: "opacity-100 scale-100",
    rotateIn: "opacity-100 rotate-0",
  };

  return (
    <div
      ref={ref}
      className={`${baseClasses[effect]} reveal`}
      data-visible={visibleClasses[effect]}
    >
      {children}
    </div>
  );
};
