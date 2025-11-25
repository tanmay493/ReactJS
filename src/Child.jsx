import React from 'react'

//const Child = (props) 
const Child=({myname,myage})=> {



  return (
    
    <>
      <h1>Hello Child</h1>
      {/* <p>My name is{props.myname}</p> */}
      {/* <p>My age is {props.myage}</p> */}
      <p>My age is {myname}</p>
      <p>My age is{myage}</p>
    </>
  )
}

export default Child
