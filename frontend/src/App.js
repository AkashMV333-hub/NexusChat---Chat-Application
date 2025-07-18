import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar.js'
import Contacts from './components/contacts/Contacts.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./index.css";
import Chatbox from './components/chatbox/Chatbox.js';
import io from 'socket.io-client'
import Login from './components/login/Login.js';
import Home from './components/home/Home.js';
import Register from './components/register/Register.js';
import AddContactChat from './components/contacts/AddContactChat.js';


const App = () => {
  const [userId, setUserId] = useState("");
  const [reply, setReply] = useState("");
  const [msg, setMsg] = useState("");
  const [msgarr, setMsgarr] = useState([]);
  const [id, setId] = useState(null);
  const [connectContacts, setConnectContacts] = useState("");
  const [cochat, setCochat] = useState("");

  const socket = io("https://nexuschat-chat-application-y519.onrender.com", {
    transports: ["websocket", "polling"], // Ensures compatibility
    withCredentials: true // Allows cross-origin cookies
});

  const handlelogin = (userId) => {
    socket.emit("login", userId);
  }

  const sendMsg = ({ receiverId, msg}) => {
    socket.emit("chatstarted", { receiverId, msg });
    setMsgarr(prevMsgarr => {
      const newarr = [...prevMsgarr, { msg: msg, type: "send" }];
      console.log(`send ${newarr}`);
      setMsg("")
      return newarr;
  });
  }

  socket.on("chatstarted", (msg) => {
    console.log("inside reply")
    setReply(msg);
    setMsgarr(prevMsgarr => {
      const newarr = [...prevMsgarr, { msg: msg, type: "receive" }];
      console.log(`receive ${newarr}`);
      return newarr;
  });
  })

  return (
    <BrowserRouter>
      <Navbar/>
      <div className='d-flex overflow-hidden ' style={{paddingBottom: "0px", height: "calc(100vh - 70px)"}}>
      <Contacts id={id} userId={userId} connectContacts={connectContacts} setCochat={setCochat}/>
      <Routes>
        <Route path="/" element={
          <Home />
        }/>
        <Route path='/login' element={
          <Login setId={setId} handlelogin={handlelogin} userId={userId} setUserId={setUserId}/>
          }/>
        <Route path='/chatbox/:id' element={
          <Chatbox msg={msg} setMsg={setMsg} sendMsg={sendMsg} reply={reply} msgarr={msgarr} cochat={cochat} setCochat={setCochat} setMsgarr={setMsgarr}/>
          }/>
        <Route path='/register' element={
           <Register />
          }/>
        <Route path='/addcontactchat' element={
           <AddContactChat id={id} setConnectContacts={setConnectContacts}/>
          }/>  
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
