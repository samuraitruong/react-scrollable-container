import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export function Animation3() {
  const wrapper = useRef<HTMLImageElement>(null);
  const ref1 = useRef<HTMLImageElement>(null);
  const ref2 = useRef<HTMLImageElement>(null);
  const timeline = gsap.timeline();
  const timeline2 = gsap.timeline();

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root element
      rootMargin: "10%", // Apply no margin around the root element
      threshold: 0.5, // Use a threshold of 0 (element is considered visible if any part is visible)
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Animation 3", entry);
          const frog = ref2.current;
          const spider = ref1.current;

          timeline
            .from(frog, { x: 0, duration: 1 })
            .to(frog, { x: 100, duration: 5, ease: "power1.inOut" })
            .to(frog, { x: 200, duration: 3, ease: "bounce.out" })
            .to(frog, {
              scaleY: 2,
              scaleX: 2,
              duration: 1,
              x: 0,
              y: 120,
              ease: "bounce.out",
            });

          timeline2
            .from(spider, { x: 100, duration: 1 })
            .to(spider, { x: 200, duration: 8, ease: "steps(8)" })
            .to(spider, { scaleX: 0.1, scaleY: 0.1, duration: 1 })
            .to(spider, { opacity: 0, duration: 1 });

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

    const element: any = wrapper.current;
    observer.observe(element);

    return () => {
      observer.unobserve(element);
      timeline.kill();
      timeline2.kill();
    };
  }, [timeline, timeline2]);

  return (
    <div ref={wrapper}>
      <img
        src="https://e7.pngegg.com/pngimages/1/256/png-clipart-frog-cartoon-frog-animals-photography.png"
        width={100}
        height={100}
        ref={ref2}
        alt=""
      />
      <img
        src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-insect-biological-spider-cartoon-hand-drawn-spider-png-image_3784284.jpg"
        width={50}
        height={50}
        ref={ref1}
        alt=""
      />
    </div>
  );
}
