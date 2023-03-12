import React from "react";
import line from '../img/lines.png'
import leptop from '../img/leptop.png'
import get from '../img/get.png'
import monkey from '../img/monkey.png'
import image from '../img/IMAGE.png'
import image2 from '../img/IMAGE (2).png'


const work = () =>{
    return(
        <div id="work">
            <div className="container">
                <div className="work">
                    <div className="work-line">
                        <img src={line} alt=""/>
                        <h6 className="line-text">WORK</h6>
                    </div>
                    <h1 className="work-text">Bringing stellar results for every client.</h1>
                    <div className="work-images">
                        <div className="work-img">
                            <img src={leptop} alt=""/>
                            <div className="work-img-texts">
                                <h5 className="work-img-text">Maize Website Design</h5>
                                <p className="work-img-P">Vivamus mattis eu odio non aliquam. Vestibulum tristique congue laoreet. Nulla facilisi.</p>
                            </div>
                        </div>
                        <div className="work-img">
                            <img src={get} alt=""/>
                            <div className="work-img-texts">
                                <h5 className="work-img-text">Datadash Product Design</h5>
                                <p className="work-img-P">Vivamus mattis eu odio non aliquam. Vestibulum tristique congue laoreet. Nulla facilisi.</p>
                            </div>
                        </div>
                    </div>
                    <div className="website">
                        <img src={monkey} alt=""/>
                        <div className="jog">
                            <h5 className="work-img-text">Joggr Website Design</h5>
                            <p className="work-img-P">Vivamus mattis eu odio non aliquam. Vestibulum tristique congue laoreet. Nulla facilisi.</p>
                        </div>
                    </div>
                    <div className="work-images">
                        <div className="work-img">
                            <img src={image} alt=""/>
                            <div className="work-img-texts">
                                <h5 className="work-img-text">Otsuka Pharmaceutical</h5>
                                <p className="work-img-P">Partnering with healthcare researchers to improve patient communications and experience.</p>
                            </div>
                        </div>
                        <div className="work-img">
                            <img src={image2} alt=""/>
                            <div className="work-img-texts">
                                <h5 className="work-img-text">Origin UI/UX Design</h5>
                                <p className="work-img-P">Vivamus mattis eu odio non aliquam. Vestibulum tristique congue laoreet. Nulla facilisi.</p>
                                <div className="lines">
                                    <h1 className="lines-text">VIEW ALL <br/> PROJECTS</h1>

                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}
export default work