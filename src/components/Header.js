import React from "react";
import {Cart} from "./Cart";

 const Header = (props) => {
     const {order}=props

    return(
        <nav>
            <div className="nav-wrapper blue darken-4">
                <a href="#" className="brand-logo">ILDOK</a>
                <ul id="nav-mobile" className="right ">
                    <li className='hide-on-med-and-down'><a href="#">Repo</a></li>
                    <li className='hide-on-med-and-down'><a href="#">Contacts</a></li>
                    <li><a href="#"><Cart order={order.length}/></a></li>
                </ul>
            </div>
        </nav>
    )
}
export {Header}