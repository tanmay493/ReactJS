import React from "react";
let Button4=()=>{
    let count=0
    for(let i=1;i<=10;i++){
        if(i%2==0){
            count=count+1
            console.log(i)
        }
        
    }
    alert(`Total even no.are ${count}`)
    return(
<button onClick={Button4}>Count Even No.s</button>
    )
}
export default Button4