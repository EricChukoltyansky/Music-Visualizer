export const startFromFile = async () => {
  const res = await fetch("/wonder.mp3");
  const byteArray = await res.arrayBuffer();

  const context = new AudioContext();
  const audioBuffer = await context.decodeAudioData(byteArray);

  const source = context.createBufferSource();
  source.buffer = audioBuffer;

  source.connect(context.destination);
  source.start();
};
