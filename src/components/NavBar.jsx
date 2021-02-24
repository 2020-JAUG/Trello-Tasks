import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/logo.png';

const Navbar = () => ( 
<> 
    <nav className="navbar navbar-expand-lg   navbar-light">
        <button className="navbar-toggler collapsed navbar-toggle-rigth" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
            <a className="navbar-logo" href="/#">
                <img src={logo} alt="" width="33" height="30"></img>
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <a className="nav-link" href="/#">Home</a>
                    </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/#">Link</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/#">About</a>
                    </li>
                </ul>
                    <a className="navbar-brand hidden-md-down font-weight-bold" href="/#"><h3>Trello</h3></a>
               
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <a className="nav-link" href="/#">Home</a>
                    </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/#">Link</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/#">About</a>
                    </li>
                </ul>
            </div>
    </nav>
</>
);

export default Navbar;

/*</nav><a className="navbar-brand" href="#">Home</a>

<nav className="navbar navbar-expand navbar-light flex-column flex-md-row bd-navbar">
<ul className="nav justify-content-center">
    <h2 nav className="justify-content-center">Trello</h2>
</ul>

</nav>
*/