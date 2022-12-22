import React from "react";

export default function Joke(props){
    return(
        <div>
            <h1>setup ={props.setup}</h1>
            <h3>punchline ={props.punchline}</h3>
            <hr></hr>
        </div>
    )
}