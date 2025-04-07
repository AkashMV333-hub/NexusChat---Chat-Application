import React from 'react'
import chatimg from "../contacts/img/user.png"; 

const NavChat = ({ chatdata }) => {
  return (
    <div className='navbar d-flex justify-content-start bg-warning w-100 ps-4' style={{height: "58px"}}>
            <div className='d-flex me-3' style={{width: "40px", height:"40px"}}>
                <img src={chatimg} alt="" className='img-fluid rounded-circle bg-primary'/>
            </div>
            <div className="d-flex flex-column  h-100">
                <h3 className='fs-5 d-block mb-0'>{chatdata.name}</h3>
                <p>{chatdata.about}</p>
            </div>
    </div>
  )
}

export default NavChat
