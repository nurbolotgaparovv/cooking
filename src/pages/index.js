import React from "react"
import './index.css'
import Product from "./all/Product";
import Startups from "./all/Startups";
import Work from "./all/Work";
import Services from "./all/Services";
import Testimonials from "./all/Testimonials";
import Process from "./all/Process";

const index = () =>{
    return(
        <div>
            <Product/>
            <Startups/>
            <Work/>
            <Services/>
            <Testimonials/>
            <Process/>
        </div>
    )
}
export default index