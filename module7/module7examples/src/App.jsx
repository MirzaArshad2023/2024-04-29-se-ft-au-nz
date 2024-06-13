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
import MUISample from './MUISample'
import MediaCard from './MediaCardMUI'
import BasicGrid from './MUIGrid'
import MUIForm from './MUIForm'
import MUIDialog from './MUIDailog'
import BasicUsage from './MUIStyled'
import { ThemeProvider } from '@mui/material'
import { tealTheme } from './Themes/TealTheme'
function App() {
  

  return (
    <>
     <UserProvider>
          <NavBar></NavBar>
          <AppRoutes></AppRoutes>
      </UserProvider>
    
       {/* <MyThemeProvider>
    
    <ThemeProvider theme={tealTheme}>
      <MediaCard></MediaCard>
      <BasicGrid></BasicGrid>
      <MUISample></MUISample>
      <MUIForm></MUIForm>     
    </ThemeProvider>
    
     <MUIDialog text="Please confirm your option"></MUIDialog>
      <BasicUsage></BasicUsage>
      </UserProvider>
    </MyThemeProvider>

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
