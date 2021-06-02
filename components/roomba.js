import { useState } from 'react'
import roomba from '../public/stems/01.mp3';
import useSound from 'use-sound'

export default function Roomba() {
  const [playbackRate, setPlaybackRate] = useState(1);

  const [play, {pause, isPlaying}] = useSound(roomba, {
    playbackRate,
    loop: true,
    interrupt: true,
  });

  return (
    <div className="roombas">
      { !isPlaying ? (
        <button className="bg-black text-white p-3 block" onClick={() => play()}>Play Roomba Riddim</button>
      ) : (
        <button className="bg-black text-white p-3 block" onClick={() => pause()}>Pause Roomba Riddim</button>
      )}
      { isPlaying && (
        <p>Roomba is currently playing</p>
      )}
    </div>
  )
}