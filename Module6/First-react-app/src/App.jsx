import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './HelloWorld'
import Second from './Second'
import { Fifth } from './Fifth'
import Welcome from './Welcome'
import PropsDisplayer from './PropsDisplayer'
import City from './City'
import Pet from './Pet'
import Books from './Books'
import FullName from './FullName'
import ComplexComment from './ComplexComment'
function App() {

  // object storing comment data - passed as props
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: { // author is also an object
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/200/300',
    },
  };
  return (
    <>
    <ComplexComment author={comment.author} text={comment.text} date={comment.date}></ComplexComment>
    {/*
    <FullName first='Mirza' last='Arshad'></FullName>
    <Books></Books>
    
    <City name="Wellington" state="Wellington" country='New Zealand'></City>
    <City name="Auckland" state="Auckland" country='New Zealand'>
      <div>
        <p>Sun rises first in NZ, everyone thinks that it rises in Japan</p>
      </div>
    </City>
    <Pet type='mammal' name='Cat' colour='Black'></Pet>


    <PropsDisplayer></PropsDisplayer>
    
    <PropsDisplayer name="Mirza" company="IOD"></PropsDisplayer>

    <PropsDisplayer prop1="first" prop2="second" prop3={3}/>

    <PropsDisplayer pets={["cat", "dog", "goldfish"]}/>

    <HelloWorld userName="Mirza"></HelloWorld>
    <Welcome name="Students"></Welcome>
    <HelloWorld userName="Mirza"></HelloWorld>
    <Second></Second>
  <Fifth></Fifth>8*/}
   </>
  )
}

export default App
