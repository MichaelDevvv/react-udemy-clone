import React from 'react'
import Categories from './components/Categories'
import Navbar from './components/Navbar'
import Partners from './components/Partners'
import Business from './components/Business'
import Footer from './components/Footer'
import Trends from './components/Trends'
import Banner from './components/Banner'
import Person from './components/Person'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Categories />
      <Trends />
      <Person 
        image="man.jpeg"
        title="Become an instructor" 
        subtitle="Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love."
        buttonText="Start teaching today"
        bold={true}
      />
      <Partners />
      <Business />
      <Footer />
    </div>
  )
}

export default App
