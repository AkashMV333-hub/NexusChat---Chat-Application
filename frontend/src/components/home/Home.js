import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
     <div className='d-flex flex-column' style={{height: "calc(100vh-76px)", width: "calc(100vw-330px)"}}>
      <div className='container overflow-auto p-0' style={{width: "calc(100vw-336px)"}}>
        <div className='d-flex flex-column justify-content-center align-items-center bimage p-0' style={{height: "630px", width: "calc(100vw-340px)"}}>
          <div className='d-fex bg-white ps-5 pe-5 pb-5 pt-4' style={{width: "600px", height: "370px", borderRadius: "20px", marginLeft: "-80px"}}>
            <h1 style={{marginLeft: "150px", marginRight: "150px", marginBottom: "10px"}}>NexusChat</h1>
            <p className='fs-5'>In a world where communication matters, [Your Chat App Name] brings you real-time messaging with speed, security, and simplicity at its core. Whether you're chatting with friends, collaborating with a team, or staying in touch with family, our platform ensures smooth, encrypted, and uninterrupted conversations.</p>
            <button className='btn btn-primary btn-lg mt-2'><Link to='/register' style={{textDecoration: "none"}} className='text-white'>Get Started</Link></button>
          </div>
        </div>
        <div className='d-flex flex-column justify-content-end align-items-center' style={{height: "250px", marginLeft: "-80px"}}>
          <div style={{width: "800px"}}>
            <h2 style={{textAlign: "center"}}>Why Choose NexusChat?</h2>
            <p className='fs-5'>No delays, no waiting—just instant message delivery with real-time WebSockets technology. Your chats feel as natural as speaking face-to-face.Experience faster, safer, and more engaging conversations with NexusChat</p>
          </div>
        </div>
        <div className='d-flex' style={{height: "670px"}}>
          <div className='d-flex flex-column justify-content-center ps-4 pe-3' style={{width: "700px"}}>
            <div className='p-5'>
              <h3>Instant & Effortless Communication</h3>
              <p className='fs-5'>In today’s fast-paced world, every second counts. With NexusChat, your messages are delivered instantly, ensuring seamless conversations without delays.<br/>
              Stay connected without interruptions—fast, reliable, and effortless communication, just the way it should be.
              </p>
            </div>
          </div>
          <div className='d-flex flex-column justify-content-center w-100'>
            <img src="screenshot.png" alt="Screenshot" style={{width: "680px",objectFit: "cover"}}/>
          </div>
        </div>
        <div className='d-flex' style={{height: "750px", width: "calc{100vw-330px})"}}>
        <div className='d-flex flex-column justify-content-center' style={{width: "700px"}}>
            <div className='d-inline' style={{paddingRight: "120px", padding: "60px"}}>
              <h3>No ads. No trackers. No kidding</h3>
              <p className='fs-5'>There are no ads, no affiliate marketers, and no creepy tracking in Signal. So focus on sharing the moments that matter with the people who matter to you.</p>
            </div>
          </div>
          <div className='d-flex flex-column justify-content-center ms-5 w-100 ps-2'>
            <img src="Noads.png" alt="Noads" style={{width: "580px", objectFit: "cover", borderRadius: "20px"}}/>
          </div>
        </div>
        <div className='d-flex' style={{height: "750px", width: "calc{100vw-330px})"}}>
        <div className='d-flex flex-column justify-content-center' style={{width: "700px"}}>
            <div className='d-inline' style={{paddingRight: "120px", padding: "60px"}}>
              <h3>Free for Everyone</h3>
              <p className='fs-5'>Signal is an independent nonprofit. We're not tied to any major tech companies, and we can never be acquired by one either. Development is supported by grants and donations from people like you.</p>
            </div>
          </div>
          <div className='d-flex flex-column justify-content-center ms-5 w-100 ps-2'>
            <img src="Nonprofit.png" alt="Noads" style={{width: "580px", objectFit: "cover", borderRadius: "20px"}}/>
          </div>
        </div>
        <div style={{backgroundColor: "black"}}>
          <h5 className='p-4 text-white m-0'> &copy; 2025 NexusChat, a nonprofit organisation</h5>
        </div>
      </div>
     </div>
  )
}

export default Home
