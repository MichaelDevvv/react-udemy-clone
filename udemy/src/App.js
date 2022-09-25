import React from 'react'
import Categories from './components/Categories'
import Navbar from './components/Navbar'
import Partners from './components/Partners'
import Person from './components/Person'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Categories />
      <Partners />
      <Person />
    </div>
  )
}

export default App
