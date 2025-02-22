let audioCtx = new AudioContext();
let oscilator = audioCtx.createOscillator();
let gainNode = audioCtx.createGain();

//connect nodes
oscilator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscilator.type = "sawtooth";
oscilator.frequency.value = 440;
gainNode.gain.value = 0;

oscilator.start();
const startOscilator = function () {
  gainNode.gain.value = 1;
};
const stopOscilator = function () {
  gainNode.gain.value = 0;
};

document.getElementById("playButton").addEventListener("click", startOscilator);
document.getElementById("stopButton").addEventListener("click", stopOscilator);

const updateFrequency = function () {
  oscilator.frequency.value = event.target.value;
};

const adjustVolume = function () {
  gainNode.gain.value = event.target.value;
};

document
  .getElementById("freqSlider")
  .addEventListener("input", updateFrequency);
document.getElementById("gainSlider").addEventListener("input", adjustVolume);
