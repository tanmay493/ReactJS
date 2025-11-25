import React from "react";
let ClickMeButton=()=>{
    alert("button was clicked")
    return (
        <div>
            <button onClick={ClickMeButton}>Click ME</button>
        </div>
    )
    
}
export default ClickMeButton