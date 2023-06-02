import { useEffect, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  xscroll-padding-top: 50px;
  scroll-behavior: smooth;
  overflow: auto;
  scroll-snap-type: y mandatory;
  height: 300px; /* adjust as needed */
  width: 500px;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export interface IScrollableContainerProps {
  children: React.ReactNode;
  className?: string;
}
export function ScrollableContainer(props: IScrollableContainerProps) {
  const containerRef = useRef(null);

  useEffect(() => {
    // const handleContainerScroll = () => {
    //   // Disable main scroll bar by setting overflow to hidden
    //   document.body.style.overflow = "hidden";
    // };

    const handleContainerScrollEnd = () => {
      // Enable main scroll bar by setting overflow back to its default value
      console.log("remove scrolling event");
      document.body.style.overflow = "auto";
    };

    const handleScroll = () => {
      const container: any = containerRef.current;
      if (container) {
        const scrollTop = container.scrollTop;
        const childHeight = container.firstChild.clientHeight;

        // Adjust scroll position to reveal a portion of the next child
        container.scrollTop = Math.floor(scrollTop / childHeight) * childHeight;
        document.body.style.overflow = "hidden";
      }
    };

    const container: any = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      container.addEventListener("sweep", handleScroll);
      container.addEventListener("onblur", handleContainerScrollEnd);
      container.addEventListener("scrollend", handleContainerScrollEnd);
    }
    return () => {
      container.addEventListener("sweep", handleScroll);
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("scrollend", handleContainerScrollEnd);
    };
  }, []);

  return (
    <Container className={`${props.className}`} ref={containerRef}>
      {props.children}
    </Container>
  );
}
