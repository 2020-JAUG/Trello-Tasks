import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/logo.png';

const Navbar = () => ( 
<> 
    <nav className="navbar navbar-expand-lg   navbar-light">
        <button className="navbar-toggler navbar-toggle-rigth" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
            <a className="navbar-logo" href=".">
                <img src={logo} alt="" width="33" height="30"></img>
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <a className="nav-link bi bi-clipboard-data" alt="" href=".">{}</a>
                    </li>
                        <li className="nav-item">
                        <a className="nav-link bi bi-house-door-fill" href=".">{}</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link bi bi-share-fill" href="https://www.whatsapp.com/download" target="_blank" rel="noreferrer">{}</a>
                    </li>
                </ul>
                    <a className="navbar-brand hidden-md-down font-weight-bold" href="https://blog.trello.com" target="_blank" rel="noreferrer"><h3>Trello</h3></a>
               
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <a className="nav-link bi bi-github" href="https://github.com/2020-JAUG" target="_blank" rel="noreferrer">{}</a>
                    </li>
                        <li className="nav-item">
                        <a className="nav-link bi bi-linkedin" href="https://www.linkedin.com/in/alejandro-urbina-gonzalez-686263169" target="_blank" rel="noreferrer">{}</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link bi bi-twitter" href="https://twitter.com/AUrbina09807986" target="_blank" rel="noreferrer">{}</a>
                    </li>
                </ul>
            </div>
    </nav>
</>
);

export default Navbar;