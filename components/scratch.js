import { useState } from 'react'
import scratch from '../public/stems/02.mp3';
import useSound from 'use-sound'

export default function Scratch() {
  const [playbackRate, setPlaybackRate] = useState(0.9);

  const [play, {sound, pause, isPlaying}] = useSound(scratch, {
    playbackRate,
    loop: true,
    interrupt: true,
    volume: 0.65
  });

  return (
    <div className="roombas">
      { !isPlaying ? (
        <button className="bg-black text-white p-3 block"
        onClick={() => {
          play()
          sound.fade(0, 1, 1000)
      }}>Play Scratch</button>
      ) : (
        <button className="bg-black text-white p-3 block" onClick={() => pause()}>Pause Scratch</button>
      )}
      { isPlaying && (
        <p>Scratch is currently playing</p>
      )}
    </div>
  )
}