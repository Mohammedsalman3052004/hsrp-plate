import React from 'react'
import Navbar from './components/Navbar'
import HomeCtc from './components/home-ctc'
import Numberplatesection from './components/Number-plate-section'

const page = () => {
  return (
    <div className='main'>
      <Navbar />
      <HomeCtc />
      <Numberplatesection />
    </div>
  )
}

export default page