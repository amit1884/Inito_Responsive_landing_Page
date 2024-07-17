import React, { Fragment } from "react";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

function Footer() {
  return (
    <Fragment>
      <DesktopFooter />
      <MobileFooter/>
    </Fragment>
  );
}

export default Footer;
