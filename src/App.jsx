import { Route, Routes, useLocation } from 'react-router-dom'
import './App.scss'
import Home from './pages/home'

import items from './data/items.json'
import features from './data/features.json'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import ProjectPage from './pages/projectpage'
import { AnimatePresence } from 'motion/react'
import { useEffect, useState } from 'react'
import ServicesPage from './pages/servicespage'
import AboutPage from './pages/aboutpage'
import ContactPage from './pages/contactpage'
import WorksPage from './pages/workspage'

function App() {
  const location = useLocation();
  const [time, setTime] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("fr-FR", {
          timeZone: "Europe/Paris",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "instant"
      });
    }
  }, [location]);

  return (
    <>
      <Header />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home items={items} />}/>
          <Route path='/:id' element={<ProjectPage items={items} />}/>
          <Route path='/services' element={<ServicesPage items={items} features={features}/>}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/contact' element={<ContactPage />}/>
          <Route path='/works' element={<WorksPage items={items}/>}/>
      </Routes>
      </AnimatePresence>
      <Footer />
      <div className='fixed-button'>
        <button className='fixed-button__button' aria-label='Contact me via WhatsApp'>
          <img className='fixed-button__button-image' src="/images/phone.png" alt="" />
        </button>
      </div>
      <div className='fixed-content'>
        <p className='fixed-content__location'>Perpignan, France</p>
        <p className='fixed-content__time'>{time}</p>
      </div>
    </>
  )
}

export default App