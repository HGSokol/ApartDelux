import { useState, useEffect } from 'react';
import Header from './layouts/Header'
import Preview from './layouts/Preview'
import Galery from './layouts/Galery'
import ContactInfo from './layouts/ContactInfo'
import Footer from './layouts/Footer'
import SliderPopup from '../js/components/SliderPopup'

function App() {
  const [activePopup, setActivePopup] = useState(false)

  return (
    <div className="bg-gradient-to-b from-[#171717] from-0% via-[#171717]/[0.79] via-36% to-[#292929] to-100%">
      {
        activePopup? (
          <div className='z-[1000] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] fixed'>
            <SliderPopup setActivePopup={setActivePopup} />
          </div>
        ): null
      }
      <div className='mx-[100rem] z-1'>
        <Header />
        <Preview />
        <Galery setActivePopup={setActivePopup} />
        <ContactInfo />
      </div>
      <Footer />
    </div>
  )
}

export default App
