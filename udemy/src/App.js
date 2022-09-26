import React from 'react'
import Categories from './components/Categories'
import Navbar from './components/Navbar'
import Partners from './components/Partners'
import Person from './components/Person'
import Footer from './components/Footer'
import Trends from './components/Trends'
import Banner from './components/Banner'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Categories />
      <Trends />
      <Partners />
      <Person />
      <Footer />
    </div>
  )
}

export default App
