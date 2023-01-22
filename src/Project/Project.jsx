import React from 'react';
import "./Project.css";

export default function Project() {
  return (
   <div className="project" id='pro'>
    <h1>Our Gallery</h1>
    <hr/>
    <div id="gallery-container">
        <div className="card-gallery-container row">
            <div className="project-card col-lg-3">
                <div className="card-image card-1"></div>
            </div>
            <div className="project-card col-lg-3">
                <div className="card-image card-2"></div>
            </div>
            <div className="project-card col-lg-3">
                <div className="card-image card-3"></div>
            </div>
            <div className="project-card col-lg-3">
                <div className="card-image card-4"></div>
            </div>
            <div className="project-card">
                <div className="card-image card-5"></div>
            </div>
            <div className="project-card">
                <div className="card-image card-6"></div>
            </div>
        </div>
    </div>
   </div>
  );
}