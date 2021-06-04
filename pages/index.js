import React, { useState, useRef, useEffect } from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import Container from '../components/container'
import { fade } from '../helpers/transitions'
import { motion } from 'framer-motion'
import useToggle from '../helpers/toggle'
import ReactHowler from 'react-howler'
import Player from '../components/player'

export default function Home() {
  // const [guitar, setGuitar] = useState(false)
  // const [guitarMuted, setGuitarMuted] = useState(false)
  // const [drums, setDrums] = useState(false)
  // const [drumsMuted, setDrumsMuted] = useState(false)
  // const [bass, setBass] = useState(false)
  // const [bassMuted, setBassMuted] = useState(false)
  // const [vocals, setVocals] = useState(false)
  // const [vocalsMuted, setVocalsMuted] = useState(false)
  // const [playing, setPlaying] = useState(false)

  // function toggleAllTracks() {
  //   setGuitar(!guitar)
  //   setDrums(!drums)
  //   setBass(!bass)
  //   setVocals(!vocals)
  //   setPlaying(!playing)
  // }

  // function toggleVocalsMuted() {
  //   setVocalsMuted(!vocalsMuted)
  // }

  // function toggleGuitarMuted() {
  //   setGuitarMuted(!guitarMuted)
  // }

  // function toggleBassMuted() {
  //   setBassMuted(!bassMuted)
  // }

  // function toggleDrumsMuted() {
  //   setDrumsMuted(!drumsMuted)
  // }

  return (
    <Layout>
      <Header />

      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        className="mb-12 md:mb-16 xl:mb-24"
      >
        <Container>
          <motion.div variants={fade}>
            <h1 className="font-bold text-lg md:text-xl xl:text-2xl mb-4">Play Along With T-Ray Test</h1>

            <Player />
            {/* <div className="flex">
              <button className="bg-black text-white py-2 px-3 block rounded-lg" onClick={toggleAllTracks}>
                { !playing ? (<>Play</>) : (<>Pause</> ) }
              </button>

              { playing && (
                <button className="bg-black text-white py-2 px-3 block rounded-lg ml-2" onClick={reset}>
                  Reset
                </button>
              )}
            </div>

            <div className="mt-1 mb-10">
              { playing ? (
                <span className="text-sm font-mono">Playing!</span>
              ) : (
                <span className="text-sm font-mono">Not currently playing!</span>
              )}
            </div>

            <ReactHowler html5 preload src='/stems/drums.mp3' playing={drums} mute={drumsMuted} />
            <ReactHowler html5 preload src='/stems/bass.mp3' playing={bass} mute={bassMuted} />
            <ReactHowler html5 preload src='/stems/guitar.mp3' playing={guitar} mute={guitarMuted} />
            <ReactHowler ref={(ref) => (player = ref)} html5 preload src='/stems/vocals.mp3' playing={vocals} mute={vocalsMuted} />

            <div className="w-full border-t border-black">
              <div className="w-full py-2 border-b border-black flex items-center">
                <button 
                  className="bg-black text-white py-1 px-2 block rounded-lg mr-2"
                  onClick={toggleVocalsMuted}>
                  { !vocalsMuted ? (<>Mute</>) : (<>Unmute</> ) }
                </button>
                <span className="font-bold">Vocals</span>
              </div>

              <div className="w-full py-2 border-b border-black flex items-center">
                <button 
                  className="bg-black text-white py-1 px-2 block rounded-lg mr-2"
                  onClick={toggleGuitarMuted}>
                  { !guitarMuted ? (<>Mute</>) : (<>Unmute</> ) }
                </button>
                <span className="font-bold">Guitar</span>
              </div>

              <div className="w-full py-2 border-b border-black flex items-center">
                <button 
                  className="bg-black text-white py-1 px-2 block rounded-lg mr-2"
                  onClick={toggleBassMuted}>
                  { !bassMuted ? (<>Mute</>) : (<>Unmute</> ) }
                </button>
                <span className="font-bold">Bass</span>
              </div>

              <div className="w-full py-2 border-b border-black flex items-center">
                <button 
                  className="bg-black text-white py-1 px-2 block rounded-lg mr-2"
                  onClick={toggleDrumsMuted}>
                  { !drumsMuted ? (<>Mute</>) : (<>Unmute</> ) }
                </button>
                <span className="font-bold">Drums</span>
              </div>
            </div> */}

          </motion.div>
        </Container>
      </motion.div>
    </Layout>
  )
}
