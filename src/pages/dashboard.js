import React from "react";
import Meta from "components/Meta";
import DashboardSection2 from "components/DashboardSection2";
import { requireAuth } from "util/auth";
import Navbar2 from "components/Navbar2";
import Footer from "components/Footer";

function DashboardPage(props) {
  return (
    <> <Navbar2
    color="default"
    logo=""
    logoInverted=""
  />
      <Meta title="Dashboard" />
      <DashboardSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Dashboard"
        subtitle=""
      />
        <Footer
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        copyright={`© ${new Date().getFullYear()} Company`}
        logo=""
        logoInverted=""
        sticky={false}
      />
   
    </>

    
  );
}

export default requireAuth(DashboardPage);
