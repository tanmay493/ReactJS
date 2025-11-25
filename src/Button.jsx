import React from "react";
let Button=()=>{
    let age=parseInt(prompt("enter your age"))
    if(age>=18){
        alert(" You are an Adult")
    }
    else{
        alert("You are minor")
    }

    return(
        <button onClick={Button}>Check Age</button>
    )
}
export default Button