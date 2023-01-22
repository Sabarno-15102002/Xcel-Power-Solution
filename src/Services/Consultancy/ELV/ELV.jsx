import React from "react";
import SmallCard from "./ELVCard";
import ELVArr from "./ELVArr";
export default function LT()
{
    
    return <div className="row">
        <h1>Extra Low Voltage</h1>
        {
            ELVArr.map((arr)=>{
                return <SmallCard id={arr.id} title={arr.title} about={arr.about} icon={arr.icon}/>
            })
        }
    </div>
}