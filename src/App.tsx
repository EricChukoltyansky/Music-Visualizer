import type { Component } from "solid-js";
import { startFromFile, rawData } from "./audioSource";
const App: Component = () => {
  return (
    <div onClick={startFromFile} style="width: 100vw; height: 100vh;">
      {JSON.stringify(rawData())}
    </div>
  );
};

export default App;
