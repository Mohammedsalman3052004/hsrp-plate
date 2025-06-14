import React from 'react'
import Navbar from './components/Navbar'
import HomeCtc from './components/home-ctc'
import Numberplatesection from './components/Number-plate-section'
import Location from './components/location'
import Footer from './components/footer'
import BookingForm from './components/booking'
import DimensionsSection from "./components/diamension-section";

const page = () => {
  return (
    <div className='main'>
      <Navbar />
      <Numberplatesection />
      <DimensionsSection />
      <Location />
      <BookingForm />
      <HomeCtc />
      <Footer />
    </div>
  )
}

export default page