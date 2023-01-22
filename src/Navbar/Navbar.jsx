import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
      <img src="images/icon.png" alt="icon" className="icon"/>
        <span className="iconText">XCEL Power Solution</span>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#about">About</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
            </a>
            <ul className="dropdown-menu bg-dark " aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/Consultancy">Consultancy</a></li>
              <li><a className="dropdown-item" href="/Execution">Execution</a></li>
              <li><a className="dropdown-item" href="/#service">Service</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/#contact-us">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
