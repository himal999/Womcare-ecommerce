import React, { useState } from "react";
import {BsHandbag} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineCloseCircle} from 'react-icons/ai';

import './Navbar.css'

const Navbar = ()=>{

    const [click,setClick]=useState(false);
    const setNavbar = ()=>{ 
      setClick(!click);
    };

    return (
        <div className="navbar">
            <div className="container">
                <h1>Women<span>Care</span></h1>
                <ul className={click ? 'nav-menu active':'nav-menu'}>
                    <li><a href="" className="active">Shop Now</a></li>
                    <li><a href="">Search Products</a></li>
                    <li><a href="">Leave a Review</a></li>
                    <li className="bag"><a href=""><BsHandbag/></a></li>
                </ul>
                <div className="hamburger" onClick={setNavbar}>
                    {
                        click? <AiOutlineCloseCircle/>:<GiHamburgerMenu/>
                    }
                </div>
            </div>
        </div>
    );
}

export default Navbar;