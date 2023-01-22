import React, { useState } from "react";
export default function SmallCard(props)
{
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    const id=props.id-1;
    return <div className="col-lg-4">
        <div className="small-card" onMouseOver={()=>{
            var i=document.getElementsByClassName("elv1-img");
            i[id].style.color="orangered";
            var hr=document.getElementsByClassName("elv1-hr");
            hr[id].style.color="rgb(13, 14, 72)";
            hr[id].style.width="30%";
        }} onMouseOut={()=>{
            var i=document.getElementsByClassName("elv1-img");
            i[id].style.color="rgb(13, 14, 72)";
            var hr=document.getElementsByClassName("elv1-hr");
            hr[id].style.color="black";
            hr[id].style.width="20%";
        }}>
        <img src={props.icon} className="elv1-img"/>
        <h3>{props.title}</h3>
        <p>
        {isReadMore ? props.about.slice(0, 200) : props.about}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
        </span>
        </p>
        <hr className="card-hr elv1-hr"/>
    </div>
    </div>
}