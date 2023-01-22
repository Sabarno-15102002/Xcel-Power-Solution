import React from "react";
import "./Contact.css";

export default function Contact()
{
    return <div id="contact-us">
                    <form className="contact-form"  action="https://formspree.io/f/maykbbkl"
        method="POST">
                        <img src="https://media.istockphoto.com/id/1226326725/vector/vector-illustration-contact-us-concept.jpg?s=612x612&w=0&k=20&c=kDp-TVZh2ldGoJFFyWUhyPeva1Atd3h9gwW-Lut1hRs="/>
                        <input type="email" name="email" placeholder="Enter your email" required/>
                        <textarea name="Message" placeholder="Enter your Message" rows={5}/>
                        <br/>
                        <button type="submit" className="btn btn-danger bg-danger btn-lg">Submit</button>
                    </form>
    </div>
}