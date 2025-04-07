import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setId, handlelogin, userId, setUserId }) => {
    const [pwd, setPwd] = useState("");
    const navigate = useNavigate("/login");

    const loginfunc = async () => {
      axios.defaults.withCredentials = true;
      const response = await axios.post("http://localhost:3001/api/auth/login",{
        "userId": userId,
        "password": pwd
      }, { withCredentials: true });
      console.log(`login ${response.data.details.name}`);
      setId(response.data.details._id);
      navigate("/");
    }

  return (
    <div className='w-100 d-flex flex-column justify-content-center align-items-center lbg-img'>
       <form onSubmit={(e) => e.preventDefault()} className='d-flex justify-content-center bg-white' style={{height: "450px", width: "350px", border: "1px solid lightGray", borderRadius: "10px"}}>
       <div className='d-flex flex-column justify-content-center align-items-center gap-4 h-100' style={{width: '250px'}}>
        <h2 className='mb-4'>Login</h2>
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
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            placeholder='Password'
        />
        <button className='btn btn-primary me-1 w-100 mt-2' onClick={() => {
          handlelogin(userId);
          loginfunc();
          }}>login</button>
        <Link to='/register'>visiting for the first time? Register</Link>
       </div>
       </form>
    </div>
  )
}

export default Login
