import React from "react";
import SmallCard from "./LT1Card";
import LT1Arr from "./LT1Arr";
export default function HT()
{
    
    return <div className="row">
        <h1> Low Tension</h1>
        {
            LT1Arr.map((arr)=>{
                return <SmallCard id={arr.id} title={arr.title} about={arr.about} icon={arr.icon}/>
            })
        }
    </div>
}