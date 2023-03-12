import React from "react";
import img from "../img/IMAGE (1).png"
import vector from "../img/sad.png"
const Product = () => {
    return (
        <div id="product">
            <div className="container">
                <div className="product">
                    <div className="product-texts">
                        <h1 className="log">I design digital products that make an impact.</h1>
                        <p className="log-P">Hi! I’m Alex, a product designer based in Oakland. I create user-friendly interfaces for fast-growing startups.</p>
                        <button className="log-btn">Hire me!</button>
                        <div className="img">
                            <img src={img} alt=""/>
                            <div className="img-H">
                                    <h1 className="lolo">Independent Of The Year</h1>
                                    <p className="lolo">Annual Awards 2020 • awwwards.com</p>
                            </div>
                        </div>

                    </div>
                    <img src={vector} alt="" className="get"/>


                </div>
            </div>
        </div>

    )
}
export default Product