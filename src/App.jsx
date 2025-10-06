import { useState } from 'react'
import './App.css'
import NavBar from './Componenet/NavBar'
import Hero from './Componenet/Hero'
import NewsStory from './Componenet/NewsStory'
import TreadingNews from './Componenet/TreadingNews'
import Blog from './Componenet/Blog'

function App() {
  return (
    <>
      <div className='bg-black min-h-screen pb-5'>
        <NavBar />
        <Hero />
      </div>
      <div className='pt-20'>
        <NewsStory />
      </div>
      <div className='pt-10'>
        <TreadingNews />
      </div>
      <div className=''>
        <Blog /> 
      </div>
    </>
  )
}

export default App
