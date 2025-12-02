import React from "react"
import Child from "./Child"


let App=()=>{
    //let name="tanmay"
    //let age=25

    let myinfo={
        name:"tanmay",
        age:25,
        city:"bhopal"

    }
    return(
        <>
            <h1>This is Props</h1>
            {/* <Child myname="Tanmay" age={25}/> */}
            {/* <Child myname={name} myage={age}/> */}
            <Child myname="prashant" myage={42}/>



        </>
    )
}
export default App