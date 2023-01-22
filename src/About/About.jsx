import React from "react";
import "./About.css";
function About() {
  return (
    <section id="about">
      <div className="row">
        <div className="col-lg-6 about-image">
          <img src="Images/about.jpg" />
        </div>
        <div className="col-lg-6">
          <div className="about-text">
          <p className="about-us">About Us</p>
          <h1>Outstanding Residential & Commercial Services</h1>
          <p>
            All of our services are backed by our 100% satisfaction guarantee.
            Our electricians can install anything from new security lighting for
            your outdoors to a whole home generator that will keep your
            appliances working during a power outage.
          </p>
          <p><i className="fas about-icon  fa-calendar-check"></i>&nbsp; Full-service electrical layout, design</p>
          <p><i className="fas about-icon fa-calendar-check"></i>&nbsp; Wiring and installation/upgrades</p>
          <p><i className="fas about-icon fa-calendar-check"></i>&nbsp; Emergency power solutions (generators)</p>
          <p><i className="fas about-icon fa-calendar-check"></i>&nbsp; Full-service electrical layout, design</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
