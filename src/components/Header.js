import React from "react";
import {Cart} from "./Cart";

 const Header = () => {
    return(
        <nav>
            <div className="nav-wrapper blue darken-4">
                <a href="#" className="brand-logo">ILDOK</a>
                <ul id="nav-mobile" className="right ">
                    <li className='hide-on-med-and-down'><a href="https://github.com/Ilya-Dokuchaev/react-game-shop">Repo</a></li>
                    <li className='hide-on-med-and-down'><a href="#contacts">Contacts</a></li>
                    <li><a><Cart/></a></li>
                </ul>
            </div>
        </nav>
    )
}
export {Header}