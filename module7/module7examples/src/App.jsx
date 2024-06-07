import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './Clock'
import ClockDisplay from './ClockDisplay'
import ActivityFinder from './ActivityFinder'
import CounterDisplay from './CounterDisplay'
import VideoPlayer from './VideoPlayer'
function App() {
  

  return (
    <>
      <VideoPlayer></VideoPlayer>
      {/*<CounterDisplay></CounterDisplay>
      <ClockDisplay></ClockDisplay>
      <ActivityFinder></ActivityFinder>*/}
    </>
  )
}

export default App
