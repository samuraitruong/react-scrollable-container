import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export function Animation2() {
  const ref1 = useRef<HTMLImageElement>(null);
  const ref2 = useRef<HTMLHeadingElement>(null);
  const timeline = gsap.timeline();

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root element
      rootMargin: "10%", // Apply no margin around the root element
      threshold: 0.2, // Use a threshold of 0 (element is considered visible if any part is visible)
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("anim ation 2 intersecting", entry);
          timeline
            .from(element, { opacity: 0, y: -10, duration: 1 })
            .to(element, { opacity: 1, y: 0, duration: 1 })
            .to(element, { scaleX: 3, scaleY: 3, duration: 1 })
            .to(element, { scaleX: 2, scaleY: 2, duration: 1 })
            .to(element, { scaleX: 1, scaleY: 1, duration: 1 })
            .to(element, { rotate: 180, duration: 1 })
            .to(element, { rotate: 360, duration: 0.2 })
            .from(ref2.current, { opacity: 0, y: -50, duration: 1 })
            .to(ref2.current, {
              opacity: 1,
              y: 20,
              x: 100,
              rotate: 360,
              duration: 3,
            });

          //.to(ref2.current, { opacity: 1, duration: 1 });
        } else {
          // Stop or reverse GSAP animation if needed
          // For example:
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
      timeline.kill();
    };
  }, [timeline]);

  return (
    <div id="element2">
      <img
        src="https://w7.pngwing.com/pngs/99/545/png-transparent-frog-green-frog-painted-animals-hand-thumbnail.png"
        width={100}
        height={100}
        ref={ref1}
        alt=""
      />
      <h2 ref={ref2}> I am Mr Frog!!!</h2>
    </div>
  );
}
