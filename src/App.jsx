import React from "react";
//import Navbar from "./Navbar"
//import{}
import { Footer, Footer2 } from "./Footer";
import Img from "./assets/react.svg"
import Header from "./Header"






const App=()=>{
// JS written here 
  let tanmay =()=>{
    //alert("button")
    document.write("button")
  }
  

return(
  <div>
   
  <h1>hi tanmay</h1>
  <p>of mp nagar</p>
  {/* <Navbar/> */}
  <h1 style={{color:'red',fontSize:'30px'}}>Hello Cybrom</h1>
  <img src={Img} alt="" />
   <Footer/>
   <Footer2/>
   <button onClick={tanmay}>click me</button>
  </div>
  

)
}
export default App