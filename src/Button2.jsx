import React from "react";
// import Button from "./Button";
let Button2=()=>{

let But=()=>{
    let num=parseInt(prompt("enter a no."))
    if(num>0){
        alert("No.is +ve")
    }
    else if(num<0){
        alert("no. is -ve")
    }
    else{
        alert ("no is zero")
    }
    }
   
    return(
     <button onClick={But}>Check No. </button>
    )
}
export default Button2