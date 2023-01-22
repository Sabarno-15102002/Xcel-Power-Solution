import React from "react";
import SmallCard from "../HTCard";
import HTarr from "./HTarr";
export default function HT()
{
    
    return <div className="row">
        <h1>High Tension</h1>
        {
            HTarr.map((arr)=>{
                return <SmallCard id={arr.id} title={arr.title} about={arr.about} icon={arr.icon}/>
            })
        }
    </div>
}