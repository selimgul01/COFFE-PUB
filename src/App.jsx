import React from 'react';
import { useEffect } from 'react'
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import Banner from './components/banner/Banner';
import PlayStore from './components/PlayStore';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';

function App() {

  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out-sine',
      duration: 1000,
      offset: 200,
      delay: 100
    })
  }, [])

  return (
   <div className='' >
    <Navbar/>
    <Hero/>
    <Services/>
    <Banner/>
    <PlayStore/>
    <Testimonials/>
    <Footer/>
   </div>
  )
}

export default App
