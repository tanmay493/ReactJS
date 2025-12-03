import React from 'react'
import { useState } from 'react'

const Hook1 = () => {
    let[name,setname]=useState("")
    let[city,setcity]=useState("")
    
    let inputchange=(e)=>{
        console.log(e)
        console.log(e.target)
        console.log(e.target.value)
        setname(e.target.value)
        
    }
    let input2=(e)=>{
        // console.log(e.target.value)
        setcity(e.target.value)
    }
  return (
    <>
    <h1>Hook</h1>
     
     Enter name: <input type="text" onChange={inputchange}/>
     <br />

     Your name :{name}
      <br />

      Enter city: <input type="text" onChange={input2}/>
     <br />
Your name :{city}
      <br />

    </>
  )
}

export default Hook1
