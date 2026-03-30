import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar d-flex justify-content-center' style={{height: "70px", backgroundColor: "rgb(3, 32, 100)"}}>
       <div className="container m-0 p-0 pt-1 pb-1 d-flex justify-content-between w-100">
       <h3 className='text-white fs-2'>NexusChat</h3>
       <div className='d-flex gap-4'>
       </div>
       </div>
    </div>
  )
}

export default Navbar
