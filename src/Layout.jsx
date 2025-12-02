import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      
      
    <header>

        <ul>
          
<li ><Link to="/"></Link> Home</li>
<li> <Link to="/about"></Link>About</li>
<li><Link to="/service"></Link>Service</li>
<li><Link to ="/contact"></Link>Contact</li>
        </ul>
      </header>
{/* child component will appear here */}
      <Outlet/>


      <h1>Footer</h1>
    </>
  )
}

export default Layout
