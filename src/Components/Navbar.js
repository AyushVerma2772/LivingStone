import React from "react";
import '../Styles/Navbar.css'
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">
            <strong>LivStone</strong>
        </div>
        <div className="main">
            <ul>
                <li><Link to="/" className="active">Home</Link></li>
                <li><Link to="/apply">Apply</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/help">Help</Link></li>
                <li><Link to="/contactus">Contact</Link></li>
            </ul>
        </div>
        <div className="login">
            <button className="loginButton">Log In</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
