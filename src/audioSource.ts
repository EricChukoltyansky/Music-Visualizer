import { createSignal } from "solid-js";
import { arc } from "d3";

const [rawData, setRawData] = createSignal<number[]>([]);

export const startFromFile = async () => {
  const res = await fetch("/wonder.mp3");
  const byteArray = await res.arrayBuffer();

  const context = new AudioContext();
  const audioBuffer = await context.decodeAudioData(byteArray);

  const source = context.createBufferSource();
  source.buffer = audioBuffer;

  const analyzer = context.createAnalyser();
  analyzer.fftSize = 2048;

  source.connect(analyzer);
  //   analyzer.connect(context.destination);
  source.start();

  const bufferLength = analyzer.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  const update = () => {
    analyzer.getByteTimeDomainData(dataArray);
    setRawData(Array.from(dataArray));
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
};

export { rawData };
