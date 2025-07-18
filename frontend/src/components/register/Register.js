import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Register = () => {
    const [userId, setUserId] = useState("");
    const [name, setName] = useState("");
    const [about, setAbout] = useState("");
    const [pwd, setPwd]  = useState("");
    const navigate = useNavigate("/register");

    const handleRegister = async () => {
      const response = await axios.post("https://nexuschat-chat-application-y519.onrender.com/api/auth/register",{
        "userId": userId,
        "id": 1,
        "name": name,
        "about": about,
        "password": pwd
      });
      console.log(`register response ${response.data.msg}`);
      navigate("/login");
    }

  return (
    <div className='w-100 d-flex flex-column justify-content-center align-items-center lbg-img p-5'>
       <form onSubmit={(e) => e.preventDefault()} className='d-flex justify-content-center bg-white' style={{height: "500px", width: "350px", border: "1px solid lightGray", borderRadius: "10px"}}>
       <div className='d-flex flex-column justify-content-center align-items-center gap-4 h-100' style={{width: '250px'}}>
        <h2 className='mb-2'>Register</h2>
       <input
            type="text"
            className='form-control'
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder='User Id'
        />
        <input
            type="text"
            className='form-control'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Name'
        />
        <input
            type="text"
            className='form-control'
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            placeholder='About'
        />
        <input
            type="text"
            className='form-control'
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            placeholder='Password'
        />
        <button className='btn btn-primary btn me-1 w-100 mt-2' onClick={handleRegister}>Register</button>
        <Link to='/login'>Already registered? Login</Link>
       </div>
       </form>
    </div>
  )
}

export default Register
