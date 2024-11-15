import React from "react"

function FunctionalComponent(props){
    return(
        <div>
            <h2>FunctionalComponent</h2>
           <p>Hello <span style={{backgroundColor:'red',color:'white'}}> {props.name},</span>
            Welcome to the {props.class} Class, which begins at {props.time} Tomorrow.</p>
        </div>
    )
}
export default FunctionalComponent;


