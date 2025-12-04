import React, { useState } from 'react'

const Form = () => {
    let [name,setname]=useState("")
    let[city,setcity]=useState("")

    let Handlesubmit=(e)=>{
        e.preventDefault()
        alert(name + city)

    }
  return (
    <>
    <h1>Form handling</h1>
     <form action="" onSubmit={Handlesubmit}>

    Enter name:<input text value={name} onChange={(e)=>{setname(e.target.value)}}></input><br />
     Enter city:<input text value={city} onChange={(e)=>{setcity(e.target.value)}}></input><br />
     <button type='submit'>save data</button>

     </form>
      
    </>
  )
}

export default Form
