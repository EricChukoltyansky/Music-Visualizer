import type { Component } from "solid-js";
import { startFromFile } from "./audioSource";

const App: Component = () => {
  return (
    <div onClick={startFromFile} style="width: 100vw; height: 100vh;"></div>
  );
};

export default App;
