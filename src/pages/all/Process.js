import React from "react";
import line from "../img/lines.png"

const process = () =>{
    return(
        <div id="process">
            <div className="container">
                <div className="process">
                    <div className="process-line">
                        <img src={line} alt=""/>
                        <p className="process-line-text">Process</p>
                    </div>
                    <div className="process-getting">
                        <h1 className="process-getting-text"> Getting started is easy.</h1>
                        <p className="process-getting-P">I've developed a structure that saves time (and money) while making the most of our interactions.</p>
                    </div>
                    <div className="process-numbers">
                        <div className="process-num">
                            <h1 className="process-numbers-number">[1]</h1>
                            <h2 className="process-numbers-number-text">listen</h2>
                            <p className="process-numbers-number-P">I get to know you and your company, your goals and expectations.</p>
                        </div>
                        <div className="process-num">
                            <h1 className="process-numbers-number">[2]</h1>
                            <h2 className="process-numbers-number-text">Ideate</h2>
                            <p className="process-numbers-number-P">I create a couple of pitches based on the project brief and goals.</p>
                        </div>
                        <div className="process-num">
                            <h1 className="process-numbers-number">[3]</h1>
                            <h2 className="process-numbers-number-text">Execute</h2>
                            <p className="process-numbers-number-P">I work on the approved plan while keeping you in the loop until we have a finished project.</p>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}
export default process
