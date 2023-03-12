import easy from "../img/kyzyl.png"
import dogs from "../img/wip.png"
import organic from "../img/pik.png"
import React from "react"

const Why = () => {
    return (
        <section id="why">
            <div className="container">
                <div className="why">
                    <div className="why-main">
                        <h1 style={{fontSize: "30px"}}>Why Choose US?</h1>
                        <p style={{color: "#3B433E"}}>Organic food is grown without the use of synthetic chemicals</p>
                    </div>
                    <div className="why-about">
                        <div className="box">
                            <img src={easy} alt=""/>
                            <h2>Easy to order</h2>
                            <p className="box-text">foods include fresh produce, <br/> meats as well as processed</p>
                        </div>
                        <div className="box">
                            <img src={dogs} alt=""/>
                            <h2>Live Order</h2>
                            <p className="box-text">Place your online Order easily <br/> and get the food instantly</p>
                        </div>
                        <div className="box">
                            <img src={organic} alt=""/>
                            <h2>100% Organic</h2>
                            <p className="box-text">foods include fresh produce, <br/> meats as well as processed</p>
                        </div>
                    </div>
                    <div className="numbers">
                        <div className="look">
                            <h1>40+</h1>
                            <p>Food Partners</p>
                        </div>
                        <div className="look">
                            <h1>459+</h1>
                            <p>Trusted Clients</p>
                        </div>
                        <div className="look">
                            <h1>12k+</h1>
                            <p>Order Online</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
    export default Why
