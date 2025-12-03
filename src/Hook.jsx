import React from 'react'
import  {useState} from 'react'

const Hook = () => {
    // let [variable,function]=userState(initial value)
    let [count,setcount]=useState(0)

    let Inc=()=>{
      setcount(++count) //count+1
      console.log(count)
    }
    let Decr=()=>{
      if(count>0){
        setcount(--count)//count-1
      console.log(count)

      }
      
    }
    let Res=()=>{
      setcount(0)
      console.log(count)
    }

  return (
    <>
     <h1>Count:{count}</h1>
      <button onClick={Inc}>+</button>
      <button onClick={Decr}>-</button>
      <button onClick={Res}>Reset</button>
    </>
  )
}

export default Hook
