import { type Component, createMemo, For } from "solid-js";
import { startFromFile, rawData } from "./audioSource";
import { arc } from "d3";

const arcBuilder = arc();

const RadialGraph: Component = () => {
  const paths = createMemo(() => {
    const data = rawData();
    
    const paths: {
      path: string;
      color: string;
    }[] = [];

    const range = 1.8;
    const rangeInRadians = range * Math.PI;
    const startAngle = -(rangeInRadians / 2);
    const angle = rangeInRadians / data.length;
    let currentAngle = startAngle;

    for (const d of data) {
      const path = arcBuilder({
        innerRadius: 50 - (d / 255) * 35,
        outerRadius: 50 + (d / 255) * 35,
        startAngle: currentAngle,
        endAngle: currentAngle + angle,
      })!;
      paths.push({
        path,
        color: "blue",
      });
      currentAngle += angle;
    }

    return paths;
  });

  return (
    <g>
      <For each={paths()}>{(p) => <path d={p.path} fill={p.color} />}</For>
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
