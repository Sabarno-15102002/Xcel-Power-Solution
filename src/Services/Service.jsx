import React from "react";
import "./Service.css";
function Service() {
  return (
    <section id="service">
      <h1 className="service-heading">What We Offer</h1>
      <p className="service-brief">
        We offers a comprehensive range of electrical services for domestic and
        commercial properties at a reasonable price
      </p>
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card1">
              <i class="fas fa-building"></i>
            </div>
            <h1>Consultancy</h1>
            <p>
              This will put 50% white over the original image making it
              brighter. Linear-gradient function has to be used, otherwise it
              doesn't work.
            </p>
            <a href="/Consultancy">
              <strong>More Info</strong>
              <i class="fas fa-caret-right"></i>
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card2">
              <i class="fas fa-bolt"></i>
            </div>
            <h1>Execution</h1>
            <p>
              This will put 50% white over the original image making it
              brighter. Linear-gradient function has to be used, otherwise it
              doesn't work.
            </p>
            <a href="/Execution">
              <strong>More Info</strong>
              <i class="fas fa-caret-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Service;
