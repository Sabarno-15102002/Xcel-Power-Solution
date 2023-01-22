import React from "react";
import "./Consultancy.css";
// function func() {
//   var div = document.getElementsByClassName("Consult-content");
// }

export default function ConsultCard(props) {
  var i = parseInt(props.i);
  return (
    <div
      className="col-lg-4 "
      onMouseOver={() => {
        var div = document.getElementsByClassName("Consult-content");
        div[i].classList.add("slide-up");
        div[i].style.display = "block";
      }}
      onMouseLeave={() => {
        var div = document.getElementsByClassName("Consult-content");
        div[i].style.display = "none";
      }}
    >
      <div className="Consult-card">
        <div className="Consult-content">
          <h3>
            <i className={props.icon}></i>
            {props.text}
          </h3>
          <p>{props.para}</p>
          <a href={"/" + props.text}>
            <strong>Read More</strong>
            <i class="fas fa-caret-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
