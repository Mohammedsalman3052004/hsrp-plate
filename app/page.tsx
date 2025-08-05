import React from 'react'
import HomeCtc from './components/home-ctc'
import Numberplatesection from './components/Number-plate-section'
import Location from './components/location'
import BookingForm from './components/booking'
import DimensionsSection from "./components/diamension-section";

const page = () => {
  return (
    <div className='main'>
      <Numberplatesection />
      <DimensionsSection />
      <Location />
      <BookingForm />
      <HomeCtc />
      <div className='floating-icon'>
        <a href="https://wa.me/+919443447469" target="_blank" rel="noopener noreferrer">
          <img src="/images/WhatsApp-icon.webp" alt="WhatsApp Icon" className='whatsapp-icon icon' />
        </a>
        <a href="tel:9443447469" target="_blank" rel="noopener noreferrer">
          <img src="/images/call-icon.webp" alt="call Icon" className='call-icon icon' />
        </a>
      </div>
    </div>
  )
}

export default page