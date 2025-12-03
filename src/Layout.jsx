import React from 'react'
import "./tailwind.css"
import { Outlet,Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      
      
    <header className='w-full flex h-18 justify-around items-center border-2 bg-gray-950 text-amber-50'>
     <nav>
        <ul className='flex-gap-10 font-bold text-2xl sm:flex gap-5 hidden'>
          <button className='hover:bg-amber-400 border p-2 rounded-2xl text-bliue-400 bg-amber-400 font-bold outline-black'>Login</button>
          
<li ><Link to="/home" className='p-4 hover:bg-green-600'></Link> Home</li>
<li> <Link to="/about"></Link>About</li>
<li><Link to="/service"></Link>Service</li>
<li><Link to ="/contact"></Link>Contact</li>
        </ul>
        </nav>
      </header>
{/* child component will appear here */}
      <Outlet/>


      <h1>Footer</h1>
    </>
  )
}

export default Layout
