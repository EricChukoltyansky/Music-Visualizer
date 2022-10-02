import type { Component } from "solid-js";
import { startFromFile, rawData } from "./audioSource";
const App: Component = () => {
  return (
    <div onClick={startFromFile} style="width: 100vw; height: 100vh;">
      <svg
        width="100%"
        height="100%"
        viewBox="-100 -100 200 200"
        preserveAspectRatio="xMidYMid meet"
      ></svg>
    </div>
  );
};

export default App;
