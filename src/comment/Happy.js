import React from "react";
import shop from '../img/shop.png'
import avatar from '../img/avatar.png'
import {AiOutlineArrowLeft} from "react-icons/ai"
import {AiOutlineArrowRight} from "react-icons/ai"

const Happy = () =>{
    return(
        <div id="clients">
            <div className="container">
                <div className="clients">
                    <center>
                        <h1 className="clients-text">Happy Clients Says</h1>
                    </center>
                    <div className="happy-clients">
                        <div className="clients-says">
                            <div className="clients-say">
                                <img src={shop} alt=""/>
                                <div className="clients-texts">
                                    <h1 className="clients-logo">KHALIL NAZIR</h1>
                                    <p className= "clients-P">CEO of UI.Desk</p>
                                </div>
                            </div>
                            <p className="clients-compliment">Thirty
                                for remove plenty regard you summer though. He preference Partiality on or continuing in particula r principles as. Do believing oh disposing to supported allowance we.</p>
                        </div>
                        <div className="clients-says">
                            <div className="clients-say">
                                <img src={avatar} alt=""/>
                                <div className="clients-texts">
                                    <h1 className="clients-logo">ZEESHAN ANWER</h1>
                                    <p className= "clients-P">CEO of UI Box</p>
                                </div>
                            </div>
                            <p className="clients-compliment">Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.
                            </p>
                        </div>
                    </div>
                    <div className="clients-icons">
                        <h1><AiOutlineArrowLeft/></h1>
                        <h1> <span color="green"><AiOutlineArrowRight/></span></h1>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Happy