import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Features from './components/features/Features'
import NoNameSection from './components/noNameSection/NoNameSection'
import AboutUs from './components/aboutUs/AboutUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
      <Header/>
      <Features/>
      <NoNameSection/>
      <AboutUs/>
      <Footer/>



      
  
    </div>
  )
}

export default App
