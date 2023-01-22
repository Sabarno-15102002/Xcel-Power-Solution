import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
      <img src="images/icon.png" alt="icon" className="icon"/>
        <span className="iconText">XCEL Power Solution</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#about">About</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
            </a>
            <ul class="dropdown-menu bg-dark " aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/Consultancy">Consultancy</a></li>
              <li><a class="dropdown-item" href="/Execution">Execution</a></li>
              <li><a class="dropdown-item" href="/#service">Service</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="/#contact-us">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
