import React from 'react'

const MsgDisplay = ({ msg, reply, msgarr}) => {

  return (
    <div className='overflow-auto d-flex flex-column' style={{width: "100%"}}>
       <div className='d-flex flex-column w-100'>
       {msgarr.map((smsg, index) => (
        <div className={smsg.type === "send"? 'd-flex justify-content-end w-100' : 'd-flex justify-content-start w-100'}>
          <button key={index} className={smsg.type === "send"? 'btn btn-info mb-1 btn d-block justify-content-end' : 'btn btn-dark mb-1 btn d-block justify-content-start'}>{smsg.msg}</button>
        </div>
       ))}
       </div>
    </div>
  )
}

export default MsgDisplay
