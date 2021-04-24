import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/logo.png';

const Navbar = () => (
<>
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <a className="navbar-logo" href=".">
                    <img src={logo} alt="" width="33" height="30"></img>
                </a>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active bi bi-clipboard-data" alt="" href=".">{}</a>
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
        </div>
    </nav>
</>
);

export default Navbar;