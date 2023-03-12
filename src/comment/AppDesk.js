import React from "react";
import Caring from "./Caring";
import Dom from "./Dom";
import Follow from "./Follow";
import Footer from "./Footer";
import Happy from "./Happy";
import Hero from "./Hero";
import Menu from "./Menu";
import Script from "./Script";
import Section from "./Section";


const appDesk = () =>{
    return(
        <div className="app-desk">
            <Hero/>
            <Section/>
            <Dom/>
            <Script/>
            <Caring/>
            <Menu/>
            <Happy/>
            <Follow/>
            <Footer/>
        </div>
    )
}
export default appDesk