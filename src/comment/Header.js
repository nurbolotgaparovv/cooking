import React, {useState} from "react"
import {AiOutlineSearch} from "react-icons/ai"
import {HiOutlineShoppingCart} from "react-icons/hi"
import {NavLink} from "react-router-dom";
import {CiSearch} from 'react-icons/ci'
import {AiOutlineClose} from 'react-icons/ai'

const Header = () => {
    const [color,setColor] = useState(false)
    const [Input,setInput] = useState(false)
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <NavLink to={'/'}>
                        <h1 className="header-h1">ul.desk</h1>
                    </NavLink>
                    <div className="header-logo">
                        <NavLink to={'/Section'}>Who choose</NavLink>
                        <NavLink to={'/Dom'}>about</NavLink>
                        <NavLink to={'/Footer'}>concat</NavLink>
                        <NavLink to={'/Product'}>another page</NavLink>
                    </div>

                    <div className="header-search">
                        <input type="search" className="header-input" style={{
                            display:Input ? 'block' : 'none'
                        }} placeholder="search"/>
                        <h5 onClick={() => setInput(!Input)}><CiSearch style={{
                            display: Input ? "none" : 'block'
                        }} className="header-searching"/></h5>
                        <h5 onClick={() => setInput(!Input)}><AiOutlineClose style={{
                            display: Input ? "block" : 'none'
                        }} className="header-search"/></h5>
                        <h1 className="out"><HiOutlineShoppingCart/></h1>
                        <button className="header-btn">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header