import React from "react";
import Consult from "../Consultancy/Consult";
// import "./Consultancy.css";
import ConsultCard from "../Consultancy/ConsultCard";
export default function Consultancy() {
  return (
    <>
      <Consult heading="Execution" text="Electricity is arguably the most valuable resource we have in our modern society. Without electricity, most of the things we do and rely on on a daily basis wouldn’t be there. So while electricity is so ingrained into our lives that we can take it for granted and hardly notice it’s there, if there’s an electrical problem, it can be difficult to notice anything else.
Our electrical repair technicians know what a hassle any electrical problems can be, which is why we’ll always respond to any requests for service as quickly as possible. And because all of our technicians are licensed, background checked, and professionally trained, you’re guaranteed to receive the best quality service and workmanship available when you call us. We can assist with all your electric needs including:" 
    src="https://static.vecteezy.com/system/resources/previews/013/612/659/non_2x/lighting-and-electricity-energy-maintenance-service-panel-cabinet-of-technician-electrical-work-on-flat-cartoon-hand-drawn-templates-illustration-vector.jpg" />
      <div className="row consult-container">
      <ConsultCard
          i="0"
          icon="fa fa-plug"
          text="High Tension (HT)"
          para="Serving all area equipped to handle your industrial and commercial repairs, remodels."
        />
        <ConsultCard
          i="1"
          icon="fas fa-bolt"
          text="Low Tension (LT)"
          para="Serving all area equipped to handle your industrial and commercial repairs, remodels."
        /><ConsultCard
            i="2" icon="fas fa-charging-station"
          text="Extra Low Voltage (ELV)"
          para="Serving all area equipped to handle your industrial and commercial repairs, remodels."
        />
      </div>
      <hr className="hr"/>
    </>
  );
}
