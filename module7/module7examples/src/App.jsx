import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './Clock'
import ClockDisplay from './ClockDisplay'
import ActivityFinder from './ActivityFinder'
import CounterDisplay from './CounterDisplay'
import VideoPlayer from './VideoPlayer'
import ReducerCounter from './ReducerCounter'
import PostListReducer from './PostListReducer'
import SubscribeForm from './SubscribeForm'
import UserProvider from './UserProvider'
import LoginForm from './LoginForm'
import MyThemeProvider from './MyThemeProvider'
import AppRoutes from './AppRoutes'
import NavBar from './NavBar'
function App() {
  

  return (
    <>
    <MyThemeProvider>
      <UserProvider>
         <NavBar></NavBar>
         <AppRoutes></AppRoutes>
      </UserProvider>
    </MyThemeProvider>
    {/*
     <LoginForm></LoginForm>
          <ActivityFinder></ActivityFinder>
          <a href='https://www.google.com'>Subscribe</a>
    <PostListReducer></PostListReducer>
    <ReducerCounter></ReducerCounter>
      <VideoPlayer></VideoPlayer>
      <CounterDisplay></CounterDisplay>
      <ClockDisplay></ClockDisplay>
      <ActivityFinder></ActivityFinder>*/}
    </>
  )
}

export default App
