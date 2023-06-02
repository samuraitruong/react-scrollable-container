import styled from "styled-components";

const ScrollableLayerDiv = styled.div`
  scroll-snap-align: start;
  xmargin-top: -50px;
  height: 100%; /* adjust as needed */
  width: 100%;
`;

export interface IScrollableLayerProps {
  children: React.ReactNode;
  className?: string;
}
export function ScrollableLayer(props: IScrollableLayerProps) {
  return (
    <ScrollableLayerDiv className={`${props.className}`}>
      {props.children}
    </ScrollableLayerDiv>
  );
}
