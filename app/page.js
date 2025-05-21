import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Selection from './components/Selection'
import Testimonial from './components/Testimonial'
import QualityList from './components/QualityList'
import Storage from './components/Storage'
import Footer from './components/Footer'
const page = () => {
  return (
    <>
    <Header />
    <Banner />
    <Selection />
    <Testimonial />
    <QualityList />
    <Storage />
    <Footer />
    </>
  )
}

export default page