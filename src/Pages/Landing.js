import React, { Fragment } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import ShowCase from "../Components/ShowCase/ShowCase";
import Section1 from "../Components/Section1/Section1";
import Section2 from "../Components/Section2/Section2";

function Landing() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <ShowCase />
      <Section1 />
      <Section2/>
    </Fragment>
  );
}

export default Landing;
