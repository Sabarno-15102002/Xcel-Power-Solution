import React from "react";
import SmallCard from "./HT1Card";
import HT1Arr from "./HT1Arr";
export default function HT()
{
    
    return <div className="row">
        <h1>High Tension</h1>
        {
            HT1Arr.map((arr)=>{
                return <SmallCard key={arr.id} title={arr.title} about={arr.about} icon={arr.icon}/>
            })
        }
    </div>
}