import React from "react";
import SmallCard from "./LTCard";
import LTarr from "./LTarr";
export default function LT()
{
    
    return <div className="row">
        <h1>Low Tension</h1>
        {
            LTarr.map((arr)=>{
                return <SmallCard id={arr.id} title={arr.title} about={arr.about} icon={arr.icon}/>
            })
        }
    </div>
}