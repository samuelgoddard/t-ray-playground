import React from 'react';
import useKeypress from 'react-use-keypress';
import { Howl } from 'howler';

const drums = new Howl({
  "src": [
    "./stems/drums-sprite.webm",
    "./stems/drums-sprite.mp3"
  ],
  "sprite": {
    "clap": [
      0,
      734.2630385487529
    ],
    "closed-hihat": [
      2000,
      445.94104308390035
    ],
    "crash": [
      4000,
      1978.6848072562354
    ],
    "kick": [
      7000,
      553.0839002267571
    ],
    "open-hihat": [
      9000,
      962.7664399092968
    ],
    "snare": [
      11000,
      354.48979591836684
    ]
  }
});

function playDrum(soundToPlay) {
  drums.play(soundToPlay);
}

function DrumMachine() {
  useKeypress(['b', '1', '2', '3', '4', '7'], (event) => {
    if (event.key === 'b') {
      playDrum('closed-hihat');
    } else if (event.key === '1') {
      playDrum('snare')
    } else if (event.key === '2') {
      playDrum('clap')
    } else if (event.key === '3') {
      playDrum('open-hihat')
    } else if (event.key === '4') {
      playDrum('crash')
    } else if (event.key === '7') {
      playDrum('kick')
    }
  });

  return (
    <div className="max-w-3xl bg-gray-200 p-6">
      <h2 className="font-bold mb-0 pb-5 flex">Play Along Mode <span className="block text-black bg-white ml-2 rounded-lg px-2 py-1 text-xs font-bold shadow-md">Keyboard</span></h2>
      <div className="flex flex-wrap">
        <button onClick={() => playDrum('snare')} className="flex items-center justify-center bg-black text-white text-center mr-3 mb-3 px-3 py-3 capitalize">snare <span className="block text-black bg-white ml-2 rounded-lg px-2 py-1 text-xs font-bold shadow-md">1</span></button>
        <button onClick={() => playDrum('clap')} className="flex items-center justify-center bg-black  text-white text-center mr-3 mb-3 px-3 py-3 capitalize">clap <span className="block text-black bg-white ml-2 rounded-lg px-2 py-1 text-xs font-bold shadow-md">2</span></button>
        <button onClick={() => playDrum('open-hihat')} className="flex items-center justify-center bg-black text-white text-center mr-3 mb-3 px-3 py-3 capitalize">open hi-hat <span className="block text-black bg-white ml-2 rounded-lg px-2 py-1 text-xs font-bold shadow-md">3</span></button>
        <button onClick={() => playDrum('crash')} className="flex items-center justify-center bg-black text-white text-center mr-3 mb-3 px-3 py-3 capitalize">crash <span className="block text-black bg-white ml-2 rounded-lg px-2 py-1 text-xs font-bold shadow-md">4</span></button>
        <button onClick={() => playDrum('kick')} className="ml-auto flex items-center justify-center bg-black text-white text-center mr-3 mb-3 px-3 py-3 capitalize">kick <span className="block text-black bg-white ml-2 rounded-lg px-2 py-1 text-xs font-bold shadow-md">7</span></button>
      </div>
      <div className="flex flex-wrap">
        <button onClick={() => playDrum('closed-hihat')} className="flex items-center justify-center bg-black text-white text-center mr-3 mb-3 px-3 py-3 capitalize">closed hi-hat <span className="block text-black bg-white ml-2 rounded-lg px-2 py-1 text-xs font-bold shadow-md">B</span></button>
      </div>
    </div>
  ) 
}

export default DrumMachine;