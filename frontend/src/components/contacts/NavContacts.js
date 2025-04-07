import React,{ useState } from 'react'

const NavContacts = ({ search, setSearch }) => {
  const [gotuserid, setGotuserid] = useState("");

  return (
      <form onSubmit={(e) => e.preventDefault()} className='bg-warning navcontacts w-100 p-2'>
       <input
            type="text"
            className='form-control'
            style={{height: "42px"}}
            value={gotuserid}
            onChange={(e) => setGotuserid(e.target.value)}
            placeholder='Search'
        />
        <button className='btn btn-primary me-1 w-100' onClick={() => setSearch(gotuserid)}>search</button>
       </form>
  )
}

export default NavContacts
