import React from 'react'
import { Link } from 'react-router-dom';

const AddContact = () => {
  return (
    <Link to='/addcontactchat'>
    <button className='btn bg-primary w-100 position-absolute bottom-0 text-white fs-5' style={{marginBottom: "-2px", borderRadius: "0px", height: "50px"}}>Add Contact</button>
    </Link>
  )
}

export default AddContact
