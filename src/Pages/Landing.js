import React, { Fragment } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import ShowCase from '../Components/ShowCase/ShowCase'

function Landing() {
  return (
    <Fragment>
      <Navbar/>
      <Hero/>
      <ShowCase/>
    </Fragment>
  )
}

export default Landing