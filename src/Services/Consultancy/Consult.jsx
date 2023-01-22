import React from "react";
import "./Consultancy.css"
export default function Consult(props)
{
    return <>
        <h1>{props.heading}</h1>
        <div className="row consultancy-home">
        <div className="col-lg-6 consultancy-text">
        {props.text}
        </div>
        <div className="col-lg-6">
        <img src={props.src}/>
        </div>
        </div>
        <hr className="hr"/>
    </>
}