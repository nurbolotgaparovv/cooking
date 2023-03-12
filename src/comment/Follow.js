import React from "react";
const follow = () => {
    return(
        <div id="follow">
            <div className="container">
                <div className="follow">
                    <h1 className="follow-logo">Subscribe to the Newsletter</h1>
                    <p className="follow-P">Enter your email below to get our daily offers and news</p>
                    <div className="follow-inputBtn">
                        <input type="text" placeholder="Enter your email." className="follow-input"/>
                        <button className="follow-btn">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default follow