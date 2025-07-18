import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import NavChat from './NavChat';
import MsgInp from './MsgInp';
import MsgDisplay from './msgdisplay/MsgDisplay';

const Chatbox = ({ msg, setMsg, sendMsg, reply, msgarr, cochat, setCochat, setMsgarr }) => {
    const { id } = useParams();
    const [chatdata, setChatdata] = useState({});

    useEffect(() => {   
        if(id !== ""){
            const getdata = async () => {
                const response = await axios.get(`https://nexuschat-chat-application-y519.onrender.com/api/user/${id}`);
                setChatdata(response.data);
            };
            setCochat("");
            console.log("inside cochat");
            getdata();
        }
    },[id]);

    useEffect(() => {   
        if(id !== ""){
            setMsgarr([]);
        }
    },[id]);
  
  return (
    <div className='d-flex flex-column w-100 p-0 position-relative bkgrd-img' style={{ height: "calc(100vh-80px)"}}>
        <NavChat chatdata={chatdata}/>
        <MsgDisplay msg={msg} reply={reply} msgarr={msgarr}/>
        <MsgInp msg={msg} setMsg={setMsg} sendMsg={sendMsg} Id={chatdata.id} receiverId={chatdata.userId}/>
    </div>
  )
}

export default Chatbox
