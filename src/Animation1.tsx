import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export function Animation1() {
  const ref1 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root element
      rootMargin: "10%", // Apply no margin around the root element
      threshold: 0.2, // Use a threshold of 0 (element is considered visible if any part is visible)
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("intersecting", entry);
          gsap.to(entry.target, { rotate: 360, duration: 5 });
        } else {
          // Stop or reverse GSAP animation if needed
          // For example:
          gsap.to(entry.target, { rotate: 270, duration: 5 });
        }
      });
    }, observerOptions);

    // gsap.to(ref1.current, {
    //   rotate: 360,
    //   duration: 5,
    //   scrollTrigger: {
    //     trigger: "#element1",
    //     start: "10% bottom",
    //   },
    // });

    const element: any = ref1.current;
    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <div id="element1">
      <p ref={ref1}>text 1</p>
      <p>text 2</p>
    </div>
  );
}
