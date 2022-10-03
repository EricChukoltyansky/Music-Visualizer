import { type Component, createMemo, For } from "solid-js";
import { startFromFile, rawData } from "./audioSource";
import { arc } from "d3";

const arcBuilder = arc();

const RadialGraph: Component = () => {
  const paths = createMemo(() => {
    const data = rawData();
    let currentAngle = 0;

    const paths: {
      path: string | null;
      color: string;
    }[] = [];

    for (const d of data) {
      const path = arcBuilder({
        innerRadius: 50 - (d / 255) * 35,
        outerRadius: 50 + (d / 255) * 35,
        startAngle: currentAngle,
        endAngle: currentAngle + Math.PI * 0.1,
      });
      paths.push({
        path,
        color: "blue",
      });
      currentAngle += Math.PI * 0.1;
    }
  });

  return (
    <g>
      <For each={paths()}>{() => <path d={path} fill="black" />}</For>
      <path d={path} fill="black" />
    </g>
  );
};

const App: Component = () => {
  return (
    <div onClick={startFromFile} style="width: 100vw; height: 100vh;">
      <svg
        width="100%"
        height="100%"
        viewBox="-100 -100 200 200"
        preserveAspectRatio="xMidYMid meet"
      >
        <RadialGraph />
      </svg>
    </div>
  );
};

export default App;
