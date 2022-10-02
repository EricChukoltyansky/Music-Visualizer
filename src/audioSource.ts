export const startFromFile = async () => {
  const res = await fetch("/tooLong.mp3");
  const byteArray = await res.arrayBuffer();

  const context = new AudioContext();
  const audioBuffer = await context.decodeAudioData(byteArray);
};
