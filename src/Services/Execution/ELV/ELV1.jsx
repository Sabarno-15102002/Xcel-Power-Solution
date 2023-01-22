import React from "react";
import SmallCard from "./ELV1Card";
import ELV1Arr from "./ELV1Arr";
export default function LT()
{
    
    return <div className="row">
        <h1>Extra Low Voltage</h1>
        {
            ELV1Arr.map((arr)=>{
                return <SmallCard id={arr.id} title={arr.title} about={arr.about} icon={arr.icon}/>
            })
        }
    </div>
}