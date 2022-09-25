import React from 'react'
import Categories from './components/Categories'
import Navbar from './components/Navbar'
import Partners from './components/Partners'
import Person from './components/Person'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Categories />
      <Partners />
      <Person />
      <Footer />
    </div>
  )
}

export default App
