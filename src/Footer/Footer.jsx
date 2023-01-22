import React from "react";
import "./Footer.css";

export default function Footer()
{
    return <div id="footer">
        <div className="row">
        <div className="col-lg-3 col-sm-6">
           <h4>XCEL Power Solution</h4>
           <p>One Stop Solutions for HT, LT & ELV System</p>
        </div>
        <div className="col-lg-3 col-sm-6">
            <ul>
                <li><strong><a href="/Consultancy">Consultancy</a></strong></li>
                <li><a href="/High Tension">High Tension</a></li>
                <li><a href="/Low Tension">Low Tension</a></li>
                <li><a href="/Extra Low Voltage">Extra Low Voltage</a></li>
            </ul>
        </div>
        <div className="col-lg-3 col-sm-6">
            <ul>
                <li><strong><a href="/Execution">Execution</a></strong></li>
                <li><a href="/High Tension">High Tension</a></li>
                <li><a href="/Low Tension">Low Tension</a></li>
                <li><a href="/Extra Low Voltage">Extra Low Voltage</a></li>
            </ul>
        </div>
        <div className="col-lg-3 col-sm-6">
            <ul>
                <li><strong><a href="/">Home</a></strong></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#contact-us">Contact Us</a></li>
                <li><a href="/#pro">Gallery</a></li>
            </ul>
        </div>
       <hr className="footer-hr"/>
       <div className="footer-txt">
        <a href="/">Terms & Condition</a>
        <div className="footer-icon">
       <a href="/"><i className="fab fa-facebook"></i></a>
       <a href="mailto:xcelpowersolution46@gmail.com"><i className="fas fa-envelope"></i></a>
       <a href="/"><i className="fab fa-twitter"></i></a>
       </div>
       </div>
       <div className="footer-txt">
       <span>email: xcelpowersolution46@gmail.com</span>
       <span> Contact: 9073120032 / 9903066702</span>
       </div>
        </div>
        <br/>
        <br/>
       <p style={{textAlign:"center"}}>Reg. Office: Kulgachia, P.S.: Uluberia, Dis.: Howrah, Pin: 711 306. City Office: 27/2, J. K. Das Lane, Kolkata 700 006.</p>
       
    </div>
}