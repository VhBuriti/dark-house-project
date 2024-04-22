import React from "react";
import '../../../styles/navBar.scss'


export default function NavBar() {

    return(
        <div className="nav-bar">
            <div>
                <ul className="nav-bar__items">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Resources</li>
                    <li className="nav-bar__account">Sign In</li>
                    <li className="nav-bar__account">Create Account</li>
                </ul>
            </div>
        </div>
    )
}