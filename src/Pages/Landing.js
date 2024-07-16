import React, { Fragment } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import ShowCase from "../Components/ShowCase/ShowCase";
import Section1 from "../Components/Section1/Section1";
import Section2 from "../Components/Section2/Section2";
import Footer from "../Components/Footer/Footer";
import Faq from "../Components/Faq/Faq";
import Testimony from "../Components/Testimony/Testimony";

function Landing() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <ShowCase />
      <Section1 />
      <Section2 />
      <Testimony/>
      <Faq />
      <Footer />
    </Fragment>
  );
}

export default Landing;
