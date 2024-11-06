import React from 'react'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import About from './About'
import Services from '../Services/Services'
import Amenities from '../Amenities/Amenities'
import Portfolio from '../Portfolio/Portfolio'
import Offer from '../Offer/Offer'
import Team from '../OurTeam/OurTeam'
import ScheduleTable from '../ScheduleTable/ScheduleTable'
import Slider from 'react-slick'
import ImageCarousel from '../Slider/Slider'
import Contact from '../Contact/Contact'
import Testimonial from '../Testimonial/Testimonial'
import Dashboard from '../DashBoard/DashBoard'
// import ServiceIcons from '../../../ServiceIcon/ServiceIcon'
// import SaleBanner from '../../../SaleBanner/SaleBanner'

const Home = () => {
  return (
    <>
    <div>
    <ImageCarousel/>
    {/* <ServiceIcons/> */}
    {/* <SaleBanner/> */}
    <Services/>
    <About/>
    <Amenities/>
    <Portfolio/>
    <Offer/>
    <Team/>
    <ScheduleTable/>
    <Dashboard/>
    <Testimonial/>
    <Contact/>
    
      
    </div>
    </>
  )
}

export default Home
