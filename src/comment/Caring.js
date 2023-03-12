import React from "react";
import {BsCheckSquareFill} from "react-icons/bs";
import fot from "../img/web.png";
const Caring = () =>{
    return(
        <div id="car">
            <div className="container">
                <div className="car">
                    <div className="room">
                        <div className="car-logo">
                            <h1 className="car-text">Cooked by the <br/> Best Chefs</h1>
                            <p className="car-texts">Believing neglected so so allowance existence <br/> departure in. In design active temper be <br/> uneasy. Thirty for remove plenty regard you <br/> summer though. He preference connection <br/> astonished on of ye.</p>
                        </div>
                        <div className="car-icons">
                            <h1> <span><BsCheckSquareFill/></span></h1>
                            <p className="icons-text">A guaranteed delicious meal</p>
                        </div>
                        <div className="car-icons">
                            <h1> <span><BsCheckSquareFill/></span></h1>
                            <p className="icons-text">A guaranteed delicious meal</p>
                        </div>
                        <div className="car-icons">
                            <h1> <span><BsCheckSquareFill/></span></h1>
                            <p className="icons-text">A guaranteed delicious meal</p>
                        </div>
                    </div>
                    <img src={fot} alt="" className="car-img"/>
                </div>
            </div>
        </div>

    )
}
export default Caring