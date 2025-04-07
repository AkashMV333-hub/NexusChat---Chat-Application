import React from 'react'
import userimg from "./img/user.png";
import { Link } from "react-router-dom";

const SingleContact = ({ contact, setCochat }) => {

  return (
    <Link to={`/chatbox/${contact._id}`} style={{ textDecoration: "none"}}>
      <div className='d-flex align-items-center gap-3 border-bottom ps-2 single-contact'>
      <div style={{ width: "40px", height: "40px"}}>
      <img src={userimg} alt="" className='img-fluid rounded-circle border border bg-primary'/>
      </div>
      <div className='mt-3'>
      <h5 className='text-dark'>{contact.name}</h5>
      <p className='text-dark'>{contact.about}</p>
      </div>
    </div>
    </Link>
  )
}

export default SingleContact
