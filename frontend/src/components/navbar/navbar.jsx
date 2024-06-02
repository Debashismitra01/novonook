import React from "react";
import './navbar.css';
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return(
       <div className="Navback"> <div className="Navbar">
        <img src={logo} alt="logo" />
            <div className="NavbarSearch">
                <input type="text" placeholder="Search"/>
                <i className="fas fa-search"></i>
            </div>
                <ul className="NavbarMenu">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                    <li><Link to= '/admin ' >Admin</Link></li>
                </ul>
        </div>
        </div>
    )
}

export default Navbar;