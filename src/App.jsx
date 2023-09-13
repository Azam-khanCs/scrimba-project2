import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <Cards />
    </div>
  )
}

export default App