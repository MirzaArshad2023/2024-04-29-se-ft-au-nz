import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './HelloWorld'
import Second from './Second'
import { Fifth } from './Fifth'
import Welcome from './Welcome'
import PropsDisplayer from './PropsDisplayer'

function App() {

  return (
    <>

    <PropsDisplayer></PropsDisplayer>
    
    <PropsDisplayer name="Mirza" company="IOD"></PropsDisplayer>

    <PropsDisplayer prop1="first" prop2="second" prop3={3}/>

    <PropsDisplayer pets={["cat", "dog", "goldfish"]}/>

    <HelloWorld userName="Mirza"></HelloWorld>
    {/*<Welcome name="Students"></Welcome>
    <HelloWorld userName="Mirza"></HelloWorld>
    <Second></Second>
  <Fifth></Fifth>8*/}
   </>
  )
}

export default App
