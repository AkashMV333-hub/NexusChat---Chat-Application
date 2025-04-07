import React, { useEffect, useState } from 'react';
import SingleContact from './SingleContact.js';
import axios from "axios";
import NavContacts from './NavContacts.js';
import AddContact from './AddContact.js';

const Contacts = ({ id, connectContacts, setCochat }) => {
    
    const [contacts,setContacts] = useState([]);
    const [onecontact, setOnecontact] = useState([]);
    const [sendcontacts, setSendcontacts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        if(id != null || connectContacts !== ""){
            console.log("id changed")
            const getdata = async () => {
                const response = await axios.get(`http://localhost:3001/api/user/${id}`);
                setSendcontacts(response.data.contacts);
                console.log(`show contacts ${response.data.contacts}`);
            }
            getdata();
        }
    },[id, connectContacts]);

    useEffect(() => {
        if(sendcontacts.length > 0){
            const sendfunction = async () => {
                try {
                    const response = await axios.post("http://localhost:3001/api/contacts",{
                        "contacts": sendcontacts
                    });
                    setContacts(response.data.contacts);
                    console.log(` received contacts ${response.data.contacts}`);
                } catch(err) {
                    console.log(err.message);
                    console.log(err.stack);
                }
            }
            sendfunction();
        }
    }, [sendcontacts]);

    useEffect(() => {
        if(contacts.length > 0){
            console.log(`id ${contacts}`);
        }
    }, [contacts])

    useEffect(() => {
        if(search !== ""){
            const tempcontact = contacts.filter(contact => contact.name.toLowerCase() === search.toLowerCase());
            console.log(`tempcontacts ${tempcontact}`)
            setOnecontact(tempcontact)
        }
    }, [search])

  return (
    <div className='d-flex flex-column p-0 position-relative' style={{width: "450px", height: "calc(100vh-138px)"}}>
        <NavContacts contacts={contacts} search={search} setSearch={setSearch}/>
        <div className='contacts overflow-auto border-end' style={{height: "calc(100vh-82px)", width: "327px"}}>
        {contacts.length > 0 ? search === "" ? contacts.map(contact => (
            <SingleContact key={contact._id} contact={contact} setCochat={setCochat}/>
        )) : onecontact.map(one => <SingleContact key={one._id} contact={one} setCochat={setOnecontact}/>) : <div className='d-flex flex-column justify-content-center align-items-center' style = {{height: "calc(100vh-120px)", paddingTop: "200px"}}><h4 className='self-align-center'>No Contacts Found</h4>
         <p className='ms-5 me-1 self-align-center'>Add contacts of your closed ones to continue chating</p>
         </div>
        }
        </div>
        <AddContact/>
    </div>
  )
}

export default Contacts