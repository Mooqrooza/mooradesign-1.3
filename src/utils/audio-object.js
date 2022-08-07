const AudioContext = (window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext);
let audioContext = new AudioContext();
let audioElement = null;
let audioSource = null;
let lowpassFilter = null;
let bgAudioInited = false;

/* Audio main control */
export const initBgAudio = () => {
    if (bgAudioInited) return;
    bgAudioInited = true;
    audioElement = document.querySelector('.bg-audio-player') || new Audio;
    audioSource = audioContext.createMediaElementSource(audioElement);
    lowpassFilter = audioContext.createBiquadFilter();
    audioSource.connect(lowpassFilter);
    audioSource.loop = true;
    lowpassFilter.connect(audioContext.destination);
    lowpassFilter.type = 'lowpass';
    lowpassFilter.frequency.value = 22050;
};
export const playBgAudio = () => { audioElement.play(); };
export const pauseBgAudio = () => { audioElement.pause(); };
/* Lowpass Filters activates */
export const onLowpassFilter = () => {
  lowpassFilter.frequency.linearRampToValueAtTime(3500, audioContext.currentTime+0.2);
  lowpassFilter.frequency.linearRampToValueAtTime(600, audioContext.currentTime+0.4);
  lowpassFilter.frequency.linearRampToValueAtTime(220, audioContext.currentTime+0.6);
};
export const onLowpassFilterLogoDie = () => {
  lowpassFilter.frequency.linearRampToValueAtTime(150, audioContext.currentTime+0.1);
  lowpassFilter.frequency.linearRampToValueAtTime(250, audioContext.currentTime+0.4);
  lowpassFilter.frequency.linearRampToValueAtTime(22050, audioContext.currentTime+3);
};
/* Lowpass Filters deactivates */
export const offLowpassFilter = () => {
  lowpassFilter.frequency.linearRampToValueAtTime(250, audioContext.currentTime+0.2);
  lowpassFilter.frequency.linearRampToValueAtTime(360, audioContext.currentTime+0.7);
  lowpassFilter.frequency.linearRampToValueAtTime(4000, audioContext.currentTime+1);
  lowpassFilter.frequency.linearRampToValueAtTime(22050, audioContext.currentTime+1.5);
};
export const offLowpassFilterFast = () => {
  lowpassFilter.frequency.volume = 220;
};
/* Lowpass Filters Kicks Fx */
export const lowpassFilterLogoDestroy = () => {
  lowpassFilter.frequency.linearRampToValueAtTime(250, audioContext.currentTime+0.05);
  lowpassFilter.frequency.linearRampToValueAtTime(22050, audioContext.currentTime+3);
};
