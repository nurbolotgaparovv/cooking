import React from "react";
import line from '../img/lines.png'
import dolor from '../img/dolor.png'
import erke from '../img/erke.png'
import dilai from '../img/dilai.png'
const testimonials = () =>{
    return(
        <div id="testimonials">
            <div className="container">
                <div className="testimonials">
                        <div className="testimonials-line">
                            <img src={line} alt=""/>
                            <h1 className="line-H">Testimonials</h1>
                            <img src={line} alt=""/>
                        </div>
                    <center>
                        <h1 className="testimonials-logo">Hear it directly from my clients.</h1>
                    </center>
                    <div className="testimonial">
                        <div className="testimonials-reviews">
                            <div className="review-icons">
                                <img src={dolor} alt=""/>
                                <img src={dolor} alt=""/>
                                <img src={dolor} alt=""/>
                                <img src={dolor} alt=""/>
                                <img src={dolor} alt=""/>
                            </div>
                            <h4 className="review-text">Highly professional</h4>
                            <p className="review-P">Alex was in control throughout the project. They delivered on the promised deadlines and we love the work they did!</p>
                            <div className="review-img">
                                <img src={erke} alt=""/>
                                <div className="img-texts">
                                    <h5 className="img-texts-text">Steve McQuillen</h5>
                                    <p className="img-texts-P">Marketing Manager, Vowels</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonials-reviews">
                            <div className="review-icons">
                                <img src={dolor} alt=""/>
                                <img src={dolor} alt=""/>
                                <img src={dolor} alt=""/>
                                <img src={dolor} alt=""/>
                                <img src={dolor} alt=""/>
                            </div>
                            <h4 className="review-text">Creative and fearless</h4>
                            <p className="review-P">Working with Alex was interesting. He went above and beyond what I've asking for and provided such an amazing design for my mobile application.</p>
                            <div className="review-img">
                                <img src={dilai} alt=""/>
                                <div className="img-texts">
                                    <h5 className="img-texts-text">Rebecca Smith</h5>
                                    <p className="img-texts-P">CEO, Consonants</p>
                                </div>
                            </div>
                        </div>
                    </div>
                  



                </div>
            </div>
        </div>

    )
}
export default testimonials