import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.component'
import About from './pages/About.component'

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
  )
}

export default App
