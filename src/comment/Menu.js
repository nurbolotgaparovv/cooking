import React from "react";
import green from '../img/salat.png'
import beef from '../img/lagman.png'
import nut from '../img/fun.png'

const Menu = () =>{
    return(
        <div id="menu">
            <div className="container">
                <div className="menu">
                    <div className="menu-text">
                        <center>
                            <h1>Special Dishes for you</h1>
                            <p className="menu-log">Made with premium & 100% Organic ingredients</p>
                        </center>
                        <div className="menu-cook">
                            <div className="menu-sal">
                                <img src={green} alt=""/>
                                <h1 className="menu-sal-text">Green Salad</h1>
                                <p className="menu-sal-P">A salad combined witha delicious
                                    cut of bacon and mixed with tasty
                                    and fresh sesome oil.</p>
                            </div>
                            <div className="menu-sal">
                                <img src={beef} alt=""/>
                                <h1 className="menu-sal-text">Beef Salad</h1>
                                <p className="menu-sal-P">A salad combined witha delicious
                                    cut of bacon and mixed with tasty
                                    and fresh sesome oil.</p>
                            </div>
                            <div className="menu-sal">
                                <img src={nut} alt=""/>
                                <h1 className="menu-sal-text">Nut Salad</h1>
                                <p className="menu-sal-P">A salad combined witha delicious
                                    cut of bacon and mixed with tasty
                                    and fresh sesome oil.</p>
                            </div>
                        </div>
                        <button className="menu-btn">View All</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menu