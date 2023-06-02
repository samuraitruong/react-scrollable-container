import "./App.css";
import { ScrollableContainer } from "./Scrolllable-Container";
import { ScrollableLayer } from "./Scollable-Layer";
import styled from "styled-components";
import { Animation1 } from "./Animation1";
import { Animation2 } from "./Animation2";

const Sample = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #111;
`;

function App() {
  return (
    <div className="App">
      <ScrollableContainer>
        <>
          <ScrollableLayer>
            <Sample style={{ backgroundColor: "red" }}> Test 1</Sample>
          </ScrollableLayer>
          <ScrollableLayer>
            <Animation2 />
          </ScrollableLayer>

          <ScrollableLayer>
            <Sample style={{ backgroundColor: "green" }}> Test 2</Sample>
          </ScrollableLayer>

          <ScrollableLayer>
            <Sample style={{ backgroundColor: "blue" }}> Test 3</Sample>
          </ScrollableLayer>

          <ScrollableLayer>
            <Sample style={{ backgroundColor: "yellow" }}> Test 4</Sample>
          </ScrollableLayer>

          <ScrollableLayer>
            <Animation1 />
          </ScrollableLayer>
        </>
      </ScrollableContainer>
    </div>
  );
}

export default App;
