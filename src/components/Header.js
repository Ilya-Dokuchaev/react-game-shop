import React from "react";

export const Header = () => {
    return(
        <nav>
            <div className="nav-wrapper blue darken-4">
                <a href="#" className="brand-logo">ILDOK</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#">Source code</a></li>
                    <li><a href="#">Repo</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
            </div>
        </nav>
    )
}