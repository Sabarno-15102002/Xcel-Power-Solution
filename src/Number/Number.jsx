import React from "react";
import "./Number.css";
function Number() {
  return (
    <div className="service-box">
      <div className="row">
        <div className="col-lg-3 col-6 col-md-6">
          <div className="animated-number">
          <i className="fas fa-wrench"></i>
            <h2>4000+</h2>
            <p>Install & Upgrade</p>
          </div>
        </div>
        <div className="col-lg-3 col-6 col-md-6">
          <div className="animated-number">
          
          <i class="far fa-smile-beam"></i>
            <h2>4400+</h2>
            <p>Happy Customers</p>
          </div>
        </div>
        <div className="col-lg-3 col-6 col-md-6">
          <div className="animated-number">
          <i className="fa fa-search"></i>
            <h2>2400+</h2>
            <p>Reviews Done</p>
          </div>
        </div>
        <div className="col-lg-3  col-md-6 col-6">
          <div className="animated-number">
          <i className="far fa-check-circle"></i>
            <h2>3000+</h2>
            <p>problems Solved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Number;
