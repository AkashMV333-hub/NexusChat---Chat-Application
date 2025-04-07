import React, { useState } from 'react'

const MsgInp = ({ msg, setMsg, sendMsg, Id, receiverId}) => {
  
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} className='d-flex w-100 position-absolute bottom-0' style={{height: "50px"}}>
        <input
            type="text"
            className='form-control fs-5'
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder='Start messaging...'
        />
        <button className='btn btn-primary' style={{width: "120px"}} onClick={() => sendMsg({ receiverId, msg})}>send</button>
      </form>
    </div>
  )
}

export default MsgInp
