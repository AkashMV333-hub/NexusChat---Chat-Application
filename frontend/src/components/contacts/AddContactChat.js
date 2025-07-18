import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AddContactChat = ({ id, userId, setConnectContacts}) => {
    const [conuserId, setConUserId] = useState("");
    const [gotcontacts, setGotcontacts] = useState([]);
    const [newcontacts, setNewcontacts] = useState([]);
    const [useeff, setUseeff] = useState("");

    const getcontact = async () => {
      try {
          const response = await axios.get(`https://nexuschat-chat-application-y519.onrender.com/api/user/${id}`, {
              withCredentials: true,  // Required to include cookies in requests
          });
  
          console.log("Full response:", response.data);
          console.log("Response Keys:", Object.keys(response.data));
  
          setGotcontacts(response.data.contacts);
          setUseeff("allow")
      } catch (err) {
          console.error("Error fetching contacts:", err);
      }
  };

    useEffect(() => {
      if(useeff !== ""){
        addcontact();
      }
    },[useeff])

    const addcontact = async () => {
      try {
          const response = await axios.put(`https://nexuschat-chat-application-y519.onrender.com/api/user/${id}`, {
              userId: userId,
              contacts: [...gotcontacts, conuserId], // Merge old contacts + new one
          }, { withCredentials: true });
          setConnectContacts(response.data);
          console.log(`Updated contacts: ${response.data.contacts}`);
      } catch (err) {
          console.error("Error updating contacts:", err);
      }
  };
  

    const handlecontacts = async () => {
      await getcontact();
    }

  return (
    <div className='w-100 d-flex flex-column justify-content-center align-items-center acc-img'>
       <form onSubmit={(e) => e.preventDefault()} className='d-flex justify-content-center bg-white' style={{height: "400px", width: "350px", border: "1px solid lightGray", borderRadius: "20px"}}>
       <div className='d-flex flex-column justify-content-center align-items-center gap-4 h-100' style={{width: '250px'}}>
        <h3 className='mb-4'>Adding Contact</h3>
       <input
            type="text"
            className='form-control'
            value={conuserId}
            onChange={(e) => setConUserId(e.target.value)}
            placeholder='Friends User Id'
        />
        <p className='fs-6 mb-0 ms-2'>Want to connect to your friend?<br/> Add your friend's contact using User Id</p>
        <button className='btn btn-primary btn w-100 mt-2' onClick={handlecontacts}>Add</button>
       </div>
       </form>
    </div>
  )
}

export default AddContactChat
