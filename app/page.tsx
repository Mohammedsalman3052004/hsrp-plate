import React from 'react'
import Navbar from './components/Navbar'
import HomeCtc from './components/home-ctc'
import Numberplatesection from './components/Number-plate-section'
import Location from './components/location'
import Footer from './components/footer'
import BookingForm from './components/booking'

const page = () => {
  return (
    <div className='main'>
      <Navbar />
      <HomeCtc />
      <Numberplatesection />
      <Location />
      <BookingForm />
      <Footer />
    </div>
  )
}

export default page