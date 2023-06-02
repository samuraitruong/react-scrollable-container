import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export function Animation1() {
  const ref1 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, { rotate: 360, duration: 5 });
        } else {
          // Stop or reverse GSAP animation if needed
          // For example:
          gsap.to(entry.target, { rotate: 270, duration: 5 });
        }
      });
    });

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
