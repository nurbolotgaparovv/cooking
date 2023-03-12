import React from "react"
import web from "../img/jol.png"
import center from "../img/center.png"
import list from "../img/list.png"

const About = () =>{
    return(
        <div id="about">
            <div className="container">
                <div className="about">
                    <h1 className="about-text">About US</h1>
                    <p className="about-P">Organic food is grown without the use of synthetic chemicals, such as human-made pesticides and fertilizers, and does not contain genetically modified organisms (GMOs). Organic foods include fresh produce, meats, and dairy products as well as processed foods such as crackers, drinks, and frozen meals.</p>
                    <button className="about-btn">Learn More</button>
                    <div className="about-images">
                        <div className="bio">
                            <img src={web} alt="" className="about-img"/>
                            <img src={center} alt=""/>
                        </div>
                        <div className="list">
                            <img src={list} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default About