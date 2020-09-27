import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"
import Services from "../components/Services"
import FeaturedRooms from "../components/FeaturedRooms"
export default function Home() {
  return (
    <>
    <Hero hero="defaultHero">
    <Banner title="Luxurious room" subtitle="Deluxe Rooms Start AT $299">
      <Link to="/rooms" className="btn-primary">OUR ROOMS</Link>
    </Banner>
    </Hero>
    <Services/>
    <FeaturedRooms/>
    </>
  )
}


