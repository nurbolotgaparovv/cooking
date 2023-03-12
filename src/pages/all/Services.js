import React from "react";
import whiteline from '../img/line white.png'
import circle from '../img/crricle.png'
import sabir from '../img/sabir.png'
import dron from '../img/dron.png'
import znak from '../img/znak.png'
import jobs from '../img/jobs.png'

const services = () =>{
    return(
        <div id="services">
            <div className="container">
                <div className="services">
                    <div className="services-line">
                        <img src={whiteline} alt=""/>
                        <h1 className="services-line-text">SERVICES</h1>

                    </div>
                    <div className="services-texts">
                        <h1 className="services-texts-text">Pushing the boundaries of your potential</h1>
                        <div className="services-texts-circle">
                            <img src={circle} alt=""/>
                            <h1 className="circle-text">Branding</h1>
                            <p className="circle-P">Refresh your logo, revamp your website, and even your letterhead— develop a cohesive aesthetic for your brand.</p>
                        </div>
                        <div className="services-texts-circle">
                            <img src={sabir} alt=""/>
                            <h1 className="circle-text">Packaging</h1>
                            <p className="circle-P">Rethink labels, boxes, signage, and everything that'll help your product make a great first impression.</p>
                        </div>
                    </div>
                    <div className="Memorabilia">
                        <div className="merab">
                            <img src={dron} alt=""/>
                            <h5 className="merab-text">Memorabilia</h5>
                            <p className="merab-P">Choose from easy, affordable options for merch like custom tees and sets of pins.</p>
                        </div>
                        <div className="merab">
                            <img src={znak} alt=""/>
                            <h5 className="merab-text">Visual Aids</h5>
                            <p className="merab-P">Make your point more convincingly with branded flyers, slides, catalogues, infographics.</p>
                        </div>

                        <div className="Memorabilia-btns">
                            <button className="Memorabilia-btn">Start a project</button>

                        </div>

                    </div>



                </div>
            </div>
        </div>
    )
}
export default services