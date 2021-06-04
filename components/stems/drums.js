import { useEffect, useState } from 'react'
import drums from '../../public/stems/drums.mp3';
import useSound from 'use-sound'

export default function DrumsStem() {
  const [playbackRate, setPlaybackRate] = useState(1);

  const [play, {sound, pause, isPlaying}] = useSound(drums, {
    playbackRate,
    loop: true,
    interrupt: true,
  });

  return (
    <button 
      className="bg-black text-white p-3 block" 
      onClick={() => {
        play()
      }}
    >Drums</button>
  )
}