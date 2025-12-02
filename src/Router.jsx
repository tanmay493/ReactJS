import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Layout from './Layout'
import About from './About'
import Home from './Home'
import Service from './Service'

const Router=()=> {
  return (
    <>
      {/* <h1>Welcome</h1> */}

      <Routes>
        
<Route path='/' element={<Layout/>}>
<Route index element={<Home/>}/>
<Route path='about' element={<About/>}/>
<Route path='.service' element={<Service/>}/>

</Route>

      </Routes>
    </>
  )
}

export default Router
