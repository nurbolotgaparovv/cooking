import React from "react";
import line from "../img/lines.png"
import star from '../img/star.png'
import man from '../img/man.png'
import vector from '../img/Vector.png'
import burger from '../img/burger.png'

const startups = () =>{
    return(
        <div id="startups">
            <div className="container">
               <div className="startups">
                   <div className="start">
                       <div className="line">
                           <img src={line} alt=""/>
                           <h6 className="line-text">ABOUT</h6>
                       </div>
                       <div className="start-texts">
                           <div className="icon">
                               <img src={star} alt=""/>
                               <img src={star} alt=""/>
                               <img src={star} alt=""/>
                               <img src={star} alt=""/>
                               <img src={star} alt=""/>
                           </div>
                           <p className="start-P">Working with Alex was interesting. He went above and beyond what I've asking for and provided such an amazing design for my mobile application.</p>
                           <div className="start-img">
                               <img src={man} alt=""/>
                               <div className="img-text">
                                   <h6 className="img-log">Steve McQuillen</h6>
                                   <p className="img-P">CEO @ Vencortex</p>
                               </div>
                           </div>
                       </div>
                   </div>

                   <div className="startups-texts">
                           <h1 className="startups-texts-H">Trusted by the fastest growing digital startups</h1>
                       <div className="startups-numbers">
                           <div className="numbers-number">
                               <h1 className="numbers-num">7+</h1>
                               <p className="number-P">Years of experience</p>
                           </div>
                           <div className="numbers-number">
                               <h1 className="numbers-num">50+</h1>
                               <p className="number-P">Projects completed</p>
                           </div>
                           <div className="numbers-number">
                               <h1 className="numbers-num">30+</h1>
                               <p className="number-P">Happy clients</p>
                           </div>
                       </div>
                       <div className="texts-images">
                           <div className="img">
                               <img src={vector} alt=""/>
                               <h3>logoipsum</h3>
                           </div>
                           <div className="img">
                               <img src={burger} alt=""/>
                               <h3>logoipsum</h3>
                           </div>
                           <div className="img">
                               <img src={vector} alt=""/>
                               <h3>logoipsum</h3>
                           </div>
                           <div className="img">
                               <img src={burger} alt=""/>
                               <h3>logoipsum</h3>
                           </div>
                       </div>
                   </div>

               </div>
            </div>

        </div>
    )
}
export default startups