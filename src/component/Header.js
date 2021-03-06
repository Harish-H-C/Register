import React from 'react';
import {Link} from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/js/bootstrap.min.js';
// import 'bootstrap/js/jquery.min.js';



const Header = () => {
    return(
        <div>
            <header>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>                        
                            </button>
                            <a className="navbar-brand" href="#">SPA Website</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li><Link to ="/">Home</Link></li> 
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/signin"><span className="glyphicon glyphicon-user"></span>Signin</Link></li>
                                <li><Link to="/register"><span className="glyphicon glyphicon-log-in"></span>Register</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;