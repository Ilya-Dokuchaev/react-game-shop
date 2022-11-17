import React from "react";

export const Footer = () => {
    return(
        <footer className="page-footer blue darken-4">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <p className="grey-text text-lighten-4">You can find more of my projects at Git-Hub. <br/>Feel free to contact me if you want to</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Contacts</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="#!">Telegram</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">LinkedIn</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Email</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Git-Hub</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                   Copyright © {new Date().getFullYear()} ILDOK. All rights reserved.
                    <a className="grey-text repo text-lighten-4 right" href="#!">Repo</a>
                </div>
            </div>
        </footer>
    )
}