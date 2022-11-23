import React from "react";
import {Cart} from "./Cart";

 const Header = (props) => {
     const {order,handleBasketShow = Function.prototype,isBasketShow,handleBasketClose = Function.prototype,


     }=props

    return(
        <nav>
            <div className="nav-wrapper blue darken-4">
                <a href="#" className="brand-logo">ILDOK</a>
                <ul id="nav-mobile" className="right ">
                    <li className='hide-on-med-and-down'><a href="https://github.com/Ilya-Dokuchaev/react-game-shop">Repo</a></li>
                    <li className='hide-on-med-and-down'><a href="#contacts">Contacts</a></li>
                    <li><a><Cart order={order.length} isBasketShow={isBasketShow} handleBasketClose={handleBasketClose} handleBasketShow={handleBasketShow}/></a></li>
                </ul>
            </div>
        </nav>
    )
}
export {Header}