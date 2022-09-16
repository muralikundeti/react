//About.js module
import React from 'react'

// profile photo
import profile from  './../../assets/images/akanda.jpg'

// CREATE About COMPONENT
function About() {
    return (<>

        <h1 className="text-center text-primary"> ABOUT COMPONENT</h1>

        <p className="para"> 
        In publishing and graphic design, lorem ipsum is a placeholder text component.
        In publishing and graphic design, lorem ipsum is a placeholder text component.
        In publishing and graphic design, lorem ipsum is a placeholder text component.
        In publishing and graphic design, lorem ipsum is a placeholder text component.
        </p> 

        
        <div className="container ">
            <div className="row">
            
            <img src={ profile } className=" w-25 ma-auto" alt="balayya"/>
            </div>
            </div>


    </>)
}
export default About;
